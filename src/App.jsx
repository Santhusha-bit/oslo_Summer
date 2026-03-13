import React, { useState } from 'react';
import Hero from './components/Hero';
import WeekendCard from './components/WeekendCard';
import CostSummary from './components/CostSummary';
import SavingTips from './components/SavingTips';
import Footer from './components/Footer';
import { travelData } from './data';
import './index.css';

const App = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? travelData.weekends
    : travelData.weekends.filter(w => w.totalCost <= parseInt(activeFilter));

  return (
    <div style={styles.app}>
      <Hero summary={travelData.summary} />

      {/* Weekend Plans Section */}
      <section style={styles.section}>
        <div style={styles.sectionInner}>
          <div style={styles.sectionHeader}>
            <div>
              <div style={styles.sectionLabel}>THE PLAN</div>
              <h2 style={styles.sectionTitle}>6 Weekends · 8 Countries</h2>
            </div>

            {/* Filter buttons */}
            <div style={styles.filters}>
              <span style={styles.filterLabel}>Filter by cost:</span>
              {[
                { key: 'all', label: 'All' },
                { key: '130', label: 'Under $135' },
                { key: '170', label: 'Under $175' },
              ].map(f => (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  style={{
                    ...styles.filterBtn,
                    ...(activeFilter === f.key ? styles.filterBtnActive : {}),
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div style={styles.cardsGrid}>
            {filtered.map((weekend, i) => (
              <WeekendCard key={weekend.id} data={weekend} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={styles.noResults}>No weekends match this filter.</div>
          )}
        </div>
      </section>

      <CostSummary weekends={travelData.weekends} />
      <SavingTips tips={travelData.savingTips} />
      <Footer />
    </div>
  );
};

const styles = {
  app: {
    minHeight: '100vh',
    background: '#0a0a0f',
  },
  section: {
    padding: '80px 24px',
  },
  sectionInner: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    gap: '24px',
    marginBottom: '40px',
  },
  sectionLabel: {
    fontFamily: 'Space Mono, monospace',
    fontSize: '10px',
    letterSpacing: '4px',
    color: 'rgba(240,240,245,0.3)',
    marginBottom: '8px',
  },
  sectionTitle: {
    fontFamily: 'Syne, sans-serif',
    fontSize: 'clamp(32px, 5vw, 52px)',
    fontWeight: 800,
    color: '#f0f0f5',
    letterSpacing: '-2px',
    lineHeight: 1,
  },
  filters: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    flexWrap: 'wrap',
  },
  filterLabel: {
    fontFamily: 'Space Mono, monospace',
    fontSize: '10px',
    color: 'rgba(240,240,245,0.3)',
    letterSpacing: '1px',
  },
  filterBtn: {
    fontFamily: 'Space Mono, monospace',
    fontSize: '10px',
    letterSpacing: '1px',
    padding: '6px 12px',
    background: 'transparent',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '3px',
    color: 'rgba(240,240,245,0.4)',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  filterBtnActive: {
    background: 'rgba(232,255,71,0.08)',
    borderColor: 'rgba(232,255,71,0.4)',
    color: '#e8ff47',
  },
  cardsGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  noResults: {
    fontFamily: 'Space Mono, monospace',
    fontSize: '13px',
    color: 'rgba(240,240,245,0.3)',
    textAlign: 'center',
    padding: '48px',
  },
};

export default App;
