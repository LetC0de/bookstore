import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (searchOpen) setSearchOpen(false);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" onClick={closeMobileMenu}>
            <h1>Bibliotheca</h1>
            <span className="logo-subtitle">Rare & Curated</span>
          </Link>

          <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
            <div className="nav-links">
              <Link to="/" className="nav-link" onClick={closeMobileMenu}>Home</Link>
              <Link to="/shop" className="nav-link" onClick={closeMobileMenu}>Shop</Link>
              <Link to="/login" className="nav-link" onClick={closeMobileMenu}>Login</Link>
            </div>
          </nav>

          <div className="header-actions">
            <div className="search-bar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
              <input type="text" placeholder="Search rare books..." />
            </div>

            <button className="cart-button" onClick={() => navigate('/cart')}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span className="cart-count">3</span>
            </button>
          </div>

          <div className="mobile-actions">
            <button className="mobile-search-btn" onClick={toggleSearch} aria-label="Search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>

            <button className="mobile-cart-btn" onClick={() => navigate('/cart')} aria-label="Cart">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span className="cart-count">3</span>
            </button>

            <button
              className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>

      <div className={`mobile-search-bar ${searchOpen ? 'open' : ''}`}>
        <div className="mobile-search-content">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          <input type="text" placeholder="Search rare books..." autoFocus />
          <button className="search-close-btn" onClick={toggleSearch} aria-label="Close search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`} onClick={closeMobileMenu}></div>

      <div className={`mobile-menu-dropdown ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-dropdown-content">
          <Link to="/" className="nav-link" onClick={closeMobileMenu}>Home</Link>
          <Link to="/shop" className="nav-link" onClick={closeMobileMenu}>Shop</Link>
          <Link to="/login" className="nav-link" onClick={closeMobileMenu}>Login</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
