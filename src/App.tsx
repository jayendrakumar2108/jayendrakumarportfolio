import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/About';
import SkillsSection from './components/Skills';
import ProjectsSection from './components/Projects';
import CertificatesSection from './components/Certificates';
import AchievementsSection from './components/Achievements';
import EducationSection from './components/Education';
import CVSection from './components/CV';
import Footer from './components/Footer';
import CursorEffect from './components/CursorEffect';

function App() {
  useEffect(() => {
    // Update page title
    document.title = "Jayendra Kumar | Full Stack Developer";
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200">
      <CursorEffect />
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <AchievementsSection />
        <EducationSection />
        <CVSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;