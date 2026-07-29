import React, { useState } from 'react';
import { Sparkles, X, CheckCircle2, ArrowRight, RotateCcw, Building, ShieldCheck, Heart } from 'lucide-react';
import { PROPERTIES } from '../../data/mockData';

export default function AIPropertyAdvisor({ isOpen, onClose, onSelectProperty }) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    goal: 'buy', // 'buy', 'invest', 'rent'
    vibe: 'tech', // 'tech', 'schools', 'peaceful'
    maxBudget: 35000000, // ₹3.5 Cr
    priority: 'roi'
  });

  const [matches, setMatches] = useState(null);

  if (!isOpen) return null;

  const handleGenerateAdvisor = () => {
    // Rank properties based on user answers
    const scored = PROPERTIES.map((p) => {
      let matchScore = 70;
      if (p.purpose === answers.goal) matchScore += 15;
      if (answers.vibe === 'tech' && p.nearbyEssentials?.itPark) matchScore += 12;
      if (answers.vibe === 'schools' && p.neighborhoodScores?.schools >= 94) matchScore += 12;
      if (answers.vibe === 'peaceful' && (p.neighborhood === 'Jubilee Hills' || p.neighborhood === 'Indiranagar' || p.neighborhood === 'Baner' || p.neighborhood === 'Dwarka')) matchScore += 12;
      if (p.price <= answers.maxBudget) matchScore += 10;
      if (p.roiScore >= 9.0) matchScore += 5;

      return {
        ...p,
        matchPct: Math.min(matchScore, 99)
      };
    }).sort((a, b) => b.matchPct - a.matchPct);

    setMatches(scored.slice(0, 3));
    setStep(4);
  };

  const handleReset = () => {
    setStep(1);
    setMatches(null);
  };

  const formatPriceLabel = (val) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)} Cr`;
    return `₹${(val / 100000).toFixed(0)} Lakhs`;
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
        maxWidth: '750px',
        borderRadius: 'var(--radius-lg)',
        background: 'var(--bg-modal)',
        border: '2px solid var(--accent-emerald-light)',
        boxShadow: 'var(--shadow-glow-emerald)',
        overflow: 'hidden'
      }}>
        {/* Top Header */}
        <div style={{
          padding: '1.25rem 1.5rem',
          background: 'var(--grad-hero)',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{
              background: 'rgba(16, 185, 129, 0.25)',
              padding: '0.4rem',
              borderRadius: '8px',
              color: 'var(--accent-emerald-light)'
            }}>
              <Sparkles size={22} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>
                Find Your Right Home
              </h3>
              <span style={{ fontSize: '0.78rem', color: '#cbd5e1' }}>
                Answer 3 quick questions and we'll match you
              </span>
            </div>
          </div>

          <button onClick={onClose} style={{ color: 'white' }}>
            <X size={22} />
          </button>
        </div>

        {/* Modal Wizard Body */}
        <div style={{ padding: '2rem' }}>
          
          {step === 1 && (
            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                What are you looking for?
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                Are you buying a home to live in, investing for rental returns, or looking for a PG / rental?
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                {[
                  { id: 'buy', title: 'Buying a home', desc: 'A place for your family to settle in long-term.' },
                  { id: 'invest', title: 'Investing for returns', desc: 'Looking for high rental yield and 5-year capital appreciation.' },
                  { id: 'rent', title: 'Finding a rental / PG', desc: 'Furnished apartment or executive PG suite near office.' }
                ].map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setAnswers({ ...answers, goal: item.id })}
                    style={{
                      padding: '1.2rem',
                      borderRadius: 'var(--radius-md)',
                      background: answers.goal === item.id ? 'rgba(16, 185, 129, 0.15)' : 'var(--bg-secondary)',
                      border: `2px solid ${answers.goal === item.id ? 'var(--accent-emerald-light)' : 'var(--border-light)'}`,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <strong style={{ display: 'block', fontSize: '1rem', color: answers.goal === item.id ? 'var(--accent-emerald-light)' : 'var(--text-primary)', marginBottom: '0.3rem' }}>
                      {item.title}
                    </strong>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{item.desc}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button className="btn-emerald" onClick={() => setStep(2)}>
                  Next <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                What kind of neighborhood matters most to you?
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                Pick what fits your daily lifestyle and work routine.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                {[
                  { id: 'tech', title: 'Close to IT Corridor & Offices', desc: 'Short commute to HITEC City, Manyata, BKC, Cyber City, or OMR.' },
                  { id: 'schools', title: 'Family-friendly with Good Schools', desc: 'Near top schools (NPS, Oakridge, Dhirubhai Ambani, DPS) & parks.' },
                  { id: 'peaceful', title: 'Peaceful & Green Neighborhood', desc: 'Tree-lined avenues, quiet residential lanes, and lower noise.' }
                ].map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setAnswers({ ...answers, vibe: item.id })}
                    style={{
                      padding: '1.2rem',
                      borderRadius: 'var(--radius-md)',
                      background: answers.vibe === item.id ? 'rgba(16, 185, 129, 0.15)' : 'var(--bg-secondary)',
                      border: `2px solid ${answers.vibe === item.id ? 'var(--accent-emerald-light)' : 'var(--border-light)'}`,
                      cursor: 'pointer'
                    }}
                  >
                    <strong style={{ display: 'block', fontSize: '1rem', color: answers.vibe === item.id ? 'var(--accent-emerald-light)' : 'var(--text-primary)', marginBottom: '0.3rem' }}>
                      {item.title}
                    </strong>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{item.desc}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button className="btn-secondary" onClick={() => setStep(1)}>Back</button>
                <button className="btn-emerald" onClick={() => setStep(3)}>Next <ArrowRight size={18} /></button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                What is your target budget limit?
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                Slide to set your upper budget ceiling.
              </p>

              <div style={{ background: 'var(--bg-primary)', padding: '1.5rem', borderRadius: 'var(--radius-md)', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.8rem' }}>
                  <span>Up to:</span>
                  <span style={{ color: 'var(--accent-gold)' }}>{formatPriceLabel(answers.maxBudget)}</span>
                </div>
                <input
                  type="range"
                  min={4000000} // ₹40 Lakhs
                  max={100000000} // ₹10 Crores
                  step={2500000}
                  value={answers.maxBudget}
                  onChange={(e) => setAnswers({ ...answers, maxBudget: Number(e.target.value) })}
                  style={{ width: '100%', accentColor: 'var(--accent-gold)' }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button className="btn-secondary" onClick={() => setStep(2)}>Back</button>
                <button className="btn-emerald" onClick={handleGenerateAdvisor}>
                  <Sparkles size={18} /> Show matching homes
                </button>
              </div>
            </div>
          )}

          {step === 4 && matches && (
            <div>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <span className="badge-emerald" style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }}>
                  <CheckCircle2 size={16} /> 3 homes matched to your criteria
                </span>
                <h4 style={{ fontSize: '1.3rem', fontWeight: 800, marginTop: '0.5rem', color: 'var(--text-primary)' }}>
                  Here is what fits your search
                </h4>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                {matches.map((prop) => (
                  <div
                    key={prop.id}
                    className="glass-card"
                    style={{
                      padding: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      border: '1px solid var(--accent-emerald-light)'
                    }}
                  >
                    <img
                      src={prop.images[0]}
                      alt={prop.title}
                      style={{ width: '90px', height: '70px', borderRadius: 'var(--radius-sm)', objectFit: 'cover' }}
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--accent-emerald-light)' }}>
                          {prop.matchPct}% Match
                        </span>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>• {prop.bhk} {prop.type}</span>
                      </div>
                      <h5 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {prop.title}
                      </h5>
                      <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--accent-gold)' }}>
                        {prop.displayPrice}
                      </div>
                    </div>
                    <button
                      className="btn-primary"
                      onClick={() => {
                        onClose();
                        onSelectProperty(prop);
                      }}
                      style={{ padding: '0.5rem 0.9rem', fontSize: '0.82rem' }}
                    >
                      View property
                    </button>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                <button className="btn-secondary" onClick={handleReset}>
                  <RotateCcw size={16} /> Change preferences
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
