import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';
import HeroSection from './components/HeroSection';
import FeatureCards from './components/FeatureCards';
import GraphWidgetMockup from './components/GraphWidgetMockup';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Determine initial theme based on system preference or default to dark
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const initialTheme = prefersLight ? 'light' : 'dark';
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <>
      <div className="bg-glow-1"></div>
      <div className="bg-glow-2"></div>
      
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      
      <div className={`app-content ${!loading ? 'visible' : 'hidden'}`}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        
        <main>
          <HeroSection />
          <FeatureCards />
          <GraphWidgetMockup />
        </main>
        
        <Footer />
      </div>
    </>
  );
}

export default App;
