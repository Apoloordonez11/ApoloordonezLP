import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CaseStudies from './components/CaseStudies';
import ToolsSection from './components/ToolsSection';
import TheMachine from './components/TheMachine';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-space-950 text-white selection:bg-teal-500/30 selection:text-teal-200">
      <Header />
      <main>
        <Hero />
        <CaseStudies />
        <ToolsSection />
        <TheMachine />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;