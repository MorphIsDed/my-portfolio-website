import React from 'react';
import { Server, Layers, Wrench } from 'lucide-react';

const SkillCategory = ({ title, icon, skills }: { title: string, icon: React.ReactNode, skills: string[] }) => (
  <div className="glass-surface p-12 rounded-[2.5rem] border border-slate-800/60 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group section-fade">
    <div className="w-16 h-16 glass-chip flex items-center justify-center rounded-2xl mb-8 text-sky-300 transition-all group-hover:text-slate-50">
      {icon}
    </div>
    <h3 className="text-2xl font-black mb-8 tracking-tight text-slate-50 group-hover:text-gradient transition-colors">
      {title}
    </h3>
    <div className="flex flex-wrap gap-3">
      {skills.map(skill => (
        <span
          key={skill}
          className="px-5 py-2 bg-slate-900/60 text-slate-200 text-[13px] font-bold tracking-tight rounded-xl border border-slate-700/70 hover:border-cyan-400/70 hover:text-cyan-300 transition-all cursor-default"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills: React.FC = () => {
  const categories = [
    {
      title: "Frontend Stack",
      icon: <Layers size={28} />,
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "Framer Motion", "JavaScript", "HTML5/CSS3"]
    },
    {
      title: "Backend Core",
      icon: <Server size={28} />,
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma", "REST APIs", "GraphQL", "Firebase"]
    },
    {
      title: "DevOps & Tools",
      icon: <Wrench size={28} />,
      skills: ["Git", "Docker", "AWS", "Vercel", "Jest", "Postman", "Linux", "CI/CD"]
    }
  ];

  return (
    <section id="skills" className="py-32">
      <div className="content-container px-6">
        <div className="text-center mb-24">
          <h2 className="section-title">Technical Expertise.</h2>
          <p className="section-subtitle mx-auto">
            I've built a diverse set of technical skills throughout my career, focusing on modern web technologies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {categories.map((cat, index) => (
            <SkillCategory key={index} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
