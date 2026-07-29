import React from 'react';
import { Building2, Sun, Moon, Heart, Scale, PlusCircle, Sparkles, Compass, Layers, LineChart, Globe } from 'lucide-react';
import { TRANSLATIONS } from '../../data/translations';

export default function Header({ 
  theme, 
  onToggleTheme, 
  lang,
  onChangeLang,
  wishlistCount, 
  onOpenWishlist, 
  compareCount, 
  onOpenCompare, 
  onOpenAdvisor,
  onOpenListProperty,
  activeSection,
  onNavigate 
}) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  return (
    <header className="glass-panel" style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      borderBottom: '1px solid var(--border-glass)'
    }}>
      {/* Top Festive Announcement Ticker */}
      <div style={{
        background: 'linear-gradient(90deg, #991b1b 0%, #b45309 50%, #065f46 100%)',
        color: 'white',
        fontSize: '0.8rem',
        fontWeight: 700,
        padding: '0.35rem 1rem',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        letterSpacing: '0.3px'
      }}>
        <span>{t.festiveBanner}</span>
      </div>

      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.85rem 0',
        gap: '1rem'
      }}>
        {/* Brand Logo */}
        <div 
          onClick={() => onNavigate('home')} 
          style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer' }}
        >
          <div style={{
            background: 'var(--grad-gold)',
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0b132b',
            boxShadow: 'var(--shadow-glow-gold)'
          }}>
            <Building2 size={26} strokeWidth={2.5} />
          </div>
          <div>
            <span style={{
              fontSize: '1.45rem',
              fontWeight: 800,
              letterSpacing: '-0.5px',
              background: 'linear-gradient(135deg, var(--text-primary) 30%, var(--accent-gold) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              BRICKLY <span style={{ fontSize: '0.8rem', color: 'var(--accent-emerald-light)' }}>INDIA</span>
            </span>
            <div style={{
              fontSize: '0.65rem',
              fontWeight: 700,
              color: 'var(--accent-gold)',
              letterSpacing: '1px',
              marginTop: '-4px',
              textTransform: 'uppercase'
            }}>
              RERA-Verified Real Estate
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <button 
            onClick={() => onNavigate('properties')} 
            style={{ 
              fontWeight: 600, 
              color: activeSection === 'properties' ? 'var(--accent-gold)' : 'var(--text-primary)',
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.4rem',
              fontSize: '0.92rem'
            }}
          >
            <Compass size={17} /> {t.explore}
          </button>

          <button 
            onClick={() => onNavigate('flashcards')} 
            style={{ 
              fontWeight: 600, 
              color: activeSection === 'flashcards' ? 'var(--accent-gold)' : 'var(--text-primary)',
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.4rem',
              fontSize: '0.92rem'
            }}
          >
            <Layers size={17} /> {t.flashcards}
          </button>

          <button 
            onClick={() => onNavigate('trends')} 
            style={{ 
              fontWeight: 600, 
              color: activeSection === 'trends' ? 'var(--accent-gold)' : 'var(--text-primary)',
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.4rem',
              fontSize: '0.92rem'
            }}
          >
            <LineChart size={17} /> {t.trends}
          </button>

          <button 
            onClick={onOpenAdvisor} 
            style={{ 
              fontWeight: 700, 
              color: 'var(--accent-emerald-light)',
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.4rem',
              fontSize: '0.88rem',
              background: 'rgba(16, 185, 129, 0.12)',
              padding: '0.35rem 0.75rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid rgba(16, 185, 129, 0.3)'
            }}
          >
            <Sparkles size={15} /> {t.advisor}
          </button>
        </nav>

        {/* Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          
          {/* Multilingual Selector */}
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <Globe size={16} style={{ position: 'absolute', left: '8px', color: 'var(--accent-gold)', pointerEvents: 'none' }} />
            <select
              value={lang}
              onChange={(e) => onChangeLang(e.target.value)}
              style={{
                paddingLeft: '1.8rem',
                paddingRight: '0.6rem',
                paddingTop: '0.45rem',
                paddingBottom: '0.45rem',
                fontSize: '0.82rem',
                fontWeight: 700,
                background: 'var(--bg-secondary)',
                borderColor: 'var(--border-light)',
                color: 'var(--text-primary)',
                cursor: 'pointer'
              }}
            >
              <option value="en">English</option>
              <option value="hi">हिन्दी (Hindi)</option>
              <option value="te">తెలుగు (Telugu)</option>
              <option value="ta">தமிழ் (Tamil)</option>
            </select>
          </div>

          {/* Wishlist Button */}
          <button 
            onClick={onOpenWishlist}
            title="Saved Wishlist"
            style={{
              position: 'relative',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-light)',
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: wishlistCount > 0 ? '#ef4444' : 'var(--text-primary)'
            }}
          >
            <Heart size={19} fill={wishlistCount > 0 ? '#ef4444' : 'none'} />
            {wishlistCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-5px',
                right: '-5px',
                background: '#ef4444',
                color: 'white',
                fontSize: '0.7rem',
                fontWeight: 800,
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Compare Button */}
          <button 
            onClick={onOpenCompare}
            title="Compare Properties"
            style={{
              position: 'relative',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-light)',
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: compareCount > 0 ? 'var(--accent-gold)' : 'var(--text-primary)'
            }}
          >
            <Scale size={19} />
            {compareCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-5px',
                right: '-5px',
                background: 'var(--accent-gold)',
                color: '#0b132b',
                fontSize: '0.7rem',
                fontWeight: 800,
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {compareCount}
              </span>
            )}
          </button>

          {/* Theme Switcher */}
          <button 
            onClick={onToggleTheme}
            title="Toggle Theme"
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-light)',
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-gold)'
            }}
          >
            {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          {/* List Property */}
          <button 
            className="btn-primary"
            onClick={onOpenListProperty}
            style={{ padding: '0.55rem 1rem', fontSize: '0.85rem' }}
          >
            <PlusCircle size={17} /> {t.listProperty}
          </button>
        </div>
      </div>
    </header>
  );
}
