import React from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const ContactInfo = ({ icon, title, value, href }: { icon: React.ReactNode, title: string, value: string, href?: string }) => (
  <div className="flex items-start gap-8 group">
    <div className="w-16 h-16 bg-white border border-gray-100 shadow-sm flex items-center justify-center rounded-2xl text-blue-600 transition-all group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110">
      {icon}
    </div>
    <div>
      <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] mb-3">{title}</h4>
      {href ? (
        <a href={href} className="text-2xl font-black text-gray-900 hover:text-blue-600 transition-colors tracking-tight">
          {value}
        </a>
      ) : (
        <p className="text-2xl font-black text-gray-900 tracking-tight">{value}</p>
      )}
    </div>
  </div>
);

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-white">
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
            
            <div className="mt-20 pt-16 border-t border-gray-100">
              <p className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] mb-8">Follow Me On Social</p>
              <div className="flex gap-5">
                {[Github, Linkedin, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-14 h-14 bg-gray-50 flex items-center justify-center rounded-2xl text-gray-400 border border-gray-100 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all transform hover:-translate-y-2">
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50/80 p-12 md:p-16 rounded-[3rem] border border-gray-100 shadow-sm relative overflow-hidden group">
             {/* Decorative blob */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/50 opacity-20 -z-10 rounded-full blur-[120px] group-hover:opacity-40 transition-opacity"></div>
            
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-xs font-black text-gray-700 ml-1 uppercase tracking-widest">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe" 
                    className="w-full px-8 py-5 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600 transition-all font-medium text-lg placeholder:text-gray-300"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-xs font-black text-gray-700 ml-1 uppercase tracking-widest">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@example.com" 
                    className="w-full px-8 py-5 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600 transition-all font-medium text-lg placeholder:text-gray-300"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label htmlFor="subject" className="text-xs font-black text-gray-700 ml-1 uppercase tracking-widest">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  placeholder="Inquiry about new project" 
                  className="w-full px-8 py-5 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600 transition-all font-medium text-lg placeholder:text-gray-300"
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="message" className="text-xs font-black text-gray-700 ml-1 uppercase tracking-widest">Message Details</label>
                <textarea 
                  id="message" 
                  rows={6} 
                  placeholder="Tell me more about your project..." 
                  className="w-full px-8 py-5 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600 transition-all font-medium text-lg placeholder:text-gray-300 resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-gray-900 text-white font-black py-6 px-10 rounded-2xl flex items-center justify-center gap-4 hover:bg-blue-600 transition-all transform hover:-translate-y-2 shadow-2xl hover:shadow-blue-600/40"
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
