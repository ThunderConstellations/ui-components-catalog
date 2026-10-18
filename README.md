# UI Components Catalog

A comprehensive catalog of **1,766+ free and open-source UI component libraries**, design systems, and micro-components — built with vanilla HTML, Tailwind CSS, and JavaScript.

![UI Components Catalog Screenshot](https://placehold.co/800x400/0ea5e9/ffffff?text=UI+Components+Catalog)

## Features

- **Browse 1,766+ libraries**: Search, filter, and explore open-source UI components
- **Live Demos**: Direct links to each library's demo/documentation site
- **Source Code Access**: GitHub links for every component
- **Category Filtering**: Browse by framework (React, Vue, Svelte, etc.)
- **Search**: Instant search across component names and URLs
- **Dark/Light Mode**: Automatic theme switching with local storage
- **GitHub Pages**: Fully static and deployable

## Tech Stack

This site is a **pure static HTML** application that uses:
- HTML5 + CSS3 (Tailwind CDN for rapid styling)
- Vanilla JavaScript (no build step needed)
- JSON data for the component catalog
- GitHub Actions for automated Pages deployments

## Components Indexed

| Category | Description |
| :--- | :--- |
| Design Systems | Material UI, Ant Design, Chakra UI, Mantine, Radix UI, etc. |
| Framework Libraries | shadcn/ui, DaisyUI, Flowbite, HyperUI, Magic UI, Aceternity UI |
| Vue | Element Plus, Vuetify, Naive UI, Quasar, PrimeVue, etc. |
| Svelte | Skeleton UI, Bits UI, Svelte Material UI, etc. |
| Animation | Framer Motion, Motion One, Anime.js, GSAP, Lottie Web |
| Charts | Recharts, Nivo, ECharts, Chart.js, ApexCharts |
| Forms | React Hook Form, Zod, Formik, Tiptap |
| Data Grids | TanStack Table, AG Grid, Tabulator |
| Icons | Lucide, Tabler Icons, Heroicons, Iconoir |
| Retro CSS | 98.css, NES.css, XP.css, Pico.css |
| Enterprise | USWDS, Carbon, Polaris, Fluent UI |

## Data Source

All components are sourced from GitHub and open-source registries. Licenses are strictly filtered:
- MIT
- Apache-2.0
- BSD (2-Clause, 3-Clause)
- ISC
- CC0

## Getting Started Locally

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/ui-components-catalog.git
cd ui-components-catalog

# Serve with any static server (Python, Node, etc.)
python3 -m http.server 8000

# Open http://localhost:8000
```

## Deployment

This site is automatically deployed to GitHub Pages via GitHub Actions. Every push to the `main` branch will trigger a deployment.

1. Ensure you have set the repository's GitHub Pages source to GitHub Actions
2. Push to `main`:

```bash
git add .
git commit -m "Update catalog"
git push origin main
```

## Data Regeneration

If you update `UI_Components_1000.md`, re-run the parser to regenerate the JSON:

```bash
node parse-ui-components.js
```

## License

This catalog site is MIT licensed. All referenced component libraries retain their own original licenses.

---

*Made with ❤️ using open-source tools and GitHub Pages.*