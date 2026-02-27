import React from 'react';
import { Github, ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ title, category, description, tags, link, github }: { title: string, category: string, description: string, tags: string[], link?: string, github?: string }) => (
  <div className="group glass-surface rounded-[3rem] border border-slate-800/60 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-sky-500/30 transition-all duration-700 hover:-translate-y-4 section-fade">
    <div className="relative aspect-[16/10] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/25 via-fuchsia-500/20 to-emerald-400/20 opacity-60 group-hover:opacity-90 transition-opacity duration-700" />
      <div className="w-full h-full flex items-center justify-center text-slate-100 font-black text-2xl uppercase tracking-tighter opacity-40 group-hover:scale-110 transition-all duration-700">
        {title}
      </div>
      <div className="absolute top-8 right-8 flex gap-3">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass-chip shadow-sm flex items-center justify-center rounded-2xl text-slate-100 hover:text-sky-300 transition-all transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-500">
            <Github size={20} />
          </a>
        )}
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass-chip shadow-sm flex items-center justify-center rounded-2xl text-slate-100 hover:text-sky-300 transition-all transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-500 delay-100">
            <ArrowUpRight size={20} />
          </a>
        )}
      </div>
    </div>
    
    <div className="p-10 md:p-12">
      <div className="flex items-center gap-3 mb-6">
        <span className="w-2 h-2 bg-sky-400 rounded-full"></span>
        <p className="text-[11px] font-black text-sky-300 uppercase tracking-[0.2em]">
          {category}
        </p>
      </div>
      <h3 className="text-3xl font-black tracking-tight text-slate-50 mb-6 group-hover:text-gradient transition-colors">
        {title}
      </h3>
      <p className="text-slate-300 leading-relaxed text-lg mb-10 font-medium">
        {description}
      </p>
      <div className="flex flex-wrap gap-2.5">
        {tags.map(tag => (
          <span
            key={tag}
            className="px-4 py-1.5 bg-slate-900/60 text-slate-200 text-[11px] font-black uppercase tracking-widest rounded-lg border border-slate-700/70"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  const projects = [
    {
      title: "FinTech Dashboard",
      category: "Web Application",
      description: "A comprehensive financial management dashboard featuring real-time data visualization, automated reporting, and multi-currency support. Built with React, D3.js, and Node.js.",
      tags: ["React", "D3.js", "Node.js", "TypeScript", "PostgreSQL"],
      link: "#",
      github: "#"
    },
    {
      title: "E-Commerce Platform",
      category: "E-Commerce",
      description: "A modern, high-performance e-commerce platform with a focus on seamless user experience, including advanced search, filtering, and a streamlined checkout process.",
      tags: ["Next.js", "Tailwind CSS", "Shopify API", "Stripe"],
      link: "#",
      github: "#"
    },
    {
      title: "Task Management App",
      category: "Productivity Tool",
      description: "A collaborative task management application with real-time updates, kanban boards, and advanced team collaboration features. Built with React and Firebase.",
      tags: ["React", "Firebase", "Redux", "Material UI"],
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-32">
      <div className="content-container px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
          <div>
            <h2 className="section-title">Case Studies.</h2>
            <p className="section-subtitle">
              A selection of my recent work, showcasing my skills in web development, design, and problem-solving.
            </p>
          </div>
          <a href="#" className="font-black text-xs uppercase tracking-[0.2em] text-blue-600 hover:text-blue-700 transition-all flex items-center gap-3 group border-b-2 border-blue-100 pb-2 mb-2">
            View All Work
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
