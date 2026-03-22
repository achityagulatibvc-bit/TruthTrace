import React, { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import './LoadingScreen.css';

export default function LoadingScreen({ onComplete }) {
  const [phase, setPhase] = useState('blank'); // blank -> icon -> text -> fadeOut

  useEffect(() => {
    // 1. Initial blank screen for 500ms
    const timer1 = setTimeout(() => {
      setPhase('icon');
    }, 500);

    // 2. Magnifying glass animation for 1500ms
    const timer2 = setTimeout(() => {
      setPhase('text');
    }, 2000);

    // 3. Text visible for 2000ms, then fade out
    const timer3 = setTimeout(() => {
      setPhase('fadeOut');
    }, 4000);

    // 4. Complete and unmount
    const timer4 = setTimeout(() => {
      onComplete();
    }, 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div className={`loading-container ${phase === 'fadeOut' ? 'fade-out' : ''}`}>
      <div className="bg-glow-1"></div>
      <div className="bg-glow-2"></div>
      
      <div className="loading-content">
        {(phase === 'icon' || phase === 'text') && (
          <div className={`search-icon-wrapper ${phase === 'text' ? 'shrink-icon' : 'pulse-icon'}`}>
            <Search className="search-icon" size={64} />
          </div>
        )}
        
        {phase === 'text' && (
          <div className="text-wrapper animate-slide-up">
            <h2 className="text-gradient">Its Fact Check time</h2>
            <div className="typing-indicator mt-4">
              <span></span><span></span><span></span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
