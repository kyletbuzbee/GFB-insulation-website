import React from 'react';
import { FileText, Scale, Shield, Clock } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <FileText className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
        <p className="text-text-light">Please read these terms carefully</p>
      </div>

      <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
        <div className="prose prose-invert max-w-none">
          <p className="text-slate-300 mb-8">
            By using GFB Insulation's website and services, you agree to these Terms of Service. 
            Please read them carefully before proceeding.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Service Agreement</h2>
          
          <h3 className="text-xl font-semibold text-white mb-2">Estimates and Quotes</h3>
          <p className="text-slate-300 mb-4">
            All estimates provided by GFB Insulation are based on the information available at the time 
            of the assessment. Final pricing may vary based on actual conditions discovered during the inspection 
            or installation process.
          </p>

          <h3 className="text-xl font-semibold text-white mb-2">Scheduling</h3>
          <p className="text-slate-300 mb-4">
            We strive to accommodate your preferred scheduling needs. However, weather conditions, material 
            availability, and crew scheduling may affect the timing of your installation. We will notify you 
            of any scheduling changes as soon as possible.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Payment Terms</h2>
          <p className="text-slate-300 mb-6">
            Payment terms are as follows:
          </p>
          <ul className="text-slate-300 mb-6 space-y-2">
            <li>• A deposit may be required for larger projects</li>
            <li>• Full payment is due upon completion of services</li>
            <li>• We accept cash, check, and major credit cards</li>
            <li>• Payment plans may be available for qualifying projects</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Warranties</h2>
          <p className="text-slate-300 mb-6">
            GFB Insulation provides warranties on materials and workmanship as specified in your 
            service agreement. Warranties vary by product and service type. Please refer to your specific 
            warranty documentation for complete details.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Customer Responsibilities</h2>
          <p className="text-slate-300 mb-6">
            As our customer, you agree to:
          </p>
          <ul className="text-slate-300 mb-6 space-y-2">
            <li>• Provide accurate information about your property</li>
            <li>• Ensure clear access to work areas</li>
            <li>• Remove personal items from work areas when requested</li>
            <li>• Follow any safety instructions provided by our crew</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Limitation of Liability</h2>
          <p className="text-slate-300 mb-6">
            GFB Insulation shall not be liable for any indirect, incidental, or consequential 
            damages arising from our services. Our liability is limited to the cost of the services provided. 
            We maintain appropriate insurance coverage for our operations.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Cancellation Policy</h2>
          <p className="text-slate-300 mb-6">
            Cancellations made less than 48 hours before the scheduled service date may be subject to a 
            cancellation fee. We understand that emergencies occur and will work with you to reschedule 
            when possible.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Intellectual Property</h2>
          <p className="text-slate-300 mb-6">
            All content on this website, including text, images, and design elements, is the property of 
            GFB Insulation and is protected by copyright laws. You may not reproduce, 
            distribute, or use any content without our written permission.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Dispute Resolution</h2>
          <p className="text-slate-300 mb-6">
            Any disputes arising from our services will be resolved through good faith negotiations. 
            If a resolution cannot be reached, disputes will be settled through the courts of Smith County, 
            Texas, or through binding arbitration if both parties agree.
          </p>

          <h2 className="text-2xl font-bold text-white mb-4 mt-8">Changes to Terms</h2>
          <p className="text-slate-300">
            We reserve the right to modify these Terms of Service at any time. Changes will be posted on 
            this page with an updated revision date. Your continued use of our services constitutes 
            acceptance of the modified terms.
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

export default Terms;
