import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Login successful! (UI Only)');
    navigate('/');
  };

  return (
    <div className="auth-page section">
      <div className="container">
        <div className="auth-container">
          <div className="auth-card">
            <h1 className="auth-title">Welcome Back</h1>
            <p className="auth-subtitle">Login to your account</p>

            <form className="auth-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Enter your password"
                />
              </div>

              <div className="form-options">
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="forgot-link">Forgot password?</a>
              </div>

              <button type="submit" className="btn btn-primary auth-btn">
                Login
              </button>
            </form>

            <div className="auth-footer">
              <p>Don't have an account? <a href="/signup">Sign up</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
