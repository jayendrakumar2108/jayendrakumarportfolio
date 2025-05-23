import React from 'react';
import { Mail, Phone, Github, Linkedin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Jayendra Kumar</h3>
            <p className="text-slate-300 mb-4">
              Full Stack Developer specializing in creating responsive and interactive web applications.
            </p>
            <p className="text-slate-300">
              Based in Punjab, India
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Certificates', 'Achievements', 'Education', 'CV'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-slate-300 hover:text-blue-400 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-2" />
                <a 
                  href="mailto:jayendrakumargumpana@gmail.com" 
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  jayendrakumargumpana@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-2" />
                <a 
                  href="tel:+918328291381" 
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  +91-8328291381
                </a>
              </li>
              <li className="flex items-center">
                <Github className="h-5 w-5 text-blue-400 mr-2" />
                <a 
                  href="https://github.com/jayendrakumar2108" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  jayendrakumar2108
                </a>
              </li>
              <li className="flex items-center">
                <Linkedin className="h-5 w-5 text-blue-400 mr-2" />
                <a 
                  href="https://www.linkedin.com/in/jayendrakumar1218" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  jayendrakumar1218
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
            <p className="text-slate-300 mb-4">
              Feel free to reach out for collaborations or just a friendly chat.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/jayendrakumar2108" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 hover:bg-blue-600 rounded-full transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/jayendrakumar1218" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 hover:bg-blue-600 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:jayendrakumargumpana@gmail.com"
                className="p-2 bg-slate-800 hover:bg-blue-600 rounded-full transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="tel:+918328291381"
                className="p-2 bg-slate-800 hover:bg-blue-600 rounded-full transition-colors"
                aria-label="Phone"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Jayendra Kumar. All rights reserved.
          </p>
          
          <button 
            className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;