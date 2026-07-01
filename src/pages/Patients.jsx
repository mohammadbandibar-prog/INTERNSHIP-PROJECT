import React, { useState } from 'react';
import './Patients.css';

const initialPatients = [
  { id: 'P001', name: 'Rahul Sharma', age: 34, doctor: 'Dr. Mehta', date: 'Today, 10:00 AM', status: 'scheduled' },
  { id: 'P002', name: 'Priya Patel',  age: 28, doctor: 'Dr. Shah',  date: 'Today, 11:30 AM', status: 'pending'   },
  { id: 'P003', name: 'Amit Joshi',   age: 45, doctor: 'Dr. Verma', date: 'Today, 2:00 PM',  status: 'scheduled' },
  { id: 'P004', name: 'Sneha Gupta',  age: 31, doctor: 'Dr. Mehta', date: 'Today, 3:30 PM',  status: 'cancelled' },
];

const emptyForm = { name: '', age: '', doctor: '', date: '', status: 'pending' };

function Patients() {
  const [patients, setPatients] = useState(initialPatients);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.age)         errs.age  = 'Age is required';
    if (!form.doctor.trim()) errs.doctor = 'Doctor name is required';
    return errs;
  };

  const handleAdd = () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    const newPatient = {
      ...form,
      id: 'P00' + (patients.length + 1),
      date: form.date || 'Not scheduled',
    };
    setPatients([...patients, newPatient]);
    setForm(emptyForm);
    setErrors({});
    setShowModal(false);
  };

  return (
    <div className="patients-page">

      <div className="card">
        <div className="card-header">
          <span className="card-title">All Patients ({patients.length})</span>
          <button className="btn-primary btn-sm" onClick={() => setShowModal(true)}>+ Add Patient</button>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Doctor</th>
              <th>Appointment</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((p) => (
              <tr key={p.id}>
                <td className="muted">{p.id}</td>
                <td><strong>{p.name}</strong></td>
                <td>{p.age}</td>
                <td>{p.doctor}</td>
                <td className="muted">{p.date}</td>
                <td><span className={`pill ${p.status}`}>{p.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Add Patient Modal ── */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3 className="modal-title">Add New Patient</h3>

            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input name="name" value={form.name} onChange={handleChange} placeholder="Patient name" />
                {errors.name && <span className="err-msg">{errors.name}</span>}
              </div>
              <div className="form-group">
                <label>Age</label>
                <input name="age" type="number" value={form.age} onChange={handleChange} placeholder="Age" />
                {errors.age && <span className="err-msg">{errors.age}</span>}
              </div>
            </div>

            <div className="form-group">
              <label>Assigned Doctor</label>
              <input name="doctor" value={form.doctor} onChange={handleChange} placeholder="Dr. name" list="doctors" />
              <datalist id="doctors">
                <option value="Dr. Mehta" />
                <option value="Dr. Shah" />
                <option value="Dr. Verma" />
              </datalist>
              {errors.doctor && <span className="err-msg">{errors.doctor}</span>}
            </div>

            <div className="form-group">
              <label>Appointment Date & Time</label>
              <input name="date" type="datetime-local" value={form.date} onChange={handleChange} />
            </div>

            <div className="modal-footer">
              <button className="btn-outline" onClick={() => { setShowModal(false); setErrors({}); }}>Cancel</button>
              <button className="btn-primary btn-sm" onClick={handleAdd}>Add Patient</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Patients;
