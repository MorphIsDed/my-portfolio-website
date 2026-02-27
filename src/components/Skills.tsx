import React from 'react';
import { Server, Layers, Wrench } from 'lucide-react';

const SkillCategory = ({ title, icon, skills }: { title: string, icon: React.ReactNode, skills: string[] }) => (
  <div className="bg-white p-12 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
    <div className="w-16 h-16 bg-blue-50 flex items-center justify-center rounded-2xl mb-8 text-blue-600 transition-all group-hover:bg-blue-600 group-hover:text-white">
      {icon}
    </div>
    <h3 className="text-2xl font-black mb-8 tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {skills.map(skill => (
        <span key={skill} className="px-5 py-2 bg-gray-50 text-gray-600 text-[13px] font-bold tracking-tight rounded-xl border border-gray-100 hover:bg-white hover:border-blue-200 hover:text-blue-600 transition-all cursor-default">
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
    <section id="skills" className="py-32 bg-gray-50/50">
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
