import React, { useState } from 'react';
import './Appointments.css';

const allAppointments = [
  { time: '9:00 AM',  name: 'Kiran Modi',   type: 'General Checkup', doctor: 'Dr. Mehta', status: 'confirmed' },
  { time: '10:00 AM', name: 'Rahul Sharma', type: 'Follow-up',       doctor: 'Dr. Mehta', status: 'confirmed' },
  { time: '11:30 AM', name: 'Priya Patel',  type: 'Cardiology',      doctor: 'Dr. Shah',  status: 'pending'   },
  { time: '2:00 PM',  name: 'Amit Joshi',   type: 'Orthopedics',     doctor: 'Dr. Verma', status: 'pending'   },
  { time: '3:30 PM',  name: 'Sneha Gupta',  type: 'Dermatology',     doctor: 'Dr. Mehta', status: 'cancelled' },
];

const tabs = ['All', 'Confirmed', 'Pending', 'Cancelled'];

function Appointments() {
  const [activeTab, setActiveTab] = useState('All');

  const filtered = activeTab === 'All'
    ? allAppointments
    : allAppointments.filter((a) => a.status === activeTab.toLowerCase());

  return (
    <div className="appointments-page">

      {/* Filter Tabs */}
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Patient</th>
              <th>Type</th>
              <th>Doctor</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr><td colSpan="5" className="empty-row">No appointments found.</td></tr>
            ) : (
              filtered.map((a, i) => (
                <tr key={i}>
                  <td className="muted">{a.time}</td>
                  <td><strong>{a.name}</strong></td>
                  <td>{a.type}</td>
                  <td>{a.doctor}</td>
                  <td><span className={`pill ${a.status}`}>{a.status}</span></td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Appointments;
