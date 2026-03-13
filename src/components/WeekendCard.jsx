import React, { useState } from 'react';

const WeekendCard = ({ data, index }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      style={{
        ...styles.card,
        animationDelay: `${index * 0.1}s`,
        borderColor: expanded ? `${data.color}30` : 'rgba(255,255,255,0.07)',
      }}
    >
      {/* Card Header */}
      <div style={styles.cardHeader}>
        <div style={styles.weekLabel}>{data.week}</div>
        <div style={{ ...styles.accentLine, background: data.color }} />
      </div>

      <div style={styles.cardBody}>
        {/* Left: Main Info */}
        <div style={styles.leftCol}>
          <div style={styles.flagEmoji}>{data.flag}</div>
          <h2 style={styles.destination}>{data.destination}</h2>
          <div style={styles.country}>{data.country}</div>

          <div style={styles.routeBox}>
            <div style={styles.routeLabel}>ROUTE</div>
            <div style={styles.routeText}>{data.route}</div>
          </div>

          <div style={styles.transportBadge}>
            <span style={{ color: data.color }}>✈ </span>
            {data.transport} — <em style={styles.transportNote}>{data.transportNote}</em>
          </div>
        </div>

        {/* Right: Cost */}
        <div style={styles.rightCol}>
          <div style={styles.totalCostBox}>
            <div style={styles.totalLabel}>TOTAL</div>
            <div style={{ ...styles.totalNum, color: data.color }}>{data.costRange}</div>
          </div>

          <div style={styles.highlights}>
            <div style={styles.highlightsLabel}>TOP SPOTS</div>
            {data.highlights.map((h, i) => (
              <div key={i} style={styles.highlightItem}>
                <span style={{ color: data.color, marginRight: '6px' }}>→</span>{h}
              </div>
            ))}
          </div>

          <div style={styles.freeTag}>
            🆓 {data.freeThing}
          </div>
        </div>
      </div>

      {/* Expandable Cost Breakdown */}
      <div>
        <button
          style={{ ...styles.expandBtn, borderColor: `${data.color}40` }}
          onClick={() => setExpanded(!expanded)}
        >
          <span>{expanded ? '↑ Hide' : '↓ Show'} cost breakdown</span>
        </button>

        {expanded && (
          <div style={styles.breakdown}>
            <table style={styles.table}>
              <tbody>
                {data.items.map((item, i) => (
                  <tr key={i} style={styles.tableRow}>
                    <td style={styles.tdLabel}>{item.label}</td>
                    <td style={{ ...styles.tdCost, color: data.color }}>{item.cost}</td>
                  </tr>
                ))}
                <tr style={styles.totalRow}>
                  <td style={styles.tdLabel}>
                    <strong>TOTAL</strong>
                  </td>
                  <td style={{ ...styles.tdCost, color: data.color }}>
                    <strong>{data.costRange}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
            <div style={styles.tipBox}>
              <span style={{ color: data.color }}>💡 TIP: </span>{data.tip}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  card: {
    background: '#111118',
    border: '1px solid rgba(255,255,255,0.07)',
    borderRadius: '6px',
    overflow: 'hidden',
    transition: 'border-color 0.3s ease, transform 0.2s ease',
    animation: 'fadeUp 0.6s ease both',
    cursor: 'default',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '14px 20px',
    borderBottom: '1px solid rgba(255,255,255,0.04)',
    background: 'rgba(255,255,255,0.01)',
  },
  weekLabel: {
    fontFamily: 'Space Mono, monospace',
    fontSize: '10px',
    letterSpacing: '3px',
    color: 'rgba(240,240,245,0.3)',
    textTransform: 'uppercase',
  },
  accentLine: {
    height: '2px',
    width: '30px',
    borderRadius: '1px',
    opacity: 0.8,
  },
  cardBody: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '24px',
    padding: '24px 20px',
  },
  leftCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  flagEmoji: {
    fontSize: '28px',
    lineHeight: 1,
  },
  destination: {
    fontFamily: 'Syne, sans-serif',
    fontSize: '28px',
    fontWeight: 800,
    color: '#f0f0f5',
    lineHeight: 1,
    letterSpacing: '-1px',
  },
  country: {
    fontFamily: 'Space Mono, monospace',
    fontSize: '10px',
    letterSpacing: '3px',
    color: 'rgba(240,240,245,0.35)',
    textTransform: 'uppercase',
  },
  routeBox: {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: '4px',
    padding: '10px 12px',
  },
  routeLabel: {
    fontFamily: 'Space Mono, monospace',
    fontSize: '9px',
    letterSpacing: '3px',
    color: 'rgba(240,240,245,0.3)',
    marginBottom: '4px',
  },
  routeText: {
    fontFamily: 'Space Mono, monospace',
    fontSize: '11px',
    color: 'rgba(240,240,245,0.7)',
    lineHeight: 1.5,
  },
  transportBadge: {
    fontFamily: 'Space Mono, monospace',
    fontSize: '11px',
    color: 'rgba(240,240,245,0.5)',
    lineHeight: 1.5,
  },
  transportNote: {
    color: 'rgba(240,240,245,0.35)',
    fontStyle: 'italic',
  },
  rightCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },
  totalCostBox: {
    textAlign: 'right',
  },
  totalLabel: {
    fontFamily: 'Space Mono, monospace',
    fontSize: '9px',
    letterSpacing: '3px',
    color: 'rgba(240,240,245,0.3)',
    marginBottom: '2px',
  },
  totalNum: {
    fontFamily: 'Syne, sans-serif',
    fontSize: '32px',
    fontWeight: 800,
    letterSpacing: '-1px',
    lineHeight: 1,
  },
  highlights: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  highlightsLabel: {
    fontFamily: 'Space Mono, monospace',
    fontSize: '9px',
    letterSpacing: '3px',
    color: 'rgba(240,240,245,0.3)',
    marginBottom: '4px',
  },
  highlightItem: {
    fontFamily: 'Space Mono, monospace',
    fontSize: '11px',
    color: 'rgba(240,240,245,0.6)',
  },
  freeTag: {
    fontFamily: 'Space Mono, monospace',
    fontSize: '10px',
    color: 'rgba(240,240,245,0.35)',
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid rgba(255,255,255,0.05)',
    borderRadius: '3px',
    padding: '8px 10px',
    lineHeight: 1.4,
  },
  expandBtn: {
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderTop: '1px solid rgba(255,255,255,0.06)',
    color: 'rgba(240,240,245,0.35)',
    fontFamily: 'Space Mono, monospace',
    fontSize: '11px',
    letterSpacing: '1px',
    padding: '12px 20px',
    cursor: 'pointer',
    textAlign: 'left',
    transition: 'color 0.2s',
  },
  breakdown: {
    padding: '0 20px 20px',
    animation: 'fadeUp 0.3s ease both',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '12px',
  },
  tableRow: {
    borderBottom: '1px solid rgba(255,255,255,0.04)',
  },
  totalRow: {
    borderTop: '2px solid rgba(255,255,255,0.1)',
  },
  tdLabel: {
    fontFamily: 'Space Mono, monospace',
    fontSize: '11px',
    color: 'rgba(240,240,245,0.55)',
    padding: '8px 0',
  },
  tdCost: {
    fontFamily: 'Space Mono, monospace',
    fontSize: '12px',
    textAlign: 'right',
    padding: '8px 0',
    whiteSpace: 'nowrap',
  },
  tipBox: {
    fontFamily: 'Space Mono, monospace',
    fontSize: '11px',
    color: 'rgba(240,240,245,0.45)',
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: '3px',
    padding: '10px 12px',
    lineHeight: 1.6,
  },
};

export default WeekendCard;
