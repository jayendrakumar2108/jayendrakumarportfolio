import React from 'react';
import { Code, Server, Palette, Database } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              Hello! I'm Jayendra Kumar, a passionate and dedicated Full-Stack Developer with experience building web applications using the MERN stack (MongoDB, Express.js, React, Node.js). I specialize in creating responsive and interactive user interfaces using HTML, CSS, JavaScript, and Tailwind CSS, and I add dynamic functionality with Node.js and Express.js.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              I've worked on real-world projects that demonstrate my ability to design, develop, and deploy full-fledged web applications. My focus is on writing clean, efficient code and building user-friendly digital experiences that solve real problems.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-blue-50 dark:bg-slate-800 p-4 rounded-lg hover-effect">
                <Code className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-3" />
                <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Frontend Development</h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Building responsive UIs with React, HTML, CSS, and JavaScript that provide seamless user experiences.
                </p>
              </div>
              
              <div className="bg-blue-50 dark:bg-slate-800 p-4 rounded-lg hover-effect">
                <Server className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-3" />
                <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Backend Development</h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Creating robust APIs and server-side applications using Node.js and Express.js.
                </p>
              </div>
              
              <div className="bg-blue-50 dark:bg-slate-800 p-4 rounded-lg hover-effect">
                <Palette className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-3" />
                <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">UI/UX Design</h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Crafting intuitive user interfaces with Tailwind CSS and ShadCN for enhanced user experiences.
                </p>
              </div>
              
              <div className="bg-blue-50 dark:bg-slate-800 p-4 rounded-lg hover-effect">
                <Database className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-3" />
                <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Database Management</h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Working with MongoDB and MySQL to design efficient database structures.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-100 to-blue-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-xl shadow-lg hover-effect">
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Professional Summary</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                <p className="text-slate-700 dark:text-slate-300">
                  Bachelor of Technology in Computer Science and Engineering student at Lovely Professional University.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                <p className="text-slate-700 dark:text-slate-300">
                  Proficient in MERN stack development with strong focus on creating user-friendly web applications.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                <p className="text-slate-700 dark:text-slate-300">
                  Experienced in building responsive full-stack applications like food delivery platforms and task management tools.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                <p className="text-slate-700 dark:text-slate-300">
                  Strong problem-solving skills demonstrated through competitive programming achievements.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                <p className="text-slate-700 dark:text-slate-300">
                  Proven leadership abilities through NCC certification and organizing large student teams.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;