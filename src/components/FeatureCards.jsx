import React from 'react';
import { BrainCircuit, Share2, Flame, ShieldAlert, BellRing } from 'lucide-react';
import './FeatureCards.css';

const features = [
  {
    icon: <BrainCircuit size={32} />,
    title: 'Fake News Detection',
    description: 'AI-driven analysis to identify false narratives instantly before they gain traction.'
  },
  {
    icon: <Share2 size={32} />,
    title: 'Spread Visualization',
    description: 'Graph networks via TigerGraph showing exactly how info flows from source to platforms.'
  },
  {
    icon: <Flame size={32} style={{ color: '#ff4d4d' }} />,
    title: 'Viral Risk Prediction 🔥',
    description: 'Predict the likelihood of dangerous content going viral using predictive models.'
  },
  {
    icon: <ShieldAlert size={32} />,
    title: 'Source Trust Scoring',
    description: 'Assigns credibility scores to publishers and social profiles to gauge reliability.'
  },
  {
    icon: <BellRing size={32} />,
    title: 'Early Warning Alerts',
    description: 'Get notified immediately when high-risk misinformation triggers thresholds.'
  }
];

export default function FeatureCards() {
  return (
    <section id="features" className="container">
      <div className="section-header text-center mb-10">
        <h2 className="text-gradient">Intelligence Capabilities</h2>
        <p className="subtitle">Everything you need to combat the spread of misinformation.</p>
      </div>
      
      <div className="features-grid">
        {features.map((feat, idx) => (
          <div 
            key={idx} 
            className="feature-card glass-panel"
          >
            <div className="feature-icon-wrapper">
              {feat.icon}
            </div>
            <h3>{feat.title}</h3>
            <p>{feat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
