import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="mb-8 relative">
            <h2 className="text-3xl font-bold tracking-tight mb-4 inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-blue-600 after:mt-2">
              About Me
            </h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I'm a self-taught software engineer with a passion for building clean, user-centric web applications. My journey into development began with a curiosity for how things work on the internet, which quickly evolved into a full-blown career.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I specialize in the MERN stack (MongoDB, Express, React, Node.js) but I'm always eager to learn new technologies and frameworks. My goal is to create seamless digital experiences that are not only visually appealing but also highly functional and accessible.
          </p>
          <div className="flex items-center gap-12 mt-10 border-t border-gray-100 pt-10">
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-1 tracking-tighter">4+</p>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Years of Exp.</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-1 tracking-tighter">50+</p>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Projects Done</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-1 tracking-tighter">20+</p>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Client Reviews</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden shadow-2xl transition-transform hover:-rotate-1 duration-500 group">
             {/* Placeholder image */}
             <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <p className="text-gray-400 font-medium">Your Photo</p>
             </div>
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-50 -z-10 rounded-full blur-2xl"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-50 -z-10 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
