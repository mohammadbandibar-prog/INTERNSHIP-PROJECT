import React from 'react';
import './StatCard.css';

// Reusable stat card used on the Dashboard page
// Props: icon, label, value, delta, deltaType ('up' or 'down'), color
function StatCard({ icon, label, value, delta, deltaType = 'up', color = 'green' }) {
  return (
    <div className="stat-card">
      <div className={`stat-icon ${color}`}>{icon}</div>
      <p className="stat-label">{label}</p>
      <p className="stat-value">{value}</p>
      {delta && (
        <p className={`stat-delta ${deltaType}`}>
          {deltaType === 'up' ? '↑' : '↓'} {delta}
        </p>
      )}
    </div>
  );
}

export default StatCard;
