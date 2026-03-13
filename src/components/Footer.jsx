import React from 'react';

const Footer = () => (
  <footer style={styles.footer}>
    <div style={styles.inner}>
      <div style={styles.logo}>
        Oslo <span style={styles.arrow}>→</span> Europe
      </div>
      <div style={styles.note}>
        Prices are estimates based on data from Google Flights, Momondo, easyJet & hostel booking sites (Feb 2026).
        Book in advance for best fares. Always verify Schengen visa requirements for your nationality.
      </div>
      <div style={styles.built}>
        Built for student travelers · Schengen visa holders · Budget explorers
      </div>
    </div>
  </footer>
);

const styles = {
  footer: {
    borderTop: '1px solid rgba(255,255,255,0.06)',
    padding: '48px 24px',
    background: '#0a0a0f',
  },
  inner: {
    maxWidth: '900px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'center',
    textAlign: 'center',
  },
  logo: {
    fontFamily: 'Syne, sans-serif',
    fontSize: '24px',
    fontWeight: 800,
    color: 'rgba(240,240,245,0.3)',
    letterSpacing: '-1px',
  },
  arrow: {
    color: '#e8ff47',
    opacity: 0.5,
  },
  note: {
    fontFamily: 'Space Mono, monospace',
    fontSize: '10px',
    color: 'rgba(240,240,245,0.2)',
    maxWidth: '600px',
    lineHeight: 1.8,
  },
  built: {
    fontFamily: 'Space Mono, monospace',
    fontSize: '10px',
    letterSpacing: '2px',
    color: 'rgba(240,240,245,0.15)',
    textTransform: 'uppercase',
  },
};

export default Footer;
