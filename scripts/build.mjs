import path from "node:path";

import { bundleBrowser, distDir, prepareStandaloneOutput } from "./shared.mjs";

async function main() {
  await prepareStandaloneOutput();
  await bundleBrowser({
    outfile: path.join(distDir, "assets", "app.js"),
    minify: true,
    sourcemap: false,
  });
  process.stdout.write(`Standalone UI build written to ${distDir}\n`);
}

main().catch((error) => {
  process.stderr.write(`${error.stack || error.message}\n`);
  process.exitCode = 1;
});
