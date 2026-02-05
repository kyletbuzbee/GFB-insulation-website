import React from 'react';
import { ShieldCheck, Users, MapPin, Award, Clock, Truck, ArrowRight, Zap } from 'lucide-react';
import { SubtleLineDivider, DecorativeWaveDivider, IconDivider } from '../components/SectionDividers';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-4">Our Story</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">Family-Owned Insulation Experts</h1>
        <p className="text-text-light max-w-2xl mx-auto text-lg leading-[1.6]">
          Serving East Texas with quality insulation solutions since 2015. We're your neighbors, committed to making your home more comfortable and energy-efficient.
        </p>
      </div>

      {/* Our Story Section */}
      <section className="mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 leading-tight">Our Journey</h3>
            <p className="text-slate-300 mb-6 leading-[1.6]">
              Elite Insulation Solutions was founded by a team of East Texas natives who saw a need for reliable, high-quality insulation services in our community. 
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
                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=800" 
                alt="Professional insulation contractors working on a residential project in East Texas" 
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
      <section className="mb-28 bg-gradient-to-br from-dark/50 to-dark/50 rounded-3xl p-8 border border-white/10">
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
              <div className="flex-shrink-0 w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <div className="flex-grow">
                <h4 className="text-xl font-bold text-white mb-1">Tyler</h4>
                <p className="text-text-light">Our home base and primary service area</p>
              </div>
              <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            <div className="flex items-center space-x-6 p-6 hover:bg-white/5 rounded-xl transition-all duration-300 group">
              <div className="flex-shrink-0 w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <div className="flex-grow">
                <h4 className="text-xl font-bold text-white mb-1">Longview</h4>
                <p className="text-text-light">Greater metro area and surrounding communities</p>
              </div>
              <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            <div className="flex items-center space-x-6 p-6 hover:bg-white/5 rounded-xl transition-all duration-300 group">
              <div className="flex-shrink-0 w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <div className="flex-grow">
                <h4 className="text-xl font-bold text-white mb-1">Jacksonville</h4>
                <p className="text-text-light">Cherokee County and surrounding areas</p>
              </div>
              <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            <div className="flex items-center space-x-6 p-6 hover:bg-white/5 rounded-xl transition-all duration-300 group">
              <div className="flex-shrink-0 w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <div className="flex-grow">
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
