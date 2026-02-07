import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NavItem } from '@/types';

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
              src="/brand-logo.jpeg" 
              alt="GFB Insulation Logo" 
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
                      ? 'text-primary after:content-[""] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-primary after:shadow-[0_0_15px_rgba(251,176,59,0.5)]' 
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
