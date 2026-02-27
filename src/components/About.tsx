import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white">
      <div className="content-container px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="section-title">A Brief Story of My <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">Journey.</span></h2>
          <div className="space-y-6 text-xl text-gray-700 font-medium leading-relaxed max-w-xl">
            <p>
              I'm a self-taught software engineer with a passion for building clean, user-centric web applications. My journey into development began with a curiosity for how things work on the internet, which quickly evolved into a full-blown career.
            </p>
            <p>
              I specialize in the MERN stack (MongoDB, Express, React, Node.js) but I'm always eager to learn new technologies and frameworks. My goal is to create seamless digital experiences that are not only visually appealing but also highly functional and accessible.
            </p>
          </div>
          <div className="flex items-center gap-14 mt-12 pt-10 border-t border-gray-100">
            <div>
              <p className="text-5xl font-black text-blue-600 mb-2 tracking-tighter">4+</p>
              <p className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">Years of Exp.</p>
            </div>
            <div>
              <p className="text-5xl font-black text-blue-600 mb-2 tracking-tighter">50+</p>
              <p className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">Projects Done</p>
            </div>
            <div>
              <p className="text-5xl font-black text-blue-600 mb-2 tracking-tighter">20+</p>
              <p className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">Satisfied Clients</p>
            </div>
          </div>
        </div>
        <div className="relative group">
          <div className="aspect-[4/5] bg-gray-100 rounded-[3rem] overflow-hidden shadow-2xl transition-all hover:rotate-2 duration-700 group-hover:shadow-blue-200/50">
             {/* Placeholder image */}
             <div className="w-full h-full flex items-center justify-center bg-gray-50 border-8 border-white rounded-[2.5rem]">
                <p className="text-gray-300 font-black text-4xl uppercase tracking-tighter opacity-30">Your Photo</p>
             </div>
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-100/50 -z-10 rounded-full blur-3xl"></div>
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-blue-50/50 -z-10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
