import React from 'react';
import { X, Heart, Trash2, Eye, ShieldCheck } from 'lucide-react';

export default function WishlistDrawer({ isOpen, onClose, wishlistProperties, onSelectProperty, onRemoveWishlist }) {
  if (!isOpen) return null;

  const formatPrice = (p) => {
    return p.displayPrice || (
      p.price >= 10000000 
        ? `₹${(p.price / 10000000).toFixed(2)} Cr` 
        : `₹${(p.price / 100000).toFixed(2)} Lakhs`
    );
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 1100,
      background: 'rgba(7, 12, 24, 0.75)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      justifyContent: 'flex-end'
    }}>
      <div className="animate-fade-in" style={{
        width: '100%',
        maxWidth: '420px',
        height: '100%',
        background: 'var(--bg-modal)',
        borderLeft: '1px solid var(--border-glass)',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 'var(--shadow-lg)'
      }}>
        {/* Drawer Header */}
        <div style={{
          padding: '1.25rem',
          background: 'var(--accent-navy)',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Heart size={22} fill="#ef4444" color="#ef4444" />
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800 }}>Saved Favorites ({wishlistProperties.length})</h3>
          </div>
          <button onClick={onClose} style={{ color: 'white' }}>
            <X size={20} />
          </button>
        </div>

        {/* Drawer Body */}
        <div style={{ flex: 1, padding: '1.25rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {wishlistProperties.length === 0 ? (
            <div style={{ textAlign: 'center', margin: 'auto', color: 'var(--text-muted)' }}>
              <Heart size={48} style={{ opacity: 0.3, marginBottom: '1rem' }} />
              <p style={{ fontWeight: 600 }}>Your Wishlist is currently empty.</p>
              <span style={{ fontSize: '0.82rem' }}>Click the heart icon on any property card to save it here.</span>
            </div>
          ) : (
            wishlistProperties.map((prop) => (
              <div key={prop.id} className="glass-card" style={{ padding: '0.85rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <img src={prop.images[0]} alt={prop.title} style={{ width: '75px', height: '60px', borderRadius: 'var(--radius-sm)', objectFit: 'cover' }} />
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.2 }}>
                    {prop.title}
                  </h4>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--accent-gold)' }}>
                    {formatPrice(prop)}
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  <button
                    onClick={() => {
                      onClose();
                      onSelectProperty(prop);
                    }}
                    style={{ background: 'var(--accent-navy)', color: 'white', padding: '0.35rem', borderRadius: '6px' }}
                  >
                    <Eye size={14} />
                  </button>
                  <button
                    onClick={() => onRemoveWishlist(prop.id)}
                    style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444', padding: '0.35rem', borderRadius: '6px' }}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
