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
            Elite Insulation Solutions is committed to protecting your privacy. This Privacy Policy explains how we collect, 
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
              <strong>Email:</strong> info@eliteinsulation.com
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
