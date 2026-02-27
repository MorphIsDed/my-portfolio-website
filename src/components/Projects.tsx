import React from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ title, category, description, tags, link, github }: { title: string, category: string, description: string, tags: string[], link?: string, github?: string }) => (
  <div className="group bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
    <div className="relative aspect-video bg-gray-100 overflow-hidden">
      <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
      <div className="w-full h-full flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-700">
        <p className="text-sm font-medium">Project Preview</p>
      </div>
      <div className="absolute top-6 right-6 flex gap-2">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/90 backdrop-blur shadow-sm flex items-center justify-center rounded-full text-gray-900 hover:bg-blue-600 hover:text-white transition-all transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-300">
            <Github size={18} />
          </a>
        )}
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/90 backdrop-blur shadow-sm flex items-center justify-center rounded-full text-gray-900 hover:bg-blue-600 hover:text-white transition-all transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-300 delay-75">
            <ExternalLink size={18} />
          </a>
        )}
      </div>
    </div>
    
    <div className="p-10">
      <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">{category}</p>
      <div className="flex justify-between items-start mb-4 group/title">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h3>
        <ArrowUpRight className="text-gray-300 group-hover/title:text-blue-600 transition-colors" size={24} />
      </div>
      <p className="text-gray-600 leading-relaxed mb-8 line-clamp-2">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="px-3 py-1 bg-gray-50 text-gray-600 text-[10px] font-bold uppercase tracking-wider rounded-lg border border-gray-100">
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
    <section id="projects" className="py-24 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-4 after:content-[''] after:block after:w-16 after:h-1 after:bg-blue-600 after:mt-2">
              Featured Projects
            </h2>
            <p className="text-gray-600 max-w-xl text-lg">
              A selection of my recent work, showcasing my skills in web development, design, and problem-solving across various industries.
            </p>
          </div>
          <a href="#" className="font-bold text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-2 group">
            View All Projects
            <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
