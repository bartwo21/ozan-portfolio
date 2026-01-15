# Ozan Özdemir - Camera Assistant Portfolio

A high-performance, cinematic portfolio website for First Assistant Camera (1st AC) Ozan Özdemir.
Designed to be immersive, with heavy use of parallax, smooth scrolling, and dark-mode aesthetics to reflect the film industry standards.

## 🎬 Design Concept: "Cinematic Immersion"

- **Visual Style**: Dark mode, high contrast, movie poster typography.
- **Interactions**: Smooth scrolling (Lenis), parallax depth, staggered text reveals.
- **Atmosphere**: Professional, technical, yet artistic.

## 🛠 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scroll**: [Lenis](https://lenis.studiofreight.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📂 Project Structure

```
/
├── app/                  # App Router
│   ├── (site)/           # Main website routes
│   │   ├── page.tsx      # Landing Page
│   │   ├── works/        # Filmography & Projects
│   │   ├── about/        # Bio & Gear List
│   │   └── contact/      # Contact Info
│   ├── globals.css       # Global styles & Fonts
│   └── layout.tsx        # Root Layout
├── components/           # Reusable Components
│   ├── ui/               # Atomic UI (Buttons, Inputs)
│   ├── layout/           # Header, Footer
│   ├── sections/         # Page Sections (Hero, Bio)
│   └── animation/        # Animation Wrappers
├── lib/                  # Utilities & Data
└── public/               # Static Assets
```

## 🚀 Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    # or
    pnpm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```

3.  **Build for Production**:
    ```bash
    npm run build
    ```

## 🎨 Key Features to Implement

- **Parallax Hero**: Intro section with depth effect.
- **Film Strip Gallery**: Horizontal scroll for works.
- **Gear List**: Organized list of supported camera systems (Arri, Red, Sony).
- **Custom Cursor**: Camera aperture style cursor.

## 📄 License

Private portfolio. All rights reserved.
