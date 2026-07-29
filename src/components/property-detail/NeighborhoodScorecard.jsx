import React from 'react';
import { ShieldCheck, GraduationCap, Bus, Footprints, Utensils, Award, TrendingUp } from 'lucide-react';

export default function NeighborhoodScorecard({ scores, roiScore, rentalYield, appreciation }) {
  const SCORE_ITEMS = [
    { label: 'Neighborhood Safety & Security', score: scores.safety, icon: ShieldCheck, color: '#10b981' },
    { label: 'Top-Rated Public & Private Schools', score: scores.schools, icon: GraduationCap, color: '#3b82f6' },
    { label: 'Public Transit & Highway Access', score: scores.transit, icon: Bus, color: '#f59e0b' },
    { label: 'Walkability & Pedestrian Index', score: scores.walkability, icon: Footprints, color: '#a855f7' },
    { label: 'Dining, Arts & Entertainment', score: scores.dining, icon: Utensils, color: '#ef4444' }
  ];

  return (
    <div className="glass-card" style={{
      padding: '1.5rem',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-light)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
        <div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)' }}>
            Neighborhood & Investment Scorecard
          </h3>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Empirical ratings calculated from 120+ local indicators
          </span>
        </div>
        <div className="badge-gold" style={{ fontSize: '0.85rem' }}>
          Overall Grade: A+ ({scores.overall}/100)
        </div>
      </div>

      {/* ROI & Investment Callout Banner */}
      <div style={{
        background: 'var(--grad-hero)',
        color: 'white',
        padding: '1.2rem',
        borderRadius: 'var(--radius-md)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '1rem',
        marginBottom: '1.5rem',
        boxShadow: 'var(--shadow-md)',
        border: '1px solid var(--accent-gold)'
      }}>
        <div>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
            Investment ROI Score
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'white' }}>
            {roiScore} <span style={{ fontSize: '1rem', color: '#94a3b8' }}>/ 10</span>
          </div>
        </div>

        <div>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-emerald-light)', textTransform: 'uppercase' }}>
            Est. Net Rental Yield
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-emerald-light)' }}>
            {rentalYield}% <span style={{ fontSize: '0.9rem', color: 'white' }}>p.a.</span>
          </div>
        </div>

        <div>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#3b82f6', textTransform: 'uppercase' }}>
            5-Year Appreciation
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#3b82f6' }}>
            {appreciation}
          </div>
        </div>
      </div>

      {/* Neighborhood Fill Bars */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {SCORE_ITEMS.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.88rem', marginBottom: '0.3rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                  <Icon size={16} style={{ color: item.color }} /> {item.label}
                </span>
                <strong style={{ color: 'var(--text-primary)' }}>{item.score}%</strong>
              </div>
              <div style={{
                height: '8px',
                borderRadius: '4px',
                background: 'var(--bg-primary)',
                overflow: 'hidden',
                border: '1px solid var(--border-light)'
              }}>
                <div style={{
                  height: '100%',
                  width: `${item.score}%`,
                  background: item.color,
                  borderRadius: '4px',
                  transition: 'width 1s ease-out'
                }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
