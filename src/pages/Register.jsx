import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Mail, Lock, ArrowRight } from 'lucide-react';

const Register = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(u => u.email === formData.email)) {
      setError('Email already exists. Please login.');
      return;
    }

    users.push(formData);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(formData));
    
    setIsAuthenticated(true);
    navigate('/analyzer');
  };

  return (
    <div className="auth-container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-panel auth-box"
      >
        <div className="auth-header">
          <h2 className="auth-title">Create Account</h2>
          <p className="auth-subtitle">Join us to analyze and improve your resume</p>
        </div>

        {error && (
          <div className="alert-danger">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="input-group">
            <User size={20} color="var(--text-muted)" className="input-icon" />
            <input 
              type="text" 
              name="name"
              placeholder="Full Name" 
              value={formData.name}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="input-group">
            <Mail size={20} color="var(--text-muted)" className="input-icon" />
            <input 
              type="email" 
              name="email"
              placeholder="Email Address" 
              value={formData.email}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="input-group">
            <Lock size={20} color="var(--text-muted)" className="input-icon" />
            <input 
              type="password" 
              name="password"
              placeholder="Password" 
              value={formData.password}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <button type="submit" className="btn-primary btn-submit">
            Create Account <ArrowRight size={20} />
          </button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/login" className="auth-link">Login</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
