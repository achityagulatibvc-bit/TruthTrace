import React, { useEffect, useState } from 'react';
import { Moon, Sun, ShieldCheck } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container flex-between nav-content">
        <div className="logo flex-center">
          <ShieldCheck className="logo-icon" size={28} />
          <span className="logo-text">TruthTrace</span>
        </div>

        <div className="nav-links">
          <a href="#features" className="nav-link">Features</a>
          <a href="#demo" className="nav-link">Live Demo</a>
          <a href="#trust" className="nav-link">Trust Score</a>
        </div>

        <div className="nav-actions">
          <button className="theme-toggle flex-center" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
