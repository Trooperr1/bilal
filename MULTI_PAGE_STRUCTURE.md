# Multi-Page Architecture

The website has been restructured from a single long-scroll page to a multi-page application for better user experience and navigation.

## Page Structure

### Routes

1. **Home** (`/`)
   - Hero section with 3D elements
   - Main landing page
   - Call-to-action buttons

2. **Services** (`/services`)
   - 4 premium service cards
   - Brand Identity
   - 3D Design
   - Web Development
   - Digital Strategy

3. **Work** (`/work`)
   - Portfolio showcase
   - Featured projects grid
   - Project details and categories

4. **About** (`/about`)
   - Company story
   - Team statistics
   - Core values
   - Mission and vision

5. **Contact** (`/contact`)
   - Contact form
   - Contact information
   - Social media links
   - Newsletter signup

## Features

### Global Components

**Navbar** - Appears on all pages
- Sticky navigation
- Active page indicator
- Mobile responsive menu
- Smooth animations

**Footer** - Appears on all pages
- Company links (navigate to pages)
- Service categories
- Resources
- Social media
- Newsletter subscription

### Page Transitions

- Smooth fade and slide animations
- 0.5s duration with custom easing
- Framer Motion powered
- No layout shift

### Navigation

**Desktop:**
- Horizontal menu in navbar
- Hover effects on menu items
- Active state highlighting

**Mobile:**
- Hamburger menu
- Full-screen overlay
- Large touch-friendly links

## Technical Implementation

### Next.js App Router
```
app/
├── layout.tsx          # Root layout with global components
├── page.tsx            # Home page (/)
├── services/
│   └── page.tsx        # Services page (/services)
├── work/
│   └── page.tsx        # Work page (/work)
├── about/
│   └── page.tsx        # About page (/about)
└── contact/
    └── page.tsx        # Contact page (/contact)
```

### Components Used

1. **PageTransition** - Smooth transitions between pages
2. **Navbar** - Navigation with Next.js Link
3. **Footer** - Footer with page links
4. **LoadingScreen** - Initial page load animation
5. **ScrollProgress** - Scroll indicator
6. **CustomCursor** - Interactive cursor
7. **SmoothScroll** - Lenis smooth scrolling

### Metadata

Each page has custom metadata for SEO:
- Unique page titles
- Descriptive meta descriptions
- Open Graph support

## Benefits of Multi-Page Structure

1. **Better SEO** - Each page has unique URL and metadata
2. **Faster Load Times** - Code splitting per route
3. **Clearer Navigation** - Users know where they are
4. **Easier Maintenance** - Sections are independent
5. **Better Analytics** - Track page views separately
6. **Improved UX** - Clear mental model for users

## User Experience

### Navigation Flow

```
Home (/)
  ├──> Services (/services)
  ├──> Work (/work)
  ├──> About (/about)
  └──> Contact (/contact)
```

### Transitions

- Page change: 500ms fade + slide
- No jarring jumps
- Maintains context with persistent navbar/footer

## Development

### Adding New Pages

1. Create new folder in `app/` directory
2. Add `page.tsx` file
3. Export default component
4. Add metadata export
5. Update navigation in `Navbar.tsx`
6. Add link in `Footer.tsx` if needed

Example:
```tsx
// app/new-page/page.tsx
export const metadata = {
  title: 'New Page - Jaff Studio',
  description: 'Description here',
};

export default function NewPage() {
  return (
    <main className="relative pt-24">
      {/* Content */}
    </main>
  );
}
```

### Styling Consistency

All pages use:
- `pt-24` padding-top for navbar clearance
- Same animations and transitions
- Consistent spacing with `section-padding`
- Matching color scheme and typography

## Performance

- **Code Splitting**: Automatic per route
- **Lazy Loading**: Components load as needed
- **Prefetching**: Next.js prefetches visible links
- **Caching**: Static pages cached by default

## Future Enhancements

- [ ] Add blog section
- [ ] Implement project detail pages
- [ ] Add case studies
- [ ] Create team member pages
- [ ] Add loading skeletons
- [ ] Implement search functionality
