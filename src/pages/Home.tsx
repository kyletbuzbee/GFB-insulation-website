import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Zap, DollarSign, ThermometerSnowflake, Wind, TrendingUp, Home as HomeIcon, Users, Droplet, Clock, Shield, ShieldCheck, AlertTriangle } from 'lucide-react';
import { SubtleLineDivider, DecorativeWaveDivider, IconDivider } from '@/components/SectionDividers';

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
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000"
            alt="Modern energy efficient home exterior with proper insulation in Tyler Texas"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/40" />
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
            Upgrade your property with Elite Insulation Solutions. We specialize in high-performance spray foam and attic insulation for maximum energy efficiency.
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
      <section id="savings-counter" className="py-20 bg-gradient-to-br from-dark via-dark to-dark">
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
              For Tyler homeowners who upgrade their insulation with Elite Insulation Solutions
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
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent md:-translate-x-1/2"></div>

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
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">Why Elite Insulation Solutions?</h3>
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
