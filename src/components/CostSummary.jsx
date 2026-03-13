import React from 'react';

const CostSummary = ({ weekends }) => {
  const totalLow = weekends.reduce((acc, w) => acc + w.totalCost, 0) - 75;
  const totalHigh = weekends.reduce((acc, w) => acc + w.totalCost, 0) + 50;

  return (
    <section style={styles.section}>
      <div style={styles.header}>
        <div style={styles.label}>TOTAL COST BREAKDOWN</div>
        <h2 style={styles.title}>Your Full Budget</h2>
      </div>

      {/* Bar chart */}
      <div style={styles.chartArea}>
        {weekends.map((w, i) => {
          const pct = (w.totalCost / 200) * 100;
          return (
            <div key={i} style={styles.barRow}>
              <div style={styles.barLabel}>
                <span style={styles.barFlag}>{w.flag.split('')[0]}</span>
                <span style={styles.barDest}>{w.destination.split(' ')[0]}</span>
              </div>
              <div style={styles.barTrack}>
                <div
                  style={{
                    ...styles.barFill,
                    width: `${pct}%`,
                    background: w.color,
                  }}
                />
              </div>
              <div style={{ ...styles.barCost, color: w.color }}>{w.costRange}</div>
            </div>
          );
        })}
      </div>

      {/* Grand total */}
      <div style={styles.grandTotal}>
        <div style={styles.gtLeft}>
          <div style={styles.gtLabel}>6 WEEKENDS · 8 COUNTRIES</div>
          <div style={styles.gtNote}>All flights + hostels + food + transport</div>
        </div>
        <div style={styles.gtRight}>
          <div style={styles.gtLabel}>GRAND TOTAL</div>
          <div style={styles.gtNum}>${totalLow}–${totalHigh}</div>
        </div>
      </div>

      {/* Per-category breakdown */}
      <div style={styles.categories}>
        {[
          { label: 'Flights (6 RT)', amount: '~$385', pct: 44, color: '#e8ff47' },
          { label: 'Hostels (11 nights)', amount: '~$239', pct: 27, color: '#ff6b6b' },
          { label: 'Food (12 days)', amount: '~$195', pct: 22, color: '#4ECDC4' },
          { label: 'Transport (local)', amount: '~$59', pct: 7, color: '#C084FC' },
        ].map((cat, i) => (
          <div key={i} style={styles.catCard}>
            <div style={styles.catPct}>
              <svg width="50" height="50" style={{ transform: 'rotate(-90deg)' }}>
                <circle cx="25" cy="25" r="20" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="4" />
                <circle
                  cx="25" cy="25" r="20"
                  fill="none"
                  stroke={cat.color}
                  strokeWidth="4"
                  strokeDasharray={`${2 * Math.PI * 20}`}
                  strokeDashoffset={`${2 * Math.PI * 20 * (1 - cat.pct / 100)}`}
                  strokeLinecap="round"
                />
              </svg>
              <span style={{ ...styles.catPctNum, color: cat.color }}>{cat.pct}%</span>
            </div>
            <div style={styles.catInfo}>
              <div style={styles.catAmount}>{cat.amount}</div>
              <div style={styles.catLabel}>{cat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '80px 24px',
  },
  header: {
    marginBottom: '48px',
  },
  label: {
    fontFamily: 'Space Mono, monospace',
    fontSize: '10px',
    letterSpacing: '4px',
    color: 'rgba(240,240,245,0.3)',
    marginBottom: '8px',
  },
  title: {
    fontFamily: 'Syne, sans-serif',
    fontSize: 'clamp(36px, 6vw, 56px)',
    fontWeight: 800,
    color: '#f0f0f5',
    letterSpacing: '-2px',
    lineHeight: 1,
  },
  chartArea: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    marginBottom: '48px',
  },
  barRow: {
    display: 'grid',
    gridTemplateColumns: '120px 1fr 100px',
    alignItems: 'center',
    gap: '16px',
  },
  barLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  barFlag: {
    fontSize: '18px',
  },
  barDest: {
    fontFamily: 'Space Mono, monospace',
    fontSize: '11px',
    color: 'rgba(240,240,245,0.5)',
  },
  barTrack: {
    height: '6px',
    background: 'rgba(255,255,255,0.05)',
    borderRadius: '3px',
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    borderRadius: '3px',
    transition: 'width 1s ease',
    opacity: 0.85,
  },
  barCost: {
    fontFamily: 'Space Mono, monospace',
    fontSize: '12px',
    textAlign: 'right',
  },
  grandTotal: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: '28px',
    border: '1px solid rgba(232,255,71,0.2)',
    borderRadius: '4px',
    background: 'rgba(232,255,71,0.03)',
    marginBottom: '48px',
  },
  gtLeft: {},
  gtRight: { textAlign: 'right' },
  gtLabel: {
    fontFamily: 'Space Mono, monospace',
    fontSize: '10px',
    letterSpacing: '3px',
    color: 'rgba(240,240,245,0.3)',
    marginBottom: '6px',
  },
  gtNote: {
    fontFamily: 'Space Mono, monospace',
    fontSize: '11px',
    color: 'rgba(240,240,245,0.4)',
  },
  gtNum: {
    fontFamily: 'Syne, sans-serif',
    fontSize: '42px',
    fontWeight: 800,
    color: '#e8ff47',
    letterSpacing: '-2px',
    lineHeight: 1,
  },
  categories: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '16px',
  },
  catCard: {
    background: '#111118',
    border: '1px solid rgba(255,255,255,0.07)',
    borderRadius: '4px',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  catPct: {
    position: 'relative',
    flexShrink: 0,
  },
  catPctNum: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Syne, sans-serif',
    fontSize: '12px',
    fontWeight: 700,
  },
  catInfo: {},
  catAmount: {
    fontFamily: 'Syne, sans-serif',
    fontSize: '20px',
    fontWeight: 700,
    color: '#f0f0f5',
    letterSpacing: '-0.5px',
  },
  catLabel: {
    fontFamily: 'Space Mono, monospace',
    fontSize: '10px',
    color: 'rgba(240,240,245,0.35)',
    marginTop: '2px',
  },
};

export default CostSummary;
