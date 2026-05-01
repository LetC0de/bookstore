import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>Bibliotheca</h1>
            <span className="logo-subtitle">Rare & Curated</span>
          </div>

          <nav className="nav">
            <a href="#" className="nav-link">Collections</a>
            <a href="#" className="nav-link">Genres</a>
            <a href="#" className="nav-link">About</a>
          </nav>

          <div className="header-actions">
            <div className="search-bar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
              <input type="text" placeholder="Search rare books..." />
            </div>

            <button className="cart-button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span className="cart-count">3</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
