import React, { useState } from 'react';
import VirtualTour360 from './VirtualTour360';
import MortgageCalculator from './MortgageCalculator';
import NeighborhoodScorecard from './NeighborhoodScorecard';
import { X, Heart, Scale, ShieldCheck, MapPin, Bed, Bath, Move, Calendar, Car, Phone, Mail, CheckCircle2, Sparkles, Eye, Share2 } from 'lucide-react';

export default function PropertyModal({ 
  property, 
  onClose, 
  isWishlisted, 
  onToggleWishlist, 
  isCompared, 
  onToggleCompare,
  onOpenAgentContact 
}) {
  const [activeTab, setActiveTab] = useState('gallery'); // 'gallery', 'tour360', 'mortgage', 'neighborhood'
  const [selectedImgIdx, setSelectedImgIdx] = useState(0);

  if (!property) return null;

  const displayPrice = property.displayPrice || (
    property.price >= 10000000 
      ? `₹${(property.price / 10000000).toFixed(2)} Cr`
      : `₹${(property.price / 100000).toFixed(2)} Lakhs`
  );

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      background: 'rgba(7, 12, 24, 0.88)',
      backdropFilter: 'blur(16px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem 1rem',
      overflowY: 'auto'
    }}>
      {/* Modal Card Box */}
      <div className="glass-panel animate-fade-in" style={{
        width: '100%',
        maxWidth: '1100px',
        maxHeight: '92vh',
        overflowY: 'auto',
        borderRadius: 'var(--radius-lg)',
        background: 'var(--bg-modal)',
        border: '1px solid var(--accent-gold)',
        boxShadow: 'var(--shadow-lg)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column'
      }}>
        
        {/* Modal Sticky Top Header */}
        <div style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: 'var(--bg-modal)',
          padding: '1rem 1.5rem',
          borderBottom: '1px solid var(--border-light)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
              <span className="badge-gold">
                <Sparkles size={13} /> {property.bhk} {property.type}
              </span>
              {property.isVerified && (
                <span className="badge-verified">
                  <ShieldCheck size={13} /> RERA Verified
                </span>
              )}
            </div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.2 }}>
              {property.title}
            </h2>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <MapPin size={14} style={{ color: 'var(--accent-gold)' }} /> {property.location}
            </div>
          </div>

          {/* Header Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--accent-gold)', marginRight: '1rem' }}>
              {displayPrice}
            </div>

            <button
              onClick={() => onToggleWishlist(property.id)}
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-light)',
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: isWishlisted ? '#ef4444' : 'var(--text-primary)'
              }}
            >
              <Heart size={18} fill={isWishlisted ? '#ef4444' : 'none'} />
            </button>

            <button
              onClick={() => onToggleCompare(property.id)}
              style={{
                background: isCompared ? 'var(--accent-gold)' : 'var(--bg-secondary)',
                border: '1px solid var(--border-light)',
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: isCompared ? '#0b132b' : 'var(--text-primary)'
              }}
            >
              <Scale size={18} />
            </button>

            <button
              onClick={onClose}
              style={{
                background: 'var(--accent-navy)',
                color: 'white',
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Tab Navigation Strip */}
        <div style={{
          display: 'flex',
          gap: '0.5rem',
          padding: '0.75rem 1.5rem',
          background: 'var(--bg-primary)',
          borderBottom: '1px solid var(--border-light)'
        }}>
          {[
            { id: 'gallery', label: 'Photo Gallery' },
            { id: 'tour360', label: '360° Virtual Tour' },
            { id: 'mortgage', label: 'Home Loan & EMI Calculator' },
            { id: 'neighborhood', label: 'Neighborhood Scorecard' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '0.5rem 1.2rem',
                borderRadius: 'var(--radius-sm)',
                fontWeight: 700,
                fontSize: '0.88rem',
                background: activeTab === tab.id ? 'var(--accent-navy)' : 'transparent',
                color: activeTab === tab.id ? 'white' : 'var(--text-secondary)'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Body Content */}
        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Active Tab Showcase */}
          {activeTab === 'gallery' && (
            <div>
              {/* Main Photo Lightbox */}
              <div style={{ position: 'relative', height: '420px', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '1rem' }}>
                <img
                  src={property.images[selectedImgIdx]}
                  alt={property.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Thumbnails Strip */}
              <div style={{ display: 'flex', gap: '0.6rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                {property.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Thumbnail ${idx}`}
                    onClick={() => setSelectedImgIdx(idx)}
                    style={{
                      width: '100px',
                      height: '70px',
                      borderRadius: 'var(--radius-sm)',
                      objectFit: 'cover',
                      cursor: 'pointer',
                      border: idx === selectedImgIdx ? '3px solid var(--accent-gold)' : '2px solid transparent',
                      opacity: idx === selectedImgIdx ? 1 : 0.65
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'tour360' && (
            <VirtualTour360 image={property.panoramic360} title={property.title} />
          )}

          {activeTab === 'mortgage' && (
            <MortgageCalculator defaultPrice={property.price} hoaMonthly={property.hoaMonthly} />
          )}

          {activeTab === 'neighborhood' && (
            <NeighborhoodScorecard 
              scores={property.neighborhoodScores} 
              roiScore={property.roiScore}
              rentalYield={property.estimatedRentalYield}
              appreciation={property.fiveYearAppreciation}
            />
          )}

          {/* Key Specifications Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '1rem',
            background: 'var(--bg-primary)',
            padding: '1.25rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-light)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Bed size={22} style={{ color: 'var(--accent-gold)' }} />
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Bedrooms</span>
                <strong style={{ fontSize: '1rem', color: 'var(--text-primary)' }}>{property.bedrooms} Beds ({property.bhk})</strong>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Bath size={22} style={{ color: 'var(--accent-gold)' }} />
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Bathrooms</span>
                <strong style={{ fontSize: '1rem', color: 'var(--text-primary)' }}>{property.bathrooms} Baths</strong>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Move size={22} style={{ color: 'var(--accent-gold)' }} />
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Carpet Area</span>
                <strong style={{ fontSize: '1rem', color: 'var(--text-primary)' }}>{property.sqft.toLocaleString('en-IN')} sqft</strong>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Calendar size={22} style={{ color: 'var(--accent-gold)' }} />
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Year Built / Possession</span>
                <strong style={{ fontSize: '1rem', color: 'var(--text-primary)' }}>{property.yearBuilt}</strong>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Car size={22} style={{ color: 'var(--accent-gold)' }} />
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Parking Slots</span>
                <strong style={{ fontSize: '1rem', color: 'var(--text-primary)' }}>{property.garage} Covered Bays</strong>
              </div>
            </div>
          </div>

          {/* Property Description */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
              Property Overview & Highlights
            </h4>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.98rem' }}>
              {property.description}
            </p>
          </div>

          {/* Amenities & Vastu Details */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.8rem', color: 'var(--text-primary)' }}>
              Amenities & Specifications
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
              {property.amenities.map((item, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'var(--bg-secondary)',
                  padding: '0.6rem 0.9rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-light)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)'
                }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-emerald-light)' }} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Verified Agent Contact Card */}
          <div className="glass-panel" style={{
            padding: '1.5rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--accent-gold)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img
                src={property.agent.avatar}
                alt={property.agent.name}
                style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--accent-gold)' }}
              />
              <div>
                <span className="badge-verified" style={{ marginBottom: '0.2rem' }}>
                  <ShieldCheck size={12} /> Assigned Listing Director
                </span>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  {property.agent.name}
                </h4>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {property.agent.role} • ★ {property.agent.rating} ({property.agent.salesCount} Deals Closed)
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a 
                href={`tel:${property.agent.phone}`}
                className="btn-secondary"
                style={{ padding: '0.7rem 1.1rem', fontSize: '0.9rem' }}
              >
                <Phone size={16} /> Call Agent
              </a>

              <button
                onClick={() => onOpenAgentContact(property)}
                className="btn-primary"
                style={{ padding: '0.7rem 1.4rem', fontSize: '0.9rem' }}
              >
                <Mail size={16} /> Schedule Private Site Visit
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
