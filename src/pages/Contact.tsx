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
