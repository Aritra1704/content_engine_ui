# content_engine_ui

Standalone UI shell for the current eCardFactory React console.

## Commands

- `npm run dev`
- `npm run build`
- `npm run build:legacy-fallback`

## Runtime config

The app reads backend targets from:

- `CONTENT_ENGINE_UI_API_BASE_URL`
- `CONTENT_ENGINE_UI_ASSET_BASE_URL`

Defaults:

- API base URL: `http://localhost:8080`
- asset base URL: same as API base URL

These values are written into `dist/config.js` for the standalone build and served dynamically in dev mode.

## Transitional dependency note

During this split, the app reuses the existing frontend packages already installed in `ecard-factory/node_modules`. That keeps today's extraction self-contained without introducing a second install step.
# content_engine_ui
