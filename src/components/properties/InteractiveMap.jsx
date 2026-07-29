import React, { useState } from 'react';
import { MapPin, Navigation, Eye, ShieldCheck, Sparkles, Plus, Minus, Layers } from 'lucide-react';

export default function InteractiveMap({ properties, activeProperty, onSelectProperty }) {
  const [selectedPin, setSelectedPin] = useState(activeProperty || properties[0]);
  const [zoomLevel, setZoomLevel] = useState(1);

  const formatPrice = (prop) => {
    if (!prop) return '';
    return prop.displayPrice || (
      prop.price >= 10000000 
        ? `₹${(prop.price / 10000000).toFixed(2)} Cr` 
        : `₹${(prop.price / 100000).toFixed(0)} L`
    );
  };

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '600px',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      border: '1px solid var(--border-glass)',
      background: '#0a1128',
      boxShadow: 'var(--shadow-lg)'
    }}>
      {/* SVG Map Canvas Grid Background */}
      <svg 
        width="100%" 
        height="100%" 
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.25,
          transform: `scale(${zoomLevel})`,
          transition: 'transform 0.4s ease-out'
        }}
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3b82f6" strokeWidth="0.8" />
          </pattern>
          <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0a1128" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="100%" height="100%" fill="url(#grid)" />
        <circle cx="50%" cy="50%" r="40%" fill="url(#mapGlow)" />

        {/* Decorative Roads / Topo Curves */}
        <path d="M0,150 Q300,100 600,280 T1200,400" fill="none" stroke="rgba(229, 169, 60, 0.4)" strokeWidth="3" strokeDasharray="6 4" />
        <path d="M100,600 Q400,300 800,200 T1200,100" fill="none" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="2.5" />
        <path d="M300,0 Q500,400 900,600" fill="none" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="2" />
      </svg>

      {/* Map Header Overlay Controls */}
      <div style={{
        position: 'absolute',
        top: '16px',
        left: '16px',
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem'
      }}>
        <div className="badge-gold" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
          <Navigation size={16} /> Interactive Property Radar
        </div>
        <div style={{
          background: 'rgba(15, 23, 42, 0.85)',
          backdropFilter: 'blur(8px)',
          padding: '0.4rem 0.8rem',
          borderRadius: 'var(--radius-full)',
          fontSize: '0.8rem',
          color: '#cbd5e1',
          border: '1px solid rgba(255, 255, 255, 0.15)'
        }}>
          {properties.length} Active Pins
        </div>
      </div>

      {/* Zoom Controls */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
      }}>
        <button
          onClick={() => setZoomLevel(prev => Math.min(prev + 0.25, 2))}
          style={{
            background: 'var(--accent-navy)',
            border: '1px solid var(--accent-gold)',
            color: 'white',
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Plus size={18} />
        </button>
        <button
          onClick={() => setZoomLevel(prev => Math.max(prev - 0.25, 0.75))}
          style={{
            background: 'var(--accent-navy)',
            border: '1px solid var(--accent-gold)',
            color: 'white',
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Minus size={18} />
        </button>
      </div>

      {/* Property Map Pins */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        zIndex: 5,
        transform: `scale(${zoomLevel})`,
        transition: 'transform 0.4s ease-out'
      }}>
        {properties.map((prop, idx) => {
          // Calculate stylized coordinates on canvas
          const topPct = 25 + (idx * 14) % 55;
          const leftPct = 20 + (idx * 22) % 65;
          const isSelected = selectedPin?.id === prop.id;

          return (
            <div
              key={prop.id}
              onClick={() => setSelectedPin(prop)}
              style={{
                position: 'absolute',
                top: `${topPct}%`,
                left: `${leftPct}%`,
                transform: 'translate(-50%, -50%)',
                cursor: 'pointer',
                zIndex: isSelected ? 20 : 10,
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
            >
              {/* Pin Pill */}
              <div style={{
                background: isSelected ? 'var(--grad-gold)' : 'var(--accent-navy)',
                color: isSelected ? '#0b132b' : 'white',
                fontWeight: 800,
                fontSize: '0.82rem',
                padding: '0.4rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                border: `2px solid ${isSelected ? 'white' : 'var(--accent-gold)'}`,
                boxShadow: isSelected ? 'var(--shadow-glow-gold)' : '0 4px 12px rgba(0,0,0,0.5)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                transform: isSelected ? 'scale(1.15)' : 'scale(1)'
              }}>
                <MapPin size={15} fill={isSelected ? '#0b132b' : 'var(--accent-gold)'} />
                {formatPrice(prop)}
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Pin Popup Preview Card */}
      {selectedPin && (
        <div className="animate-fade-in glass-card" style={{
          position: 'absolute',
          bottom: '20px',
          left: '20px',
          maxWidth: '340px',
          width: 'calc(100% - 40px)',
          zIndex: 25,
          padding: '1rem',
          background: 'rgba(15, 23, 42, 0.95)',
          border: '1px solid var(--accent-gold)'
        }}>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <img
              src={selectedPin.images[0]}
              alt={selectedPin.title}
              style={{ width: '80px', height: '80px', borderRadius: 'var(--radius-sm)', objectFit: 'cover' }}
            />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
                {selectedPin.bhk} • {selectedPin.neighborhood}
              </div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'white', lineHeight: 1.2, marginBottom: '0.3rem' }}>
                {selectedPin.title}
              </h4>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--accent-emerald-light)' }}>
                {formatPrice(selectedPin)}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.85rem' }}>
            <button
              onClick={() => onSelectProperty(selectedPin)}
              className="btn-primary"
              style={{ flex: 1, padding: '0.45rem', fontSize: '0.82rem' }}
            >
              <Eye size={15} /> View Full Specs & 360°
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
