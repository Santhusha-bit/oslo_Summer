import React from 'react';

const SavingTips = ({ tips }) => {
  return (
    <section style={styles.section}>
      <div style={styles.inner}>
        <div style={styles.header}>
          <div style={styles.label}>INSIDER KNOWLEDGE</div>
          <h2 style={styles.title}>Money-Saving Secrets</h2>
        </div>

        <div style={styles.grid}>
          {tips.map((tip, i) => (
            <div key={i} style={{ ...styles.card, animationDelay: `${i * 0.08}s` }}>
              <div style={styles.iconRow}>
                <span style={styles.icon}>{tip.icon}</span>
                <span style={styles.num}>0{i + 1}</span>
              </div>
              <h3 style={styles.tipTitle}>{tip.title}</h3>
              <p style={styles.tipDesc}>{tip.desc}</p>
            </div>
          ))}
        </div>

        {/* Visa reminder */}
        <div style={styles.visaBox}>
          <div style={styles.visaHeader}>
            <span style={styles.visaIcon}>⚠️</span>
            <span style={styles.visaTitle}>VISA CHECKLIST</span>
          </div>
          <div style={styles.visaGrid}>
            {[
              ['Multiple-entry visa required', 'You leave & re-enter Schengen every weekend from Norway'],
              ['Track your 90/180 days', '6 weekends ≈ 12 days — well within the limit, but track carefully'],
              ['EES system (Oct 2025)', 'Digital biometric entry/exit checks now active. Carry your passport.'],
              ['Book flights 4–6 weeks ahead', 'The prices shown above require advance booking to lock in'],
            ].map(([title, desc], i) => (
              <div key={i} style={styles.checkItem}>
                <div style={styles.checkDot} />
                <div>
                  <div style={styles.checkTitle}>{title}</div>
                  <div style={styles.checkDesc}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    background: '#0d0d14',
    borderTop: '1px solid rgba(255,255,255,0.05)',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
    padding: '80px 24px',
  },
  inner: {
    maxWidth: '900px',
    margin: '0 auto',
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '16px',
    marginBottom: '48px',
  },
  card: {
    background: '#111118',
    border: '1px solid rgba(255,255,255,0.07)',
    borderRadius: '4px',
    padding: '24px',
    animation: 'fadeUp 0.5s ease both',
    transition: 'border-color 0.2s, transform 0.2s',
  },
  iconRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  },
  icon: {
    fontSize: '24px',
  },
  num: {
    fontFamily: 'Space Mono, monospace',
    fontSize: '10px',
    letterSpacing: '2px',
    color: 'rgba(240,240,245,0.15)',
  },
  tipTitle: {
    fontFamily: 'Syne, sans-serif',
    fontSize: '16px',
    fontWeight: 700,
    color: '#f0f0f5',
    marginBottom: '8px',
    lineHeight: 1.2,
  },
  tipDesc: {
    fontFamily: 'Space Mono, monospace',
    fontSize: '11px',
    color: 'rgba(240,240,245,0.45)',
    lineHeight: 1.7,
  },
  visaBox: {
    border: '1px solid rgba(255,107,107,0.2)',
    borderRadius: '4px',
    padding: '28px',
    background: 'rgba(255,107,107,0.03)',
  },
  visaHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px',
  },
  visaIcon: {
    fontSize: '18px',
  },
  visaTitle: {
    fontFamily: 'Space Mono, monospace',
    fontSize: '11px',
    letterSpacing: '3px',
    color: 'rgba(255,107,107,0.8)',
  },
  visaGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '16px',
  },
  checkItem: {
    display: 'flex',
    gap: '12px',
    alignItems: 'flex-start',
  },
  checkDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: 'rgba(255,107,107,0.6)',
    marginTop: '5px',
    flexShrink: 0,
  },
  checkTitle: {
    fontFamily: 'Space Mono, monospace',
    fontSize: '12px',
    color: 'rgba(240,240,245,0.7)',
    marginBottom: '3px',
  },
  checkDesc: {
    fontFamily: 'Space Mono, monospace',
    fontSize: '10px',
    color: 'rgba(240,240,245,0.35)',
    lineHeight: 1.6,
  },
};

export default SavingTips;
