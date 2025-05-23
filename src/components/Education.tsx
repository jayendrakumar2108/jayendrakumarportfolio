import React from 'react';
import { GraduationCap, School, BookOpen } from 'lucide-react';

interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  score: string;
  duration: string;
  icon: React.ReactNode;
}

const educationData: Education[] = [
  {
    id: 1,
    degree: 'Bachelor of Technology – Computer Science and Engineering',
    institution: 'Lovely Professional University',
    location: 'Punjab, India',
    score: 'CGPA: 7.50',
    duration: 'August 2022 – Present',
    icon: <GraduationCap className="h-6 w-6" />
  },
  {
    id: 2,
    degree: 'Intermediate (12th Grade)',
    institution: 'Sri Chaitanya Junior College',
    location: 'Visakhapatnam, Andhra Pradesh',
    score: 'Percentage: 89.8%',
    duration: 'April 2020 – March 2022',
    icon: <BookOpen className="h-6 w-6" />
  },
  {
    id: 3,
    degree: 'Matriculation (10th Grade)',
    institution: 'Sri Chaitanya Techno School',
    location: 'Visakhapatnam, Andhra Pradesh',
    score: 'Percentage: 99%',
    duration: 'April 2019 – March 2020',
    icon: <School className="h-6 w-6" />
  }
];

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-blue-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="section-title">Education</h2>
        
        <div className="relative mx-auto max-w-3xl">
          {educationData.map((education, index) => (
            <div key={education.id} className="timeline-item">
              <div className="card p-6">
                <div className="flex flex-col md:flex-row md:items-center mb-4">
                  <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4 md:mb-0 md:mr-4">
                    {education.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{education.degree}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{education.institution}, {education.location}</p>
                  </div>
                </div>
                
                <div className="ml-0 md:ml-14">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-blue-600 dark:text-blue-400">{education.score}</span>
                    <span className="text-slate-600 dark:text-slate-400">{education.duration}</span>
                  </div>
                  
                  {/* Progress bar to represent completion */}
                  {index === 0 && (
                    <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-1.5 mb-1">
                      <div 
                        className="bg-blue-600 dark:bg-blue-500 h-1.5 rounded-full"
                        style={{ width: '60%' }}
                      ></div>
                      <p className="text-xs text-right text-slate-600 dark:text-slate-400">60% Completed</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;