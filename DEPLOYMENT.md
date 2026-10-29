# Deployment Guide

## Quick Deploy

```bash
npm run cf:deploy
```

This command:
1. Runs `npm run build` to create the `dist/` directory
2. Runs `wrangler deploy` to upload to Cloudflare Workers

## Manual Deploy

```bash
# Step 1: Build the production assets
npm run build

# Step 2: Deploy to Cloudflare Workers
npx wrangler deploy
```

## Prerequisites

1. **Cloudflare Account**: You need a Cloudflare account
2. **Wrangler Authentication**: Run `npx wrangler login` to authenticate
3. **GitHub Secrets** (for CI/CD):
   - `CLOUDFLARE_API_TOKEN`: API token with Workers edit permission
   - `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID

## GitHub Actions (Automatic Deployment)

The workflow in `.github/workflows/deploy.yml` automatically deploys when you push to the `main` branch.

### Required GitHub Secrets

Go to your GitHub repository → Settings → Secrets and variables → Actions, and add:

1. **CLOUDFLARE_API_TOKEN**
   - Go to Cloudflare Dashboard → My Profile → API Tokens
   - Create a token with "Workers Scripts:Edit" permission
   - Copy the token and add it as a GitHub secret

2. **CLOUDFLARE_ACCOUNT_ID**
   - Go to Cloudflare Dashboard
   - Your Account ID is shown on the right sidebar of the overview page
   - Copy it and add it as a GitHub secret

## Troubleshooting

### "Could not detect a directory containing static files"

This error means the `dist/` directory doesn't exist. Solution:

```bash
npm run build
npx wrangler deploy
```

Or use the combined command:

```bash
npm run cf:deploy
```

### Deployment succeeds but site shows 404

Check that `wrangler.jsonc` has:

```json
{
  "assets": {
    "directory": "./dist",
    "not_found_handling": "single-page-application"
  }
}
```

The `single-page-application` setting ensures client-side routes work correctly.

### GitHub Actions workflow not running

Make sure you're pushing to the `main` branch. The workflow only runs on:
- Push to `main` branch
- Pull requests to `main` branch

### Build fails

Check that all dependencies are installed:

```bash
npm install
npm run build
```

## Verification

After deployment, your site will be available at:
- `https://xbraan1-portfolio.<your-subdomain>.workers.dev`

To find your Worker URL:
1. Go to Cloudflare Dashboard → Workers & Pages
2. Find your worker named `xbraan1-portfolio`
3. The URL is shown in the worker details

## Custom Domain

To use a custom domain:
1. Go to Cloudflare Dashboard → Workers & Pages → your worker
2. Click "Triggers" → "Custom Domains" → "Add"
3. Enter your domain and follow the DNS setup instructions
