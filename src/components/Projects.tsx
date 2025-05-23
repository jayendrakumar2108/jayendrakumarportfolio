import React, { useState } from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  dateRange: string;
  description: string;
  contributions: string[];
  technologies: string[];
  githubLink: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Good Food – Online Food Delivery Platform',
    dateRange: 'Mar 2025 – Apr 2025',
    description: 'Developed a full-stack food ordering platform with real-time updates and secure transaction flows.',
    contributions: [
      'Engineered dynamic cart and menu features with real-time React state management',
      'Designed secure user authentication and order processing system using Node.js and Express',
      'Integrated payment gateway and improved overall system reliability',
      'Developed a responsive UI with Tailwind CSS and ShadCN, increasing user engagement by 40%'
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'ShadCN'],
    githubLink: 'https://github.com/jayendrakumar2108/restaurent-website',
    image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    title: 'TaskMaster – To-Do List Application',
    dateRange: 'Sep 2024 – Nov 2024',
    description: 'Built a full-stack MERN To-Do List app to manage tasks, reminders, and productivity tracking.',
    contributions: [
      'Developed user authentication and CRUD functionalities for personalized task lists',
      'Designed RESTful API endpoints using Express.js and integrated MongoDB for efficient storage',
      'Built a responsive and intuitive UI using React, Tailwind CSS, and ShadCN',
      'Ensured smooth UX with real-time state updates and modular components'
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'ShadCN'],
    githubLink: 'https://github.com/jayendrakumar2108/tour-and-travel',
    image: 'https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    title: 'Spotify Clone – Music Streaming Web App',
    dateRange: 'Jan 2025 – Feb 2025',
    description: 'Built a fully responsive clone of Spotify with dynamic audio streaming and playlist management.',
    contributions: [
      'Developed the front-end using React and Tailwind CSS to replicate Spotify\'s UI/UX',
      'Integrated real-time music streaming functionality and playlist features',
      'Implemented user authentication and media controls with React Context API',
      'Connected with backend services for song metadata and playback history management'
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'ShadCN', 'HTML5 Audio API'],
    githubLink: 'https://github.com/jayendrakumar2108/spotify_clone',
    image: 'https://images.pexels.com/photos/2651794/pexels-photo-2651794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const ProjectsSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
  const toggleProject = (id: number) => {
    setActiveProject(activeProject === id ? null : id);
  };
  
  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="section-title">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="card overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <div className="flex items-center text-sm mb-1">
                      <Calendar size={14} className="mr-1" />
                      <span>{project.dateRange}</span>
                    </div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-slate-700 dark:text-slate-300 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <button 
                    className="text-blue-600 dark:text-blue-400 font-medium flex items-center"
                    onClick={() => toggleProject(project.id)}
                  >
                    {activeProject === project.id ? 'Hide Details' : 'Show Details'}
                  </button>
                  
                  {activeProject === project.id && (
                    <div className="mt-4 animate-fade-in">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Key Contributions:</h4>
                      <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 mb-4">
                        {project.contributions.map((contribution, index) => (
                          <li key={index} className="mb-1">{contribution}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="text-xs font-medium px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                >
                  <Github size={18} className="mr-2" /> View on GitHub
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;