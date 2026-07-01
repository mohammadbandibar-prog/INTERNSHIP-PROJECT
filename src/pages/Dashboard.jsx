import React from 'react';
import { useNavigate } from 'react-router-dom';
import StatCard from '../components/StatCard';
import './Dashboard.css';

// Sample data — replace with API data using useEffect + axios
const recentPatients = [
  { id: 'P001', name: 'Rahul Sharma',  doctor: 'Dr. Mehta', date: 'Today, 10:00 AM', status: 'scheduled' },
  { id: 'P002', name: 'Priya Patel',   doctor: 'Dr. Shah',  date: 'Today, 11:30 AM', status: 'pending'   },
  { id: 'P003', name: 'Amit Joshi',    doctor: 'Dr. Verma', date: 'Today, 2:00 PM',  status: 'scheduled' },
  { id: 'P004', name: 'Sneha Gupta',   doctor: 'Dr. Mehta', date: 'Today, 3:30 PM',  status: 'cancelled' },
];

const todaySchedule = [
  { time: '9:00 AM',  name: 'Kiran Modi',   type: 'General Checkup', done: true  },
  { time: '10:00 AM', name: 'Rahul Sharma', type: 'Follow-up',       done: true  },
  { time: '11:30 AM', name: 'Priya Patel',  type: 'Cardiology',      done: false },
  { time: '2:00 PM',  name: 'Amit Joshi',   type: 'Orthopedics',     done: false },
];

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-page">

      {/* ── Stat Cards Row ── */}
      <div className="stats-grid">
        <StatCard icon="👥" label="Total Patients"       value="248" delta="12% this month" deltaType="up"   color="green" />
        <StatCard icon="📅" label="Today's Appointments" value="14"  delta="3 from yesterday" deltaType="up" color="amber" />
        <StatCard icon="📄" label="Pending Reports"      value="7"   delta="2 new today"    deltaType="down" color="red"   />
        <StatCard icon="👤" label="Doctors Active"       value="11"  delta="All on duty"     deltaType="up"  color="blue"  />
      </div>

      <div className="dash-grid">

        {/* ── Recent Patients Table ── */}
        <div className="card">
          <div className="card-header">
            <span className="card-title">Recent Patients</span>
            <button className="card-action" onClick={() => navigate('/patients')}>View all →</button>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentPatients.map((p) => (
                <tr key={p.id}>
                  <td><strong>{p.name}</strong></td>
                  <td>{p.doctor}</td>
                  <td className="muted">{p.date}</td>
                  <td><span className={`pill ${p.status}`}>{p.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Today's Schedule ── */}
        <div className="card">
          <div className="card-header">
            <span className="card-title">Today's Schedule</span>
            <button className="card-action" onClick={() => navigate('/appointments')}>View all →</button>
          </div>
          {todaySchedule.map((a, i) => (
            <div className="appt-item" key={i}>
              <span className="appt-time">{a.time}</span>
              <div className={`appt-dot ${a.done ? '' : 'pending'}`}></div>
              <div>
                <div className="appt-name">{a.name}</div>
                <div className="appt-type">{a.type}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
