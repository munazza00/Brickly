import React from 'react';
import { Scale, X, ArrowRight, Eye, CheckCircle2 } from 'lucide-react';

export default function CompareDrawer({ comparedProperties, onOpenModal, onRemoveCompare, onClearCompare }) {
  if (comparedProperties.length === 0) return null;

  return (
    <div className="glass-panel animate-fade-in" style={{
      position: 'fixed',
      bottom: '24px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 850,
      width: 'calc(100% - 40px)',
      maxWidth: '750px',
      borderRadius: 'var(--radius-lg)',
      padding: '0.85rem 1.25rem',
      background: 'var(--bg-modal)',
      border: '2px solid var(--accent-gold)',
      boxShadow: 'var(--shadow-lg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1rem'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', overflowX: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-gold)', fontWeight: 800, fontSize: '0.9rem' }}>
          <Scale size={20} /> Comparing {comparedProperties.length} {comparedProperties.length === 1 ? 'home' : 'homes'}:
        </div>

        {comparedProperties.map((prop) => (
          <div key={prop.id} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: 'var(--bg-primary)',
            padding: '0.3rem 0.6rem',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-light)',
            fontSize: '0.8rem',
            fontWeight: 700,
            whiteSpace: 'nowrap'
          }}>
            <img src={prop.images[0]} alt={prop.title} style={{ width: '24px', height: '24px', borderRadius: '4px', objectFit: 'cover' }} />
            <span>{prop.title}</span>
            <X size={14} style={{ cursor: 'pointer', color: 'var(--text-muted)' }} onClick={() => onRemoveCompare(prop.id)} />
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
        <button
          className="btn-primary"
          onClick={onOpenModal}
          style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', whiteSpace: 'nowrap' }}
        >
          Compare side by side <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
