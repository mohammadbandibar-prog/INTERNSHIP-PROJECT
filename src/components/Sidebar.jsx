import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Sidebar.css';

const navItems = [
  { path: '/dashboard',    label: 'Dashboard',     icon: '🏠' },
  { path: '/patients',     label: 'Patients',      icon: '👥' },
  { path: '/appointments', label: 'Appointments',  icon: '📅' },
  { path: '/profile',      label: 'Profile',       icon: '👤' },
];

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');  // Goes back to Login page
  };

  return (
    <aside className="sidebar">

      {/* Logo */}
      <div className="sb-logo">
        <div className="logo-icon">&#10084;</div>
        <span className="logo-text">MediCare</span>
      </div>

      {/* Navigation Links */}
      <nav className="sb-nav">
        <p className="nav-label">Main</p>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <span className="nav-icon">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}

        <p className="nav-label" style={{ marginTop: '12px' }}>Account</p>
        <button className="nav-item logout-btn" onClick={handleLogout}>
          <span className="nav-icon">🚪</span>
          Logout
        </button>
      </nav>

      {/* User info at bottom */}
      <div className="sb-footer">
        <div className="user-row">
          <div className="avatar">DR</div>
          <div>
            <div className="user-name">Dr. Mohammed Bandibar</div>
            <div className="user-role">Admin</div>
          </div>
        </div>
      </div>

    </aside>
  );
}

export default Sidebar;
