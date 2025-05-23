import React from 'react';
import { FileDown } from 'lucide-react';

const CVSection: React.FC = () => {
  return (
    <section id="cv" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">Download My CV</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
            Get a detailed overview of my experience, skills, and achievements in a downloadable format.
          </p>
          
          <a 
            href="https://publuu.com/flip-book/857236/1879230"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <FileDown className="w-5 h-5 mr-2" />
            Download CV
          </a>
          
          <div className="mt-8 p-6 bg-blue-50 dark:bg-slate-800 rounded-xl">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">What's Inside?</h3>
            <ul className="text-left space-y-3 text-slate-700 dark:text-slate-300">
              <li>• Detailed work experience and projects</li>
              <li>• Complete educational background</li>
              <li>• Technical skills and certifications</li>
              <li>• Achievements and leadership roles</li>
              <li>• Contact information and professional links</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVSection;