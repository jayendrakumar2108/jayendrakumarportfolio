import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Github, Linkedin, Mail, Phone } from 'lucide-react';

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Education', href: '#education' },
  { name: 'CV', href: '#cv' },
];

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true' || 
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          JK
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          <button 
            className="p-2 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-gray-200"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://github.com/jayendrakumar2108" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/jayendrakumar1218" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
          
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-lg animate-slide-down">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-md"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  setMobileMenuOpen(false);
                }}
              >
                {link.name}
              </a>
            ))}
            <div className="flex space-x-4 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <a 
                href="https://github.com/jayendrakumar2108" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-md"
              >
                <Github size={20} className="mr-2" /> GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/jayendrakumar1218" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-md"
              >
                <Linkedin size={20} className="mr-2" /> LinkedIn
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;