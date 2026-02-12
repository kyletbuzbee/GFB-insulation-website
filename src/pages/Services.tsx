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
