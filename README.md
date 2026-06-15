# Al-Zahra Engineering Services

Business website for Al-Zahra Engineering Services - mechanical, electrical, solar energy, HVAC, BMS, fire fighting, and automation solutions.

## Stack
- React + Vite
- Tailwind CSS
- shadcn/ui
- Wouter (routing)

## Setup
```bash
pnpm install
pnpm --filter @workspace/al-zahra run dev
```

The app defaults to `http://localhost:5173` and `/` when `PORT` or `BASE_PATH` are not set, so local development works without extra environment variables.

## Build
```bash
pnpm --filter @workspace/al-zahra run build
```

The production output is written to `artifacts/al-zahra/dist/public`.

## Cloudflare Pages
Cloudflare Pages direct-upload support is configured through [`artifacts/al-zahra/wrangler.jsonc`](artifacts/al-zahra/wrangler.jsonc).

For the full deployment flow, including the direct-upload versus Git integration tradeoff, see [`docs/cloudflare-pages.md`](docs/cloudflare-pages.md).

## Repository Defaults
- [`.gitignore`](.gitignore) keeps local dependencies, build output, Wrangler state, and machine-specific files out of Git.
- [`.editorconfig`](.editorconfig) standardizes indentation, UTF-8 encoding, and LF line endings across editors.
- [`.gitattributes`](.gitattributes) normalizes text files in Git and protects image assets from line-ending conversion.
