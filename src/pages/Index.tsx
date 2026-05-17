import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import LoadingScreen from '@/components/LoadingScreen';
import TerminalFrame from '@/components/TerminalFrame';

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* Boot-up loading screen — shown first, fades out */}
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}

      {/* Terminal HUD frame — always visible over everything */}
      <TerminalFrame />

      {/* Main site content */}
      <div
        className="min-h-screen bg-background"
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.5s ease',
        }}
      >
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <Chatbot />
      </div>
    </>
  );
};

export default Index;
