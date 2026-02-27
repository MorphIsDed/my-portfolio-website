import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, SunMedium } from 'lucide-react';

interface NavbarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 border-b border-transparent ${
        scrolled
          ? 'bg-slate-900/80 backdrop-blur-xl shadow-sm py-4 border-slate-800/60'
          : 'bg-transparent py-7'
      }`}
    >
      <div className="content-container px-6 flex justify-between items-center">
        <a
          href="#hero"
          className="text-2xl font-black tracking-tighter hover:text-gradient transition-colors flex items-center gap-1"
        >
          <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-base bg-gradient-to-tr from-sky-500 via-fuchsia-500 to-emerald-400 neon-ring">
            A
          </span>
          <span className="text-gradient text-glow">M.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-[13px] font-bold uppercase tracking-[0.25em] text-slate-300 hover:text-gradient transition-colors"
              >
                <span>{link.name}</span>
              </a>
            ))}
          </div>
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={onToggleTheme}
            className="glass-chip w-10 h-10 flex items-center justify-center rounded-full text-slate-100 hover:scale-105 transition-all"
          >
            {theme === 'dark' ? <SunMedium size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden glass-chip w-10 h-10 flex items-center justify-center rounded-full text-slate-100"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-surface border-b border-slate-800/60 py-10 px-6 shadow-xl">
          <div className="flex flex-col space-y-6 text-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xl font-bold hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
