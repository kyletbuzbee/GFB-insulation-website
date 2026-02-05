import React from 'react';
import { Mail, Phone, MapPin, Award, CheckCircle, Users } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1 space-y-4">
            <img 
              src="/brand-logo.jpeg" 
              alt="GFB Insulation Logo" 
              className="h-20 w-auto object-contain"
            />
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
              <a href="mailto:info@eliteinsulation.com" className="flex items-center space-x-3 text-text-light hover:text-primary transition-colors group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <span>info@eliteinsulation.com</span>
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
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Tyler</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Longview</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Jacksonville</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Lindale</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Whitehouse</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>White Oak</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Arp</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Chandler</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-text-muted text-sm">
              &copy; {new Date().getFullYear()} Elite Insulation Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 text-text-light text-sm">
              <span className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-primary transition-colors cursor-pointer">Terms of Service</span>
              <span className="hover:text-primary transition-colors cursor-pointer">FAQ</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
