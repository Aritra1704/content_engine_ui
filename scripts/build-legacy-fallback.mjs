import { bundleBrowser, createQueuedTask, legacyBundleFile, parseFlag, prepareLegacyFallbackOutput, srcDir, watchTargets } from "./shared.mjs";

async function buildLegacyFallback({ sourcemap }) {
  await prepareLegacyFallbackOutput();
  await bundleBrowser({
    outfile: legacyBundleFile,
    minify: !sourcemap,
    sourcemap,
  });
  process.stdout.write(`Legacy fallback synced to ${legacyBundleFile}\n`);
}

async function main() {
  const sourcemap = parseFlag("--sourcemap");
  const watch = parseFlag("--watch");

  await buildLegacyFallback({ sourcemap });

  if (!watch) {
    return;
  }

  const scheduleBuild = createQueuedTask(async () => {
    try {
      await buildLegacyFallback({ sourcemap });
    } catch (error) {
      process.stderr.write(`${error.stack || error.message}\n`);
    }
  });

  const watchers = watchTargets([srcDir], scheduleBuild);
  process.stdout.write("Watching content_engine_ui source for legacy fallback changes...\n");

  const shutdown = () => {
    watchers.forEach((watcher) => watcher.close());
    process.exit(0);
  };

  process.on("SIGINT", shutdown);
  process.on("SIGTERM", shutdown);
}

main().catch((error) => {
  process.stderr.write(`${error.stack || error.message}\n`);
  process.exitCode = 1;
});
