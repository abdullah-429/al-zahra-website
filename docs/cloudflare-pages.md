# Cloudflare Pages Deployment

This repository is set up for Cloudflare Pages direct upload from the `artifacts/al-zahra` app.

## Important product choice

Cloudflare's current Pages documentation notes that a project created with Direct Upload cannot later be switched to Git integration. If you want automatic deploys from GitHub inside Cloudflare Pages, create a separate Pages project through the dashboard instead of reusing a direct-upload project.

## Build output

- App directory: `artifacts/al-zahra`
- Build command: `pnpm --filter @workspace/al-zahra run build`
- Output directory: `artifacts/al-zahra/dist/public`
- Wrangler Pages config: `artifacts/al-zahra/wrangler.jsonc`

## Local deploy command

From the repository root:

```bash
pnpm --filter @workspace/al-zahra run deploy:cloudflare
```

That script builds the app and uploads `dist/public` to the `al-zahra-engineering` Cloudflare Pages project with Wrangler.

## Manual Wrangler commands

Create the Pages project once:

```bash
pnpm dlx wrangler pages project create al-zahra-engineering --production-branch main
```

Deploy the latest build:

```bash
pnpm --filter @workspace/al-zahra run build
pnpm dlx wrangler pages deploy artifacts/al-zahra/dist/public --project-name al-zahra-engineering
```

## Authentication

Wrangler can authenticate using environment variables:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

Keep the API token out of committed files and CI logs.
The root [`.gitignore`](../.gitignore) already excludes `.env` files and Wrangler state directories so local deployment credentials do not get staged by accident.

## Routing

This app is a client-rendered SPA. The Cloudflare Pages fallback route is handled by `artifacts/al-zahra/public/_redirects`, which rewrites unknown paths to `/index.html`.
