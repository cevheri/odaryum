## Deploying a Next.js (static export) site to GitHub Pages with GitHub Actions

This guide explains how to publish your Next.js project (using static HTML export) to GitHub Pages automatically on every push to the `main` branch.

The project is already configured with `output: "export"` in `next.config.ts`, so `npm run build` will generate a static site in the `out/` directory.

### Prerequisites

- A public GitHub repository containing your Next.js project
- The default branch is `main` (adjust the workflow if yours is different)
- Node.js 18+ recommended (workflow uses Node 20)

### 1) Verify Next.js static export configuration

In `next.config.ts`, ensure static export is enabled:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enables static HTML export to generate the out/ folder
  output: "export",
};

export default nextConfig;
```

Notes:
- When `output: "export"` is enabled, `next build` will generate the `out/` folder directly. You do NOT need a separate `next export` step.
- If you use `next/image`, it will be unoptimized automatically in export mode.

If you plan to host the site at a subpath like `https://username.github.io/repo-name/` (project Pages), add a `basePath` so asset and link URLs resolve correctly. This repo derives `basePath` dynamically from an environment variable:

```ts
// next.config.ts (as configured in this project)
const resolvedBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: resolvedBasePath || undefined,
};
```

The GitHub Actions workflow sets `NEXT_PUBLIC_BASE_PATH` automatically based on repository type:

- If the repository name ends with `.github.io`, it deploys at root: `NEXT_PUBLIC_BASE_PATH=""`.
- Otherwise, it deploys at `/repo-name`: `NEXT_PUBLIC_BASE_PATH="/repo-name"`.
- You can override this behavior by defining a repository variable `BASE_PATH` under Settings → Secrets and variables → Variables. The workflow will use that value as `NEXT_PUBLIC_BASE_PATH`.

### 2) Enable GitHub Pages for your repo

1. Go to your repository on GitHub → Settings → Pages
2. In "Source", select "GitHub Actions" (not a branch)
3. Save the settings

This tells GitHub that deployments will come from a workflow.

### 3) Add the GitHub Actions workflow

Create a workflow at `.github/workflows/pages.yml` that will:
- Check out the code
- Install dependencies
- Build the static site into `out/`
- Upload the `out/` folder as the Pages artifact
- Deploy to GitHub Pages

The repository already includes such a workflow in this path. If you need to recreate it, see the example below:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci --no-audit --no-fund

      - name: Build static site
        run: NEXT_TELEMETRY_DISABLED=1 npm run build

      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 4) First deployment

- Commit and push to `main`. The workflow will trigger automatically.
- Go to your repository → Actions tab to monitor the deployment.
- Once complete, return to Settings → Pages to view the live URL, or use the link shown in the workflow run summary.

### 5) Common tips

- If you are using a project Pages URL (e.g., `/repo-name`), ensure you configured `basePath` accordingly.
- If you add a custom domain, configure DNS records and the custom domain in Settings → Pages. The workflow does not change.
- Do not commit the `out/` directory; the workflow builds it for you.

### 6) Rollbacks and manual runs

- You can re-run a failed deployment from the Actions tab.
- You can trigger a deployment manually via the "Run workflow" button thanks to `workflow_dispatch`.


