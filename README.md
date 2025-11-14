# Jaff Studio - Ultra Modern Creative Studio Website

A cutting-edge, premium website featuring modern design, 3D elements, smooth animations, and interactive experiences built with the latest web technologies.

## Features

- **Next.js 14** with App Router for optimal performance
- **React Three Fiber** for stunning 3D graphics and animations
- **Framer Motion** for smooth, professional animations
- **Tailwind CSS** for a modern, responsive design system
- **Custom Cursor** with interactive hover effects
- **Smooth Scrolling** for seamless navigation
- **Premium Black & White** design aesthetic
- **3D Interactive Elements** using Three.js
- **Parallax Effects** and scroll-based animations
- **Fully Responsive** design for all devices
- **Performance Optimized** for fast loading

## Tech Stack

- **Framework**: Next.js 14
- **UI Library**: React 18
- **3D Graphics**: React Three Fiber, Three.js, Drei
- **Animations**: Framer Motion, GSAP
- **Styling**: Tailwind CSS
- **Typography**: Inter, Space Grotesk
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bilal
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
bilal/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles and animations
├── components/
│   ├── Navbar.tsx          # Navigation with smooth animations
│   ├── Hero.tsx            # Hero section with 3D elements
│   ├── Scene3D.tsx         # 3D scene component
│   ├── Services.tsx        # Services section
│   ├── Work.tsx            # Portfolio/Work showcase
│   ├── About.tsx           # About section with stats
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Footer component
│   ├── CustomCursor.tsx    # Custom cursor effect
│   └── SmoothScroll.tsx    # Smooth scroll wrapper
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies

```

## Customization

### Colors

Update the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: "#000000",
  secondary: "#FFFFFF",
  // Add your custom colors
}
```

### Content

- Update text content in each component file
- Replace placeholder projects in `Work.tsx`
- Modify contact information in `Contact.tsx`
- Update metadata in `app/layout.tsx`

### 3D Elements

Customize 3D objects and animations in `components/Scene3D.tsx`

## Performance

- Optimized bundle size with tree shaking
- Lazy loading for images and components
- Efficient animation using GPU acceleration
- Responsive images with Next.js Image component

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved © 2024 Jaff Studio

## Credits

Built with modern web technologies and designed for maximum impact.
