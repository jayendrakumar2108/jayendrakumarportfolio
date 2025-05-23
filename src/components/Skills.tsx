import React from 'react';
import { Code, Server, Database, Briefcase } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const SkillsSection: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Languages',
      icon: <Code className="h-6 w-6" />,
      skills: ['Python', 'C++', 'SQL', 'JavaScript', 'HTML', 'CSS']
    },
    {
      title: 'Frameworks',
      icon: <Server className="h-6 w-6" />,
      skills: ['React JS', 'Express JS', 'Node.js', 'Bootstrap', 'Tailwind CSS']
    },
    {
      title: 'Tools/Platforms',
      icon: <Database className="h-6 w-6" />,
      skills: ['MySQL', 'MongoDB', 'GitHub', 'VS Code', 'Postman']
    },
    {
      title: 'Soft Skills',
      icon: <Briefcase className="h-6 w-6" />,
      skills: ['Critical Thinking', 'Decision-Making', 'Leadership', 'Planning', 'Adaptive Learning & Agility']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-blue-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="skill-badge"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white dark:bg-slate-900 rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-bold mb-6 text-center text-slate-900 dark:text-white">Skill Proficiency</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {[
              { name: 'React.js', level: 80 },
              { name: 'Node.js', level: 75 },
              { name: 'JavaScript', level: 85 },
              { name: 'HTML & CSS', level: 90 },
              { name: 'MongoDB', level: 70 },
              { name: 'Express.js', level: 75 },
              { name: 'Python', level: 65 },
              { name: 'Tailwind CSS', level: 85 }
            ].map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-slate-800 dark:text-slate-200 font-medium">{skill.name}</span>
                  <span className="text-slate-600 dark:text-slate-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;