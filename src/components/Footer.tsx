import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <a href="#hero" className="text-2xl font-bold tracking-tighter hover:text-blue-600 transition-colors mb-2">
            JD.
          </a>
          <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">
            Handcrafted with passion
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="text-gray-500 font-medium text-sm flex items-center gap-1.5">
            Designed & Built by Alex Morgan <Heart size={14} className="text-red-500 fill-red-500" />
          </p>
          <p className="text-gray-400 text-xs">
            &copy; {currentYear} All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
