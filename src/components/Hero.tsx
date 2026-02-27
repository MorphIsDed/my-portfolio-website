import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative bg-[#fafafa]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full">
          Available for new opportunities
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-gray-900 leading-[1.1]">
          Building digital products with <span className="text-blue-600">purpose</span> and precision.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          I'm Alex Morgan, a Full Stack Developer focused on creating clean, accessible, and performant web experiences that solve real-world problems.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#projects" 
            className="group flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-full font-semibold transition-all hover:bg-gray-800 hover:shadow-lg"
          >
            View Projects
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#contact" 
            className="flex items-center justify-center px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-semibold transition-all hover:border-gray-300 hover:bg-gray-50"
          >
            Get In Touch
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 animate-bounce">
        <a href="#about">
          <ChevronDown size={32} className="text-gray-400" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
