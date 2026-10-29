# xBraan1 Portfolio

Brian Kibet — AI Trainer & LLM Evaluation Specialist portfolio website.

## Overview

A professional portfolio website showcasing AI evaluation expertise, including RLHF, SFT, prompt engineering, and model quality assessment. Built with React, TypeScript, Vite, and Tailwind CSS. Deployed on Cloudflare Workers using Static Assets.

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

## Deployment

### Cloudflare Workers

This project deploys to Cloudflare Workers using Static Assets.

#### Prerequisites

1. A Cloudflare account
2. Wrangler CLI installed (`npm install -g wrangler`)
3. Authenticate: `wrangler login`

#### Deploy

```bash
npm run build
npx wrangler deploy
```

#### Local Preview with Wrangler

```bash
npm run build
npx wrangler dev
```

### GitHub Actions

The included workflow (`.github/workflows/deploy.yml`) automatically deploys on push to `main`.

Required repository secrets:
- `CLOUDFLARE_API_TOKEN` — Cloudflare API token with Workers edit permission
- `CLOUDFLARE_ACCOUNT_ID` — Your Cloudflare account ID

## Configuration

### Wrangler (`wrangler.jsonc`)

```jsonc
{
  "name": "xbraan1-portfolio",
  "compatibility_date": "2024-12-01",
  "assets": {
    "directory": "./dist",
    "not_found_handling": "single-page-application"
  }
}
```

The `single-page-application` setting ensures client-side routes are served by the SPA entry point.

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

## License

All rights reserved. © Brian Kibet.
