# Brand Logos Directory

This directory contains the brand logos displayed on the "Brands we carry" page.

## Current Setup:

The page currently displays 4 main brands that are already featured on the home page:
- **Marathon** (shock absorbers)
- **Silverback** (heavy-duty components) 
- **Automann** (25,000+ parts)
- **Brakeworks** (brake systems)

These use logos from `/public/images/logos/` directory.

## How to Add More Brand Logos:

1. **Add your PNG files** to this directory with descriptive names (e.g., `volvo.png`, `mack.png`, `peterbilt.png`)

2. **Update the brands array** in `/src/pages/BrandsPage.tsx`:
   ```typescript
   const brands = [
     // Existing main brands (using /logos/ directory)
     { name: 'Marathon', logo: `${import.meta.env.BASE_URL}images/logos/marathon-logo.png` },
     { name: 'Silverback', logo: `${import.meta.env.BASE_URL}images/logos/silverback-logo.png` },
     { name: 'Automann', logo: `${import.meta.env.BASE_URL}images/logos/automann-logo.png` },
     { name: 'Brakeworks', logo: `${import.meta.env.BASE_URL}images/logos/brakeworks-logo.png` },
     
     // Add new brands here (using /brands/ directory)
     { name: 'Volvo', logo: `${import.meta.env.BASE_URL}images/brands/volvo.png` },
     { name: 'Mack', logo: `${import.meta.env.BASE_URL}images/brands/mack.png` },
     // Add more brands here...
   ];
   ```

## Image Guidelines:

- **Format**: PNG files work best (transparent backgrounds recommended)
- **Size**: Logos will be displayed in a square aspect ratio, so square images work best
- **Quality**: High resolution images (at least 200x200px) for crisp display
- **Background**: Transparent or white backgrounds work best
- **File naming**: Use lowercase, descriptive names with hyphens (e.g., `mercedes-benz.png`)

## Current Placeholder Brands:

The page currently shows placeholder brands (Brand 1, Brand 2, etc.). These will automatically be replaced when you add actual brand logo files with the corresponding names.

## Fallback Behavior:

If a brand logo file is missing, the page will show a gray placeholder box with the brand name instead of breaking.
