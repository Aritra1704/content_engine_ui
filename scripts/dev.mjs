import fs from "node:fs/promises";
import http from "node:http";
import path from "node:path";

import {
  bundleBrowser,
  createQueuedTask,
  distDir,
  parseOption,
  prepareStandaloneOutput,
  renderRuntimeConfigScript,
  srcDir,
  standaloneIndexFile,
  watchTargets,
} from "./shared.mjs";

const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
};

async function buildStandalone() {
  await prepareStandaloneOutput();
  await bundleBrowser({
    outfile: path.join(distDir, "assets", "app.js"),
    minify: false,
    sourcemap: true,
  });
  process.stdout.write("Rebuilt standalone UI bundle\n");
}

async function serveFile(filePath, response) {
  const extension = path.extname(filePath).toLowerCase();
  const mimeType = MIME_TYPES[extension] || "application/octet-stream";
  const payload = await fs.readFile(filePath);
  response.writeHead(200, { "Content-Type": mimeType });
  response.end(payload);
}

async function main() {
  await buildStandalone();

  const host = parseOption("--host", process.env.CONTENT_ENGINE_UI_HOST || "127.0.0.1");
  const port = Number.parseInt(parseOption("--port", process.env.CONTENT_ENGINE_UI_PORT || "4173"), 10);

  const server = http.createServer(async (request, response) => {
    try {
      const requestUrl = new URL(request.url || "/", `http://${request.headers.host || "localhost"}`);
      const pathname = decodeURIComponent(requestUrl.pathname);

      if (pathname === "/config.js") {
        response.writeHead(200, { "Content-Type": "application/javascript; charset=utf-8" });
        response.end(renderRuntimeConfigScript());
        return;
      }

      const relativePath = pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
      const candidatePath = path.join(distDir, relativePath);

      try {
        const stats = await fs.stat(candidatePath);
        if (stats.isFile()) {
          await serveFile(candidatePath, response);
          return;
        }
      } catch (_error) {
        // Fall through to SPA route handling.
      }

      const looksLikeStaticAsset = path.extname(pathname) !== "";
      if (looksLikeStaticAsset) {
        response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        response.end("Not found");
        return;
      }

      await serveFile(path.join(distDir, "index.html"), response);
    } catch (error) {
      response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
      response.end(error.stack || error.message);
    }
  });

  const scheduleBuild = createQueuedTask(async () => {
    try {
      await buildStandalone();
    } catch (error) {
      process.stderr.write(`${error.stack || error.message}\n`);
    }
  });
  const watchers = watchTargets([srcDir, standaloneIndexFile], scheduleBuild);

  server.listen(port, host, () => {
    process.stdout.write(`content_engine_ui dev server: http://${host}:${port}\n`);
  });

  const shutdown = () => {
    watchers.forEach((watcher) => watcher.close());
    server.close(() => process.exit(0));
  };

  process.on("SIGINT", shutdown);
  process.on("SIGTERM", shutdown);
}

main().catch((error) => {
  process.stderr.write(`${error.stack || error.message}\n`);
  process.exitCode = 1;
});
