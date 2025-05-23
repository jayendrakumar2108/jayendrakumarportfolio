import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  verificationLink: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Competitive Programming',
    issuer: 'Cipher Schools',
    date: 'Feb 2025',
    verificationLink: 'https://cipher-other-assets.s3.ap-south-1.amazonaws.com/certificates/TC_bunnyyadav1005%40gmail.com_CS2024-10612'
  },
  {
    id: 2,
    title: 'Cloud Computing Carriers and Certification: First Step',
    issuer: 'Coursera',
    date: 'Feb 2023',
    verificationLink: 'https://www.linkedin.com/learning/certificates/0de81d261a5fb1a0d8e19158860810fe082ac1a580c8be266873e620d9ab0c8d'
  },
  {
    id: 3,
    title: 'Fundamentals of Digital Marketing',
    issuer: 'Google',
    date: 'Nov 2022',
    verificationLink: 'https://grow.google/intl/en_in/?utm_source=redirect&utm_medium=redirect&utm_term=gwg&utm_content=apac&utm_campaign=redirect'
  },
  {
    id: 4,
    title: 'What is Data Science?',
    issuer: 'IBM',
    date: 'June 2024',
    verificationLink: 'https://www.coursera.org/account/accomplishments/certificate/C8TNW9CGBH4J'
  }
];

const CertificatesSection: React.FC = () => {
  return (
    <section id="certificates" className="py-20 bg-blue-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="section-title">Certificates</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((certificate) => (
            <div 
              key={certificate.id} 
              className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <Award className="h-6 w-6" />
                </div>
                <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                  <Calendar size={14} className="mr-1" />
                  <span>{certificate.date}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{certificate.title}</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">Issued by {certificate.issuer}</p>
              
              <a 
                href={certificate.verificationLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 dark:text-blue-400 font-medium"
              >
                Verify Certificate <ExternalLink size={14} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;