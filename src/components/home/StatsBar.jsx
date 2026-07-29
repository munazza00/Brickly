import React from 'react';
import { DollarSign, ShieldCheck, Smile, MapPin, TrendingUp, Award } from 'lucide-react';

export default function StatsBar() {
  const STATS = [
    {
      icon: DollarSign,
      number: '₹4,800 Cr+',
      label: 'Transactions facilitated',
      sub: 'Verified across 6 major metros'
    },
    {
      icon: ShieldCheck,
      number: '3,200+',
      label: 'RERA-registered listings',
      sub: 'Title-checked by legal teams'
    },
    {
      icon: Smile,
      number: '99.1%',
      label: 'Client satisfaction rate',
      sub: 'Based on 1,400+ buyer reviews'
    },
    {
      icon: MapPin,
      number: '6 Cities',
      label: 'Indian metro hubs covered',
      sub: 'Mumbai, Hyd, Blr, NCR, Pune & Chennai'
    }
  ];

  return (
    <section style={{
      marginTop: '-2rem',
      position: 'relative',
      zIndex: 10
    }}>
      <div className="container">
        <div className="glass-panel" style={{
          borderRadius: 'var(--radius-lg)',
          padding: '2rem 1.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          background: 'var(--bg-glass-card)'
        }}>
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '0.5rem',
                  borderRight: idx < STATS.length - 1 ? '1px solid var(--border-light)' : 'none'
                }}
              >
                <div style={{
                  background: 'var(--grad-card-glow)',
                  width: '54px',
                  height: '54px',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-gold)',
                  border: '1px solid rgba(229, 169, 60, 0.3)',
                  flexShrink: 0
                }}>
                  <Icon size={28} />
                </div>
                <div>
                  <div style={{
                    fontSize: '1.45rem',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.5px',
                    lineHeight: 1.1
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    fontSize: '0.86rem',
                    fontWeight: 700,
                    color: 'var(--accent-gold)',
                    marginTop: '2px'
                  }}>
                    {stat.label}
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)'
                  }}>
                    {stat.sub}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
