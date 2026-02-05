/**
 * GFB Insulation/Construction Company Color Palette
 * 
 * Color Mapping:
 * - Primary: GFB Amber (#FBB03B) - Main brand color for CTAs, icons, and accents
 * - Secondary: Charcoal Gray (#333333) - For navigation, form fields, and secondary elements
 * - Text: Off-Black (#1A1A1A) - For main text on light backgrounds
 * - Background: Clean White (#FFFFFF) - Main page background
 * - Dark: Dark Charcoal (#121212) - For dark mode and logo background
 * - Accent: Slate Blue (#2C3E50) - For certifications, borders, and reliability sections
 * 
 * Typography:
 * - Headings: Montserrat (Bold)
 * - Body: Roboto (Regular)
 * - Fine print: Roboto (Thin)
 */

// Logo Colors
export const LOGO_COLORS = {
  primary: '#D68C23',      // GFB Amber (darker for less bright appearance)
  secondary: '#C67E22',    // Deep Orange
  silver: '#E6E7E8',       // Off-White/Silver
  black: '#000000',        // Pure Black
};

// Website Theme Palette
export const THEME_COLORS = {
  primary: {
    DEFAULT: '#D68C23',    // GFB Amber (darker for less bright appearance)
    hover: '#C67E22',      // Slightly darker for hover states
    dark: '#A56D1A',       // Darker shade for active states
  },
  secondary: {
    DEFAULT: '#333333',    // Charcoal Gray
    hover: '#2D2D2D',      // Slightly darker for hover states
    dark: '#272727',       // Darker shade for active states
  },
  text: {
    DEFAULT: '#1A1A1A',    // Off-Black (easier on eyes than pure black)
    muted: '#4A4A4A',      // Muted text for secondary content
    light: '#6B6B6B',      // Light text for tertiary content
  },
  background: {
    DEFAULT: '#FFFFFF',    // Clean White
    alt: '#F5F5F5',        // Alternative background for sections
  },
  dark: {
    DEFAULT: '#121212',    // Dark Charcoal (matches logo background)
    hover: '#0E0E0E',      // Slightly lighter for hover states
    border: '#2A2A2A',     // Border color for dark backgrounds
  },
  accent: {
    DEFAULT: '#2C3E50',    // Slate Blue
    hover: '#253445',      // Slightly darker for hover states
    dark: '#1E2A3A',       // Darker shade for active states
  },
};

// Tailwind Color Mapping
export const TAILWIND_COLORS = {
  // Primary colors (GFB Amber)
  primary: 'var(--color-primary)',
  'primary-hover': 'var(--color-primary-hover)',
  'primary-dark': 'var(--color-primary-dark)',
  
  // Secondary colors (Charcoal Gray)
  secondary: 'var(--color-secondary)',
  'secondary-hover': 'var(--color-secondary-hover)',
  'secondary-dark': 'var(--color-secondary-dark)',
  
  // Text colors
  text: 'var(--color-text)',
  'text-muted': 'var(--color-text-muted)',
  'text-light': 'var(--color-text-light)',
  
  // Background colors
  background: 'var(--color-background)',
  'background-alt': 'var(--color-background-alt)',
  
  // Dark colors
  dark: 'var(--color-dark)',
  'dark-hover': 'var(--color-dark-hover)',
  'dark-border': 'var(--color-dark-border)',
  
  // Accent colors (Slate Blue)
  accent: 'var(--color-accent)',
  'accent-hover': 'var(--color-accent-hover)',
  'accent-dark': 'var(--color-accent-dark)',
};

// Typography
export const TYPOGRAPHY = {
  fonts: {
    heading: 'Montserrat, sans-serif',
    body: 'Roboto, sans-serif',
  },
  fontWeights: {
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
};

// CSS Variables for easy theming
export const CSS_VARIABLES = {
  '--color-primary': THEME_COLORS.primary.DEFAULT,
  '--color-primary-hover': THEME_COLORS.primary.hover,
  '--color-primary-dark': THEME_COLORS.primary.dark,
  '--color-secondary': THEME_COLORS.secondary.DEFAULT,
  '--color-secondary-hover': THEME_COLORS.secondary.hover,
  '--color-secondary-dark': THEME_COLORS.secondary.dark,
  '--color-text': THEME_COLORS.text.DEFAULT,
  '--color-text-muted': THEME_COLORS.text.muted,
  '--color-text-light': THEME_COLORS.text.light,
  '--color-background': THEME_COLORS.background.DEFAULT,
  '--color-background-alt': THEME_COLORS.background.alt,
  '--color-dark': THEME_COLORS.dark.DEFAULT,
  '--color-dark-hover': THEME_COLORS.dark.hover,
  '--color-dark-border': THEME_COLORS.dark.border,
  '--color-accent': THEME_COLORS.accent.DEFAULT,
  '--color-accent-hover': THEME_COLORS.accent.hover,
  '--color-accent-dark': THEME_COLORS.accent.dark,
  '--font-heading': TYPOGRAPHY.fonts.heading,
  '--font-body': TYPOGRAPHY.fonts.body,
};

// Export all colors as a single object for convenience
export const COLORS = {
  ...LOGO_COLORS,
  ...THEME_COLORS,
  tailwind: TAILWIND_COLORS,
  typography: TYPOGRAPHY,
  cssVariables: CSS_VARIABLES,
};

export default COLORS;
