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
