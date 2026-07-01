import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

// Map route paths to readable page titles
const pageTitles = {
  '/dashboard':    'Dashboard',
  '/patients':     'Patients',
  '/appointments': 'Appointments',
  '/profile':      'My Profile',
};

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const title = pageTitles[location.pathname] || 'MediCare';

  return (
    <header className="topbar">
      <h1 className="page-title">{title}</h1>

      <div className="topbar-right">
        {/* Search button */}
        <button className="icon-btn" title="Search">🔍</button>

        {/* Notifications button */}
        <button className="icon-btn" title="Notifications">🔔</button>

        {/* Avatar — click to go to profile */}
        <div
          className="avatar"
          title="View Profile"
          onClick={() => navigate('/profile')}
          style={{ cursor: 'pointer' }}
        >
          DR
        </div>
      </div>
    </header>
  );
}

export default Navbar;
