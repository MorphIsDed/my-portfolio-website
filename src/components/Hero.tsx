import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-[100vh] flex flex-col justify-center items-center relative bg-[#fafafa] overflow-hidden pt-20">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 flex items-center justify-center opacity-5">
        <h1 className="text-[30vw] font-black uppercase tracking-tighter leading-none select-none select-none">AM</h1>
      </div>

      <div className="content-container px-6 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-100/50 rounded-full border border-blue-100">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Available for new projects
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tight text-gray-900 leading-[1.05]">
          Architecting <span className="text-blue-600">Digital</span> Experiences.
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
          I'm Alex Morgan, a Senior Full Stack Developer dedicated to building performant, beautiful, and purposeful web products.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a 
            href="#projects" 
            className="group flex items-center justify-center px-10 py-5 bg-gray-900 text-white rounded-2xl font-bold transition-all hover:bg-gray-800 hover:shadow-2xl hover:shadow-gray-200"
          >
            Explore Projects
            <ArrowRight size={20} className="ml-3 group-hover:translate-x-1.5 transition-transform" />
          </a>
          <a 
            href="#contact" 
            className="flex items-center justify-center px-10 py-5 bg-white text-gray-900 border border-gray-200 rounded-2xl font-bold transition-all hover:border-blue-600 hover:text-blue-600"
          >
            Get In Touch
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-12 animate-bounce flex flex-col items-center gap-2">
        <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Scroll</span>
        <a href="#about">
          <ChevronDown size={28} className="text-gray-300" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
