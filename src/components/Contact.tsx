import React from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const ContactInfo = ({ icon, title, value, href }: { icon: React.ReactNode, title: string, value: string, href?: string }) => (
  <div className="flex items-start gap-6 group">
    <div className="w-14 h-14 bg-white border border-gray-100 shadow-sm flex items-center justify-center rounded-2xl text-blue-600 transition-all group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110">
      {icon}
    </div>
    <div>
      <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">{title}</h4>
      {href ? (
        <a href={href} className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
          {value}
        </a>
      ) : (
        <p className="text-xl font-bold text-gray-900">{value}</p>
      )}
    </div>
  </div>
);

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <div className="mb-12">
              <h2 className="text-4xl font-bold tracking-tight mb-6 after:content-[''] after:block after:w-16 after:h-1 after:bg-blue-600 after:mt-2">
                Let's Build Something <br /><span className="text-blue-600">Amazing</span> Together
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                Whether you have a specific project in mind, a job opportunity, or just want to say hi, I'm always open to new connections and collaborations.
              </p>
            </div>
            
            <div className="space-y-10">
              <ContactInfo 
                icon={<Mail size={24} />} 
                title="Email" 
                value="hello@alexmorgan.dev" 
                href="mailto:hello@alexmorgan.dev"
              />
              <ContactInfo 
                icon={<Phone size={24} />} 
                title="Phone" 
                value="+1 (555) 123-4567" 
                href="tel:+15551234567"
              />
              <ContactInfo 
                icon={<MapPin size={24} />} 
                title="Location" 
                value="New York City, NY" 
              />
            </div>
            
            <div className="mt-16 pt-12 border-t border-gray-100">
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Social Media</p>
              <div className="flex gap-4">
                {[Github, Linkedin, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-xl text-gray-600 hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50/50 p-10 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm relative overflow-hidden">
             {/* Decorative blob */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 opacity-20 -z-10 rounded-full blur-[100px]"></div>
            
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Your Name" 
                    className="w-full px-6 py-4 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/10 focus:border-blue-600 transition-all placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Your Email" 
                    className="w-full px-6 py-4 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/10 focus:border-blue-600 transition-all placeholder:text-gray-400"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-bold text-gray-700 ml-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  placeholder="Subject" 
                  className="w-full px-6 py-4 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/10 focus:border-blue-600 transition-all placeholder:text-gray-400"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-gray-700 ml-1">Message</label>
                <textarea 
                  id="message" 
                  rows={6} 
                  placeholder="Your Message" 
                  className="w-full px-6 py-4 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/10 focus:border-blue-600 transition-all placeholder:text-gray-400 resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-gray-900 text-white font-bold py-5 px-8 rounded-2xl flex items-center justify-center gap-3 hover:bg-blue-600 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-blue-600/20"
              >
                Send Message
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
