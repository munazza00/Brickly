import React, { useState } from 'react';
import { Sparkles, Building, TrendingDown, Flame, BarChart3, RotateCw, CheckCircle2, ArrowRight } from 'lucide-react';

const ICON_MAP = {
  Sparkles: Sparkles,
  Building: Building,
  TrendingDown: TrendingDown,
  Flame: Flame,
  BarChart3: BarChart3
};

export default function FlashCard({ card, onActionClick }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const IconComponent = ICON_MAP[card.icon] || Sparkles;

  return (
    <div 
      style={{
        perspective: '1000px',
        minHeight: '460px',
        height: '460px',
        width: '100%',
        cursor: 'pointer'
      }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          borderRadius: 'var(--radius-lg)'
        }}
      >
        {/* ================= FRONT SIDE ================= */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          transform: 'rotateY(0deg) translateZ(1px)',
          borderRadius: 'var(--radius-lg)',
          background: card.bgGradient,
          border: `1.5px solid ${card.accentColor}`,
          padding: '1.35rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          color: 'white',
          boxShadow: `0 10px 30px ${card.glowColor}`,
          overflow: 'hidden'
        }}>
          {/* Background Glow Effect */}
          <div style={{
            position: 'absolute',
            top: '-30px',
            right: '-30px',
            width: '160px',
            height: '160px',
            borderRadius: '50%',
            background: card.glowColor,
            filter: 'blur(35px)',
            opacity: 0.5,
            pointerEvents: 'none'
          }} />

          {/* Top Header & Title */}
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              background: 'rgba(0, 0, 0, 0.45)',
              backdropFilter: 'blur(4px)',
              border: `1px solid ${card.accentColor}`,
              color: card.accentColor,
              fontSize: '0.72rem',
              fontWeight: 800,
              padding: '0.25rem 0.75rem',
              borderRadius: 'var(--radius-full)',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              marginBottom: '0.75rem'
            }}>
              <IconComponent size={13} /> {card.badge}
            </div>

            <h3 style={{
              fontSize: '1.2rem',
              fontWeight: 800,
              lineHeight: 1.3,
              marginBottom: '0.4rem',
              color: '#ffffff'
            }}>
              {card.title}
            </h3>

            <p style={{
              fontSize: '0.85rem',
              color: '#cbd5e1',
              lineHeight: 1.45
            }}>
              {card.subtitle}
            </p>
          </div>

          {/* Middle Metrics Box */}
          <div style={{
            position: 'relative',
            zIndex: 2,
            background: 'rgba(15, 23, 42, 0.8)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: 'var(--radius-md)',
            padding: '0.85rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.45rem',
            margin: '0.5rem 0'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', alignItems: 'center' }}>
              <span style={{ color: '#94a3b8' }}>Key Highlight:</span>
              <strong style={{ color: card.accentColor }}>{card.frontDetails.roi}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', alignItems: 'center' }}>
              <span style={{ color: '#94a3b8' }}>Estimated Yield:</span>
              <strong style={{ color: 'white' }}>{card.frontDetails.yield}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', alignItems: 'center' }}>
              <span style={{ color: '#94a3b8' }}>Target Region:</span>
              <strong style={{ color: 'white' }}>{card.frontDetails.location}</strong>
            </div>
          </div>

          {/* Bottom Flip Bar */}
          <div style={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '0.65rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.15)',
            fontSize: '0.8rem',
            color: card.accentColor,
            fontWeight: 700
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <RotateCw size={14} /> Click to Flip Card
            </span>
            <ArrowRight size={15} />
          </div>
        </div>

        {/* ================= BACK SIDE ================= */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          transform: 'rotateY(180deg) translateZ(1px)',
          borderRadius: 'var(--radius-lg)',
          background: 'var(--accent-navy)',
          border: `2px solid ${card.accentColor}`,
          padding: '1.35rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          color: 'white',
          boxShadow: `0 10px 30px ${card.glowColor}`,
          overflow: 'hidden'
        }}>
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '0.85rem',
              paddingBottom: '0.4rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.15)'
            }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 800, color: card.accentColor, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Actionable Breakdown
              </span>
              <RotateCw size={15} style={{ color: 'var(--text-muted)' }} />
            </div>

            <p style={{
              fontSize: '0.88rem',
              lineHeight: 1.45,
              color: '#e2e8f0',
              marginBottom: '1rem'
            }}>
              {card.backDetails.summary}
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {card.backDetails.perks.map((perk, pIdx) => (
                <li key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '0.82rem', color: '#cbd5e1', lineHeight: '1.35' }}>
                  <CheckCircle2 size={15} style={{ color: card.accentColor, flexShrink: 0, marginTop: '1px' }} />
                  <span>{perk}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onActionClick(card);
            }}
            className="btn-primary"
            style={{
              width: '100%',
              background: card.accentColor,
              color: '#0b132b',
              fontWeight: 800,
              padding: '0.65rem 1rem',
              fontSize: '0.88rem',
              marginTop: '0.5rem'
            }}
          >
            {card.backDetails.ctaText}
          </button>
        </div>

      </div>
    </div>
  );
}
