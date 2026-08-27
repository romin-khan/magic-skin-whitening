# Magic Skin Whitening Website

A professional, production-ready static website built with React for Magic Skin Whitening - a handmade beauty products business.

## Features

- **Responsive Design**: Mobile-first approach optimized for all screen sizes
- **Product Catalog**: Dynamically rendered from `products.js`
- **Product Filtering**: Filter by category with smooth UX
- **Product Details**: Individual product pages with WhatsApp integration
- **Dynamic Data**: Business info and products loaded from data files
- **WhatsApp Integration**: Direct messaging for inquiries
- **Gallery**: Image showcase with hover effects
- **Accessibility**: WCAG compliant with semantic HTML
- **Performance**: Optimized with lazy loading and efficient styling
- **SEO Ready**: Meta tags and structured HTML

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ProductCard.jsx
│   ├── ProductGrid.jsx
│   ├── ProductFilter.jsx
│   ├── WhatsAppButton.jsx
│   ├── SectionHeading.jsx
│   └── GalleryGrid.jsx
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── ProductDetail.jsx
│   ├── About.jsx
│   ├── Gallery.jsx
│   ├── Contact.jsx
│   └── NotFound.jsx
├── data/
│   ├── business.js (your existing data)
│   └── products.js (your existing data)
└── App.jsx
```

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

The app will open at `http://localhost:5173`

### 3. Build for Production
```bash
npm run build
```

## Data Management

### Business Information (`src/data/business.js`)
- Business name, phone, WhatsApp number
- Logo, Google Maps, Instagram URLs
- Opening hours and description
- **This is the single source of truth for business info**

### Products (`src/data/products.js`)
- Array of 22 products with id, name, price, category, images
- Descriptions can be added anytime and will auto-update
- **Do not duplicate this data in components**

## Design System

### Colors
- Cream: `#FFF8F3`
- Warm Beige: `#F5E6D3`
- Soft Tan: `#E8D5C4`
- Earth Brown: `#8B7355` (Primary)
- Sage: `#9CAF88`

### Typography
- Serif (Headings): Playfair Display
- Sans-serif (Body): Inter

## Key Pages

- **Home** (`/`): Hero, featured products, gallery preview
- **Products** (`/products`): Full catalog with category filter
- **Product Detail** (`/products/:id`): Individual product page with WhatsApp CTA
- **About** (`/about`): Business information
- **Gallery** (`/gallery`): Image gallery (10 photos)
- **Contact** (`/contact`): Contact information and CTA
- **404**: Not found page

## Mobile Optimization

- Hamburger menu on mobile
- Responsive grid layouts (1-4 columns)
- Touch-friendly buttons and interactive elements
- Optimized for 360px to 1440px+ widths

## Customization

To update business information:
1. Edit `src/data/business.js`
2. Changes automatically reflect across the website

To add/update products:
1. Edit `src/data/products.js`
2. Add descriptions to empty `description` fields
3. Products appear automatically in catalog

## Performance Considerations

- Lazy loading for images
- Tailwind CSS for minimal CSS
- No unnecessary animations
- Optimized font loading
- Efficient component structure

## Accessibility

- Semantic HTML5
- ARIA labels where needed
- Keyboard navigation support
- Sufficient color contrast
- Focus indicators
- Skip to main content link

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

---

Built with React, React Router, and Tailwind CSS for production quality.
