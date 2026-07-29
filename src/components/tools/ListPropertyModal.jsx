import React, { useState } from 'react';
import { X, PlusCircle, Calculator, CheckCircle2, Building, ShieldCheck, Upload } from 'lucide-react';

export default function ListPropertyModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    title: '',
    location: 'Gachibowli, Hyderabad',
    type: 'Apartment',
    bedrooms: 3,
    sqft: 1800,
    askingPrice: 13500000,
    sellerName: '',
    email: '',
    phone: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  // Instant Valuation Estimate (₹7,500/sqft average across Indian urban tech corridors)
  const estimatedValuation = formData.sqft * 7500;

  const formatPriceLabel = (val) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)} Cr`;
    return `₹${(val / 100000).toFixed(0)} Lakhs`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 1100,
      background: 'rgba(7, 12, 24, 0.9)',
      backdropFilter: 'blur(16px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem'
    }}>
      <div className="glass-panel animate-fade-in" style={{
        width: '100%',
        maxWidth: '680px',
        borderRadius: 'var(--radius-lg)',
        background: 'var(--bg-modal)',
        border: '2px solid var(--accent-gold)',
        boxShadow: 'var(--shadow-lg)',
        overflow: 'hidden'
      }}>
        {/* Header */}
        <div style={{
          padding: '1.25rem 1.5rem',
          background: 'var(--grad-hero)',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <PlusCircle size={22} style={{ color: 'var(--accent-gold)' }} />
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>List Your Property with Brickly</h3>
              <span style={{ fontSize: '0.78rem', color: '#cbd5e1' }}>We'll verify ownership, check titles, and connect you with serious buyers</span>
            </div>
          </div>
          <button onClick={onClose} style={{ color: 'white' }}>
            <X size={22} />
          </button>
        </div>

        {/* Modal Content */}
        <div style={{ padding: '1.75rem' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <div style={{
                background: 'rgba(16, 185, 129, 0.2)',
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-emerald-light)',
                margin: '0 auto 1rem auto'
              }}>
                <CheckCircle2 size={36} />
              </div>
              <h4 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Listing received!
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '480px', margin: '0 auto 1.5rem auto', lineHeight: 1.6 }}>
                Our local listing manager will give you a quick call within 2 hours to confirm details and coordinate a brief site inspection.
              </p>
              <button className="btn-primary" onClick={() => { setSubmitted(false); onClose(); }}>
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              
              {/* Instant Valuation Banner */}
              <div style={{
                background: 'var(--bg-primary)',
                border: '1px solid var(--accent-emerald-light)',
                padding: '1rem',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div>
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--accent-emerald-light)', textTransform: 'uppercase' }}>
                    Estimated Valuation
                  </span>
                  <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                    {formatPriceLabel(estimatedValuation)} <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>based on ₹7,500/sqft avg</span>
                  </div>
                </div>
                <Calculator size={24} style={{ color: 'var(--accent-emerald-light)' }} />
              </div>

              {/* Form Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, display: 'block', marginBottom: '0.3rem' }}>Property Title</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Spacious 3BHK in Kondapur"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    style={{ width: '100%' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, display: 'block', marginBottom: '0.3rem' }}>City / Locality</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Bandra, Gachibowli, Baner..."
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    style={{ width: '100%' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, display: 'block', marginBottom: '0.3rem' }}>Property Type</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    style={{ width: '100%' }}
                  >
                    <option value="Apartment">Apartment</option>
                    <option value="Villa">Independent Villa</option>
                    <option value="Penthouse">Penthouse</option>
                    <option value="PG & Co-Living">PG / Co-Living Suite</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, display: 'block', marginBottom: '0.3rem' }}>Living Area (SqFt)</label>
                  <input
                    type="number"
                    required
                    value={formData.sqft}
                    onChange={(e) => setFormData({ ...formData, sqft: Number(e.target.value) })}
                    style={{ width: '100%' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, display: 'block', marginBottom: '0.3rem' }}>Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.sellerName}
                    onChange={(e) => setFormData({ ...formData, sellerName: e.target.value })}
                    style={{ width: '100%' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, display: 'block', marginBottom: '0.3rem' }}>Contact Phone</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98200 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{ width: '100%' }}
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', padding: '0.8rem', fontSize: '1rem', marginTop: '0.5rem' }}>
                <ShieldCheck size={18} /> Submit for RERA Verification
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
