# Properties 4 Creation PROJECT INTELLIGENCE REPORT
**Date:** 2026-02-14T21:12:17.886604  
**Mission:** Revitalizing East Texas by providing quality affordable housing for families and the community, while offering sustainable solutions for property owners and investors.  
**Community Alignment Score:** 25/100

## 1. Executive Summary
- **Total Files:** 22
- **Lines of Code:** 2405
- **High/Critical Issues:** 4


## 2. Project Structure
```text
├── plans
│   ├── github-pages-deployment-plan.md
│   └── section-separation-strategy.md
├── public
│   ├── 404.html
│   ├── brand-logo.jpeg
│   ├── brand-logo.svg
│   ├── favicon.svg
│   ├── index.css
│   └── sitemap.xml
├── reports
│   ├── context_review_2026-02-11_16-23-20.json
│   └── context_review_2026-02-14_21-11-02.json
├── src
│   ├── components
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   └── SectionDividers.tsx
│   ├── constants
│   │   └── images.ts
│   ├── hooks
│   ├── pages
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Home.tsx
│   │   ├── NotFound.tsx
│   │   ├── Privacy.tsx
│   │   ├── Reviews.tsx
│   │   ├── Services.tsx
│   │   ├── Terms.tsx
│   │   └── Thanks.tsx
│   ├── types
│   ├── utils
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── types.ts
├── context-review.py
├── index.html
├── metadata.json
├── package.json
├── README.md
├── test-fix.js
├── tsconfig.json
└── vite.config.ts

```


## 3. Source Code & Analysis
### 📄 `index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>GFB Insulation | Tyler, TX | Spray Foam & Attic Insulation</title>
    <meta name="description" content="GFB Insulation - Professional spray foam and blown-in insulation services in Tyler, TX and East Texas. Energy-efficient insulation for homes and commercial buildings. Licensed, insured, and trusted since 2015." />
    <meta name="keywords" content="insulation Tyler TX, spray foam insulation, blown-in insulation, commercial insulation, energy efficient, attic insulation, East Texas insulation, GFB Insulation" />
    <meta name="author" content="GFB Insulation" />
    <meta name="robots" content="index, follow" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://gfbinsulation.com/" />
    <meta property="og:title" content="GFB Insulation | Tyler, TX" />
    <meta property="og:description" content="Professional spray foam and blown-in insulation services in Tyler, TX and East Texas. Save up to 30% on energy costs." />
    <meta property="og:image" content="https://gfbinsulation.com/og-image.jpg" />
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://gfbinsulation.com/" />
    <meta property="twitter:title" content="GFB Insulation | Tyler, TX" />
    <meta property="twitter:description" content="Professional spray foam and blown-in insulation services in Tyler, TX and East Texas. Save up to 30% on energy costs." />
    <meta property="twitter:image" content="https://gfbinsulation.com/og-image.jpg" />
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://gfbinsulation.com/" />
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="./favicon.svg" />
    <link rel="apple-touch-icon" href="./apple-touch-icon.png" />
    
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">

  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./src/main.tsx"></script>
  </body>
</html>
```

---
### 📄 `public\404.html`

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 - Not Found</title>
    <script>
        // Redirect to index.html for SPA routing
        window.location.href = '/GFB-insulation-website/' + window.location.search;
    </script>
</head>
<body>
    <p>Redirecting to GFB Insulation...</p>
</body>
</html>

```

---
### 📄 `public\index.css`

```css
/* Global Styles for GFB Insulation Solutions */
/* Using GFB Brand Colors: Amber/Orange Theme */

/* CSS Variables from theme */
:root {
  --color-primary: #D68C23;
  --color-primary-hover: #C67E22;
  --color-primary-dark: #A56D1A;
  --color-secondary: #333333;
  --color-secondary-hover: #2D2D2D;
  --color-secondary-dark: #272727;
  --color-text: #1A1A1A;
  --color-text-muted: #4A4A4A;
  --color-text-light: #6B6B6B;
  --color-background: #FFFFFF;
  --color-background-alt: #F5F5F5;
  --color-dark: #121212;
  --color-dark-hover: #0E0E0E;
  --color-dark-border: #2A2A2A;
  --color-accent: #2C3E50;
  --color-accent-hover: #253445;
  --color-accent-dark: #1E2A3A;
  --font-heading: 'Montserrat', sans-serif;
  --font-body: 'Roboto', sans-serif;
}

/* Base reset */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: var(--font-body);
  background-color: var(--color-dark);
  color: #F8FAFC;
  line-height: 1.6;
  min-height: 100vh;
}

/* Custom scrollbar - GFB Amber theme */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--color-dark-border);
}

::-webkit-scrollbar-thumb {
  background: var(--color-primary);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-primary-hover);
}

/* Focus styles for accessibility */
*:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Button base styles */
button {
  cursor: pointer;
  border: none;
  background: none;
  font-family: inherit;
}

/* Link styles */
a {
  color: inherit;
  text-decoration: none;
}

/* Image handling */
img {
  max-width: 100%;
  height: auto;
}

/* Smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Animation utilities */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

.animate-slide-up {
  animation: slideUp 0.6s ease-out forwards;
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Back to top button */
.back-to-top {
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.back-to-top.visible {
  opacity: 1;
  visibility: visible;
}

/* Glassmorphism utility */
.glass {
  background: rgba(30, 41, 59, 0.5);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Form element styles */
input, textarea, select {
  font-family: inherit;
  font-size: inherit;
}

input::placeholder,
textarea::placeholder {
  color: var(--color-text-light);
}

/* Details/Summary styling for FAQ */
details > summary {
  list-style: none;
  cursor: pointer;
}

details > summary::-webkit-details-marker {
  display: none;
}

details[open] summary ~ * {
  animation: slideUp 0.3s ease-out;
}

/* Table styles */
table {
  border-collapse: collapse;
  width: 100%;
}

/* Utility classes - GFB Amber gradient */
.text-gradient {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.bg-gradient-to-r {
  background: linear-gradient(to right, var(--color-primary), var(--color-primary-dark));
}

/* Selection color - GFB Amber */
::selection {
  background: var(--color-primary);
  color: #fff;
}

/* Heading font utility */
.font-heading {
  font-family: var(--font-heading);
}

.font-body {
  font-family: var(--font-body);
}
```

---
### 📄 `src\App.tsx`

**⚠️ Analysis Findings:**
- 🔴 **[HIGH]** Button missing aria-label (Line 44)

```typescript
import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// Imports are now clean because App.tsx is in src/
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import Thanks from './pages/Thanks';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

// Scroll to top wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Scroll to top button component
const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-primary/90 hover:bg-primary-dark text-white rounded-full shadow-lg shadow-primary/30 backdrop-blur-md border border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-primary/50 z-50 group"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      {/* FIX: 'bg-dark' will now work because Tailwind will find this file in src/ 
         FIX: 'flex-col' ensures the footer sticks to the bottom
      */}
      <div className="flex flex-col min-h-screen bg-dark text-slate-50 font-sans selection:bg-primary selection:text-white">
        <Navbar />
        {/* FIX: Added 'relative' and 'w-full'. 
           Note: Individual pages (like Services) have 'pt-24' to handle the fixed navbar.
           Home page handles its own spacing with the hero section.
        */}
        <main className="grow w-full relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thanks" element={<Thanks />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
};

export default App;
```

---
### 📄 `src\components\Footer.tsx`

**⚠️ Analysis Findings:**
- 🔵 **[MEDIUM]** Image missing alt text (Line 16)

```typescript
import React from 'react';
import { Mail, Phone, MapPin, Award, CheckCircle, Users } from 'lucide-react';
import { Link } from 'react-router-dom'; // FIX: Import Link
import { BRAND_LOGO, ALT_TEXT } from '@/constants/images';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark border-t border-white/10 pt-16 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1 space-y-4">
            <Link to="/">
              <img 
                src={BRAND_LOGO}
                alt={ALT_TEXT.brandLogo}
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-text-light text-sm leading-relaxed max-w-xs">
              Providing top-tier energy efficiency solutions for East Texas homes and businesses. Licensed and Insured.
            </p>
            <div className="flex space-x-2">
              <div className="px-2 py-1 rounded border border-primary/30 bg-primary/10 text-xs text-primary font-medium">
                BBB Accredited
              </div>
              <div className="px-2 py-1 rounded border border-white/20 bg-white/5 text-xs text-slate-300">
                5-Star Rated
              </div>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="md:col-span-1 space-y-4">
            <h3 className="text-white font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3">
              <a href="tel:+19035550123" className="flex items-center space-x-3 text-text-light hover:text-primary transition-colors group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="block font-medium">(903) 555-0123</span>
                  <span className="text-xs text-text-muted">Mon-Fri 8am-6pm</span>
                </div>
              </a>
              <a href="mailto:info@gfbinsulation.com" className="flex items-center space-x-3 text-text-light hover:text-primary transition-colors group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <span>info@gfbinsulation.com</span>
              </a>
              <div className="flex items-center space-x-3 text-text-light">
                <div className="p-2 bg-white/5 rounded-lg">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="block font-medium">Serving East Texas</span>
                  <span className="text-xs text-text-muted">50 mile radius of Tyler</span>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="md:col-span-1 space-y-4">
            <h3 className="text-white font-semibold text-lg">Professional Certifications</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-slate-300">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-sm">Licensed Contractor</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm">Fully Insured</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm">Energy Star Partner</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm">10+ Years Experience</span>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="md:col-span-1 space-y-4">
            <h3 className="text-white font-semibold text-lg">Service Areas</h3>
            <div className="grid grid-cols-2 gap-2 text-text-light text-sm">
              {['Tyler', 'Longview', 'Jacksonville', 'Lindale', 'Whitehouse', 'White Oak', 'Arp', 'Chandler'].map((city) => (
                <div key={city} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>{city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-text-muted text-sm">
              &copy; {currentYear} GFB Insulation. All rights reserved.
            </p>
            <div className="flex space-x-6 text-text-light text-sm">
              <Link to="/privacy" className="hover:text-primary transition-colors cursor-pointer">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors cursor-pointer">
                Terms of Service
              </Link>
              {/* FAQ is usually on the home page or a section, linking to contact for now */}
              <Link to="/contact" className="hover:text-primary transition-colors cursor-pointer">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

---
### 📄 `src\components\Navbar.tsx`

**⚠️ Analysis Findings:**
- 🔴 **[HIGH]** Button missing aria-label (Line 74)
- 🔵 **[MEDIUM]** Image missing alt text (Line 39)

```typescript
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';
import { BRAND_LOGO, ALT_TEXT } from '../constants/images';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Reviews', path: '/reviews' },
  { label: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = `fixed w-full z-50 transition-all duration-300 ${
    scrolled || isOpen
      ? 'bg-dark/95 backdrop-blur-xl shadow-xl border-b border-white/10'
      : 'bg-dark/60 backdrop-blur-md'
  }`;

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center group">
            <img 
              src={BRAND_LOGO}
              alt={ALT_TEXT.brandLogo}
              className="h-16 w-auto object-contain group-hover:opacity-90 transition-opacity"
            />
          </NavLink>

          {/* Desktop Nav & CTA */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-all duration-300 relative ${
                    isActive 
                      ? 'text-primary after:content-[""] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-primary after:shadow-[0_0_15px_rgba(251,176,59,0.5)]' 
                      : 'text-slate-300 hover:text-primary hover:shadow-[0_0_10px_rgba(251,176,59,0.3)] hover:-translate-y-0.5'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            {/* Sticky CTA Button */}
            <NavLink
              to="/contact"
              className="px-5 py-2.5 bg-primary text-white font-semibold rounded-lg shadow-lg shadow-primary/25 hover:bg-primary-dark hover:shadow-primary/40 transition-all hover:-translate-y-0.5 whitespace-nowrap"
            >
              Get Free Estimate
            </NavLink>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-dark/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        } overflow-hidden`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                  isActive
                    ? 'bg-primary/20 text-primary'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

```

---
### 📄 `src\components\SectionDividers.tsx`

```typescript
import React from 'react';

export const SubtleLineDivider: React.FC = () => {
  return (
    <div className="w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
  );
};

export const DecorativeWaveDivider: React.FC = () => {
  return (
    <div className="relative h-16 overflow-hidden">
      {/* Gradient fade to smooth the transition */}
      <div className="absolute inset-0 bg-linear-to-b from-dark/50 to-transparent" />
      <svg 
        className="absolute bottom-0 w-full" 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
      >
        <path 
          d="M0,120 C300,80 600,100 900,60 C1050,40 1200,80 L1200,120 L0,120 Z" 
          fill="currentColor" 
          // FIX: Changed to white/5 so it's visible on dark bg. 
          // Previous dark/30 was invisible against bg-dark.
          className="text-white/5" 
        />
      </svg>
    </div>
  );
};

interface IconDividerProps {
  icon: React.ReactNode;
  label?: string;
}

export const IconDivider: React.FC<IconDividerProps> = ({ icon, label }) => {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="w-16 h-px bg-white/10" />
      <div className="mx-4 p-2 bg-primary/20 rounded-full" aria-label={label}>
        {icon}
      </div>
      <div className="w-16 h-px bg-white/10" />
    </div>
  );
};
```

---
### 📄 `src\constants\images.ts`

```typescript
/**
 * Centralized image assets for GFB Insulation website
 * All images are referenced from the public folder or external URLs
 */

// Brand Assets
// NOTE: Ensure you have a file named 'brand-logo.svg' in your 'public' folder!
export const BRAND_LOGO = '/brand-logo.svg';

// Hero & Home Page Images
export const HERO_HOME_IMAGE = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000';

// Services Page Images
export const SPRAY_FOAM_IMAGE = 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1200';
export const ATTIC_BLOWN_IN_IMAGE = 'https://images.unsplash.com/photo-1593019808390-377319522199?auto=format&fit=crop&q=80&w=600';
export const COMMERCIAL_RETROFIT_IMAGE = 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600';

// About Page Images
export const TEAM_IMAGE = 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=800';

// Map Configuration
// FIX: Updated to a valid Google Maps Embed URL for Tyler, TX
export const GOOGLE_MAPS_EMBED_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107387.89202660136!2d-95.36831032865955!3d32.35126019999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8649c66914611481%3A0x629c42c75908e08d!2sTyler%2C%20TX!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus';

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
```

---
### 📄 `src\index.css`

```css
@import "tailwindcss";

/* You can keep your :root variables here if you wish, 
   but the Tailwind config handles the colors now. */

body {
  background-color: #121212;
  color: #F8FAFC;
}
```

---
### 📄 `src\main.tsx`

```typescript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Now imports correctly from the same folder
import './index.css'; // CRITICAL: This loads Tailwind

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

---
### 📄 `src\pages\About.tsx`

**⚠️ Analysis Findings:**
- 🔵 **[MEDIUM]** Image missing alt text (Line 49)

```typescript
import React from 'react';
import { ShieldCheck, Users, MapPin, Award, Clock, Truck, ArrowRight, Zap } from 'lucide-react';
import { SubtleLineDivider, DecorativeWaveDivider, IconDivider } from '../components/SectionDividers';
import { TEAM_IMAGE, ALT_TEXT } from '@/constants/images';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-4">Our Story</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">Family-Owned Insulation Experts</h1>
        <p className="text-text-light max-w-2xl mx-auto text-lg leading-[1.6]">
          Serving East Texas with quality insulation solutions since 2015. We're your neighbors at GFB Insulation, committed to making your home more comfortable and energy-efficient.
        </p>
      </div>

      {/* Our Story Section */}
      <section className="mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 leading-tight">Our Journey</h3>
            <p className="text-slate-300 mb-6 leading-[1.6]">
              GFB Insulation was founded by a team of East Texas natives who saw a need for reliable, high-quality insulation services in our community. 
              Growing up in Tyler, we experienced firsthand the challenges of Texas weather - scorching summers and unpredictable winters.
            </p>
            <p className="text-slate-300 mb-8 leading-[1.6]">
              We started with a single truck and a commitment to excellence. Today, we've insulated hundreds of homes and businesses across East Texas, 
              building a reputation for quality workmanship and exceptional customer service.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg">
                <ShieldCheck className="w-6 h-6 text-primary" />
                <div>
                  <div className="font-semibold text-white">Local Experts</div>
                  <div className="text-text-light text-sm">Born and raised here</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg">
                <Users className="w-6 h-6 text-primary" />
                <div>
                  <div className="font-semibold text-white">Family-Owned</div>
                  <div className="text-text-light text-sm">Personal attention</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl shadow-primary/10">
              <img 
                src={TEAM_IMAGE}
                alt={ALT_TEXT.team}
                className="w-full h-80 object-cover rounded-lg mb-4 shadow-lg"
              />
              <p className="text-slate-300 text-center italic leading-relaxed">
                "We treat every home like it's our own family's home."
              </p>
            </div>
          </div>
        </div>
      </section>

      <SubtleLineDivider />

      {/* Safety Promise - Ghost Cards for Variety */}
      <section className="mb-28 bg-linear-to-br from-dark/50 to-dark/50 rounded-3xl p-8 border border-white/10">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-4 leading-tight">Our Safety Promise</h3>
          <p className="text-slate-300 max-w-3xl mx-auto leading-[1.6]">
            Your family's safety is our top priority. We use only non-toxic, environmentally responsible materials 
            and maintain the highest standards of job site cleanliness.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 hover:bg-white/5 rounded-xl transition-all duration-300">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <h4 className="text-white font-bold mb-2">Quality Materials</h4>
            <p className="text-text-light text-sm leading-relaxed">Non-toxic, eco-friendly insulation products</p>
          </div>
          
          <div className="text-center p-6 hover:bg-white/5 rounded-xl transition-all duration-300">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-6 h-6 text-primary" />
            </div>
            <h4 className="text-white font-bold mb-2">Clean Job Sites</h4>
            <p className="text-text-light text-sm leading-relaxed">We leave your home cleaner than we found it</p>
          </div>
          
          <div className="text-center p-6 hover:bg-white/5 rounded-xl transition-all duration-300">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h4 className="text-white font-bold mb-2">On-Time Service</h4>
            <p className="text-text-light text-sm leading-relaxed">We respect your time and schedule</p>
          </div>
        </div>
      </section>

      <IconDivider icon={<MapPin className="w-4 h-4 text-primary" />} label="Service Areas" />

      {/* Service Area - Organic Layout with Simple Typography */}
      <section className="mb-28">
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-white mb-4 leading-tight">Serving Our Community</h3>
          <p className="text-text-light leading-[1.6]">We're proud to serve homeowners and businesses throughout East Texas</p>
        </div>
        
        {/* Organic Layout - Simple Typography with Icons */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center space-x-6 p-6 hover:bg-white/5 rounded-xl transition-all duration-300 group">
              <div className="shrink-0 w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <div className="grow">
                <h4 className="text-xl font-bold text-white mb-1">Tyler</h4>
                <p className="text-text-light">Our home base and primary service area</p>
              </div>
              <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            <div className="flex items-center space-x-6 p-6 hover:bg-white/5 rounded-xl transition-all duration-300 group">
              <div className="shrink-0 w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <div className="grow">
                <h4 className="text-xl font-bold text-white mb-1">Longview</h4>
                <p className="text-text-light">Greater metro area and surrounding communities</p>
              </div>
              <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            {/* FIX: Duplication removed here */}
            <div className="flex items-center space-x-6 p-6 hover:bg-white/5 rounded-xl transition-all duration-300 group">
              <div className="shrink-0 w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <div className="grow">
                <h4 className="text-xl font-bold text-white mb-1">Jacksonville</h4>
                <p className="text-text-light">Cherokee County and surrounding areas</p>
              </div>
              <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            <div className="flex items-center space-x-6 p-6 hover:bg-white/5 rounded-xl transition-all duration-300 group">
              <div className="shrink-0 w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <div className="grow">
                <h4 className="text-xl font-bold text-white mb-1">Lindale</h4>
                <p className="text-text-light">Smith County and nearby communities</p>
              </div>
              <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-text-light leading-relaxed">
              Plus Whitehouse, White Oak, Arp, Chandler, Kilgore, and surrounding areas within a 50-mile radius
            </p>
          </div>
        </div>
      </section>

      <DecorativeWaveDivider />

      {/* Call to Action - Narrowed Container */}
      <section className="text-center">
        <div className="max-w-3xl mx-auto bg-primary/20 rounded-3xl p-12 border border-white/10">
          <h3 className="text-3xl font-bold text-white mb-4 leading-tight">Ready to Make Your Home More Comfortable?</h3>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto leading-[1.6]">
            Contact us today for a free consultation. We'll inspect your home, 
            recommend the best insulation solution, and provide a detailed quote - 
            all with no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-primary/25"
            >
              Get Free Estimate
            </a>
            <a 
              href="tel:+19035550123" 
              className="border border-white/30 text-white font-semibold py-4 px-8 rounded-xl hover:bg-white/10 transition-all"
            >
              Call Us: (903) 555-0123
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
```

---
### 📄 `src\pages\Contact.tsx`

**⚠️ Analysis Findings:**
- 🔴 **[HIGH]** Button missing aria-label (Line 184)

```typescript
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Calendar, CheckCircle, ArrowRight, Navigation, CheckCircle2, XCircle, Zap } from 'lucide-react';
import { SubtleLineDivider, DecorativeWaveDivider, IconDivider } from '@/components/SectionDividers';
import { GOOGLE_MAPS_EMBED_URL } from '@/constants/images';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormState('success');
        form.reset();
        setTimeout(() => setFormState('idle'), 5000);
      } else {
        setFormState('error');
        setTimeout(() => setFormState('idle'), 5000);
      }
    } catch {
      setFormState('error');
      setTimeout(() => setFormState('idle'), 5000);
    }
  };
  const serviceAreas = [
    { city: 'Tyler', distance: '0 miles' },
    { city: 'Lindale', distance: '15 miles' },
    { city: 'Longview', distance: '35 miles' },
    { city: 'Jacksonville', distance: '30 miles' },
    { city: 'Nacogdoches', distance: '45 miles' },
    { city: 'Kilgore', distance: '25 miles' },
    { city: 'Canton', distance: '25 miles' },
    { city: 'Mineola', distance: '20 miles' },
    { city: 'Whitehouse', distance: '10 miles' },
    { city: 'Bullard', distance: '15 miles' },
    { city: 'Hideaway', distance: '12 miles' },
    { city: 'Chapel Hill', distance: '18 miles' },
  ];

  const whatHappensNext = [
    {
      step: 1,
      title: 'Free Consultation',
      description: 'We\'ll discuss your insulation needs and provide expert recommendations tailored to your property.'
    },
    {
      step: 2,
      title: 'Detailed Estimate',
      description: 'Receive a comprehensive, no-obligation quote with transparent pricing and timeline.'
    },
    {
      step: 3,
      title: 'Professional Installation',
      description: 'Our certified crew completes the job efficiently with minimal disruption to your daily routine.'
    },
    {
      step: 4,
      title: 'Quality Guarantee',
      description: 'We follow up to ensure your complete satisfaction and provide maintenance tips for optimal performance.'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get a Free Estimate</h1>
        <p className="text-text-light max-w-xl mx-auto text-lg">
          Ready to improve your home's efficiency? We're here to help you save money and live more comfortably.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-dark/50 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-2">Send Us a Message</h2>
            <p className="text-text-light mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
            
            <form action="https://formspree.io/f/mqakdgwl" method="POST" onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input 
                    type="text" 
                    name="firstName" 
                    required 
                    className="w-full px-4 py-3 rounded-lg bg-dark border border-white/10 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors peer pt-6"
                    placeholder=" "
                    id="firstName"
                  />
                  <label 
                    htmlFor="firstName" 
                    className="absolute left-4 top-3 text-sm text-text-light transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-dark peer-focus:px-1 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-dark peer-[:not(:placeholder-shown)]:px-1 cursor-text"
                  >
                    First Name *
                  </label>
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    name="lastName" 
                    required 
                    className="w-full px-4 py-3 rounded-lg bg-dark border border-white/10 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors peer pt-6"
                    placeholder=" "
                    id="lastName"
                  />
                  <label 
                    htmlFor="lastName" 
                    className="absolute left-4 top-3 text-sm text-text-light transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-dark peer-focus:px-1 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-dark peer-[:not(:placeholder-shown)]:px-1 cursor-text"
                  >
                    Last Name *
                  </label>
                </div>
              </div>
              
              <div className="relative">
                <input 
                  type="email" 
                  name="email" 
                  required 
                  className="w-full px-4 py-3 rounded-lg bg-dark border border-white/10 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors peer pt-6"
                  placeholder=" "
                  id="email"
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-4 top-3 text-sm text-text-light transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-dark peer-focus:px-1 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-dark peer-[:not(:placeholder-shown)]:px-1 cursor-text"
                >
                  Email Address *
                </label>
              </div>

              <div className="relative">
                <input 
                  type="tel" 
                  name="phone" 
                  className="w-full px-4 py-3 rounded-lg bg-dark border border-white/10 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors peer pt-6"
                  placeholder=" "
                  id="phone"
                />
                <label 
                  htmlFor="phone" 
                  className="absolute left-4 top-3 text-sm text-text-light transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-dark peer-focus:px-1 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-dark peer-[:not(:placeholder-shown)]:px-1 cursor-text"
                >
                  Phone Number
                </label>
              </div>
              
              <div className="relative">
                <select name="service" className="w-full px-4 py-3 rounded-lg bg-dark border border-white/10 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors appearance-none">
                  <option>Spray Foam Insulation</option>
                  <option>Attic Blown-in Insulation</option>
                  <option>Commercial Retrofit</option>
                  <option>New Construction</option>
                  <option>Other</option>
                </select>
                <label className="absolute left-4 top-3 text-sm text-text-light pointer-events-none">
                  Service Needed
                </label>
              </div>

              <div className="relative">
                <textarea 
                  name="message" 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-lg bg-dark border border-white/10 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors peer"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button type="submit" disabled={formState === 'submitting'} className={`w-full group flex items-center justify-center space-x-2 py-4 font-bold rounded-lg transition-all shadow-lg ${
                  formState === 'success' 
                    ? 'bg-green-500 text-white' 
                    : formState === 'error'
                    ? 'bg-red-500 text-white'
                    : formState === 'submitting'
                    ? 'bg-primary/70 text-white cursor-not-allowed'
                    : 'bg-primary hover:bg-primary-dark text-white shadow-primary/20 hover:-translate-y-1'
                }`}>
                  {formState === 'success' ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Message Sent!</span>
                    </>
                  ) : formState === 'error' ? (
                    <>
                      <XCircle className="w-5 h-5" />
                      <span>Something went wrong. Try again.</span>
                    </>
                  ) : formState === 'submitting' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Request</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
              </button>
            </form>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Contact Info */}
          <div className="bg-dark/50 border border-white/10 rounded-3xl p-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/5 border border-white/10 rounded-lg">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-text-light mb-1">Phone</h4>
                  <p className="text-white">(903) 555-0123</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/5 border border-white/10 rounded-lg">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-text-light mb-1">Email</h4>
                  <p className="text-white">info@gfbinsulation.com</p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-white/10">
                <h4 className="text-sm font-medium text-text-light mb-3">Business Hours</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-300">Mon - Fri</span>
                    <span className="text-white">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Saturday</span>
                    <span className="text-white">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Sunday</span>
                    <span className="text-primary">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Area */}
          <div className="bg-dark/50 border border-white/10 rounded-3xl p-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Navigation className="w-5 h-5 mr-2 text-primary" />
              Service Area
            </h3>
            <p className="text-text-light text-sm mb-4">Serving Tyler and East Texas communities within 50 miles.</p>
            <div className="grid grid-cols-2 gap-2">
              {serviceAreas.map((area) => (
                <div key={area.city} className="flex items-center space-x-2 text-sm">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-slate-300">{area.city}</span>
                  <span className="text-text-muted text-xs">{area.distance}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Google Map */}
          <div className="bg-dark/50 border border-white/10 rounded-3xl p-4 backdrop-blur-sm overflow-hidden">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-primary" />
              Find Us
            </h3>
            <div className="relative w-full h-64 rounded-xl overflow-hidden bg-dark">
              <iframe
                title="GFB Insulation - Tyler TX Service Area"
                src={GOOGLE_MAPS_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
            <p className="text-text-muted text-xs mt-3 text-center">
              Serving Tyler, TX and surrounding East Texas communities
            </p>
          </div>
        </div>
      </div>

      <SubtleLineDivider />

      {/* What Happens Next Section */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Happens Next?</h2>
          <p className="text-text-light max-w-2xl mx-auto">
            Our simple process makes it easy to get started on your insulation project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whatHappensNext.map((step) => (
            <div key={step.step} className="relative group">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-6 bg-dark/50 border border-white/10 rounded-2xl backdrop-blur-sm h-full hover:border-primary/30 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-text-light text-sm">{step.description}</p>
              </div>
              {step.step < 4 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-primary/50">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <IconDivider icon={<CheckCircle className="w-4 h-4 text-primary" />} label="Trust" />

      {/* Trust Badges */}
      <div className="bg-dark/30 border border-white/10 rounded-2xl p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <CheckCircle className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-white font-semibold">Free Estimates</p>
            <p className="text-text-muted text-sm">No obligation quotes</p>
          </div>
          <div>
            <CheckCircle className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-white font-semibold">Licensed & Insured</p>
            <p className="text-text-muted text-sm">Fully certified</p>
          </div>
          <div>
            <CheckCircle className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-white font-semibold">24-Hour Response</p>
            <p className="text-text-muted text-sm">Quick communication</p>
          </div>
          <div>
            <CheckCircle className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-white font-semibold">Quality Guarantee</p>
            <p className="text-text-muted text-sm">Satisfaction assured</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

```

---
### 📄 `src\pages\Home.tsx`

**⚠️ Analysis Findings:**
- 🔵 **[MEDIUM]** Image missing alt text (Line 46)

```typescript
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Zap, DollarSign, ThermometerSnowflake, Wind, TrendingUp, Home as HomeIcon, Users, Droplet, Clock, Shield, ShieldCheck, AlertTriangle } from 'lucide-react';
import { SubtleLineDivider, DecorativeWaveDivider, IconDivider } from '@/components/SectionDividers';
import { HERO_HOME_IMAGE, ALT_TEXT } from '@/constants/images';

const Home: React.FC = () => {
  const [savingsCount, setSavingsCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const target = 500;
          const duration = 2000;
          const increment = target / (duration / 16);
          const timer = setInterval(() => {
            setSavingsCount(prev => {
              const next = prev + increment;
              if (next >= target) {
                clearInterval(timer);
                return target;
              }
              return Math.floor(next);
            });
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    const savingsElement = document.getElementById('savings-counter');
    if (savingsElement) {
      observer.observe(savingsElement);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Ambient Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_HOME_IMAGE}
            alt={ALT_TEXT.heroHome}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-t from-dark via-dark/80 to-dark/40" />
          {/* Animated Glow Spots */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            <span className="text-slate-200 text-sm font-medium tracking-wide">Serving Tyler & East Texas</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight">
            Efficient Comfort.<br />
            <span className="text-primary">
              Lower Bills.
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-10 leading-[1.6]">
            Upgrade your property with GFB Insulation. We specialize in high-performance spray foam and attic insulation for maximum energy efficiency.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group relative w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/25 overflow-hidden transition-transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <div className="relative flex items-center justify-center space-x-2">
                <span>Get Free Estimate</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            
            <Link
              to="/services"
              className="group w-full sm:w-auto px-8 py-4 bg-white/5 text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 backdrop-blur-sm transition-all"
            >
              Explore Services
            </Link>
          </div>

          {/* Trust Bar - High Visibility */}
          <div className="mt-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl shadow-primary/10">
            <div className="flex flex-wrap justify-center gap-8 text-slate-300">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="font-medium">Fully Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-primary" />
                <span className="font-medium">Energy Star Partner</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="font-medium">10+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SubtleLineDivider />

      {/* Pain Points Section */}
      <section className="py-20 bg-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-4">The Problem</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Are You Facing These Issues?</h3>
            <p className="text-text-light max-w-2xl mx-auto text-lg leading-[1.6]">
              High energy bills, uncomfortable rooms, and inefficient heating and cooling are common problems in East Texas homes. 
              The solution starts with proper insulation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* High Bills */}
            <div className="group text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6 group-hover:bg-primary/30 transition-colors">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Skyrocketing Energy Bills</h4>
              <p className="text-text-light leading-[1.6]">
                Your HVAC system works overtime to maintain temperature when your home isn't properly insulated. 
                This leads to unnecessarily high monthly energy costs.
              </p>
              <div className="mt-6 flex items-center justify-center space-x-2 text-primary font-semibold">
                <TrendingUp className="w-5 h-5" />
                <span>Save 30-50% on energy costs</span>
              </div>
            </div>

            {/* Drafty Rooms */}
            <div className="group text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6 group-hover:bg-primary/30 transition-colors">
                <Wind className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Drafty, Uneven Rooms</h4>
              <p className="text-text-light leading-[1.6]">
                Cold spots in winter and hot spots in summer make your home uncomfortable. 
                Poor insulation allows conditioned air to escape.
              </p>
              <div className="mt-6 flex items-center justify-center space-x-2 text-primary font-semibold">
                <ThermometerSnowflake className="w-5 h-5" />
                <span>Consistent temperature year-round</span>
              </div>
            </div>

            {/* Inefficient HVAC */}
            <div className="group text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6 group-hover:bg-primary/30 transition-colors">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Overworked HVAC System</h4>
              <p className="text-text-light leading-[1.6]">
                Your heating and cooling system runs constantly trying to maintain temperature, 
                leading to higher bills and reduced equipment lifespan.
              </p>
              <div className="mt-6 flex items-center justify-center space-x-2 text-primary font-semibold">
                <CheckCircle2 className="w-5 h-5" />
                <span>Extended HVAC system life</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <IconDivider icon={<Zap className="w-4 h-4 text-primary" />} label="Savings" />

      {/* Energy Savings Counter Section */}
      <section id="savings-counter" className="py-20 bg-linear-to-br from-dark via-dark to-dark">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-12 shadow-2xl shadow-primary/20">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white leading-tight">Average Annual Savings</h3>
            </div>
            <div className="text-6xl md:text-8xl font-extrabold text-primary mb-4">
              ${savingsCount}
            </div>
            <p className="text-slate-300 text-lg leading-[1.6]">
              For Tyler homeowners who upgrade their insulation with GFB Insulation
            </p>
            <div className="mt-8 flex items-center justify-center space-x-4 text-text-light text-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              <span>Results may vary based on home size and current insulation levels</span>
            </div>
            {/* Source Citation */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-text-muted text-xs leading-relaxed">
                *Source: Based on average savings reported by Tyler area homeowners with 2,000-2,500 sq ft homes. 
                <a href="https://www.energy.gov/energysaver/insulation" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark underline ml-1">
                  U.S. Department of Energy
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <DecorativeWaveDivider />

      {/* 3-Step Process Section - Vertical Timeline */}
      <section className="py-20 bg-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-4">Simple Process</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">How It Works</h3>
            <p className="text-text-light max-w-2xl mx-auto text-lg leading-[1.6]">
              Getting your home properly insulated has never been easier. Here's our simple 3-step process.
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary via-primary/50 to-transparent md:-translate-x-1/2"></div>

            {/* Step 1 - Left */}
            <div className="relative mb-12 md:mb-0">
              <div className="md:flex md:items-center">
                <div className="hidden md:block md:w-1/2 md:pr-12 md:text-right">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                    <h4 className="text-xl font-bold text-white mb-3">Step 1: Free Consultation</h4>
                    <p className="text-text-light leading-relaxed">
                      We inspect your home, measure the areas that need insulation, and assess your current energy efficiency.
                    </p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold md:-translate-x-1/2 z-10 shadow-lg shadow-primary/50">
                  1
                </div>
                <div className="md:hidden pl-16">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                      <HomeIcon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Step 1: Free Consultation</h4>
                    <p className="text-text-light text-sm">
                      We inspect your home, measure the areas that need insulation, and assess your current energy efficiency.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2 md:pl-12">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <HomeIcon className="w-8 h-8 text-primary" />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 - Right */}
            <div className="relative mb-12 md:mb-0 md:mt-8">
              <div className="md:flex md:items-center">
                <div className="hidden md:block md:w-1/2 md:pr-12 md:text-right">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 ml-auto">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold md:-translate-x-1/2 z-10 shadow-lg shadow-primary/50">
                  2
                </div>
                <div className="md:hidden pl-16">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Step 2: Custom Plan</h4>
                    <p className="text-text-light text-sm">
                      Based on our assessment, we recommend the best insulation material and method for your specific needs.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2 md:pl-12">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                    <h4 className="text-xl font-bold text-white mb-3">Step 2: Custom Plan</h4>
                    <p className="text-text-light leading-relaxed">
                      Based on our assessment, we recommend the best insulation material and method for your specific needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 - Left */}
            <div className="relative md:mt-8">
              <div className="md:flex md:items-center">
                <div className="hidden md:block md:w-1/2 md:pr-12 md:text-right">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                    <h4 className="text-xl font-bold text-white mb-3">Step 3: Clean Installation</h4>
                    <p className="text-text-light leading-relaxed">
                      Our certified technicians install your new insulation with minimal disruption and leave your home cleaner than we found it.
                    </p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold md:-translate-x-1/2 z-10 shadow-lg shadow-primary/50">
                  3
                </div>
                <div className="md:hidden pl-16">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                      <Droplet className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Step 3: Clean Installation</h4>
                    <p className="text-text-light text-sm">
                      Our certified technicians install your new insulation with minimal disruption and leave your home cleaner than we found it.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2 md:pl-12">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <Droplet className="w-8 h-8 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SubtleLineDivider />

      {/* FAQ Section - Visual Island with Improved Accordion */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-4">Questions?</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Homeowner FAQ</h3>
            <p className="text-text-light max-w-2xl mx-auto text-lg leading-[1.6]">
              Here are the most common questions we get from homeowners considering insulation upgrades.
            </p>
          </div>

          <div className="space-y-4">
            <details className="group bg-dark/70 rounded-xl border border-white/10 cursor-pointer overflow-hidden transition-all duration-300 hover:border-primary/30 open:border-primary/50">
              <summary className="flex items-center justify-between p-6 font-semibold text-white list-none">
                <span className="flex items-center space-x-3">
                  <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary text-sm">Q</span>
                  <span>Is spray foam insulation safe for my family?</span>
                </span>
                <span className="text-primary transition-transform duration-300 group-open:rotate-45 text-2xl">+</span>
              </summary>
              <div className="px-6 pb-6 text-slate-300 leading-[1.6] border-t border-white/5 pt-4 animate-in slide-in-from-top-2 duration-300">
                Yes, absolutely. Once cured, spray foam insulation is completely inert and non-toxic. 
                It doesn't off-gas harmful chemicals and is safe for homes with children and pets. 
                We use only high-quality, environmentally responsible materials that meet all safety standards.
              </div>
            </details>

            <details className="group bg-dark/70 rounded-xl border border-white/10 cursor-pointer overflow-hidden transition-all duration-300 hover:border-primary/30 open:border-primary/50">
              <summary className="flex items-center justify-between p-6 font-semibold text-white list-none">
                <span className="flex items-center space-x-3">
                  <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary text-sm">Q</span>
                  <span>How long does the installation process take?</span>
                </span>
                <span className="text-primary transition-transform duration-300 group-open:rotate-45 text-2xl">+</span>
              </summary>
              <div className="px-6 pb-6 text-slate-300 leading-[1.6] border-t border-white/5 pt-4 animate-in slide-in-from-top-2 duration-300">
                Most residential installations are completed in 1-2 days, depending on the size of your home 
                and the areas being insulated. We work efficiently and cleanly, minimizing disruption to your daily life. 
                For larger projects or commercial properties, we can work after hours to avoid business interruption.
              </div>
            </details>

            <details className="group bg-dark/70 rounded-xl border border-white/10 cursor-pointer overflow-hidden transition-all duration-300 hover:border-primary/30 open:border-primary/50">
              <summary className="flex items-center justify-between p-6 font-semibold text-white list-none">
                <span className="flex items-center space-x-3">
                  <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary text-sm">Q</span>
                  <span>Will insulation help with noise reduction?</span>
                </span>
                <span className="text-primary transition-transform duration-300 group-open:rotate-45 text-2xl">+</span>
              </summary>
              <div className="px-6 pb-6 text-slate-300 leading-[1.6] border-t border-white/5 pt-4 animate-in slide-in-from-top-2 duration-300">
                Yes! Spray foam insulation is an excellent sound barrier. It can significantly reduce outside noise 
                from traffic, neighbors, and weather, as well as prevent sound transfer between rooms in your home. 
                This creates a quieter, more peaceful living environment.
              </div>
            </details>

            <details className="group bg-dark/70 rounded-xl border border-white/10 cursor-pointer overflow-hidden transition-all duration-300 hover:border-primary/30 open:border-primary/50">
              <summary className="flex items-center justify-between p-6 font-semibold text-white list-none">
                <span className="flex items-center space-x-3">
                  <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary text-sm">Q</span>
                  <span>What's the return on investment for insulation?</span>
                </span>
                <span className="text-primary transition-transform duration-300 group-open:rotate-45 text-2xl">+</span>
              </summary>
              <div className="px-6 pb-6 text-slate-300 leading-[1.6] border-t border-white/5 pt-4 animate-in slide-in-from-top-2 duration-300">
                Most homeowners see a 30-50% reduction in their energy bills, which typically pays for the 
                insulation upgrade within 3-7 years. After that, you continue saving money every month while 
                enjoying improved comfort and home value.
              </div>
            </details>
          </div>
        </div>
      </section>

      <IconDivider icon={<ShieldCheck className="w-4 h-4 text-primary" />} label="Quality" />

      {/* Why Choose Us Section - Ghost Cards for Variety */}
      <section className="py-20 bg-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-4">Our Promise</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Why GFB Insulation?</h3>
            <p className="text-text-light max-w-2xl mx-auto text-lg leading-[1.6]">
              We bring decades of experience, cutting-edge technology, and a commitment to excellence 
              to every insulation project in East Texas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 hover:bg-white/5 rounded-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-white font-bold mb-2">Expert Installation</h4>
              <p className="text-text-light text-sm leading-relaxed">Certified technicians with years of experience ensure perfect installation every time.</p>
            </div>

            <div className="text-center p-6 hover:bg-white/5 rounded-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-white font-bold mb-2">Energy Efficiency</h4>
              <p className="text-text-light text-sm leading-relaxed">Advanced materials and techniques maximize your home's energy performance.</p>
            </div>

            <div className="text-center p-6 hover:bg-white/5 rounded-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-white font-bold mb-2">Quality Guarantee</h4>
              <p className="text-text-light text-sm leading-relaxed">We stand behind our work with industry-leading warranties and customer support.</p>
            </div>

            <div className="text-center p-6 hover:bg-white/5 rounded-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-white font-bold mb-2">Local Expertise</h4>
              <p className="text-text-light text-sm leading-relaxed">Deep understanding of East Texas climate challenges and building requirements.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

```

---
### 📄 `src\pages\NotFound.tsx`

```typescript
import React from 'react';
import { AlertTriangle, Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark">
      <div className="text-center max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/5 rounded-3xl p-8 border border-white/10 shadow-2xl shadow-primary/10">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-8 h-8 text-primary" />
          </div>
          
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <h2 className="text-2xl font-bold text-white mb-4">Page Not Found</h2>
          
          <p className="text-slate-300 mb-8 leading-relaxed">
            Looks like you've wandered off the beaten path. Don't worry, 
            even the best insulation installers occasionally hit a dead end.
          </p>

          <div className="space-y-4">
            <Link 
              to="/" 
              className="flex items-center justify-center space-x-3 w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-primary/25"
            >
              <Home className="w-5 h-5" />
              <span>Return Home</span>
            </Link>
            
            <Link 
              to="/contact" 
              className="flex items-center justify-center space-x-3 w-full border border-white/30 text-white font-semibold py-3 px-6 rounded-xl hover:bg-white/10 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Get Free Estimate</span>
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-text-light text-sm">
              Need help finding what you're looking for? 
              <Link to="/contact" className="text-primary hover:text-primary-dark transition-colors">
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

```

---
### 📄 `src\pages\Privacy.tsx`

```typescript
import React from 'react';
import { ShieldCheck, Lock, UserCheck } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShieldCheck className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
        <p className="text-text-light">Your privacy is important to us</p>
      </div>

      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <div className="prose prose-invert max-w-none">
          <p className="text-slate-300 mb-8">
            GFB Insulation is committed to protecting your privacy. This Privacy Policy explains how we collect, 
            use, and safeguard your information when you visit our website or contact us for services.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Information We Collect</h2>
          
          <h3 className="text-xl font-semibold text-white mb-2">Personal Information</h3>
          <p className="text-slate-300 mb-4">
            When you contact us through our website forms, we may collect:
          </p>
          <ul className="text-slate-300 mb-6 space-y-2">
            <li>• Name and contact information (email, phone number)</li>
            <li>• Address and property details for service estimates</li>
            <li>• Communication preferences</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-2">How We Use Your Information</h3>
          <p className="text-slate-300 mb-4">
            We use the information you provide to:
          </p>
          <ul className="text-slate-300 mb-6 space-y-2">
            <li>• Respond to your inquiries and provide estimates</li>
            <li>• Schedule service appointments</li>
            <li>• Improve our website and services</li>
            <li>• Send service-related communications</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Information Protection</h2>
          <p className="text-slate-300 mb-6">
            We implement appropriate security measures to protect your personal information from unauthorized access, 
            alteration, disclosure, or destruction. Your information is stored securely and is only accessible to 
            authorized personnel necessary for providing our services.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Your Rights</h2>
          <p className="text-slate-300 mb-6">
            You have the right to:
          </p>
          <ul className="text-slate-300 mb-6 space-y-2">
            <li>• Access the personal information we hold about you</li>
            <li>• Request correction of inaccurate information</li>
            <li>• Request deletion of your personal information</li>
            <li>• Opt out of future communications</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Third-Party Services</h2>
          <p className="text-slate-300 mb-6">
            We use Formspree to process form submissions. Formspree is a trusted third-party service that helps us 
            manage customer inquiries securely. We do not sell, trade, or otherwise transfer your personal information 
            to third parties without your consent, except as required by law.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Cookies and Tracking</h2>
          <p className="text-slate-300 mb-6">
            Our website uses minimal cookies for essential functionality. We do not use cookies for advertising 
            or tracking purposes. Any cookies used are strictly necessary for the website to function properly.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Contact Us</h2>
          <p className="text-slate-300 mb-6">
            If you have questions about this Privacy Policy or would like to exercise your privacy rights, 
            please contact us:
          </p>
          <div className="bg-dark/50 rounded-lg p-6 border border-white/10">
            <p className="text-slate-300 mb-2">
              <strong>Email:</strong> info@gfbinsulation.com
            </p>
            <p className="text-slate-300 mb-2">
              <strong>Phone:</strong> (903) 555-0123
            </p>
            <p className="text-slate-300">
              <strong>Address:</strong> Serving Tyler & East Texas
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Policy Updates</h2>
          <p className="text-slate-300">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with 
            an updated revision date. We encourage you to review this Privacy Policy periodically to stay 
            informed about how we are protecting your information.
          </p>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-text-light text-sm">
          Last updated: January 2026
        </p>
      </div>
    </div>
  );
};

export default Privacy;

```

---
### 📄 `src\pages\Reviews.tsx`

**⚠️ Analysis Findings:**
- 🔴 **[HIGH]** Button missing aria-label (Line 291)

```typescript
import React from 'react';
import { Star, MessageSquare, CheckCircle, Building2, Home, ArrowRight, ExternalLink, MapPin, Zap } from 'lucide-react';
import { Review } from '@/types';
import { SubtleLineDivider, DecorativeWaveDivider, IconDivider } from '@/components/SectionDividers';

const reviews: Review[] = [
  {
    id: 1,
    name: "Michael Thompson",
    role: "Homeowner",
    project: "Spray Foam Insulation",
    location: "Tyler, TX",
    rating: 5,
    text: "The difference in our electric bill was immediate. The crew was professional, cleaned up perfectly, and the spray foam works like magic against the Tyler heat. Our AC is running half as much now.",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Business Owner",
    project: "Commercial Warehouse",
    location: "Longview, TX",
    rating: 5,
    text: "We hired GFB Insulation for our 10,000 sq ft metal warehouse. It used to be an oven in there; now it's comfortable year-round. The installation was completed in two days with minimal disruption to our operations.",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "David Ross",
    role: "Homeowner",
    project: "Attic Blown-in",
    location: "Lindale, TX",
    rating: 4,
    text: "Great communication from start to finish. They explained the blown-in process clearly and finished the attic in just a few hours. Noticed a difference in temperature upstairs within 24 hours.",
    date: "2 months ago"
  },
  {
    id: 4,
    name: "Jennifer Martinez",
    role: "Homeowner",
    project: "Spray Foam + Air Sealing",
    location: "Jacksonville, TX",
    rating: 5,
    text: "GFB Insulation transformed our drafty 1970s home. The team was punctual, courteous, and thorough. Our utility bill dropped by 30% in the first month. Highly recommend!",
    date: "3 weeks ago"
  },
  {
    id: 5,
    name: "Robert Chen",
    role: "Property Manager",
    project: "Multi-Family Complex",
    location: "Tyler, TX",
    rating: 5,
    text: "Managing 50+ units, I need reliable contractors. GFB Insulation has insulated 12 of our buildings and I couldn't be happier. Professional, on-time, and excellent results every time.",
    date: "1 month ago"
  },
  {
    id: 6,
    name: "Amanda Foster",
    role: "Homeowner",
    project: "Crawl Space Encapsulation",
    location: "Nacogdoches, TX",
    rating: 5,
    text: "Our crawl space was always damp and musty. GFB Insulation encapsulated it with spray foam and added a dehumidifier. Now the whole house feels cleaner and our floors are warmer in winter.",
    date: "6 weeks ago"
  }
];

const ReviewsPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Client Success Stories</h1>
        <p className="text-text-light max-w-xl mx-auto text-lg">
          See why homeowners and businesses across East Texas trust GFB Insulation.
        </p>
        
        {/* Overall Rating */}
        <div className="mt-8 flex items-center justify-center space-x-4">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <span className="text-2xl font-bold text-white">4.9/5</span>
          <span className="text-text-muted">|</span>
          <span className="text-text-light">150+ Reviews</span>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {reviews.map((review) => (
          <div key={review.id} className="group p-6 rounded-2xl bg-dark/50 border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10">
            {/* Project Type Badge */}
            <div className="flex items-center space-x-2 mb-4">
              {review.project.includes('Commercial') || review.project.includes('Warehouse') || review.project.includes('Complex') ? (
                <div className="flex items-center space-x-1 px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">
                  <Building2 className="w-3 h-3" />
                  <span>Commercial</span>
                </div>
              ) : (
                <div className="flex items-center space-x-1 px-2 py-1 bg-primary/20 text-primary rounded-full text-xs">
                  <Home className="w-3 h-3" />
                  <span>Residential</span>
                </div>
              )}
              <div className="flex items-center space-x-1 text-xs text-text-muted ml-auto">
                <MapPin className="w-3 h-3" />
                <span>{review.location}</span>
              </div>
            </div>

            {/* Star Rating */}
            <div className="flex space-x-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'}`} 
                />
              ))}
            </div>
            
            {/* Review Text */}
            <p className="text-slate-300 mb-4 italic leading-relaxed text-sm">"{review.text}"</p>
            
            {/* Project Info */}
            <div className="text-xs text-primary mb-4">
              Project: {review.project}
            </div>
            
            {/* Author Info with Verified Badge */}
            <div className="flex items-center justify-between border-t border-white/5 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-linear-to-br from-primary/30 to-blue-500/30 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {review.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="flex items-center space-x-1">
                    <h4 className="text-white font-semibold text-sm">{review.name}</h4>
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-text-muted text-xs">{review.role}</p>
                </div>
              </div>
              <span className="text-xs text-text-muted">{review.date}</span>
            </div>
          </div>
        ))}
      </div>

      <IconDivider icon={<Star className="w-4 h-4 text-primary" />} label="Reviews" />

      {/* Review Platforms Section */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Review Us On Your Favorite Platform</h2>
          <p className="text-text-light">Your feedback helps us grow and helps other homeowners make informed decisions.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a 
            href="https://www.google.com/search?q=GFB+Insulation+Tyler+TX"
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-4 bg-dark/50 border border-white/10 rounded-xl hover:border-blue-500/50 transition-all hover:-translate-y-1"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <span className="text-blue-400 font-bold">G</span>
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">Google</p>
                <p className="text-text-muted text-xs">Leave a review</p>
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-text-muted group-hover:text-blue-400 transition-colors" />
          </a>
          
          <a 
            href="https://www.facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-4 bg-dark/50 border border-white/10 rounded-xl hover:border-blue-600/50 transition-all hover:-translate-y-1"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                <span className="text-blue-400 font-bold">f</span>
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">Facebook</p>
                <p className="text-text-muted text-xs">Recommend us</p>
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-text-muted group-hover:text-blue-400 transition-colors" />
          </a>
          
          <a 
            href="https://www.yelp.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-4 bg-dark/50 border border-white/10 rounded-xl hover:border-red-500/50 transition-all hover:-translate-y-1"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                <span className="text-red-400 font-bold">Y</span>
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">Yelp</p>
                <p className="text-text-muted text-xs">Write a review</p>
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-text-muted group-hover:text-red-400 transition-colors" />
          </a>
        </div>
      </div>

      <DecorativeWaveDivider />

      {/* Share Experience Section */}
      <div className="relative max-w-2xl mx-auto">
        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
        <div className="relative p-8 md:p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-3 bg-primary/20 rounded-xl">
              <MessageSquare className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Share Your Experience</h2>
              <p className="text-text-light text-sm">Help us improve and assist other homeowners</p>
            </div>
          </div>

          <form action="https://formspree.io/f/mqakdgwl" method="POST" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <input 
                  type="text" 
                  name="name" 
                  required
                  className="w-full px-4 py-3 bg-dark/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder:text-slate-600 peer pt-6"
                  placeholder=" "
                  id="reviewName"
                />
                <label 
                  htmlFor="reviewName" 
                  className="absolute left-4 top-3 text-sm text-text-light transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-dark peer-focus:px-1 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-dark peer-[:not(:placeholder-shown)]:px-1 cursor-text"
                >
                  Your Name *
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-light mb-2">Project Type</label>
                <select 
                  name="projectType" 
                  className="w-full px-4 py-3 bg-dark/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                >
                  <option>Residential - Spray Foam</option>
                  <option>Residential - Blown-in</option>
                  <option>Commercial</option>
                  <option>New Construction</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-light mb-2">Rating</label>
              <select 
                name="rating" 
                className="w-full px-4 py-3 bg-dark/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              >
                <option value="5">5 - Excellent</option>
                <option value="4">4 - Good</option>
                <option value="3">3 - Average</option>
                <option value="2">2 - Poor</option>
                <option value="1">1 - Terrible</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-light mb-2">Your Review</label>
              <textarea 
                name="review" 
                rows={4}
                required
                className="w-full px-4 py-3 bg-dark/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder:text-slate-600"
                placeholder="How was our service?"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 transform hover:-translate-y-1 flex items-center justify-center space-x-2"
            >
              <span>Submit Review</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;

```

---
### 📄 `src\pages\Services.tsx`

**⚠️ Analysis Findings:**
- 🔵 **[MEDIUM]** Image missing alt text (Line 78)
- 🔵 **[MEDIUM]** Image missing alt text (Line 126)
- 🔵 **[MEDIUM]** Image missing alt text (Line 161)

```typescript
import React from 'react';
import { ArrowUpRight, Thermometer, Home, Building2, ShieldCheck, Zap, Droplet, Users, TrendingUp, Calendar, Clock, HardHat } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SubtleLineDivider, DecorativeWaveDivider, IconDivider } from '../components/SectionDividers';
import { SPRAY_FOAM_IMAGE, ATTIC_BLOWN_IN_IMAGE, COMMERCIAL_RETROFIT_IMAGE, ALT_TEXT } from '@/constants/images';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Our Expertise</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Premium Insulation Services</h1>
        <p className="text-text-light max-w-2xl mx-auto text-lg">
          We deliver cutting-edge thermal solutions designed to reduce energy consumption and improve indoor comfort for both residential and commercial properties.
        </p>
      </div>

      {/* Comparison Table Section */}
      <section className="mb-20 bg-white/5 rounded-2xl p-8 border border-white/10">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-4">Insulation Comparison</h3>
          <p className="text-text-light">Choose the right solution for your needs</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left text-text-light pb-4 font-semibold">Feature</th>
                <th className="text-center text-text-light pb-4 font-semibold">Spray Foam</th>
                <th className="text-center text-text-light pb-4 font-semibold">Fiberglass</th>
                <th className="text-center text-text-light pb-4 font-semibold">Cellulose</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-white/10">
                <td className="py-3 text-slate-300">R-Value per inch</td>
                <td className="py-3 text-center text-primary font-bold">6.0-7.0</td>
                <td className="py-3 text-center text-text-light">3.0-4.0</td>
                <td className="py-3 text-center text-text-light">3.5-4.0</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 text-slate-300">Air Sealing</td>
                <td className="py-3 text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    <span className="text-primary font-semibold">Excellent</span>
                  </div>
                </td>
                <td className="py-3 text-center text-text-light">Poor</td>
                <td className="py-3 text-center text-text-light">Good</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 text-slate-300">Lifespan</td>
                <td className="py-3 text-center text-primary font-bold">Lifetime</td>
                <td className="py-3 text-center text-text-light">10-15 years</td>
                <td className="py-3 text-center text-text-light">15-20 years</td>
              </tr>
              <tr>
                <td className="py-3 text-slate-300">Cost</td>
                <td className="py-3 text-center text-text-light">$$</td>
                <td className="py-3 text-center text-text-light">$</td>
                <td className="py-3 text-center text-text-light">$</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <SubtleLineDivider />

      {/* Bento Grid - Normalized Heights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
        
        {/* Featured Card: Spray Foam */}
        <div className="group md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden bg-dark border border-white/5 shadow-2xl min-h-125 md:min-h-150">
          <div className="absolute inset-0">
            <img 
              src={SPRAY_FOAM_IMAGE}
              alt={ALT_TEXT.sprayFoam}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"
            />
            <div className="absolute inset-0 bg-linear-to-t from-dark via-dark/60 to-transparent" />
          </div>
          
          <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
            <div className="flex items-start justify-between">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4 backdrop-blur-md">
                  <Thermometer className="w-4 h-4 mr-2" />
                  Most Popular
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Spray Foam Insulation</h3>
                <p className="text-slate-300 text-lg mb-6 max-w-lg">
                  The ultimate air barrier. Expands to fill every crack and crevice, providing superior thermal resistance and sound dampening.
                </p>
                <ul className="space-y-2 mb-8 text-text-light">
                  <li className="flex items-center"><div className="w-2 h-2 rounded-full bg-primary mr-3"/>Reduces energy bills by up to 50%</li>
                  <li className="flex items-center"><div className="w-2 h-2 rounded-full bg-primary mr-3"/>Prevents moisture and mold growth</li>
                  <li className="flex items-center"><div className="w-2 h-2 rounded-full bg-primary mr-3"/>Lifetime durability</li>
                  <li className="flex items-center"><div className="w-2 h-2 rounded-full bg-primary mr-3"/>Superior sound insulation</li>
                </ul>
                
                {/* Ideal For Section */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-2">Ideal For:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-slate-300">Barndominiums</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-slate-300">New Construction</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-slate-300">Metal Buildings</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-slate-300">High Humidity Areas</span>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/contact" className="inline-flex items-center space-x-2 text-white font-semibold group-hover:text-primary transition-colors">
              <span>Get a Quote</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Card 2: Attic Blown-in */}
        <div className="group relative rounded-3xl overflow-hidden bg-dark border border-white/5 shadow-xl md:col-span-1 min-h-75 md:min-h-72.5">
           <div className="absolute inset-0">
            <img 
              src={ATTIC_BLOWN_IN_IMAGE}
              alt={ALT_TEXT.atticBlownIn}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-50"
            />
            <div className="absolute inset-0 bg-linear-to-t from-dark via-dark/40 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 p-8 w-full">
            <div className="p-3 bg-white/10 rounded-xl w-fit backdrop-blur-md mb-4">
              <Home className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Attic Blown-in</h3>
            <p className="text-slate-300 text-sm mb-4 line-clamp-3">
              Cost-effective solution for topping off existing insulation. Keep your home cooler in Texas summers.
            </p>
            
            {/* Ideal For Section */}
            <div className="mb-4">
              <h4 className="text-white font-semibold text-xs mb-2">IDEAL FOR:</h4>
              <div className="text-xs text-text-light space-y-1">
                <div>• Historic Tyler Homes</div>
                <div>• Budget Retrofits</div>
                <div>• Existing Attic Spaces</div>
              </div>
            </div>
            
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-0 group-hover:w-full transition-all duration-700 ease-out" />
            </div>
          </div>
        </div>

        {/* Card 3: Commercial Retrofit */}
        <div className="group relative rounded-3xl overflow-hidden bg-dark border border-white/5 shadow-xl md:col-span-1 min-h-75 md:min-h-72.5">
          <div className="absolute inset-0">
            <img 
              src={COMMERCIAL_RETROFIT_IMAGE}
              alt={ALT_TEXT.commercialRetrofit}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-50"
            />
            <div className="absolute inset-0 bg-linear-to-t from-dark via-dark/40 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 p-8 w-full">
            <div className="p-3 bg-white/10 rounded-xl w-fit backdrop-blur-md mb-4">
              <Building2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Commercial Retrofit</h3>
            <p className="text-slate-300 text-sm mb-4 line-clamp-3">
              Large-scale insulation removal and replacement for warehouses, offices, and metal buildings.
            </p>
            
            {/* Commercial Specifics */}
            <div className="mb-4">
              <h4 className="text-white font-semibold text-xs mb-2">COMMERCIAL FEATURES:</h4>
              <div className="text-xs text-text-light space-y-1">
                <div>• After-hours installation</div>
                <div>• OSHA Compliant Crew</div>
                <div>• Business continuity</div>
                <div>• Bulk pricing available</div>
              </div>
            </div>
            
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-0 group-hover:w-full transition-all duration-700 ease-out delay-100" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;

```

---
### 📄 `src\pages\Terms.tsx`

```typescript
import React from 'react';
import { FileText, Scale, Shield, Clock } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <FileText className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
        <p className="text-text-light">Please read these terms carefully</p>
      </div>

      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <div className="prose prose-invert max-w-none">
          <p className="text-slate-300 mb-8">
            By using GFB Insulation's website and services, you agree to these Terms of Service. 
            Please read them carefully before proceeding.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Service Agreement</h2>
          
          <h3 className="text-xl font-semibold text-white mb-2">Estimates and Quotes</h3>
          <p className="text-slate-300 mb-4">
            All estimates provided by GFB Insulation are based on the information available at the time 
            of the assessment. Final pricing may vary based on actual conditions discovered during the inspection 
            or installation process.
          </p>

          <h3 className="text-xl font-semibold text-white mb-2">Scheduling</h3>
          <p className="text-slate-300 mb-4">
            We strive to accommodate your preferred scheduling needs. However, weather conditions, material 
            availability, and crew scheduling may affect the timing of your installation. We will notify you 
            of any scheduling changes as soon as possible.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Payment Terms</h2>
          <p className="text-slate-300 mb-6">
            Payment terms are as follows:
          </p>
          <ul className="text-slate-300 mb-6 space-y-2">
            <li>• A deposit may be required for larger projects</li>
            <li>• Full payment is due upon completion of services</li>
            <li>• We accept cash, check, and major credit cards</li>
            <li>• Payment plans may be available for qualifying projects</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Warranties</h2>
          <p className="text-slate-300 mb-6">
            GFB Insulation provides warranties on materials and workmanship as specified in your 
            service agreement. Warranties vary by product and service type. Please refer to your specific 
            warranty documentation for complete details.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Customer Responsibilities</h2>
          <p className="text-slate-300 mb-6">
            As our customer, you agree to:
          </p>
          <ul className="text-slate-300 mb-6 space-y-2">
            <li>• Provide accurate information about your property</li>
            <li>• Ensure clear access to work areas</li>
            <li>• Remove personal items from work areas when requested</li>
            <li>• Follow any safety instructions provided by our crew</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Limitation of Liability</h2>
          <p className="text-slate-300 mb-6">
            GFB Insulation shall not be liable for any indirect, incidental, or consequential 
            damages arising from our services. Our liability is limited to the cost of the services provided. 
            We maintain appropriate insurance coverage for our operations.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Cancellation Policy</h2>
          <p className="text-slate-300 mb-6">
            Cancellations made less than 48 hours before the scheduled service date may be subject to a 
            cancellation fee. We understand that emergencies occur and will work with you to reschedule 
            when possible.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Intellectual Property</h2>
          <p className="text-slate-300 mb-6">
            All content on this website, including text, images, and design elements, is the property of 
            GFB Insulation and is protected by copyright laws. You may not reproduce, 
            distribute, or use any content without our written permission.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Dispute Resolution</h2>
          <p className="text-slate-300 mb-6">
            Any disputes arising from our services will be resolved through good faith negotiations. 
            If a resolution cannot be reached, disputes will be settled through the courts of Smith County, 
            Texas, or through binding arbitration if both parties agree.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Changes to Terms</h2>
          <p className="text-slate-300">
            We reserve the right to modify these Terms of Service at any time. Changes will be posted on 
            this page with an updated revision date. Your continued use of our services constitutes 
            acceptance of the modified terms.
          </p>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-text-light text-sm">
          Last updated: January 2026
        </p>
      </div>
    </div>
  );
};

export default Terms;

```

---
### 📄 `src\pages\Thanks.tsx`

```typescript
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const Thanks: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-20 h-20 text-primary" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">
          Thank You!
        </h1>
        <p className="text-slate-300 mb-8">
          Your message has been sent successfully. We'll get back to you shortly.
        </p>
        <Link
          to="/"
          className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Thanks;

```

---
### 📄 `src\types.ts`

```typescript
export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  gridArea?: string;
}

export interface Review {
  id: number;
  name: string;
  role: string;
  rating: number;
  text: string;
  date: string;
  // FIX: Added these two properties to match your data
  project: string;
  location: string;
}

export enum FormStatus {
  IDLE = 'IDLE',
  SUBMITTING = 'SUBMITTING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
```

---
### 📄 `test-fix.js`

```javascript
import fs from 'fs';
import path from 'path';

console.log('=== GFB-insulation-website Fix Verification ===\n');

// Check if all required dist files exist
const distPath = path.join(process.cwd(), 'dist');
const distFiles = fs.readdirSync(distPath);

console.log('1. Checking dist folder structure:');
console.log('   - Dist folder contains:', distFiles.join(', '));

// Check assets folder
const assetsPath = path.join(distPath, 'assets');
const assetsFiles = fs.readdirSync(assetsPath);

console.log('\n2. Checking assets folder:');
console.log('   - Assets contain:', assetsFiles.join(', '));

// Check if index.css is properly bundled in assets
const cssFile = assetsFiles.find(file => file.endsWith('.css'));
console.log(`\n3. CSS file found: ${cssFile}`);
if (cssFile) {
  const cssContent = fs.readFileSync(path.join(assetsPath, cssFile), 'utf8');
  console.log(`   - Size: ${cssContent.length} bytes`);
  console.log(`   - Contains Tailwind CSS: ${cssContent.includes('@tailwind')}`);
}

// Check if JS files are bundled
const jsFiles = assetsFiles.filter(file => file.endsWith('.js'));
console.log(`\n4. JS files found: ${jsFiles.length}`);

// Verify index.html references
const indexHtml = fs.readFileSync(path.join(distPath, 'index.html'), 'utf8');
console.log('\n5. Checking index.html references:');

// Check if CSS is properly referenced
const cssRef = indexHtml.includes('GFB-insulation-website/assets') && indexHtml.includes('.css');
console.log(`   - CSS reference: ${cssRef ? '✓ Valid' : '✗ Invalid'}`);

// Check if JS is properly referenced
const jsRef = indexHtml.includes('GFB-insulation-website/assets') && indexHtml.includes('.js');
console.log(`   - JS reference: ${jsRef ? '✓ Valid' : '✗ Invalid'}`);

// Check if CDN Tailwind is removed
const cdnRef = indexHtml.includes('cdn.tailwindcss.com');
console.log(`   - Tailwind CDN: ${cdnRef ? '✗ Still present' : '✓ Removed'}`);

console.log('\n=== Verification Complete ===');
```

---
### 📄 `vite.config.ts`

```typescript
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    const isProduction = mode === 'production';
    
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
        }
      },
      // GitHub Pages configuration
      base: isProduction ? '/GFB-insulation-website/' : '/',
      build: {
        outDir: 'dist',
        sourcemap: !isProduction,
        rollupOptions: {
          output: {
            manualChunks: {
              vendor: ['react', 'react-dom'],
              router: ['react-router-dom']
            }
          }
        }
      }
    };
});

```

---