import React from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const ContactInfo = ({ icon, title, value, href }: { icon: React.ReactNode, title: string, value: string, href?: string }) => (
  <div className="flex items-start gap-8 group section-fade">
    <div className="w-16 h-16 glass-chip shadow-sm flex items-center justify-center rounded-2xl text-sky-300 transition-all group-hover:scale-110">
      {icon}
    </div>
    <div>
      <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">
        {title}
      </h4>
      {href ? (
        <a href={href} className="text-2xl font-black text-slate-100 hover:text-gradient transition-colors tracking-tight">
          {value}
        </a>
      ) : (
        <p className="text-2xl font-black text-slate-100 tracking-tight">{value}</p>
      )}
    </div>
  </div>
);

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32">
      <div className="content-container px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <div className="mb-16">
              <h2 className="section-title">Let's Build Something <br /><span className="text-blue-600">Amazing</span> Together.</h2>
              <p className="section-subtitle">
                Whether you have a specific project in mind, a job opportunity, or just want to say hi, I'm always open to new connections and collaborations.
              </p>
            </div>
            
            <div className="space-y-12">
              <ContactInfo 
                icon={<Mail size={28} />} 
                title="Email Address" 
                value="hello@alexmorgan.dev" 
                href="mailto:hello@alexmorgan.dev"
              />
              <ContactInfo 
                icon={<Phone size={28} />} 
                title="Phone Number" 
                value="+1 (555) 123-4567" 
                href="tel:+15551234567"
              />
              <ContactInfo 
                icon={<MapPin size={28} />} 
                title="Office Location" 
                value="New York City, NY" 
              />
            </div>
            
            <div className="mt-20 pt-16 border-t border-slate-800/60">
              <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-8">
                Follow Me On Social
              </p>
              <div className="flex gap-5">
                {[Github, Linkedin, Twitter].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-14 h-14 glass-chip flex items-center justify-center rounded-2xl text-slate-300 border border-slate-700/70 hover:text-sky-300 transition-all transform hover:-translate-y-2"
                  >
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="glass-surface p-12 md:p-16 rounded-[3rem] border border-slate-800/60 shadow-sm relative overflow-hidden group section-fade section-fade-delay-md">
             {/* Decorative blob */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/50 opacity-20 -z-10 rounded-full blur-[120px] group-hover:opacity-40 transition-opacity"></div>
            
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-xs font-black text-slate-200 ml-1 uppercase tracking-widest">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe" 
                    className="w-full px-8 py-5 bg-slate-950/40 border border-slate-700/70 rounded-2xl focus:outline-none focus:ring-4 focus:ring-sky-500/30 focus:border-sky-400 transition-all font-medium text-lg placeholder:text-slate-500"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-xs font-black text-slate-200 ml-1 uppercase tracking-widest">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@example.com" 
                    className="w-full px-8 py-5 bg-slate-950/40 border border-slate-700/70 rounded-2xl focus:outline-none focus:ring-4 focus:ring-sky-500/30 focus:border-sky-400 transition-all font-medium text-lg placeholder:text-slate-500"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label htmlFor="subject" className="text-xs font-black text-slate-200 ml-1 uppercase tracking-widest">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  placeholder="Inquiry about new project" 
                    className="w-full px-8 py-5 bg-slate-950/40 border border-slate-700/70 rounded-2xl focus:outline-none focus:ring-4 focus:ring-sky-500/30 focus:border-sky-400 transition-all font-medium text-lg placeholder:text-slate-500"
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="message" className="text-xs font-black text-slate-200 ml-1 uppercase tracking-widest">
                  Message Details
                </label>
                <textarea 
                  id="message" 
                  rows={6} 
                  placeholder="Tell me more about your project..." 
                    className="w-full px-8 py-5 bg-slate-950/40 border border-slate-700/70 rounded-2xl focus:outline-none focus:ring-4 focus:ring-sky-500/30 focus:border-sky-400 transition-all font-medium text-lg placeholder:text-slate-500 resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full glass-chip text-slate-100 font-black py-6 px-10 rounded-2xl flex items-center justify-center gap-4 hover:-translate-y-2 transition-all shadow-2xl hover:shadow-sky-500/40"
              >
                Send Inquiry
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
