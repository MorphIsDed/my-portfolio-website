import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-[100vh] flex flex-col justify-center items-center relative overflow-hidden pt-24"
    >
      {/* Decorative layered background */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute -top-40 -right-32 w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-sky-500/30 via-fuchsia-500/25 to-emerald-400/30 blur-3xl opacity-70" />
        <div className="absolute top-1/3 -left-40 w-[26rem] h-[26rem] rounded-full bg-gradient-to-tr from-indigo-500/30 via-sky-500/25 to-rose-500/25 blur-3xl opacity-60" />
        <div className="absolute bottom-[-10rem] right-16 w-[30rem] h-[30rem] rounded-[999px] border border-cyan-400/40 neon-ring opacity-40 rotate-12" />
      </div>

      {/* Giant monogram */}
      <div className="absolute top-10 inset-x-0 -z-10 flex items-center justify-center opacity-[0.06]">
        <h1 className="text-[30vw] font-black uppercase tracking-tighter leading-none select-none">
          AM
        </h1>
      </div>

      <div className="content-container px-6 text-center max-w-4xl section-fade">
        <div className="inline-flex items-center gap-3 px-4 py-2 mb-8 text-[11px] font-black tracking-[0.3em] text-sky-300 uppercase glass-chip rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          Available for new projects
        </div>

        <h1 className="hero-heading text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight leading-[1.05]">
          Architecting{' '}
          <span className="relative inline-block text-gradient text-glow text-gradient-sheen">
            Digital
          </span>{' '}
          Experiences.
        </h1>

        <p className="section-fade section-fade-delay-sm text-lg md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
          I'm Alex Morgan, a Senior Full Stack Developer dedicated to building performant,
          beautiful, and purposeful web products.
        </p>

        <div className="section-fade section-fade-delay-md flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="#projects"
            className="group flex items-center justify-center px-10 py-5 rounded-2xl font-bold transition-all glass-surface text-slate-50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-500/40"
          >
            Explore Projects
            <ArrowRight
              size={20}
              className="ml-3 transition-transform group-hover:translate-x-1.5"
            />
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center px-10 py-5 rounded-2xl font-bold transition-all glass-chip text-slate-100 hover:-translate-y-1 hover:border-cyan-400/70"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 flex flex-col items-center gap-2 float-soft">
        <span className="scroll-indicator text-[10px] font-bold text-slate-400 uppercase">
          Scroll
        </span>
        <a href="#about">
          <ChevronDown size={28} className="text-slate-400" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
