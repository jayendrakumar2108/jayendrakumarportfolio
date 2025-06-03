import React, { useEffect, useRef } from 'react';
import { ChevronDown, Mail, Phone, Github, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  const profileRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!profileRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = profileRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      profileRef.current.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${y * -5}deg) scale3d(1.05, 1.05, 1.05)`;
    };
    
    const handleMouseLeave = () => {
      if (!profileRef.current) return;
      profileRef.current.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) scale3d(1, 1, 1)';
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen pt-20 pb-10 flex flex-col justify-center relative bg-gradient-to-b from-blue-50 to-white dark:from-slate-950 dark:to-slate-900"
    >
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0 animate-slide-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-slate-900 dark:text-white">
              Jayendra <span className="text-blue-600 dark:text-blue-400">Kumar</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-medium mb-6 text-slate-700 dark:text-slate-300">
              Aspiring Full Stack Developer
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
             I specialize in creating responsive and interactive web applications using the MERN stack (MongoDB, Express.js, React, Node.js), focusing on clean, scalable code and user-friendly digital experiences.I build intuitive interfaces that enhance user engagement. On the backend, I ensure robust functionality through RESTful APIs, secure authentication, and efficient database management. 
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="mailto:jayendrakumargumpana@gmail.com" 
                className="btn btn-primary flex items-center gap-2"
              >
                <Mail size={18} /> Get in Touch
              </a>
              <a 
                href="#projects" 
                className="btn btn-outline flex items-center gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Projects
              </a>
            </div>
            
            <div className="flex items-center gap-6">
              <a 
                href="mailto:jayendrakumargumpana@gmail.com" 
                className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                title="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="tel:+918328291381" 
                className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                title="Phone"
              >
                <Phone size={20} />
              </a>
              <a 
                href="https://github.com/jayendrakumar2108" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                title="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/jayendrakumar1218" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="md:w-2/5 animate-slide-in">
            <div className="relative w-[450px] h-[450px] mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 transition-all duration-500 hover:shadow-blue-400/30">
              <img 
                ref={profileRef}
                src="https://res.cloudinary.com/dstbuwkjc/image/upload/v1748746037/profileportfolio_at11tq.jpg"
                alt="Jayendra Kumar" 
                className="w-full h-full object-cover transition-transform duration-300"
                style={{ transition: 'transform 0.2s ease-out' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <a 
          href="#about" 
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-md text-blue-600 dark:text-blue-400"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <ChevronDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;