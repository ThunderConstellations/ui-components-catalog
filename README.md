# 🚀 OmniUI Universe

A comprehensive catalog of **1,762+ free and open-source UI component libraries**, design systems, and micro-components — built with vanilla HTML, Tailwind CSS, and JavaScript.

![OmniUI Universe Screenshot](https://placehold.co/800x400/6366f1/ffffff?text=OmniUI+Universe)

## 🌐 Live Demo

👉 **[https://ThunderConstellations.github.io/ui-components-catalog/](https://ThunderConstellations.github.io/ui-components-catalog/)**

## Features

- **Browse 1,762+ libraries**: Search, filter, and explore open-source UI components
- **AI Semantic Search**: Describe what you need in natural language
- **Live Demos**: Direct links to each library's demo/documentation site
- **Source Code Access**: GitHub links for every component
- **Copy to Clipboard**: One-click npm install command copying
- **Category Filtering**: Browse by framework (React, Vue, Svelte, etc.)
- **Smart Search**: Instant search across component names and URLs
- **Dark Mode Default**: Persistent dark theme with localStorage
- **Component Roulette**: Random component picker for inspiration
- **Recipe Builder**: Combine components into custom blueprints
- **Community Ratings**: Star ratings for libraries
- **Favorites System**: Save components to local collection
- **Dual Theme Previewer**: Compare light/dark modes side-by-side
- **Responsive Viewport Tester**: Test at mobile/tablet/desktop breakpoints
- **Component Compare Tool**: Side-by-side library comparison
- **GitHub Pages**: Fully static and deployable

## Tech Stack

This site is a **pure static HTML** application that uses:
- HTML5 + CSS3 (Tailwind CDN for rapid styling)
- Vanilla JavaScript (no build step needed)
- JSON data for the component catalog
- GitHub Actions for automated Pages deployments
- Apple Vision Framework for visual similarity search

## Components Indexed

| Category | Description |
| :--- | :--- |
| Design Systems | Material UI, Ant Design, Chakra UI, Mantine, Radix UI, etc. |
| Framework Libraries | shadcn/ui, DaisyUI, Flowbite, HyperUI, Magic UI, Aceternity UI |
| Animation | Framer Motion, Motion One, Anime.js, GSAP, Lottie Web |
| Charts | Recharts, Nivo, ECharts, Chart.js, ApexCharts |
| Data Grids | TanStack Table, AG Grid, Material-React-Table |
| Forms | React Hook Form, Formik, Zod, Tiptap, Slate |
| Icons | Lucide React, Phosphor Icons, Heroicons, React Icons |
| Retro CSS | NES.css, 98.css, XP.css, Terminal.css, Paper CSS |

## 🏗️ ThunderConstellations Custom Library

We've built our own component library: **`@thunderconstellations/ui`** featuring:
- `GalaxyBackground` - Deep-space gradient backdrop
- `PulsarButton` - Rhythmic pulsing CTA button
- `MeteorShower` - Cascading light trails
- `ConstellationLines` - Dynamic SVG path animations
- `NebulaParticles` - Canvas-based particle system

## 📦 Additional Tools

- **CLI Scaffolder**: `npx create-omniui` for generating Vite + React + Tailwind projects
- **TypeScript Generator**: Auto-generates TS interfaces for all components
- **Figma-to-React Converter**: Converts Figma JSON exports to React components
- **Dependency Checker**: Validates peer dependencies for each library
- **Theme Config Generator**: Tailwind/CSS variable color picker
- **StackBlitz Exporter**: One-click export to cloud IDE

## 🗂️ Project Structure

```
github-pages-demo/
├── index.html                    # Main portal (single-file app)
├── ui-components-data.json       # 1,762+ component database
├── sorted-libraries.json         # Categorized by language & type
├── similarity_engine.py          # Visual similarity search engine
├── submit_handler.js             # Community submission handler
├── dependency_checker.js         # Dependency validation
├── create-omniui.js              # CLI scaffolder
├── .github/workflows/pages.yml   # GitHub Pages deployment
└── README.md                     # This file
```

## 📝 License

All libraries indexed are MIT, Apache-2.0, BSD, ISC, or CC0 licensed. This project is open source.

## 🤝 Contributing

1. Star the repository ⭐
2. Submit components via the "Submit a Component" form on the site
3. Found a missing library? Open an issue or pull request
4. Build your own components using our [figma-to-react skill](minis://workspace/figma-to-react/)

---

**Built with ❤️ by ThunderConstellations**
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