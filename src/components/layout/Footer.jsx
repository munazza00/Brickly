import React, { useState } from 'react';
import { Building2, ShieldCheck, Award, Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail('');
    }
  };

  return (
    <footer style={{
      background: 'var(--accent-navy)',
      color: '#ffffff',
      paddingTop: '4rem',
      paddingBottom: '2.5rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      marginTop: '5rem'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3.5rem'
        }}>
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
              <div style={{
                background: 'var(--grad-gold)',
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0b132b'
              }}>
                <Building2 size={24} strokeWidth={2.5} />
              </div>
              <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white', letterSpacing: '-0.5px' }}>
                BRICKLY <span style={{ fontSize: '0.75rem', color: 'var(--accent-gold)' }}>INDIA</span>
              </span>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              Brickly connects home buyers, investors, and renters with RERA-verified properties across India's premier urban centers. Straightforward guidance, clear titles, zero guesswork.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.08)',
                padding: '0.4rem 0.8rem',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.8rem',
                color: 'var(--accent-gold)'
              }}>
                <ShieldCheck size={16} /> RERA Verified
              </div>
              <div style={{
                background: 'rgba(255, 255, 255, 0.08)',
                padding: '0.4rem 0.8rem',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.8rem',
                color: 'var(--accent-emerald-light)'
              }}>
                <Award size={16} /> Title Checked
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.2rem', color: 'var(--accent-gold)' }}>
              Prime Micro-Markets
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '0.92rem', color: '#cbd5e1' }}>
              <li style={{ cursor: 'pointer' }} onClick={() => onNavigate('properties')}>Mumbai — Worli, Bandra & Juhu</li>
              <li style={{ cursor: 'pointer' }} onClick={() => onNavigate('properties')}>Hyderabad — Jubilee Hills & Gachibowli</li>
              <li style={{ cursor: 'pointer' }} onClick={() => onNavigate('properties')}>Bengaluru — Indiranagar & Whitefield</li>
              <li style={{ cursor: 'pointer' }} onClick={() => onNavigate('properties')}>Gurgaon — Golf Course Road & Sector 54</li>
              <li style={{ cursor: 'pointer' }} onClick={() => onNavigate('properties')}>Pune — Baner & Koregaon Park</li>
            </ul>
          </div>

          {/* Smart Tools */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.2rem', color: 'var(--accent-gold)' }}>
              Calculators & Tools
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '0.92rem', color: '#cbd5e1' }}>
              <li style={{ cursor: 'pointer' }} onClick={() => onNavigate('flashcards')}>Festive deals & RERA buyer rights</li>
              <li style={{ cursor: 'pointer' }} onClick={() => onNavigate('trends')}>Historical price per sqft trends</li>
              <li style={{ cursor: 'pointer' }} onClick={() => onNavigate('properties')}>360° Virtual Walkthroughs</li>
              <li style={{ cursor: 'pointer' }} onClick={() => onNavigate('properties')}>Indian EMI & Sec 24B Tax Calculator</li>
              <li style={{ cursor: 'pointer' }} onClick={() => onNavigate('properties')}>Side-by-side property comparison</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.2rem', color: 'var(--accent-gold)' }}>
              Weekly Market Brief
            </h4>
            <p style={{ color: '#94a3b8', fontSize: '0.88rem', marginBottom: '1rem' }}>
              Get our short weekly email with developer concessions, repo rate moves, and new RERA listings. No spam ever.
            </p>
            {subscribed ? (
              <div style={{
                background: 'rgba(16, 185, 129, 0.2)',
                border: '1px solid var(--accent-emerald-light)',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-md)',
                color: 'var(--accent-emerald-light)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.9rem',
                fontWeight: 600
              }}>
                <CheckCircle2 size={18} /> Subscribed! We'll send you the next market brief.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.5rem' }}>
                <input 
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    flex: 1
                  }}
                />
                <button type="submit" className="btn-primary" style={{ padding: '0.75rem 1rem' }}>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          fontSize: '0.85rem',
          color: '#64748b'
        }}>
          <div>
            © 2026 Brickly Real Estate Technologies Pvt Ltd. All rights reserved. RERA Compliant.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', color: '#94a3b8' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>RERA Filings</span>
            <span>Security Guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
