import React, { useState } from 'react';
import { Search, SlidersHorizontal, MapPin, Grid, Map, RotateCcw, ShieldCheck, Sparkles } from 'lucide-react';

export default function PropertyFilter({ 
  filters, 
  onFilterChange, 
  onResetFilters, 
  viewMode, 
  onToggleViewMode,
  totalResults 
}) {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const PROPERTY_TYPES = ['Apartment', 'Villa', 'Penthouse', 'PG & Co-Living'];
  const AMENITIES_LIST = [
    '100% Vastu Compliant', 
    '24/7 DG Power Backup', 
    'Manjeera / Municipal Water', 
    'Gated 3-Tier Security', 
    'Solar Rooftop', 
    'EV Car Charging Bay', 
    'Piped Natural Gas (PNG)'
  ];

  return (
    <div className="glass-panel" style={{
      borderRadius: 'var(--radius-md)',
      padding: '1.25rem',
      marginBottom: '2rem',
      border: '1px solid var(--border-glass)'
    }}>
      {/* Top Filter Bar */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem'
      }}>
        {/* Purpose Filter Pills */}
        <div style={{ display: 'flex', gap: '0.4rem', background: 'var(--bg-primary)', padding: '0.25rem', borderRadius: 'var(--radius-sm)' }}>
          {[
            { id: 'all', label: 'All Listings' },
            { id: 'buy', label: 'Buy' },
            { id: 'rent', label: 'Rent' },
            { id: 'pg', label: 'PG / Co-Living' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => onFilterChange({ purpose: tab.id })}
              style={{
                padding: '0.4rem 1rem',
                borderRadius: 'var(--radius-sm)',
                fontWeight: 700,
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                background: filters.purpose === tab.id ? 'var(--accent-gold)' : 'transparent',
                color: filters.purpose === tab.id ? '#0b132b' : 'var(--text-secondary)'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search Keyword Input */}
        <div style={{ flex: 1, minWidth: '220px', position: 'relative' }}>
          <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--accent-gold)' }} />
          <input
            type="text"
            placeholder="Search locality, city, project name, or RERA ID..."
            value={filters.search}
            onChange={(e) => onFilterChange({ search: e.target.value })}
            style={{
              paddingLeft: '2.4rem',
              width: '100%',
              fontSize: '0.9rem'
            }}
          />
        </div>

        {/* Action Toggle Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          {/* Advanced Filter Toggle */}
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="btn-secondary"
            style={{ padding: '0.5rem 1rem', fontSize: '0.88rem' }}
          >
            <SlidersHorizontal size={16} /> Filters
          </button>

          {/* Reset Button */}
          <button
            onClick={onResetFilters}
            title="Reset Filters"
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-light)',
              padding: '0.5rem 0.8rem',
              borderRadius: 'var(--radius-md)',
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
              fontSize: '0.85rem'
            }}
          >
            <RotateCcw size={15} /> Reset
          </button>

          {/* Grid vs Map Toggle */}
          <div style={{ display: 'flex', background: 'var(--bg-primary)', padding: '0.2rem', borderRadius: 'var(--radius-sm)' }}>
            <button
              onClick={() => onToggleViewMode('grid')}
              title="Grid View"
              style={{
                padding: '0.4rem 0.7rem',
                borderRadius: 'var(--radius-sm)',
                background: viewMode === 'grid' ? 'var(--accent-navy)' : 'transparent',
                color: viewMode === 'grid' ? 'white' : 'var(--text-muted)'
              }}
            >
              <Grid size={18} />
            </button>
            <button
              onClick={() => onToggleViewMode('map')}
              title="Split Map View"
              style={{
                padding: '0.4rem 0.7rem',
                borderRadius: 'var(--radius-sm)',
                background: viewMode === 'map' ? 'var(--accent-navy)' : 'transparent',
                color: viewMode === 'map' ? 'white' : 'var(--text-muted)'
              }}
            >
              <Map size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Advanced Filter Drawer */}
      {showAdvanced && (
        <div className="animate-fade-in" style={{
          marginTop: '1.25rem',
          paddingTop: '1.25rem',
          borderTop: '1px solid var(--border-light)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem'
        }}>
          {/* Property Types */}
          <div>
            <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-gold)', display: 'block', marginBottom: '0.5rem' }}>
              Property Configuration
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {PROPERTY_TYPES.map((type) => {
                const isSel = filters.types.includes(type);
                return (
                  <button
                    key={type}
                    onClick={() => {
                      const updated = isSel ? filters.types.filter(t => t !== type) : [...filters.types, type];
                      onFilterChange({ types: updated });
                    }}
                    style={{
                      padding: '0.3rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      background: isSel ? 'var(--accent-navy)' : 'var(--bg-secondary)',
                      color: isSel ? 'white' : 'var(--text-secondary)',
                      border: `1px solid ${isSel ? 'var(--accent-gold)' : 'var(--border-light)'}`
                    }}
                  >
                    {type}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Min Bedrooms */}
          <div>
            <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-gold)', display: 'block', marginBottom: '0.5rem' }}>
              Bedrooms (Min)
            </label>
            <div style={{ display: 'flex', gap: '0.3rem' }}>
              {[0, 1, 2, 3, 4].map((num) => (
                <button
                  key={num}
                  onClick={() => onFilterChange({ minBeds: num })}
                  style={{
                    flex: 1,
                    padding: '0.35rem 0',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    background: filters.minBeds === num ? 'var(--accent-gold)' : 'var(--bg-secondary)',
                    color: filters.minBeds === num ? '#0b132b' : 'var(--text-secondary)',
                    border: '1px solid var(--border-light)'
                  }}
                >
                  {num === 0 ? 'Any' : `${num}+`}
                </button>
              ))}
            </div>
          </div>

          {/* Amenities Multi-Select */}
          <div style={{ gridColumn: '1 / -1' }}>
            <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-gold)', display: 'block', marginBottom: '0.5rem' }}>
              Key Amenities
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {AMENITIES_LIST.map((amenity) => {
                const isSel = filters.amenities.includes(amenity);
                return (
                  <button
                    key={amenity}
                    onClick={() => {
                      const updated = isSel ? filters.amenities.filter(a => a !== amenity) : [...filters.amenities, amenity];
                      onFilterChange({ amenities: updated });
                    }}
                    style={{
                      padding: '0.35rem 0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      background: isSel ? 'rgba(16, 185, 129, 0.15)' : 'var(--bg-secondary)',
                      color: isSel ? 'var(--accent-emerald-light)' : 'var(--text-secondary)',
                      border: `1px solid ${isSel ? 'var(--accent-emerald-light)' : 'var(--border-light)'}`
                    }}
                  >
                    {isSel ? '✓ ' : '+ '}{amenity}
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      )}

      {/* Results Header Count */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-light)' }}>
        <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>
          Showing <strong style={{ color: 'var(--text-primary)' }}>{totalResults}</strong> verified properties matching criteria
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--accent-emerald-light)', fontWeight: 700 }}>
          <ShieldCheck size={16} /> Title-checked & RERA verified
        </div>
      </div>
    </div>
  );
}
