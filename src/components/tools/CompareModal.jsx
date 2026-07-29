import React from 'react';
import { X, Scale, Check, Minus, ShieldCheck, Sparkles } from 'lucide-react';

export default function CompareModal({ isOpen, onClose, properties, onSelectProperty }) {
  if (!isOpen || properties.length === 0) return null;

  const formatPrice = (p) => {
    return p.displayPrice || (
      p.price >= 10000000 
        ? `₹${(p.price / 10000000).toFixed(2)} Cr` 
        : `₹${(p.price / 100000).toFixed(2)} Lakhs`
    );
  };

  const METRICS = [
    { label: 'Price', render: (p) => formatPrice(p) },
    { label: 'Price / SqFt', render: (p) => `₹${p.pricePerSqft?.toLocaleString('en-IN') || 0}/sqft` },
    { label: 'BHK & Type', render: (p) => `${p.bhk} ${p.type}` },
    { label: 'Bedrooms', render: (p) => `${p.bedrooms} Beds` },
    { label: 'Bathrooms', render: (p) => `${p.bathrooms} Baths` },
    { label: 'Living Area (SqFt)', render: (p) => `${p.sqft.toLocaleString('en-IN')} sqft` },
    { label: 'Possession / Built', render: (p) => p.yearBuilt },
    { label: 'RERA Registration', render: (p) => p.reraNo || 'Verified' },
    { label: 'ROI Rating', render: (p) => `${p.roiScore} / 10` },
    { label: 'Est. Net Rental Yield', render: (p) => `${p.estimatedRentalYield}% p.a.` },
    { label: 'Safety Score', render: (p) => `${p.neighborhoodScores?.safety || 95}%` },
    { label: 'Vastu Entrance', render: (p) => p.vastuFacing || 'Vastu Verified' },
    { label: 'Furnishing State', render: (p) => p.furnishing }
  ];

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 1150,
      background: 'rgba(7, 12, 24, 0.9)',
      backdropFilter: 'blur(16px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem'
    }}>
      <div className="glass-panel animate-fade-in" style={{
        width: '100%',
        maxWidth: '1100px',
        maxHeight: '90vh',
        overflowY: 'auto',
        borderRadius: 'var(--radius-lg)',
        background: 'var(--bg-modal)',
        border: '2px solid var(--accent-gold)',
        boxShadow: 'var(--shadow-lg)'
      }}>
        {/* Header */}
        <div style={{
          padding: '1.25rem 1.5rem',
          background: 'var(--grad-hero)',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          zIndex: 20
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Scale size={22} style={{ color: 'var(--accent-gold)' }} />
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>
                Side-by-Side Property Comparison Matrix
              </h3>
              <span style={{ fontSize: '0.78rem', color: '#cbd5e1' }}>
                Comparing {properties.length} homes across key metrics
              </span>
            </div>
          </div>

          <button onClick={onClose} style={{ color: 'white' }}>
            <X size={22} />
          </button>
        </div>

        {/* Matrix Table */}
        <div style={{ padding: '1.5rem', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '650px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border-light)' }}>
                <th style={{ padding: '1rem', width: '220px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  Specification / Metric
                </th>
                {properties.map((prop) => (
                  <th key={prop.id} style={{ padding: '1rem', textAlign: 'center', minWidth: '200px' }}>
                    <img src={prop.images[0]} alt={prop.title} style={{ width: '100%', height: '110px', borderRadius: 'var(--radius-sm)', objectFit: 'cover', marginBottom: '0.5rem' }} />
                    <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.2 }}>
                      {prop.title}
                    </div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--accent-gold)', marginTop: '0.2rem' }}>
                      {formatPrice(prop)}
                    </div>
                    <button
                      className="btn-primary"
                      onClick={() => {
                        onClose();
                        onSelectProperty(prop);
                      }}
                      style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem', marginTop: '0.6rem', width: '100%' }}
                    >
                      View Property
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {METRICS.map((metric, idx) => (
                <tr key={idx} style={{
                  borderBottom: '1px solid var(--border-light)',
                  background: idx % 2 === 0 ? 'var(--bg-primary)' : 'transparent'
                }}>
                  <td style={{ padding: '0.85rem 1rem', fontWeight: 700, fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    {metric.label}
                  </td>
                  {properties.map((prop) => (
                    <td key={prop.id} style={{ padding: '0.85rem 1rem', textAlign: 'center', fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {metric.render(prop)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
