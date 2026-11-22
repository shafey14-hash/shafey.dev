# Shafey Ali — Premium 3D Developer Portfolio

A bespoke, dark-aesthetic 3D portfolio website engineered for **Shafey Ali**, Computer Science student (Artificial Intelligence) and freelance developer. Designed with an editorial aesthetic, smooth physics-driven micro-interactions, and real-time Three.js 3D visuals.

---

## 🌟 Overview & Highlights

- **Visual Identity**: Sophisticated dark palette (deep charcoals, warm off-white typography `#f0ebe4`, subtle warm gold accent `#c9a86c`), editorial typography, asymmetrical layouts, and custom micro-interactions.
- **3D Hero Scene**: Custom WebGL interactive experience built with Three.js, React Three Fiber, and Drei featuring reactive distorted geometries, orbiting rings, particle fields, and smooth mouse-responsive dynamics.
- **Showcased Projects**:
  1. **SA Parties** — E-Commerce party supplies platform with interactive desktop browser mockup.
  2. **Little Chef Pizza** — Online ordering platform featuring both a desktop web application and a realistic 3D smartphone frame showcasing the dedicated mobile application.
  3. **Py Terminal** — Under-development browser IDE with Python & C++ syntax highlighting, terminal simulation, and Gemini AI agent badge.
- **Interactive Stack Explorer**: Categorized frontend, backend, database, and programming language cards with a continuous ambient marquee.
- **Direct Contact System**: One-click email copy with visual feedback, external links to GitHub & LinkedIn, and mailto integration.
- **Modern Smooth Scroll**: Powered by Lenis for fluid inertial scrolling.
- **Zero Backend Overhead**: 100% static client-side application with centralized configuration in `src/config.js`.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- **3D & Graphics**: [Three.js](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber), [@react-three/drei](https://github.com/pmndrs/drei)
- **Animations**: [Framer Motion](https://www.framer.com/motion/), [GSAP](https://gsap.com/)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Modular CSS + CSS Custom Properties

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` or `pnpm` / `yarn`

### Installation

```bash
# Clone the repository
git clone https://github.com/shafey14-hash/shafeyy-portfolio.git

# Navigate into project directory
cd shafeyy-portfolio

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to explore the portfolio locally with Hot Module Replacement (HMR).

### Production Build

```bash
npm run build
```

The optimized static assets will be generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## ⚙️ Configuration & Content Customization

All personal details, project descriptions, skills, and links are managed in a single configuration file:

📁 **`src/config.js`**

You can easily update:
- Personal Bio & Academic Info
- Selected Projects, URLs, and Tech tags
- Skills categories
- Services offerings
- Social & Contact links

---

## 🌐 Deployment to Vercel

This portfolio is configured for zero-config static deployment on Vercel:

1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **Deploy**.

`vercel.json` is included for SPA route fallback.

---

## 📄 License

Designed and developed by **Shafey Ali**. All rights reserved.
