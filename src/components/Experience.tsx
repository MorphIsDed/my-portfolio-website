import React from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const ExperienceItem = ({ role, company, period, description, isWork }: { role: string, company: string, period: string, description: string, isWork?: boolean }) => (
  <div className="relative pl-16 pb-20 last:pb-0 group">
    {/* Timeline line */}
    <div className="absolute left-[1.75rem] top-0 bottom-0 w-1 bg-gray-100 group-last:bg-transparent transition-colors group-hover:bg-blue-100"></div>
    {/* Icon */}
    <div className="absolute left-0 top-0 w-14 h-14 bg-white border border-gray-100 shadow-sm flex items-center justify-center rounded-2xl z-10 text-blue-600 transition-all group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110">
      {isWork ? <Briefcase size={24} /> : <GraduationCap size={24} />}
    </div>
    
    <div className="bg-white p-10 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-gray-100 transition-all duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <h3 className="text-2xl font-black tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors">{role}</h3>
        <div className="flex items-center text-xs font-black text-gray-400 bg-gray-50 px-5 py-2 rounded-full border border-gray-100">
          <Calendar size={14} className="mr-2" />
          {period}
        </div>
      </div>
      <p className="text-xl font-bold text-gray-700 mb-6">{company}</p>
      <p className="text-gray-500 leading-relaxed text-lg max-w-4xl font-medium">
        {description}
      </p>
    </div>
  </div>
);

const Experience: React.FC = () => {
  const experiences = [
    {
      role: "Senior Frontend Developer",
      company: "Innovate Tech Solutions",
      period: "Jan 2023 - Present",
      description: "Leading the development of a complex, data-driven dashboard application using React, TypeScript, and Tailwind CSS. Successfully migrated a legacy codebase to a modern architecture, resulting in a 40% improvement in load times and a 25% increase in developer productivity.",
      isWork: true
    },
    {
      role: "Full Stack Developer",
      company: "CloudSync Software",
      period: "June 2020 - Dec 2022",
      description: "Developed and maintained full-stack web applications for various clients. Collaborated closely with designers and product managers to deliver high-quality, user-centric features. Integrated third-party APIs and managed cloud-based infrastructure on AWS.",
      isWork: true
    },
    {
      role: "Junior Web Developer",
      company: "Creative Digital Agency",
      period: "Sept 2018 - May 2020",
      description: "Built responsive and performant websites using HTML, CSS, JavaScript, and React. Worked on several high-profile client projects, contributing to all phases of the development lifecycle, from concept to deployment.",
      isWork: true
    },
    {
      role: "B.S. in Computer Science",
      company: "Metropolis University",
      period: "2014 - 2018",
      description: "Graduated with honors, focusing on web development and software engineering principles. Completed several complex academic projects and held internships in software development.",
      isWork: false
    }
  ];

  return (
    <section id="experience" className="py-32 bg-white overflow-hidden">
      <div className="content-container px-6 max-w-5xl">
        <div className="text-center mb-24">
          <h2 className="section-title">Professional Path.</h2>
          <p className="section-subtitle mx-auto">
            A chronological overview of my career and education, showcasing the skills and experience I've gained over the years.
          </p>
        </div>
        <div className="mt-12">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
