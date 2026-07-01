import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import './Layout.css';

// Layout wraps every page — Sidebar on left, Navbar on top, page content in middle
function Layout() {
  return (
    <div className="shell">
      <Sidebar />
      <div className="main">
        <Navbar />
        <div className="content">
          {/* Outlet renders the current page (Dashboard / Patients / etc.) */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
