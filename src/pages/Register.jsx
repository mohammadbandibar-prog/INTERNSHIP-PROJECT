import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Auth.css';

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: '', phone: '', email: '', password: '', confirm: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const errs = {};
    if (!form.fullName.trim()) errs.fullName = 'Full name is required';
    if (!form.phone.trim())    errs.phone    = 'Phone number is required';
    if (!form.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errs.email = 'Enter a valid email address';
    }
    if (!form.password) {
      errs.password = 'Password is required';
    } else if (form.password.length < 6) {
      errs.password = 'Password must be at least 6 characters';
    }
    if (!form.confirm) {
      errs.confirm = 'Please confirm your password';
    } else if (form.confirm !== form.password) {
      errs.confirm = 'Passwords do not match';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Account created! Please sign in.');
      navigate('/login');  // Go to login after register
    }, 1000);
  };

  return (
    <div className="auth-screen">
      <div className="auth-card">

        <div className="auth-logo">
          <div className="logo-icon">&#10084;</div>
          <span className="logo-text">MediCare</span>
        </div>

        <h2 className="auth-title">Create account</h2>
        <p className="auth-sub">Register as a new user</p>

        <form onSubmit={handleSubmit} noValidate>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fullName">Full name</label>
              <input id="fullName" name="fullName" type="text" placeholder="Rahul Sharma"
                value={form.fullName} onChange={handleChange}
                className={errors.fullName ? 'input-error' : ''} />
              {errors.fullName && <span className="err-msg">{errors.fullName}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" type="text" placeholder="+91 98765..."
                value={form.phone} onChange={handleChange}
                className={errors.phone ? 'input-error' : ''} />
              {errors.phone && <span className="err-msg">{errors.phone}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input id="email" name="email" type="email" placeholder="you@example.com"
              value={form.email} onChange={handleChange}
              className={errors.email ? 'input-error' : ''} />
            {errors.email && <span className="err-msg">{errors.email}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input id="password" name="password" type="password" placeholder="Min 6 chars"
                value={form.password} onChange={handleChange}
                className={errors.password ? 'input-error' : ''} />
              {errors.password && <span className="err-msg">{errors.password}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="confirm">Confirm</label>
              <input id="confirm" name="confirm" type="password" placeholder="Repeat"
                value={form.confirm} onChange={handleChange}
                className={errors.confirm ? 'input-error' : ''} />
              {errors.confirm && <span className="err-msg">{errors.confirm}</span>}
            </div>
          </div>

          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? 'Creating account...' : 'Create account'}
          </button>

        </form>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>

      </div>
    </div>
  );
}

export default Register;
