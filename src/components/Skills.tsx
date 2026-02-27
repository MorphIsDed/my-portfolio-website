import React from 'react';
import { Server, Layers, Wrench } from 'lucide-react';

const SkillCategory = ({ title, icon, skills }: { title: string, icon: React.ReactNode, skills: string[] }) => (
  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-2xl mb-6 text-blue-600">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-6 tracking-tight">{title}</h3>
    <div className="flex flex-wrap gap-2.5">
      {skills.map(skill => (
        <span key={skill} className="px-3.5 py-1.5 bg-gray-50 text-gray-700 text-sm font-medium rounded-full border border-gray-100 hover:bg-white hover:border-blue-100 hover:text-blue-600 transition-colors">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills: React.FC = () => {
  const categories = [
    {
      title: "Frontend Development",
      icon: <Layers size={24} />,
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "Framer Motion", "JavaScript", "HTML5/CSS3"]
    },
    {
      title: "Backend Development",
      icon: <Server size={24} />,
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma", "REST APIs", "GraphQL", "Firebase"]
    },
    {
      title: "DevOps & Tools",
      icon: <Wrench size={24} />,
      skills: ["Git", "Docker", "AWS", "Vercel", "Jest", "Postman", "Linux", "CI/CD"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4 after:content-[''] after:block after:w-16 after:h-1 after:bg-blue-600 after:mt-2">
            Technical Stack
          </h2>
          <p className="text-gray-600 max-w-2xl text-lg">
            I've built a diverse set of technical skills throughout my career, focusing on modern web technologies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <SkillCategory key={index} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
