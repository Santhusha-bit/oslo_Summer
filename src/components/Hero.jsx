import React, { useEffect, useRef } from 'react';

const Hero = ({ summary }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const dots = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      alpha: Math.random() * 0.5 + 0.1
    }));

    let frame;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach(d => {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > canvas.width) d.vx *= -1;
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232,255,71,${d.alpha})`;
        ctx.fill();
      });
      // Draw faint connecting lines
      dots.forEach((a, i) => {
        dots.slice(i + 1).forEach(b => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(232,255,71,${0.04 * (1 - dist / 100)})`;
            ctx.stroke();
          }
        });
      });
      frame = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <header style={styles.hero}>
      <canvas ref={canvasRef} style={styles.canvas} />
      <div style={styles.heroContent}>
        <div style={styles.badge}>SCHENGEN VISA · 90 DAYS · 6 WEEKENDS</div>
        <h1 style={styles.title}>
          <span style={styles.titleOslo}>Oslo</span>
          <span style={styles.titleArrow}>→</span>
          <span style={styles.titleEurope}>Europe</span>
        </h1>
        <p style={styles.subtitle}>
          Weekdays at university. Weekends conquering{' '}
          <span style={styles.highlight}>{summary.countries} countries</span> on a student budget.
        </p>
        <div style={styles.statsRow}>
          <div style={styles.stat}>
            <div style={styles.statNum}>{summary.weeks}</div>
            <div style={styles.statLabel}>Weekends</div>
          </div>
          <div style={styles.statDivider}>·</div>
          <div style={styles.stat}>
            <div style={styles.statNum}>{summary.countries}</div>
            <div style={styles.statLabel}>Countries</div>
          </div>
          <div style={styles.statDivider}>·</div>
          <div style={styles.stat}>
            <div style={styles.statNum}>{summary.totalCost}</div>
            <div style={styles.statLabel}>Total Cost</div>
          </div>
          <div style={styles.statDivider}>·</div>
          <div style={styles.stat}>
            <div style={styles.statNum}>{summary.avgPerWeekend}</div>
            <div style={styles.statLabel}>Per Weekend</div>
          </div>
        </div>
        <div style={styles.rule}>{summary.rule}</div>
      </div>
      <div style={styles.scrollHint}>scroll to explore ↓</div>
    </header>
  );
};

const styles = {
  hero: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderBottom: '1px solid rgba(232,255,71,0.15)',
  },
  canvas: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    opacity: 0.6,
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    padding: '2rem',
    maxWidth: '900px',
    animation: 'fadeUp 1s ease both',
  },
  badge: {
    display: 'inline-block',
    fontFamily: 'Space Mono, monospace',
    fontSize: '11px',
    letterSpacing: '3px',
    color: 'rgba(232,255,71,0.7)',
    border: '1px solid rgba(232,255,71,0.25)',
    borderRadius: '2px',
    padding: '6px 14px',
    marginBottom: '2rem',
  },
  title: {
    fontFamily: 'Syne, sans-serif',
    fontSize: 'clamp(56px, 12vw, 120px)',
    fontWeight: 800,
    lineHeight: 0.95,
    letterSpacing: '-3px',
    marginBottom: '1.5rem',
  },
  titleOslo: {
    color: '#f0f0f5',
  },
  titleArrow: {
    color: '#e8ff47',
    display: 'inline-block',
    margin: '0 0.15em',
  },
  titleEurope: {
    color: 'transparent',
    WebkitTextStroke: '2px rgba(240,240,245,0.4)',
  },
  subtitle: {
    fontFamily: 'Space Mono, monospace',
    fontSize: 'clamp(13px, 2vw, 16px)',
    color: 'rgba(240,240,245,0.6)',
    maxWidth: '500px',
    margin: '0 auto 2.5rem',
    lineHeight: 1.7,
  },
  highlight: {
    color: '#e8ff47',
  },
  statsRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.5rem',
    flexWrap: 'wrap',
    marginBottom: '2rem',
    padding: '1.5rem 2rem',
    border: '1px solid rgba(255,255,255,0.07)',
    borderRadius: '4px',
    background: 'rgba(255,255,255,0.02)',
    backdropFilter: 'blur(10px)',
  },
  stat: {
    textAlign: 'center',
  },
  statNum: {
    fontFamily: 'Syne, sans-serif',
    fontSize: '28px',
    fontWeight: 800,
    color: '#e8ff47',
    lineHeight: 1,
  },
  statLabel: {
    fontFamily: 'Space Mono, monospace',
    fontSize: '10px',
    letterSpacing: '2px',
    color: 'rgba(240,240,245,0.4)',
    marginTop: '4px',
    textTransform: 'uppercase',
  },
  statDivider: {
    color: 'rgba(255,255,255,0.15)',
    fontSize: '24px',
  },
  rule: {
    fontFamily: 'Space Mono, monospace',
    fontSize: '11px',
    letterSpacing: '2px',
    color: 'rgba(240,240,245,0.35)',
    textTransform: 'uppercase',
  },
  scrollHint: {
    position: 'absolute',
    bottom: '2rem',
    left: '50%',
    transform: 'translateX(-50%)',
    fontFamily: 'Space Mono, monospace',
    fontSize: '11px',
    letterSpacing: '2px',
    color: 'rgba(240,240,245,0.25)',
    zIndex: 2,
  }
};

export default Hero;
