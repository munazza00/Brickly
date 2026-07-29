import React, { useState } from 'react';
import { Heart, Scale, Bed, Bath, Move, ShieldCheck, Sparkles, MapPin, Eye, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function PropertyCard({ 
  property, 
  onSelectProperty, 
  isWishlisted, 
  onToggleWishlist, 
  isCompared, 
  onToggleCompare 
}) {
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  return (
    <div className="glass-card" style={{
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      position: 'relative',
      border: '1px solid var(--border-light)'
    }}>
      {/* Property Image Header with Badges */}
      <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
        <img
          src={property.images[currentImgIdx] || property.images[0]}
          alt={property.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />

        {/* Dark Vignette Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.65) 100%)',
          pointerEvents: 'none'
        }} />

        {/* Top Badges */}
        <div style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          right: '12px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 2
        }}>
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
            {property.reraNo && (
              <span className="badge-verified" title={`RERA No: ${property.reraNo}`}>
                <ShieldCheck size={13} /> RERA: {property.reraNo}
              </span>
            )}
            {property.isHotDeal && (
              <span className="badge-gold">
                <Sparkles size={12} /> Popular
              </span>
            )}
          </div>

          {/* Quick Wishlist & Compare Buttons */}
          <div style={{ display: 'flex', gap: '0.4rem' }}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleWishlist(property.id);
              }}
              title="Add to Wishlist"
              style={{
                background: 'rgba(0, 0, 0, 0.6)',
                backdropFilter: 'blur(8px)',
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: isWishlisted ? '#ef4444' : '#ffffff',
                border: '1px solid rgba(255,255,255,0.2)'
              }}
            >
              <Heart size={18} fill={isWishlisted ? '#ef4444' : 'none'} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleCompare(property.id);
              }}
              title="Compare Property"
              style={{
                background: isCompared ? 'var(--accent-gold)' : 'rgba(0, 0, 0, 0.6)',
                backdropFilter: 'blur(8px)',
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: isCompared ? '#0b132b' : '#ffffff',
                border: '1px solid rgba(255,255,255,0.2)'
              }}
            >
              <Scale size={18} />
            </button>
          </div>
        </div>

        {/* Bottom Image Dots */}
        {property.images.length > 1 && (
          <div style={{
            position: 'absolute',
            bottom: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '4px',
            zIndex: 2
          }}>
            {property.images.slice(0, 4).map((_, idx) => (
              <span
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImgIdx(idx);
                }}
                style={{
                  width: idx === currentImgIdx ? '16px' : '6px',
                  height: '6px',
                  borderRadius: '3px',
                  background: idx === currentImgIdx ? 'var(--accent-gold)' : 'rgba(255,255,255,0.6)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              />
            ))}
          </div>
        )}

        {/* Purpose Tag */}
        <span style={{
          position: 'absolute',
          bottom: '12px',
          left: '12px',
          background: property.purpose === 'buy' ? 'var(--accent-navy)' : property.purpose === 'rent' ? 'var(--accent-emerald)' : '#9333ea',
          color: 'white',
          fontSize: '0.75rem',
          fontWeight: 800,
          textTransform: 'uppercase',
          padding: '0.2rem 0.6rem',
          borderRadius: '4px',
          letterSpacing: '0.5px'
        }}>
          {property.purpose === 'buy' ? 'For Sale' : property.purpose === 'rent' ? 'For Rent' : 'PG & Co-Living'}
        </span>
      </div>

      {/* Body Details */}
      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        
        {/* Price & ROI */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.4rem' }}>
          <div style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--accent-gold)' }}>
            {property.displayPrice}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-emerald-light)' }}>
            <TrendingUp size={14} /> ROI {property.roiScore}/10
          </div>
        </div>

        {/* Title */}
        <h3 
          onClick={() => onSelectProperty(property)}
          style={{
            fontSize: '1.08rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            lineHeight: 1.3,
            marginBottom: '0.25rem',
            cursor: 'pointer'
          }}
        >
          {property.title}
        </h3>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--text-muted)', fontSize: '0.84rem', marginBottom: '0.75rem' }}>
          <MapPin size={14} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
          <span style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{property.location}</span>
        </div>

        {/* Vastu & Furnishing Tags Strip */}
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '0.85rem' }}>
          {property.vastuCompliant && (
            <span style={{
              background: 'rgba(16, 185, 129, 0.15)',
              color: 'var(--accent-emerald-light)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              fontSize: '0.72rem',
              fontWeight: 700,
              padding: '0.15rem 0.5rem',
              borderRadius: '4px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.25rem'
            }}>
              <CheckCircle2 size={12} /> Vastu Verified
            </span>
          )}
          <span style={{
            background: 'var(--bg-primary)',
            color: 'var(--text-secondary)',
            border: '1px solid var(--border-light)',
            fontSize: '0.72rem',
            fontWeight: 600,
            padding: '0.15rem 0.5rem',
            borderRadius: '4px'
          }}>
            {property.furnishing}
          </span>
        </div>

        {/* Specs Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '0.5rem',
          background: 'var(--bg-primary)',
          padding: '0.75rem',
          borderRadius: 'var(--radius-sm)',
          marginBottom: '1.25rem',
          fontSize: '0.82rem',
          fontWeight: 600,
          color: 'var(--text-secondary)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Bed size={15} style={{ color: 'var(--accent-gold)' }} />
            <span>{property.bhk}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Bath size={15} style={{ color: 'var(--accent-gold)' }} />
            <span>{property.bathrooms} Baths</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Move size={15} style={{ color: 'var(--accent-gold)' }} />
            <span>{property.sqft.toLocaleString()} sqft</span>
          </div>
        </div>

        {/* Footer Action */}
        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-light)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <img 
              src={property.agent.avatar} 
              alt={property.agent.name} 
              style={{ width: '26px', height: '26px', borderRadius: '50%', objectFit: 'cover' }}
            />
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>
              {property.agent.name.split(' ')[0]}
            </span>
          </div>

          <button
            onClick={() => onSelectProperty(property)}
            className="btn-primary"
            style={{ padding: '0.45rem 0.85rem', fontSize: '0.82rem', borderRadius: 'var(--radius-sm)' }}
          >
            <Eye size={15} /> View details
          </button>
        </div>

      </div>
    </div>
  );
}
