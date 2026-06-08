import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FileText, LogOut, User } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo-container">
        <div className="nav-icon">
          <FileText color="white" size={24} />
        </div>
        <h2 className="nav-title">
          Smart<span className="text-gradient">Analyzer</span>
        </h2>
      </Link>

      <div className="nav-links">
        {!isAuthenticated ? (
          <>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/register">
              <button className="btn-primary">
                Get Started
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/analyzer" className="nav-link-active">
              <User size={18} />
              Analyzer
            </Link>
            <button 
              onClick={handleLogout}
              className="btn-danger"
            >
              <LogOut size={16} />
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
