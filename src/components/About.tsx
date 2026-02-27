import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about">
      <div className="content-container px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center section-fade">
        <div>
          <h2 className="section-title">A Brief Story of My <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">Journey.</span></h2>
          <div className="space-y-6 text-xl text-slate-200 font-medium leading-relaxed max-w-xl">
            <p>
              I'm a self-taught software engineer with a passion for building clean, user-centric web applications. My journey into development began with a curiosity for how things work on the internet, which quickly evolved into a full-blown career.
            </p>
            <p>
              I specialize in the MERN stack (MongoDB, Express, React, Node.js) but I'm always eager to learn new technologies and frameworks. My goal is to create seamless digital experiences that are not only visually appealing but also highly functional and accessible.
            </p>
          </div>
          <div className="flex items-center gap-14 mt-12 pt-10 border-t border-slate-800/60">
            <div>
              <p className="text-5xl font-black text-gradient mb-2 tracking-tighter text-glow">4+</p>
              <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">
                Years of Exp.
              </p>
            </div>
            <div>
              <p className="text-5xl font-black text-gradient mb-2 tracking-tighter text-glow">50+</p>
              <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">
                Projects Done
              </p>
            </div>
            <div>
              <p className="text-5xl font-black text-gradient mb-2 tracking-tighter text-glow">20+</p>
              <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">
                Satisfied Clients
              </p>
            </div>
          </div>
        </div>
        <div className="relative group section-fade section-fade-delay-md">
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden glass-surface transition-all hover:rotate-2 duration-700">
            {/* Placeholder image */}
            <div className="w-full h-full flex items-center justify-center border border-slate-700/60 rounded-[2.5rem] bg-slate-900/60">
              <p className="text-slate-600 font-black text-4xl uppercase tracking-tighter">
                Your Photo
              </p>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-sky-500/30 -z-10 rounded-full blur-3xl" />
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-fuchsia-500/30 -z-10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default About;
