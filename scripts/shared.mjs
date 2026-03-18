import fs from "node:fs";
import fsp from "node:fs/promises";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const appRoot = path.resolve(__dirname, "..");
export const repoRoot = path.resolve(appRoot, "..");
export const srcDir = path.join(appRoot, "src");
export const standaloneIndexFile = path.join(appRoot, "index.html");
export const standaloneEntryFile = path.join(srcDir, "main.js");
export const standaloneCssFile = path.join(srcDir, "console.css");
export const distDir = path.join(appRoot, "dist");
export const sharedNodeModulesDir = path.join(repoRoot, "ecard-factory", "node_modules");
export const legacyConsoleDir = path.join(repoRoot, "ecard-factory", "app", "static", "console");
export const legacyBundleFile = path.join(legacyConsoleDir, "app.js");
export const legacyCssFile = path.join(legacyConsoleDir, "console.css");

const requireFromHere = createRequire(import.meta.url);
export const esbuild = requireFromHere(path.join(sharedNodeModulesDir, "esbuild"));

export function getRuntimeConfig() {
  const apiBaseUrl = String(process.env.CONTENT_ENGINE_UI_API_BASE_URL || "http://localhost:8080").trim();
  const assetBaseUrl = String(process.env.CONTENT_ENGINE_UI_ASSET_BASE_URL || apiBaseUrl).trim();
  return { apiBaseUrl, assetBaseUrl };
}

export function renderRuntimeConfigScript() {
  const { apiBaseUrl, assetBaseUrl } = getRuntimeConfig();
  return `window.__CONTENT_ENGINE_UI_CONFIG__ = Object.assign({ apiBaseUrl: ${JSON.stringify(apiBaseUrl)}, assetBaseUrl: ${JSON.stringify(assetBaseUrl)} }, window.__CONTENT_ENGINE_UI_CONFIG__ || {});\n`;
}

export async function ensureDirectory(dirPath) {
  await fsp.mkdir(dirPath, { recursive: true });
}

export async function prepareStandaloneOutput() {
  await ensureDirectory(path.join(distDir, "assets"));
  await fsp.copyFile(standaloneIndexFile, path.join(distDir, "index.html"));
  await fsp.copyFile(standaloneCssFile, path.join(distDir, "assets", "console.css"));
  await fsp.writeFile(path.join(distDir, "config.js"), renderRuntimeConfigScript(), "utf8");
}

export async function prepareLegacyFallbackOutput() {
  await ensureDirectory(legacyConsoleDir);
  await fsp.copyFile(standaloneCssFile, legacyCssFile);
}

export async function bundleBrowser({ outfile, minify = false, sourcemap = false }) {
  await esbuild.build({
    absWorkingDir: appRoot,
    entryPoints: [standaloneEntryFile],
    bundle: true,
    format: "iife",
    platform: "browser",
    target: ["es2020"],
    outfile,
    minify,
    sourcemap,
    nodePaths: [sharedNodeModulesDir],
    logLevel: "silent",
  });
}

export function parseFlag(flag) {
  return process.argv.slice(2).includes(flag);
}

export function parseOption(name, fallbackValue) {
  const argv = process.argv.slice(2);
  const directPrefix = `${name}=`;
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index];
    if (value === name && index + 1 < argv.length) {
      return argv[index + 1];
    }
    if (value.startsWith(directPrefix)) {
      return value.slice(directPrefix.length);
    }
  }
  return fallbackValue;
}

export function watchTargets(targets, onChange) {
  return targets
    .filter((target) => fs.existsSync(target))
    .map((target) => fs.watch(target, { recursive: fs.statSync(target).isDirectory() }, () => onChange()));
}

export function createQueuedTask(task, delayMs = 80) {
  let timer = null;
  let running = false;
  let queued = false;

  const run = async () => {
    if (running) {
      queued = true;
      return;
    }
    running = true;
    try {
      await task();
    } finally {
      running = false;
      if (queued) {
        queued = false;
        await run();
      }
    }
  };

  return () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      timer = null;
      void run();
    }, delayMs);
  };
}
