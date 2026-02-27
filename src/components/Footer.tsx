import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-20 bg-white border-t border-gray-100">
      <div className="content-container px-6 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center md:items-start">
          <a href="#hero" className="text-3xl font-black tracking-tighter hover:text-blue-600 transition-colors mb-4 flex items-center gap-1">
             <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-base">A</span>
             M.
          </a>
          <p className="text-[11px] font-black text-gray-400 uppercase tracking-[0.3em]">
            Digital Architect & Developer
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-3">
          <p className="text-gray-900 font-bold text-base flex items-center gap-2">
            Designed & Built with <Heart size={16} className="text-red-500 fill-red-500 animate-pulse" /> by Alex Morgan
          </p>
          <p className="text-gray-400 font-black text-[10px] uppercase tracking-widest">
            &copy; {currentYear} All Rights Reserved. Crafted in NYC.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
