import React from 'react';
import { AGENTS, TESTIMONIALS } from '../../data/mockData';
import { ShieldCheck, Star, Award, Phone, Mail, CheckCircle2, Quote } from 'lucide-react';

export default function TrustSection({ onSelectAgent }) {
  return (
    <section style={{ padding: '5rem 0', background: 'var(--bg-primary)' }}>
      <div className="container">
        
        {/* Section Title */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge-gold" style={{ marginBottom: '0.75rem' }}>
            <ShieldCheck size={15} /> Grounded Transparency & Legal Due-Diligence
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.8rem' }}>
            Real people, real homes, no surprises
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Every listing undergoes RERA verification and title checks by senior local property advisors. We work directly with builders and verified owners so you buy with complete confidence.
          </p>
        </div>

        {/* Verified Agent Directors Sub-section */}
        <div style={{ marginBottom: '4rem' }}>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Award size={22} style={{ color: 'var(--accent-gold)' }} /> Meet your local real estate advisors
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.75rem'
          }}>
            {AGENTS.map((agent) => (
              <div key={agent.id} className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                    <img
                      src={agent.image}
                      alt={agent.name}
                      style={{ width: '70px', height: '70px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--accent-gold)' }}
                    />
                    <div>
                      <span className="badge-verified" style={{ marginBottom: '0.2rem' }}>
                        <ShieldCheck size={11} /> Verified Advisor
                      </span>
                      <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                        {agent.name}
                      </h4>
                      <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                        {agent.title}
                      </span>
                    </div>
                  </div>

                  <div style={{
                    background: 'var(--bg-primary)',
                    padding: '0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    marginBottom: '1rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.85rem'
                  }}>
                    <div>
                      <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem' }}>Track Record</span>
                      <strong style={{ color: 'var(--accent-gold)' }}>{agent.volume}</strong>
                    </div>
                    <div>
                      <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem' }}>Rating</span>
                      <strong style={{ color: 'var(--accent-emerald-light)' }}>★ {agent.rating} ({agent.reviewsCount})</strong>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                    {agent.specialties.map((spec, sIdx) => (
                      <span key={sIdx} style={{
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border-light)',
                        padding: '0.2rem 0.6rem',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.75rem',
                        color: 'var(--text-secondary)'
                      }}>
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <a
                    href={`tel:${agent.phone}`}
                    className="btn-secondary"
                    style={{ flex: 1, padding: '0.55rem', fontSize: '0.82rem' }}
                  >
                    <Phone size={14} /> Call now
                  </a>
                  <a
                    href={`mailto:${agent.email}`}
                    className="btn-primary"
                    style={{ flex: 1, padding: '0.55rem', fontSize: '0.82rem' }}
                  >
                    <Mail size={14} /> Send message
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Testimonials Grid */}
        <div>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Quote size={22} style={{ color: 'var(--accent-gold)' }} /> What buyers and owners say
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.75rem'
          }}>
            {TESTIMONIALS.map((test) => (
              <div key={test.id} className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', gap: '0.2rem', color: '#f59e0b', marginBottom: '0.8rem' }}>
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#f59e0b" />
                    ))}
                  </div>

                  <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                    "{test.comment}"
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingTop: '0.85rem', borderTop: '1px solid var(--border-light)' }}>
                  <img
                    src={test.avatar}
                    alt={test.name}
                    style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <div>
                    <strong style={{ fontSize: '0.92rem', color: 'var(--text-primary)', display: 'block' }}>
                      {test.name}
                    </strong>
                    <span style={{ fontSize: '0.78rem', color: 'var(--accent-gold)' }}>
                      Bought: {test.purchasedProp}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
