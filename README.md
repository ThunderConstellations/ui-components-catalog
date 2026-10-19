# 🚀 OmniUI Universe & Component Catalog

An advanced, comprehensive catalog of **1,424+ open-source UI components and libraries** — featuring 25+ exclusive creative & unique components (Cosmic Bento, Quantum Loader, Neural Graph, etc.), a primary Library Selector dropdown, zero-setup Live On-Site Interactive Playground, autosuggest search, and a visual recipe builder.

![OmniUI Universe Banner](https://placehold.co/800x400/6366f1/ffffff?text=OmniUI+Universe+-+1424%2B+Components)

## 🌐 Live Demo

👉 **[https://ThunderConstellations.github.io/ui-components-catalog/](https://ThunderConstellations.github.io/ui-components-catalog/)**

---

## ✨ Key Upgrades & Features

### 1. 🌟 New 1,424+ Component Catalog & 25+ Creative Components
- **Comprehensive Database**: Indexes over 1,424 curated UI libraries, frameworks, design systems, and micro-components.
- **Exclusive Creative/Unique Components**: Features 25+ bleeding-edge visual components built with Tailwind CSS and vanilla JS:
  - **Cosmic Bento**: Multi-dimensional card grids with glowing hover borders.
  - **Quantum Loader**: High-performance animated loading states and spinners.
  - **Neural Graph**: Interactive node connection visualization.
  - *Plus stellar additions like Holographic Card, Pulsar Button, Aurora Wave, Nebula Particles, and more.*

### 2. 🎛️ Primary Library Selector Dropdown
- Located directly at the top of the portal header.
- Instantly switch between major design ecosystems and component collections (`All Libraries`, `Tailwind UI`, `Radix primitives`, `shadcn/ui ecosystem`, `Creative Special Edition`, etc.) with zero page reloads.

### 3. ⚡ Zero-Setup Live On-Site Interactive Playground
- Test and preview components instantly right inside the browser.
- **Real Component State Toggling**: Toggle dark/light mode, animation speeds, interactive states (hover, active, disabled), and layout variations on the fly.
- Direct live code inspection and one-click copy.

### 4. 🔍 Autosuggest Search & Visual Recipe Builder
- **Smart Autosuggest Search**: Instant autocomplete search bar that matches component names, categories, tags, and keywords as you type.
- **Visual Recipe Builder**: Combine multiple components into custom blueprints, export component stacks, and generate ready-to-use compositions.

### 5. 🛠️ Developer Quick Start & Quick Add Form
- **Quick Add Form**: Easily submit new components directly through the on-site submission modal (`submit_handler.js`).
- **JSON Export**: Export your curated component list, favorites, or custom recipes as clean JSON with one click.

---

## 🏗️ Project Structure

```
github-pages-demo/
├── index.html                    # Main portal & Single-Page Application
├── ui-components-data.json       # Core database of 1,424+ components
├── component-types.json          # Categorized metadata and tags
├── parse-ui-components.js        # Parser script for regenerating component data
├── submit_handler.js             # Community submission & Quick Add handler
├── similarity_engine.py          # Visual similarity & semantic search engine
├── ts_generator.py               # TypeScript interface generator
├── FEATURE_ROADMAP.md            # Upcoming features and roadmap
├── .github/workflows/pages.yml   # GitHub Pages automated deployment workflow
└── README.md                     # This documentation file
```

---

## 🚀 Getting Started for Developers

### Local Development
To run the catalog locally using a static web server:

```bash
# Clone the repository
git clone https://github.com/ThunderConstellations/ui-components-catalog.git
cd ui-components-catalog

# Start a local python server
python3 -m http.server 8000
```
Open **`http://localhost:8000`** in your browser.

### Using the Catalog Data & JSON Export
Developers can programmatically consume `ui-components-data.json` or use the on-site export tool to fetch component definitions:

```javascript
// Example: Fetching component catalog data in your app
fetch('./ui-components-data.json')
  .then(res => res.json())
  .then(data => {
    console.log(`Loaded ${data.length} components!`);
  });
```

### Adding New Components via Quick Add
1. Open the live site or local preview.
2. Click the **"Quick Add"** or **"Submit Component"** button in the navigation bar.
3. Fill out the component title, category, GitHub/Demo URL, and description.
4. The entry is validated and appended locally or through `submit_handler.js`.

---

## 📦 Deployment

The project is configured for automated deployment to **GitHub Pages** via GitHub Actions (`.github/workflows/pages.yml`).

1. Ensure GitHub Pages source is set to **GitHub Actions** in your repository settings.
2. Push your changes to `main`:

```bash
git add .
git commit -m "docs: comprehensive README update for 1,424+ catalog and playground upgrades"
git push origin main
```

---

## 📝 License

All indexed libraries retain their respective open-source licenses (MIT, Apache-2.0, ISC, CC0). The OmniUI catalog code and portal design are MIT licensed.

---

**Built with ❤️ by ThunderConstellations**
