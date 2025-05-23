import React from 'react';
import { Trophy, Code, Shield, Users, Map, ChefHat, Camera, Brain } from 'lucide-react';

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Hobby {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: 'Finalist – Hackverse 2024',
    description: 'Selected as a finalist in the national-level Hackverse hackathon for presenting an innovative tech solution in the final round.',
    icon: <Trophy className="h-6 w-6" />
  },
  {
    id: 2,
    title: '5-Star Python Coder – HackerRank',
    description: 'Achieved a 5-star rating for consistent performance and excellence in Python programming challenges.',
    icon: <Code className="h-6 w-6" />
  },
  {
    id: 3,
    title: 'NCC Cadet (C Certificate Holder)',
    description: 'Completed the prestigious C Certificate in NCC and participated in a National Army Attachment Camp (Infantry), showcasing discipline, leadership, and national spirit.',
    icon: <Shield className="h-6 w-6" />
  },
  {
    id: 4,
    title: 'Leadership in School',
    description: 'Successfully led and managed a team of 700 students, driving them toward collective success through exceptional leadership and organizational skills.',
    icon: <Users className="h-6 w-6" />
  }
];

const hobbies: Hobby[] = [
  {
    id: 1,
    title: 'Traveling',
    description: 'Exploring new places, cultures, and gaining new perspectives',
    icon: <Map className="h-6 w-6" />
  },
  {
    id: 2,
    title: 'Cooking',
    description: 'Love experimenting with new recipes and creating dishes from different cuisines',
    icon: <ChefHat className="h-6 w-6" />
  },
  {
    id: 3,
    title: 'Photography',
    description: 'Passionate about capturing moments, landscapes, and creativity through a lens',
    icon: <Camera className="h-6 w-6" />
  },
  {
    id: 4,
    title: 'Learning New Tech',
    description: 'Continuously exploring tools, frameworks, and programming languages',
    icon: <Brain className="h-6 w-6" />
  }
];

const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="section-title">Achievements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement) => (
            <div 
              key={achievement.id} 
              className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl shadow-md p-6 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-4">
                  {achievement.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{achievement.title}</h3>
                  <p className="text-slate-700 dark:text-slate-300">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">Hobbies & Interests</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hobbies.map((hobby) => (
              <div 
                key={hobby.id} 
                className="bg-blue-50 dark:bg-slate-800 rounded-xl p-5 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="p-3 rounded-full bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 mb-4 inline-block">
                  {hobby.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">{hobby.title}</h3>
                <p className="text-slate-700 dark:text-slate-300">{hobby.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;