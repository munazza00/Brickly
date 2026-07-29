import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/home/HeroSection';
import StatsBar from './components/home/StatsBar';
import PropertyFilter from './components/properties/PropertyFilter';
import PropertyCard from './components/properties/PropertyCard';
import InteractiveMap from './components/properties/InteractiveMap';
import FlashCardsSection from './components/flashcards/FlashCardsSection';
import PriceTrendsChart from './components/smart/PriceTrendsChart';
import AIPropertyAdvisor from './components/smart/AIPropertyAdvisor';
import BricklyAIChat from './components/smart/BricklyAIChat';
import PropertyModal from './components/property-detail/PropertyModal';
import CompareDrawer from './components/tools/CompareDrawer';
import CompareModal from './components/tools/CompareModal';
import WishlistDrawer from './components/tools/WishlistDrawer';
import ListPropertyModal from './components/tools/ListPropertyModal';
import TrustSection from './components/home/TrustSection';

import { Search, RotateCcw } from 'lucide-react';
import { PROPERTIES } from './data/mockData';
import { TRANSLATIONS } from './data/translations';
import './styles/global.css';

export default function App() {
  // Theme & Language State
  const [theme, setTheme] = useState('dark');
  const [lang, setLang] = useState('en');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Active Navigation
  const [activeSection, setActiveSection] = useState('home');

  // Filter State
  const [filters, setFilters] = useState({
    purpose: 'all', // 'all', 'buy', 'rent', 'pg'
    search: '',
    types: [],
    minBeds: 0,
    priceMax: 100000000, // ₹10 Cr max default
    amenities: []
  });

  const [viewMode, setViewMode] = useState('grid');

  // Modals & Drawers
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isAdvisorOpen, setIsAdvisorOpen] = useState(false);
  const [isListPropertyOpen, setIsListPropertyOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  // Wishlist & Compare
  const [wishlistIds, setWishlistIds] = useState(['prop-in-101']);
  const [compareIds, setCompareIds] = useState(['prop-in-101', 'prop-in-102']);

  // Robust Search & Filtering Logic
  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((p) => {
      // 1. Purpose filter (buy, rent, pg)
      if (filters.purpose !== 'all' && p.purpose !== filters.purpose) return false;

      // 2. Multi-token Search Query filter
      if (filters.search && filters.search.trim()) {
        const rawQuery = filters.search.toLowerCase().trim();
        
        // Normalize city aliases (Bangalore <-> Bengaluru, Delhi NCR <-> Delhi, Bombay <-> Mumbai, Hyd <-> Hyderabad)
        const queryNormalized = rawQuery
          .replace(/bangalore/g, 'bengaluru')
          .replace(/delhi ncr/g, 'delhi')
          .replace(/bombay/g, 'mumbai')
          .replace(/hyd/g, 'hyderabad');

        // Extract clean tokens (split by whitespace or commas)
        const tokens = queryNormalized.split(/[\s,]+/).filter(t => t.length > 0);

        const searchableContent = `
          ${p.title} 
          ${p.location} 
          ${p.neighborhood || ''} 
          ${p.type} 
          ${p.bhk} 
          ${p.reraNo || ''} 
          ${p.description || ''} 
          ${p.agent?.name || ''} 
          ${p.amenities?.join(' ') || ''}
        `.toLowerCase()
         .replace(/bangalore/g, 'bengaluru')
         .replace(/delhi ncr/g, 'delhi')
         .replace(/bombay/g, 'mumbai')
         .replace(/hyd/g, 'hyderabad');

        // All entered tokens must be present somewhere in the property's metadata
        const matchesAllTokens = tokens.every(token => searchableContent.includes(token));
        if (!matchesAllTokens) return false;
      }

      // 3. Property Type / BHK filter (matches both p.type and p.bhk)
      if (filters.types.length > 0) {
        const matchesTypeOrBhk = filters.types.some(reqType => 
          p.type.toLowerCase() === reqType.toLowerCase() ||
          p.bhk.toLowerCase() === reqType.toLowerCase()
        );
        if (!matchesTypeOrBhk) return false;
      }

      // 4. Minimum Bedrooms filter
      if (filters.minBeds > 0 && p.bedrooms < filters.minBeds) return false;

      // 5. Max Price filter
      if (p.price > filters.priceMax) return false;

      // 6. Amenities filter
      if (filters.amenities.length > 0) {
        const hasAllAmenities = filters.amenities.every(req => 
          p.amenities.some(a => a.toLowerCase().includes(req.toLowerCase())) ||
          (req.includes('Vastu') && p.vastuCompliant)
        );
        if (!hasAllAmenities) return false;
      }

      return true;
    });
  }, [filters]);

  const handleToggleWishlist = (id) => {
    setWishlistIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleToggleCompare = (id) => {
    setCompareIds(prev => {
      if (prev.includes(id)) return prev.filter(i => i !== id);
      if (prev.length >= 4) {
        alert('You can compare a maximum of 4 properties side-by-side.');
        return prev;
      }
      return [...prev, id];
    });
  };

  const handleHeroSearch = ({ purpose, location, bhkType, priceMax, tag }) => {
    setFilters(prev => ({
      ...prev,
      purpose: purpose || 'all',
      search: tag || location || '',
      types: bhkType && bhkType !== 'All' ? [bhkType] : [],
      priceMax: priceMax || 100000000
    }));

    const el = document.getElementById('properties-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const wishlistProperties = PROPERTIES.filter(p => wishlistIds.includes(p.id));
  const comparedProperties = PROPERTIES.filter(p => compareIds.includes(p.id));

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Multilingual Header */}
      <Header
        theme={theme}
        onToggleTheme={handleToggleTheme}
        lang={lang}
        onChangeLang={setLang}
        wishlistCount={wishlistIds.length}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        compareCount={compareIds.length}
        onOpenCompare={() => setIsCompareModalOpen(true)}
        onOpenAdvisor={() => setIsAdvisorOpen(true)}
        onOpenListProperty={() => setIsListPropertyOpen(true)}
        activeSection={activeSection}
        onNavigate={(sec) => {
          setActiveSection(sec);
          const el = document.getElementById(`${sec}-section`);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <main style={{ flex: 1 }}>
        {/* Hero Section */}
        <div id="home-section">
          <HeroSection
            onSearch={handleHeroSearch}
            onOpenAdvisor={() => setIsAdvisorOpen(true)}
            lang={lang}
          />
        </div>

        {/* Live Indian Real Estate Stats Bar */}
        <StatsBar />

        {/* Property Explorer Section */}
        <section id="properties-section" style={{ padding: '5rem 0 3rem 0' }}>
          <div className="container">
            
            <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem auto' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.6rem' }}>
                RERA-Verified Properties Across India
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
                Filter by Vastu compliance, 360° virtual tours, Indian metro hubs, and Lakhs/Crores price points.
              </p>
            </div>

            {/* Filter Toolbar */}
            <PropertyFilter
              filters={filters}
              onFilterChange={(newF) => setFilters(prev => ({ ...prev, ...newF }))}
              onResetFilters={() => setFilters({
                purpose: 'all', search: '', types: [], minBeds: 0, priceMax: 100000000, amenities: []
              })}
              viewMode={viewMode}
              onToggleViewMode={setViewMode}
              totalResults={filteredProperties.length}
            />

            {/* Explorer Layout or Empty Search State */}
            {filteredProperties.length === 0 ? (
              <div className="glass-panel" style={{
                textAlign: 'center',
                padding: '4rem 2rem',
                borderRadius: 'var(--radius-lg)',
                margin: '2rem 0'
              }}>
                <Search size={48} style={{ color: 'var(--accent-gold)', opacity: 0.6, marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  No properties matched your search criteria
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '520px', margin: '0 auto 1.5rem auto', lineHeight: 1.6 }}>
                  Try relaxing your price range, searching for broader terms like "Mumbai" or "Gachibowli", or clearing BHK type filters.
                </p>
                <button
                  className="btn-primary"
                  onClick={() => setFilters({
                    purpose: 'all', search: '', types: [], minBeds: 0, priceMax: 100000000, amenities: []
                  })}
                >
                  <RotateCcw size={16} /> Reset All Search Filters
                </button>
              </div>
            ) : viewMode === 'map' ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxHeight: '600px', overflowY: 'auto', paddingRight: '0.5rem' }}>
                  {filteredProperties.map((prop) => (
                    <PropertyCard
                      key={prop.id}
                      property={prop}
                      onSelectProperty={setSelectedProperty}
                      isWishlisted={wishlistIds.includes(prop.id)}
                      onToggleWishlist={handleToggleWishlist}
                      isCompared={compareIds.includes(prop.id)}
                      onToggleCompare={handleToggleCompare}
                    />
                  ))}
                </div>
                <InteractiveMap
                  properties={filteredProperties}
                  activeProperty={selectedProperty}
                  onSelectProperty={setSelectedProperty}
                />
              </div>
            ) : (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '2rem'
              }}>
                {filteredProperties.map((prop) => (
                  <PropertyCard
                    key={prop.id}
                    property={prop}
                    onSelectProperty={setSelectedProperty}
                    isWishlisted={wishlistIds.includes(prop.id)}
                    onToggleWishlist={handleToggleWishlist}
                    isCompared={compareIds.includes(prop.id)}
                    onToggleCompare={handleToggleCompare}
                  />
                ))}
              </div>
            )}

          </div>
        </section>

        {/* 3D Flash Cards Section */}
        <div id="flashcards-section">
          <FlashCardsSection onCardAction={(card) => {
            if (card.category === 'deals') {
              setSelectedProperty(PROPERTIES[0]);
            } else if (card.category === 'tips') {
              setSelectedProperty(PROPERTIES[1]);
            } else {
              setIsAdvisorOpen(true);
            }
          }} />
        </div>

        {/* Price Trends Chart */}
        <div id="trends-section">
          <PriceTrendsChart />
        </div>

        {/* Trust & Credentials Section */}
        <TrustSection onSelectAgent={() => setIsListPropertyOpen(true)} />

      </main>

      {/* Footer */}
      <Footer onNavigate={(sec) => {
        const el = document.getElementById(`${sec}-section`);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }} />

      {/* Drawers & Modals */}
      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
          isWishlisted={wishlistIds.includes(selectedProperty.id)}
          onToggleWishlist={handleToggleWishlist}
          isCompared={compareIds.includes(selectedProperty.id)}
          onToggleCompare={handleToggleCompare}
          onOpenAgentContact={() => {
            alert(`Contacting Listing Director ${selectedProperty.agent.name} at ${selectedProperty.agent.phone}`);
          }}
        />
      )}

      <AIPropertyAdvisor
        isOpen={isAdvisorOpen}
        onClose={() => setIsAdvisorOpen(false)}
        onSelectProperty={setSelectedProperty}
      />

      <ListPropertyModal
        isOpen={isListPropertyOpen}
        onClose={() => setIsListPropertyOpen(false)}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistProperties={wishlistProperties}
        onSelectProperty={setSelectedProperty}
        onRemoveWishlist={handleToggleWishlist}
      />

      <CompareDrawer
        comparedProperties={comparedProperties}
        onOpenModal={() => setIsCompareModalOpen(true)}
        onRemoveCompare={handleToggleCompare}
        onClearCompare={() => setCompareIds([])}
      />

      <CompareModal
        isOpen={isCompareModalOpen}
        onClose={() => setIsCompareModalOpen(false)}
        properties={comparedProperties}
        onSelectProperty={setSelectedProperty}
      />

      {/* Brickly AI Assistant Chatbot */}
      <BricklyAIChat onSelectProperty={setSelectedProperty} hasCompareDrawer={comparedProperties.length > 0} />

    </div>
  );
}
