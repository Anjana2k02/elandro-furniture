# Devil Shop - Modern E-Commerce React App

A beautiful, modern e-commerce web application built with React, TypeScript, Vite, and featuring a stunning liquid glass (glassmorphism) design inspired by iPhone aesthetics.

## Features

### Design
- **Liquid Glass Theme**: Beautiful glassmorphism effects throughout the application
- **Modern UI/UX**: Clean, intuitive interface with smooth animations
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Dark Gradient Background**: Eye-catching gradient backgrounds with animated elements

### Functionality
- **Product Catalog**: Browse through various product categories
- **Shopping Cart**: Add, remove, and manage cart items with persistent storage
- **Product Filtering**: Filter products by category
- **Collections**: Organized product collections
- **Smooth Animations**: Framer Motion powered animations and transitions

### Technical Features
- **TypeScript**: Full type safety
- **State Management**: Zustand for efficient state management
- **Routing**: React Router for navigation
- **Optimized Build**: Code splitting and optimized bundles
- **Modern Stack**: Built with latest React 18 and Vite

## Tech Stack

### Core
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **Custom Glassmorphism** - iPhone-inspired glass effects

### Libraries
- **React Router DOM** - Client-side routing
- **Zustand** - State management (with persist middleware)
- **Framer Motion** - Animations and transitions
- **Lucide React** - Beautiful icon set
- **clsx & tailwind-merge** - Utility class management

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd devil-shop-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
devil-shop-react/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Navigation component
│   │   │   └── Footer.tsx       # Footer component
│   │   └── ui/
│   │       └── ProductCard.tsx  # Product card component
│   ├── pages/
│   │   ├── Home.tsx            # Home page
│   │   ├── Shop.tsx            # Shop page with filters
│   │   ├── Collections.tsx     # Collections page
│   │   ├── About.tsx           # About page
│   │   └── Cart.tsx            # Shopping cart page
│   ├── store/
│   │   └── cartStore.ts        # Zustand cart store
│   ├── data/
│   │   └── products.ts         # Product data
│   ├── utils/
│   │   └── cn.ts               # Class name utility
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # App entry point
│   └── index.css               # Global styles + Tailwind
├── public/                     # Static assets
├── index.html                  # HTML template
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── vite.config.ts              # Vite configuration
└── package.json                # Dependencies
```

## Key Features Explained

### Glassmorphism Theme
The app uses custom CSS classes for the liquid glass effect:
- `.glass` - Standard glass effect
- `.glass-card` - Glass effect with hover animations
- `.glass-dark` - Darker glass variant
- `.navbar-glass` - Navbar-specific glass effect

### Shopping Cart
- Persistent storage using Zustand persist middleware
- Add/remove items
- Update quantities
- Real-time total calculation
- Free shipping over $100

### Animations
- Smooth page transitions
- Hover effects on cards and buttons
- Fade-in animations on scroll
- Loading shimmer effects
- Floating elements

### Responsive Design
- Mobile-first approach
- Breakpoints: mobile (< 768px), tablet (768px - 1024px), desktop (> 1024px)
- Hamburger menu for mobile navigation
- Adaptive grid layouts

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
theme: {
  extend: {
    colors: {
      // Add your custom colors
    }
  }
}
```

### Products
Edit `src/data/products.ts` to add/modify products.

### Animations
Customize animations in `src/index.css` or component-level with Framer Motion.

## Performance Optimizations

- Code splitting for vendor libraries
- Lazy loading of images
- Optimized bundle size with Vite
- React 18 concurrent features
- Efficient re-rendering with Zustand

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Credits

- Design inspiration: Apple's iOS glassmorphism
- Icons: Lucide React
- Images: Unsplash (placeholder images)

---

Built with love by the Devil Shop team.
