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
    text: "We hired Elite for our 10,000 sq ft metal warehouse. It used to be an oven in there; now it's comfortable year-round. The installation was completed in two days with minimal disruption to our operations.",
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
    text: "Elite Insulation transformed our drafty 1970s home. The team was punctual, courteous, and thorough. Our utility bill dropped by 30% in the first month. Highly recommend!",
    date: "3 weeks ago"
  },
  {
    id: 5,
    name: "Robert Chen",
    role: "Property Manager",
    project: "Multi-Family Complex",
    location: "Tyler, TX",
    rating: 5,
    text: "Managing 50+ units, I need reliable contractors. Elite has insulated 12 of our buildings and I couldn't be happier. Professional, on-time, and excellent results every time.",
    date: "1 month ago"
  },
  {
    id: 6,
    name: "Amanda Foster",
    role: "Homeowner",
    project: "Crawl Space Encapsulation",
    location: "Nacogdoches, TX",
    rating: 5,
    text: "Our crawl space was always damp and musty. Elite encapsulated it with spray foam and added a dehumidifier. Now the whole house feels cleaner and our floors are warmer in winter.",
    date: "6 weeks ago"
  }
];

const ReviewsPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Client Success Stories</h1>
        <p className="text-text-light max-w-xl mx-auto text-lg">
          See why homeowners and businesses across East Texas trust Elite Insulation Solutions.
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
                <div className="w-10 h-10 bg-gradient-to-br from-primary/30 to-blue-500/30 rounded-full flex items-center justify-center">
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
            href="https://www.google.com/search?q=Elite+Insulation+Solutions+Tyler+TX" 
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
