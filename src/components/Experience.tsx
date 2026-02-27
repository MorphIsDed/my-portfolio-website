import React from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const ExperienceItem = ({ role, company, period, description, isWork }: { role: string, company: string, period: string, description: string, isWork?: boolean }) => (
  <div className="relative pl-12 pb-16 last:pb-0 group">
    {/* Timeline line */}
    <div className="absolute left-[1.35rem] top-0 bottom-0 w-px bg-gray-100 group-last:bg-transparent"></div>
    {/* Icon */}
    <div className="absolute left-0 top-0 w-11 h-11 bg-white border border-gray-100 shadow-sm flex items-center justify-center rounded-2xl z-10 text-blue-600 transition-all group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110">
      {isWork ? <Briefcase size={20} /> : <GraduationCap size={20} />}
    </div>
    
    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm group-hover:shadow-md transition-shadow">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
        <h3 className="text-xl font-bold tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors">{role}</h3>
        <div className="flex items-center text-sm font-medium text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
          <Calendar size={14} className="mr-2" />
          {period}
        </div>
      </div>
      <p className="text-lg font-semibold text-gray-700 mb-4">{company}</p>
      <p className="text-gray-600 leading-relaxed text-base max-w-3xl">
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
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-3xl font-bold tracking-tight mb-4 after:content-[''] after:block after:w-16 after:h-1 after:bg-blue-600 after:mt-2">
            My Professional Journey
          </h2>
          <p className="text-gray-600 text-lg">
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
