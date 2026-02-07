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
