import React, { useState } from 'react';
import { Eye, MoveLeft, MoveRight, ZoomIn, ZoomOut, Maximize2, RotateCcw, Compass, Sparkles } from 'lucide-react';

export default function VirtualTour360({ image, title }) {
  const [posX, setPosX] = useState(50); // percentage offset
  const [scale, setScale] = useState(1);
  const [activeHotspot, setActiveHotspot] = useState(null);

  const HOTSPOTS = [
    { id: 'hs-1', label: 'Custom Italian Kitchen', x: 25, y: 45, info: 'Calacatta Marble Island & Sub-Zero Wine Storage' },
    { id: 'hs-2', label: 'Horizon Infinity Pool', x: 72, y: 60, info: 'Heated Saltwater pool with LED hydro jets' },
    { id: 'hs-3', label: 'Panoramic Balcony Deck', x: 50, y: 30, info: 'Unobstructed 180° Water & Skyline views' }
  ];

  const handlePan = (direction) => {
    if (direction === 'left') setPosX((prev) => Math.max(prev - 10, 0));
    if (direction === 'right') setPosX((prev) => Math.min(prev + 10, 100));
  };

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '450px',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      border: '1px solid var(--accent-gold)',
      background: '#070c18',
      boxShadow: 'var(--shadow-lg)'
    }}>
      {/* 360 Background Image with Pan Transform */}
      <div 
        style={{
          width: '140%',
          height: '100%',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: `${posX}% center`,
          transform: `scale(${scale})`,
          transition: 'background-position 0.4s ease-out, transform 0.3s ease',
          position: 'absolute',
          left: '-20%'
        }}
      />

      {/* Dark Vignette Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at center, rgba(0,0,0,0) 40%, rgba(7,12,24,0.7) 100%)',
        pointerEvents: 'none'
      }} />

      {/* Top Banner Tag */}
      <div style={{
        position: 'absolute',
        top: '16px',
        left: '16px',
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        gap: '0.6rem'
      }}>
        <span className="badge-gold" style={{ padding: '0.4rem 0.9rem', fontSize: '0.8rem' }}>
          <Compass size={16} /> 360° Interactive Virtual Tour
        </span>
      </div>

      {/* Hotspots */}
      {HOTSPOTS.map((hs) => (
        <div
          key={hs.id}
          onClick={() => setActiveHotspot(activeHotspot === hs.id ? null : hs.id)}
          style={{
            position: 'absolute',
            top: `${hs.y}%`,
            left: `${hs.x}%`,
            zIndex: 15,
            transform: 'translate(-50%, -50%)',
            cursor: 'pointer'
          }}
        >
          <div style={{
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            background: 'var(--grad-gold)',
            boxShadow: '0 0 20px rgba(245, 158, 11, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0b132b',
            animation: 'pulseGlow 2s infinite'
          }}>
            <Sparkles size={14} />
          </div>

          {/* Hotspot Tooltip */}
          {activeHotspot === hs.id && (
            <div className="glass-card animate-fade-in" style={{
              position: 'absolute',
              bottom: '36px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '220px',
              padding: '0.75rem',
              background: 'rgba(15, 23, 42, 0.95)',
              border: '1px solid var(--accent-gold)',
              fontSize: '0.8rem',
              color: 'white',
              zIndex: 20
            }}>
              <strong style={{ color: 'var(--accent-gold)', display: 'block', marginBottom: '2px' }}>
                {hs.label}
              </strong>
              {hs.info}
            </div>
          )}
        </div>
      ))}

      {/* Navigation & Pan Controls Toolbar */}
      <div style={{
        position: 'absolute',
        bottom: '16px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 20,
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        background: 'rgba(15, 23, 42, 0.85)',
        backdropFilter: 'blur(12px)',
        padding: '0.5rem 1rem',
        borderRadius: 'var(--radius-full)',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <button
          onClick={() => handlePan('left')}
          title="Pan Left"
          style={{ color: 'white', padding: '0.3rem' }}
        >
          <MoveLeft size={20} />
        </button>

        <button
          onClick={() => setPosX(50)}
          title="Center View"
          style={{ color: 'var(--accent-gold)', padding: '0.3rem' }}
        >
          <RotateCcw size={18} />
        </button>

        <button
          onClick={() => handlePan('right')}
          title="Pan Right"
          style={{ color: 'white', padding: '0.3rem' }}
        >
          <MoveRight size={20} />
        </button>

        <span style={{ height: '18px', width: '1px', background: 'rgba(255,255,255,0.2)', margin: '0 0.3rem' }} />

        <button
          onClick={() => setScale(prev => Math.min(prev + 0.15, 1.4))}
          title="Zoom In"
          style={{ color: 'white', padding: '0.3rem' }}
        >
          <ZoomIn size={18} />
        </button>

        <button
          onClick={() => setScale(prev => Math.max(prev - 0.15, 0.85))}
          title="Zoom Out"
          style={{ color: 'white', padding: '0.3rem' }}
        >
          <ZoomOut size={18} />
        </button>
      </div>

    </div>
  );
}
