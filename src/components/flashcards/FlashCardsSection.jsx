import React, { useState } from 'react';
import FlashCard from './FlashCard';
import { FLASH_CARDS } from '../../data/mockData';
import { Layers, Sparkles, Flame, Lightbulb, BarChart3, HelpCircle } from 'lucide-react';

export default function FlashCardsSection({ onCardAction }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredCards = activeCategory === 'all' 
    ? FLASH_CARDS 
    : FLASH_CARDS.filter(c => c.category === activeCategory);

  return (
    <section style={{ padding: '4rem 0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem auto' }}>
          <div className="badge-gold" style={{ marginBottom: '0.75rem' }}>
            <Layers size={15} /> Brickly Interactive Knowledge Cards
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: '0.8rem',
            color: 'var(--text-primary)'
          }}>
            Smart Flash Cards for <br />
            <span style={{
              background: 'linear-gradient(135deg, var(--accent-gold) 0%, var(--accent-emerald-light) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Deals, Strategies & Market Insights
            </span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Click or hover on any flash card to flip it and reveal off-market price drops, mortgage financing hacks, and high-yield investment data.
          </p>
        </div>

        {/* Category Tabs */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '0.75rem',
          marginBottom: '3rem'
        }}>
          {[
            { id: 'all', label: 'All Flash Cards', icon: Layers },
            { id: 'deals', label: 'Hot Property Deals', icon: Flame },
            { id: 'tips', label: 'Buyer & Seller Tips', icon: Lightbulb },
            { id: 'insights', label: 'Market Insights 2026', icon: BarChart3 }
          ].map((cat) => {
            const Icon = cat.icon;
            const isSel = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '0.65rem 1.4rem',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: isSel ? 'var(--accent-navy)' : 'var(--bg-secondary)',
                  color: isSel ? 'white' : 'var(--text-secondary)',
                  border: `1.5px solid ${isSel ? 'var(--accent-gold)' : 'var(--border-light)'}`,
                  boxShadow: isSel ? 'var(--shadow-glow-gold)' : 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                <Icon size={16} style={{ color: isSel ? 'var(--accent-gold)' : 'var(--text-muted)' }} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Flash Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {filteredCards.map((card) => (
            <FlashCard 
              key={card.id} 
              card={card} 
              onActionClick={onCardAction} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}
