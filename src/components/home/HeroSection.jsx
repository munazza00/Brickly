import React, { useState, useEffect } from 'react';
import { Search, MapPin, Home, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { TRANSLATIONS } from '../../data/translations';

const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85',
    title: 'Sea Face Duplex Penthouse, Worli',
    location: 'Worli Sea Face, Mumbai, Maharashtra',
    tag: 'RERA Reg. P51900002891'
  },
  {
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=2000&q=85',
    title: '4BHK Independent Villa, Jubilee Hills',
    location: 'Jubilee Hills, Hyderabad, Telangana',
    tag: 'TS-RERA Reg. P02400003892'
  },
  {
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=85',
    title: '3BHK Apartment, Indiranagar 100ft Road',
    location: 'Indiranagar, Bengaluru, Karnataka',
    tag: 'RERA Reg. PRM/KA/1251/310'
  }
];

export default function HeroSection({ onSearch, onOpenAdvisor, lang = 'en' }) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [purpose, setPurpose] = useState('buy'); // 'buy', 'rent', 'pg'
  const [location, setLocation] = useState('');
  const [bhkType, setBhkType] = useState('All');
  const [priceMax, setPriceMax] = useState(50000000); // ₹5 Cr default

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleExecuteSearch = (e) => {
    e.preventDefault();
    onSearch({ purpose, location, bhkType, priceMax });
  };

  const formatPriceLabel = (val) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)} Cr`;
    return `₹${(val / 100000).toFixed(0)} Lakhs`;
  };

  return (
    <section style={{
      position: 'relative',
      minHeight: '85vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      padding: '3rem 1rem 5rem 1rem'
    }}>
      {/* Background Image Slider */}
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={idx}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: idx === currentSlide ? 1 : 0,
            transition: 'opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: 0,
            transform: idx === currentSlide ? 'scale(1.03)' : 'scale(1)',
            transitionTransform: 'transform 7s ease-out'
          }}
        />
      ))}

      {/* Dark Vignette Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, rgba(7, 12, 24, 0.78) 0%, rgba(11, 19, 43, 0.88) 60%, rgba(7, 12, 24, 0.96) 100%)',
        zIndex: 1
      }} />

      {/* Main Hero Container */}
      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '1000px' }}>
        
        {/* RERA Badge Banner */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
          <div className="badge-gold" style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }}>
            <ShieldCheck size={16} /> Verified RERA listings with title-checked documentation
          </div>
        </div>

        {/* Hero Title */}
        <h1 style={{
          fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
          fontWeight: 800,
          lineHeight: 1.18,
          color: '#ffffff',
          letterSpacing: '-0.5px',
          marginBottom: '1rem',
          textShadow: '0 4px 20px rgba(0,0,0,0.5)'
        }}>
          {t.heroTitle}
        </h1>

        <p style={{
          fontSize: '1.12rem',
          color: '#cbd5e1',
          maxWidth: '740px',
          margin: '0 auto 2.25rem auto',
          lineHeight: 1.6,
          fontWeight: 400
        }}>
          {t.heroSubtitle}
        </p>

        {/* Search Card */}
        <div className="glass-panel" style={{
          borderRadius: 'var(--radius-lg)',
          padding: '1.5rem',
          boxShadow: 'var(--shadow-lg)',
          textAlign: 'left',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          {/* Tabs: Buy / Rent / PG */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div style={{
              display: 'inline-flex',
              background: 'rgba(0, 0, 0, 0.4)',
              padding: '0.25rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(255, 255, 255, 0.12)'
            }}>
              {[
                { id: 'buy', label: t.buy },
                { id: 'rent', label: t.rent },
                { id: 'pg', label: t.pg }
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setPurpose(tab.id)}
                  style={{
                    padding: '0.45rem 1.25rem',
                    borderRadius: 'var(--radius-sm)',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    background: purpose === tab.id ? 'var(--grad-gold)' : 'transparent',
                    color: purpose === tab.id ? '#0b132b' : '#ffffff',
                    boxShadow: purpose === tab.id ? 'var(--shadow-glow-gold)' : 'none'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <button
              onClick={onOpenAdvisor}
              style={{
                color: 'var(--accent-emerald-light)',
                fontWeight: 700,
                fontSize: '0.88rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <Sparkles size={16} /> Not sure where to look? Ask AI
            </button>
          </div>

          {/* Search Inputs */}
          <form onSubmit={handleExecuteSearch} style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            alignItems: 'center'
          }}>
            {/* City / Locality */}
            <div>
              <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-gold)', textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem' }}>
                Locality / City
              </label>
              <div style={{ position: 'relative' }}>
                <MapPin size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--accent-gold)' }} />
                <input
                  type="text"
                  placeholder="e.g. Gachibowli, Bandra, Baner..."
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  style={{
                    paddingLeft: '2.4rem',
                    width: '100%',
                    background: 'rgba(15, 23, 42, 0.75)',
                    borderColor: 'rgba(255, 255, 255, 0.15)',
                    color: 'white'
                  }}
                />
              </div>
            </div>

            {/* BHK / Property Type */}
            <div>
              <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-gold)', textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem' }}>
                Config & Type
              </label>
              <div style={{ position: 'relative' }}>
                <Home size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--accent-gold)' }} />
                <select
                  value={bhkType}
                  onChange={(e) => setBhkType(e.target.value)}
                  style={{
                    paddingLeft: '2.4rem',
                    width: '100%',
                    background: 'rgba(15, 23, 42, 0.75)',
                    borderColor: 'rgba(255, 255, 255, 0.15)',
                    color: 'white'
                  }}
                >
                  <option value="All" style={{ background: '#0f172a' }}>{t.allTypes}</option>
                  <option value="1BHK" style={{ background: '#0f172a' }}>1 BHK Apartment</option>
                  <option value="2BHK" style={{ background: '#0f172a' }}>2 BHK Apartment</option>
                  <option value="3BHK" style={{ background: '#0f172a' }}>3 BHK Apartment</option>
                  <option value="4BHK" style={{ background: '#0f172a' }}>4 BHK Duplex / Penthouse</option>
                  <option value="Villa" style={{ background: '#0f172a' }}>Independent Villa</option>
                </select>
              </div>
            </div>

            {/* Price Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
                  {t.maxPrice}
                </label>
                <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'white' }}>
                  {formatPriceLabel(priceMax)}
                </span>
              </div>
              <input
                type="range"
                min={2500000} // ₹25 L
                max={100000000} // ₹10 Cr
                step={2500000}
                value={priceMax}
                onChange={(e) => setPriceMax(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--accent-gold)', cursor: 'pointer', padding: 0 }}
              />
            </div>

            {/* Submit Button */}
            <div>
              <label style={{ opacity: 0, fontSize: '0.75rem', display: 'block', marginBottom: '0.35rem' }}>Search</label>
              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', padding: '0.75rem 1rem', fontSize: '0.95rem' }}
              >
                <Search size={18} /> {t.searchBtn}
              </button>
            </div>
          </form>
        </div>

        {/* Quick Location Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', marginTop: '1.25rem' }}>
          <span style={{ fontSize: '0.82rem', color: '#94a3b8', fontWeight: 600 }}>Popular areas:</span>
          {['Gachibowli, Hyderabad', 'Bandra West, Mumbai', 'Indiranagar, Bangalore', 'Baner, Pune', 'Golf Course Rd, Gurgaon', 'Dwarka, Delhi'].map((tag, idx) => (
            <button
              key={idx}
              onClick={() => onSearch({ tag })}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                color: '#e2e8f0',
                fontSize: '0.78rem',
                padding: '0.3rem 0.75rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid rgba(255, 255, 255, 0.15)'
              }}
            >
              {tag}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
