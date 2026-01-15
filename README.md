# Ozan Özdemir | Portfolio

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

A high-performance, cinematic portfolio website designed for **Ozan Özdemir**, a professional **1st Assistant Camera (1st AC)** and **Focus Puller** based in Ankara & Istanbul, TR.

This project showcases a modern, film-industry-inspired aesthetic ("The Cut"), utilizing advanced animations and a unified design system to reflect technical precision and visual storytelling.

## 🎬 Overview

The portfolio is built to be an immersive experience, mirroring the technical and artistic nature of camera work. Key features include:

-   **Cinematic Visuals**: Dark mode aesthetic with high-contrast typography and film strip motifs.
-   **Advanced Animations**: Scroll-triggered reveals, parallax effects, and focus-pulling simulations.
-   **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing.
-   **Performance**: Built on Next.js 16 for speed and SEO optimization.

## 🛠 Tech Stack

### Core Framework
-   **[Next.js 16](https://nextjs.org/)**: React Framework for Production (App Router).
-   **[React 19](https://react.dev/)**: Latest React features including Server Components.
-   **[TypeScript](https://www.typescriptlang.org/)**: Static type checking for robust code.

### Styling & Design
-   **[Tailwind CSS v4](https://tailwindcss.com/)**: Utility-first CSS framework (configured via CSS variables).
-   **Design System**:
    -   **Font (Headings)**: `Syne` (Bold, Uppercase, Artistic/Designer feel).
    -   **Font (Body/Tech)**: `Geist` & `Geist Mono` (Clean, legible, technical data).
    -   **Colors**: Zinc Palette (Zinc-950 for backgrounds, Zinc-300/White for text).

### Animation
-   **[GSAP](https://greensock.com/gsap/)**: Complex sequences, ScrollTrigger, and Timeline control.
-   **[Motion](https://motion.dev/)**: Fluid component-level interactions.
-   **Lenis**: Smooth scrolling implementation.

## 📂 Project Structure

```bash
├── app/                  # Next.js App Router directories
│   ├── layout.tsx        # Root layout (Fonts, SmoothScroll, Metadata)
│   ├── page.tsx          # Main landing page assembling sections
│   └── globals.css       # Tailwind v4 theme & global styles
├── components/
│   ├── sections/         # Major page sections (Hero, Works, About, Contact)
│   ├── ui/               # Reusable UI atoms (DarkVeil, etc.)
│   └── providers/        # Context providers (SmoothScrollProvider)
├── lib/
│   └── data.ts           # Centralized content (Gear list, etc.)
└── public/               # Static assets (Images, Icons)
```

## 🎨 Design Consistency & Philosophy

The project follows a strict "Cinematic" design language:

1.  **Typography**:
    -   **Headings**: `font-syne` `font-bold` `uppercase`. Used for impact (e.g., "THE CUT", "OZAN").
    -   **Labels**: `font-mono` `uppercase` `tracking-widest`. Used for technical metadata (e.g., "SCENE 01", "ISO 800").
2.  **Visual Motifs**:
    -   **Film Strips**: Vertical scrolling decorative elements representing raw footage.
    -   **Focus/Blur**: Elements often enter from a blurred state, mimicking a focus pull.
    -   **Sprocket Holes**: Geometric patterns used in backgrounds.
3.  **Color Palette**:
    -   **Background**: `bg-black` or `bg-zinc-950` (Deep, true blacks).
    -   **Text**: `text-zinc-300` (Softened white for reduced eye strain and "film silver" look).
    -   **Accents**: Minimal use of `text-red-500` (Recording indicators) or `text-amber-500` (Warnings/Highlights).

## 🚀 Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/bartwo21/ozan-portfolio.git
    cd ozan-portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Open locally**:
    Visit [http://localhost:3000](http://localhost:3000).

## 👤 About Ozan Özdemir

**Role**: 1st Assistant Camera / Focus Puller
**Location**: Ankara / Istanbul, Turkey
**Specialization**: Narrative Layout, Technical Art, Precision Focus.

> "My job is to ensure technical perfection so the DP can focus on the art."

---

*Project developed and maintained by [Bartu](https://bartwo.dev).*
