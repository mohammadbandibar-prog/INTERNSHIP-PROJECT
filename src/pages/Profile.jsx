import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className="profile-page">

      {/* Hero Banner */}
      <div className="profile-hero card">
        <div className="profile-avatar">DR</div>
        <div>
          <h2 className="profile-name">Dr. Riya Patel</h2>
          <p className="profile-meta">Admin · Cardiology · Brainybeam Info-Tech PVT LTD</p>
        </div>
      </div>

      {/* Info Grid */}
      <div className="profile-grid">

        <div className="card">
          <div className="card-header"><span className="card-title">Personal Information</span></div>
          <div className="info-row"><span className="info-key">Full Name</span><span className="info-val">Dr. Mohammed Bandibar</span></div>
          <div className="info-row"><span className="info-key">Email</span><span className="info-val">bandibarmohammad001@medicare.com</span></div>
          <div className="info-row"><span className="info-key">Phone</span><span className="info-val">+91 8200388850</span></div>
          <div className="info-row"><span className="info-key">Department</span><span className="info-val">Cardiology</span></div>
          <div className="info-row"><span className="info-key">Location</span><span className="info-val">Ahmedabad, Gujarat</span></div>
        </div>

        <div className="card">
          <div className="card-header"><span className="card-title">Account Settings</span></div>
          <div className="info-row"><span className="info-key">Role</span><span className="info-val">Admin</span></div>
          <div className="info-row"><span className="info-key">Joined</span><span className="info-val">January 2025</span></div>
          <div className="info-row"><span className="info-key">Status</span><span className="info-val green">Active</span></div>
          <div className="info-row"><span className="info-key">Two-Factor Auth</span><span className="info-val">Enabled</span></div>
          <div className="info-row"><span className="info-key">Technology</span><span className="info-val">MERN Stack</span></div>
        </div>

      </div>
    </div>
  );
}

export default Profile;
