import React from 'react';

export const SubtleLineDivider: React.FC = () => {
  return (
    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  );
};

export const DecorativeWaveDivider: React.FC = () => {
  return (
    <div className="relative h-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark/50 to-transparent" />
      <svg 
        className="absolute bottom-0 w-full" 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
      >
        <path 
          d="M0,120 C300,80 600,100 900,60 C1050,40 1200,80 L1200,120 L0,120 Z" 
          fill="currentColor" 
          className="text-dark/30" 
        />
      </svg>
    </div>
  );
};

interface IconDividerProps {
  icon: React.ReactNode;
  label?: string;
}

export const IconDivider: React.FC<IconDividerProps> = ({ icon, label }) => {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="w-16 h-px bg-white/10" />
      <div className="mx-4 p-2 bg-primary/20 rounded-full" aria-label={label}>
        {icon}
      </div>
      <div className="w-16 h-px bg-white/10" />
    </div>
  );
};
