import React from 'react';
import { ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ 
      borderTop: '1px solid var(--glass-border)', 
      padding: '40px 0',
      marginTop: '60px',
      background: 'var(--glass-bg)',
      backdropFilter: 'blur(10px)'
    }}>
      <div className="container flex-between" style={{ flexWrap: 'wrap', gap: '20px' }}>
        <div className="flex-center" style={{ gap: '8px' }}>
          <ShieldCheck color="var(--primary)" size={24} />
          <span style={{ fontWeight: 700, fontSize: '1.2rem' }}>TruthTrace</span>
        </div>
        
        <div className="flex-center text-muted" style={{ gap: '5px', fontSize: '0.9rem' }}>
          Built with <Heart size={14} color="#ff4d85" style={{ fill: '#ff4d85' }} /> for the IIT Delhi Hackathon
        </div>

        <div className="footer-links flex-center" style={{ gap: '20px', fontSize: '0.9rem' }}>
          <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Privacy</a>
          <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Terms</a>
          <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>API Documentation</a>
        </div>
      </div>
    </footer>
  );
}
