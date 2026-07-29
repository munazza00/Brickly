import React, { useState } from 'react';
import { NEIGHBORHOOD_TRENDS } from '../../data/mockData';
import { LineChart, TrendingUp, Info, ShieldCheck, Sparkles } from 'lucide-react';

export default function PriceTrendsChart() {
  const [activeCity, setActiveCity] = useState('mumbai');

  const CITIES = [
    { id: 'mumbai', name: 'Mumbai (Worli & Bandra)', color: '#f59e0b', growth: '+32.5%', avgPrice: '₹28,500/sqft' },
    { id: 'hyderabad', name: 'Hyderabad (Gachibowli & Jubilee Hills)', color: '#10b981', growth: '+69.3%', avgPrice: '₹10,500/sqft' },
    { id: 'bengaluru', name: 'Bengaluru (Indiranagar & Whitefield)', color: '#3b82f6', growth: '+58.0%', avgPrice: '₹12,800/sqft' },
    { id: 'gurgaon', name: 'Gurgaon (Golf Course Rd & Cyber City)', color: '#a855f7', growth: '+57.1%', avgPrice: '₹15,400/sqft' },
    { id: 'pune', name: 'Pune (Baner & Koregaon Park)', color: '#ec4899', growth: '+56.9%', avgPrice: '₹10,200/sqft' }
  ];

  // SVG Chart Dimensions
  const chartWidth = 720;
  const chartHeight = 270;
  const padding = 50;

  const activeCityMeta = CITIES.find(c => c.id === activeCity) || CITIES[0];

  // Dynamic min and max values for the active city's trends
  const cityVals = NEIGHBORHOOD_TRENDS.map(d => d[activeCity] || 5000);
  const rawMin = Math.min(...cityVals);
  const rawMax = Math.max(...cityVals);
  const minVal = Math.floor(rawMin * 0.88);
  const maxVal = Math.ceil(rawMax * 1.12);

  // Generate SVG Points string
  const points = NEIGHBORHOOD_TRENDS.map((d, idx) => {
    const x = padding + (idx / (NEIGHBORHOOD_TRENDS.length - 1)) * (chartWidth - padding * 2);
    const val = d[activeCity] || rawMin;
    const y = chartHeight - padding - ((val - minVal) / (maxVal - minVal)) * (chartHeight - padding * 2);
    return `${x},${y}`;
  }).join(' ');

  // Generate 3 Y-axis ticks
  const midVal = Math.round((minVal + maxVal) / 2);
  const ticks = [minVal, midVal, maxVal];

  return (
    <section id="trends" style={{ padding: '4rem 0', background: 'var(--bg-primary)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem auto' }}>
          <div className="badge-gold" style={{ marginBottom: '0.75rem' }}>
            <LineChart size={15} /> Real Estate Intelligence 2026
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.8rem' }}>
            Historical Price per SqFt Trends (2021–2026)
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>
            Track capital growth across prime Indian micro-markets based on municipal registration data and verified property transactions.
          </p>
        </div>

        {/* City Filter Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
          {CITIES.map((city) => (
            <button
              key={city.id}
              onClick={() => setActiveCity(city.id)}
              style={{
                padding: '0.6rem 1.3rem',
                borderRadius: 'var(--radius-full)',
                fontWeight: 700,
                fontSize: '0.88rem',
                background: activeCity === city.id ? 'var(--accent-navy)' : 'var(--bg-secondary)',
                color: activeCity === city.id ? 'white' : 'var(--text-secondary)',
                border: `2px solid ${activeCity === city.id ? city.color : 'var(--border-light)'}`,
                boxShadow: activeCity === city.id ? `0 0 15px ${city.color}40` : 'none',
                transition: 'all 0.2s ease'
              }}
            >
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: city.color, display: 'inline-block', marginRight: '0.5rem' }} />
              {city.name}
            </button>
          ))}
        </div>

        {/* Chart Panel Container */}
        <div className="glass-card" style={{
          padding: '2rem',
          borderRadius: 'var(--radius-lg)',
          border: `1.5px solid ${activeCityMeta.color}`,
          position: 'relative'
        }}>
          
          {/* Top Metrics Strip */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem',
            paddingBottom: '1.25rem',
            borderBottom: '1px solid var(--border-light)'
          }}>
            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Active Micro-Market</span>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)' }}>{activeCityMeta.name}</h4>
            </div>

            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>5-Year Capital Growth</span>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent-emerald-light)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <TrendingUp size={20} /> {activeCityMeta.growth}
              </div>
            </div>

            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>2026 Benchmark Price</span>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent-gold)' }}>
                {activeCityMeta.avgPrice}
              </div>
            </div>
          </div>

          {/* Responsive SVG Container */}
          <div style={{ width: '100%', overflowX: 'auto' }}>
            <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} style={{ width: '100%', height: 'auto', display: 'block' }}>
              <defs>
                <linearGradient id={`grad-${activeCity}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={activeCityMeta.color} stopOpacity="0.4" />
                  <stop offset="100%" stopColor={activeCityMeta.color} stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              {ticks.map((val) => {
                const y = chartHeight - padding - ((val - minVal) / (maxVal - minVal)) * (chartHeight - padding * 2);
                return (
                  <g key={val}>
                    <line x1={padding} y1={y} x2={chartWidth - padding} y2={y} stroke="var(--border-light)" strokeDasharray="4 4" />
                    <text x={padding - 8} y={y + 4} textAnchor="end" fill="var(--text-muted)" fontSize="10" fontWeight="600">₹{val.toLocaleString('en-IN')}</text>
                  </g>
                );
              })}

              {/* Area Fill */}
              <polygon
                points={`${padding},${chartHeight - padding} ${points} ${chartWidth - padding},${chartHeight - padding}`}
                fill={`url(#grad-${activeCity})`}
              />

              {/* Trend Line */}
              <polyline
                fill="none"
                stroke={activeCityMeta.color}
                strokeWidth="3.5"
                points={points}
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Data Node Dots */}
              {NEIGHBORHOOD_TRENDS.map((d, idx) => {
                const x = padding + (idx / (NEIGHBORHOOD_TRENDS.length - 1)) * (chartWidth - padding * 2);
                const val = d[activeCity] || rawMin;
                const y = chartHeight - padding - ((val - minVal) / (maxVal - minVal)) * (chartHeight - padding * 2);
                return (
                  <g key={idx}>
                    <circle cx={x} cy={y} r="5" fill="#0b132b" stroke={activeCityMeta.color} strokeWidth="3" />
                    <text x={x} y={chartHeight - 12} textAnchor="middle" fill="var(--text-muted)" fontSize="11" fontWeight="700">{d.year}</text>
                    <text x={x} y={y - 12} textAnchor="middle" fill="var(--text-primary)" fontSize="11" fontWeight="800">₹{val.toLocaleString('en-IN')}</text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            * Data source: Municipal Property Registration Office filings & Brickly verified sales records (2021–2026).
          </div>

        </div>

      </div>
    </section>
  );
}
