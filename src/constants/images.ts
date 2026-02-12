/**
 * Centralized image assets for GFB Insulation website
 * All images are referenced from the public folder or external URLs
 */

// Brand Assets
export const BRAND_LOGO = '/brand-logo.jpeg';

// Hero & Home Page Images
export const HERO_HOME_IMAGE = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000';

// Services Page Images
export const SPRAY_FOAM_IMAGE = 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1200';
export const ATTIC_BLOWN_IN_IMAGE = 'https://images.unsplash.com/photo-1593019808390-377319522199?auto=format&fit=crop&q=80&w=600';
export const COMMERCIAL_RETROFIT_IMAGE = 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600';

// About Page Images
export const TEAM_IMAGE = 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=800';

// Map Configuration
export const GOOGLE_MAPS_EMBED_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2686384.916666667!2d-96.5!3d32.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8649eb0e5c5e6c17%3A0x6e7c1e6c5e5e5e5e!2sTyler%2C%20TX!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus';

// Image Alt Text (for accessibility)
export const ALT_TEXT = {
  brandLogo: 'GFB Insulation Logo',
  heroHome: 'Modern energy efficient home exterior with proper insulation in Tyler Texas',
  sprayFoam: 'Spray foam insulation being applied to attic rafters in a Tyler Texas home',
  atticBlownIn: 'Blown-in attic insulation installation in East Texas home',
  commercialRetrofit: 'Commercial warehouse insulation retrofit in Tyler Texas',
  team: 'Professional insulation contractors working on a residential project in East Texas',
} as const;

// Export all images as a default object for easy importing
export const IMAGES = {
  brand: {
    logo: BRAND_LOGO,
  },
  home: {
    hero: HERO_HOME_IMAGE,
  },
  services: {
    sprayFoam: SPRAY_FOAM_IMAGE,
    atticBlownIn: ATTIC_BLOWN_IN_IMAGE,
    commercialRetrofit: COMMERCIAL_RETROFIT_IMAGE,
  },
  about: {
    team: TEAM_IMAGE,
  },
  maps: {
    serviceArea: GOOGLE_MAPS_EMBED_URL,
  },
  alt: ALT_TEXT,
} as const;

export default IMAGES;
