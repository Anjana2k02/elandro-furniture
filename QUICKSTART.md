# Quick Start Guide

## Get Started in 3 Steps

### 1. Install Dependencies
```bash
cd devil-shop-react
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The app will automatically open at `http://localhost:3000` (or 3001 if 3000 is busy)

### 3. Start Building!

Your modern e-commerce app is ready with:
- ✨ Liquid Glass (Glassmorphism) UI
- 🎨 Tailwind CSS v4
- ⚡ Vite for fast development
- 🛒 Working shopping cart with persistence
- 📱 Fully responsive design
- 🎭 Framer Motion animations

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Project Features

### Pages
- **/** - Home page with hero, featured products, collections
- **/shop** - Product catalog with category filters
- **/collections** - Browse all collections
- **/about** - About page
- **/cart** - Shopping cart

### Tech Stack
- React 18 + TypeScript
- Vite (Build tool)
- Tailwind CSS v4
- Zustand (State management)
- React Router (Navigation)
- Framer Motion (Animations)
- Lucide React (Icons)

## Customization

### Change Colors
Edit `tailwind.config.js` and `src/index.css`

### Add Products
Edit `src/data/products.ts`

### Modify Styles
All glassmorphism styles are in `src/index.css`

## Build for Production

```bash
npm run build
```

Output will be in the `dist` folder, ready to deploy to any static hosting service (Vercel, Netlify, etc.)

---

Happy coding! 🚀
