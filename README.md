# xBraan1 Portfolio

Brian Kibet — AI Trainer & LLM Evaluation Specialist portfolio website.

## Overview

A professional portfolio website showcasing AI evaluation expertise, including RLHF, SFT, prompt engineering, and model quality assessment. Built with React, TypeScript, Vite, and Tailwind CSS. Deployed on **Cloudflare Workers** using Static Assets.

## Technology Stack

- **React 18** — UI framework
- **TypeScript** — Type-safe code
- **Vite** — Build tool
- **Tailwind CSS v4** — Styling
- **React Router v6** — Client-side routing
- **Lucide React** — Icons
- **Cloudflare Workers** — Deployment platform (Static Assets)

## Project Structure

```
├── .github/workflows/    # CI/CD deployment workflow
├── public/               # Static assets (favicon, robots.txt)
├── src/
│   ├── components/       # Shared components (Layout, SignatureLogo)
│   ├── data/             # Content data
│   ├── pages/            # Page components
│   ├── App.tsx           # Root application with routing
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── vite.config.ts        # Vite configuration
├── wrangler.jsonc        # Cloudflare Workers configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, stats, expertise preview, selected work |
| `/about` | About — Background, approach, philosophy |
| `/expertise` | Expertise — Searchable/filterable capabilities |
| `/services` | Services — Service categories overview |
| `/services/:slug` | Service detail page |
| `/experience` | Experience — Work history timeline |
| `/work` | Work — Illustrative case studies |
| `/skills` | Skills — Tools and platforms |
| `/insights` | Insights — Articles and reflections |
| `/faq` | FAQ — Searchable accordion |
| `/contact` | Contact — Form with validation |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |
| `/cookies` | Cookie Policy |
| `/thank-you` | Thank you page |

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
```

Output is in `dist/`.

### Preview Production Build

```bash
npm run preview
```

## Deployment to Cloudflare Workers

This project deploys to **Cloudflare Workers** using Static Assets (NOT Cloudflare Pages).

### Prerequisites

1. A Cloudflare account
2. Wrangler CLI installed (`npm install -g wrangler` or use the project-local version)
3. Authenticate: `wrangler login`

### Deploy (One Command)

```bash
npm run cf:deploy
```

This runs `npm run build` first, then `wrangler deploy`.

### Deploy (Manual Steps)

```bash
# Step 1: Build the production assets
npm run build

# Step 2: Deploy to Cloudflare Workers
npx wrangler deploy
```

### Local Preview with Wrangler

```bash
npm run build
npm run cf:dev
```

### GitHub Actions (Automatic)

The included workflow (`.github/workflows/deploy.yml`) automatically deploys on push to `main`.

Required repository secrets:
- `CLOUDFLARE_API_TOKEN` — Cloudflare API token with Workers edit permission
- `CLOUDFLARE_ACCOUNT_ID` — Your Cloudflare account ID

## Configuration

### Wrangler (`wrangler.jsonc`)

```jsonc
{
  "$schema": "./node_modules/wrangler/config-schema.json",
  "name": "xbraan1-portfolio",
  "compatibility_date": "2026-10-29",
  "assets": {
    "directory": "./dist",
    "not_found_handling": "single-page-application"
  }
}
```

Key settings:
- **`assets.directory`**: Points to the Vite build output (`./dist`)
- **`assets.not_found_handling`**: Set to `single-page-application` so client-side routes (e.g., `/about`, `/services/llm-evaluation`) are served by the SPA entry point instead of returning 404

### Custom Domain

After deployment, configure a custom domain in the Cloudflare dashboard:
1. Go to Workers & Pages → your worker
2. Triggers → Custom Domains → Add
3. Follow the DNS setup instructions

## Design

The site uses a pure black and white luxury aesthetic — the xBraan1 signature style. Key design elements:

- Pure black (#000000) background
- White text with neutral gray hierarchy
- Alex Brush cursive font for the signature logo
- Inter sans-serif for body text
- Minimal borders with white/opacity
- Corner accent decorations on the hero card
- Smooth scroll restoration on navigation

## Accessibility

- Semantic HTML structure
- Keyboard navigation support
- Focus indicators
- ARIA labels on interactive elements
- Reduced motion support
- Screen reader friendly navigation

## Troubleshooting

### "Could not detect a directory containing static files"

This error occurs when `wrangler deploy` runs but the `dist/` directory doesn't exist. Fix:

```bash
# Always build before deploying
npm run build
npx wrangler deploy

# Or use the combined command
npm run cf:deploy
```

### Client-side routes return 404

Ensure `wrangler.jsonc` has `"not_found_handling": "single-page-application"` in the `assets` section. This tells Workers to serve `index.html` for all unmatched routes, allowing React Router to handle client-side navigation.

### Fonts not loading

The site loads Inter and Alex Brush from Google Fonts. If fonts don't appear, check your network connection. The fonts are loaded via `<link>` tags in `index.html`.

## License

All rights reserved. © Brian Kibet.
