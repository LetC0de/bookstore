import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">Our Story</h2>
            <p className="about-description">
              At Bibliotheca, we believe that every book has the power to transform lives.
              Founded with a passion for making quality literature accessible to everyone,
              we curate a diverse collection of new and pre-loved books that inspire, educate, and entertain.
            </p>
            <p className="about-description">
              Our mission is simple: to create a community of readers who share our love for
              the written word. Whether you're searching for the latest bestseller or a timeless classic,
              we're here to help you discover your next great read.
            </p>

            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">📚</div>
                <h3 className="feature-title">Curated Selection</h3>
                <p className="feature-text">Handpicked books across all genres</p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">♻️</div>
                <h3 className="feature-title">Sustainable Reading</h3>
                <p className="feature-text">New & pre-loved books for eco-conscious readers</p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">💰</div>
                <h3 className="feature-title">Affordable Prices</h3>
                <p className="feature-text">Great deals and discounts every day</p>
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="about-image-card">
              <div className="image-placeholder">
                <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  <path d="M12 6v12"></path>
                  <path d="M8 10h8"></path>
                  <path d="M8 14h8"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
