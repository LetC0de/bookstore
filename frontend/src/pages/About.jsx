import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <span className="about-label">Our Story</span>
            <h1 className="about-title">Curating Literary Excellence Since 1892</h1>
            <p className="about-description">
              Bibliotheca began as a small antiquarian bookshop in London, driven by a passion
              for rare manuscripts and first editions. Today, we've evolved into a premier destination
              for book collectors and literary enthusiasts worldwide, bridging the timeless charm of
              rare books with modern accessibility.
            </p>
          </div>
        </div>
      </section>

      <section className="about-mission section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3>Our Mission</h3>
              <p>To preserve literary heritage and make rare, exceptional books accessible to passionate readers and collectors around the globe.</p>
            </div>

            <div className="mission-card">
              <div className="mission-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
              </div>
              <h3>Our Vision</h3>
              <p>To become the world's most trusted curator of rare and collectible books, fostering a global community of literary appreciation.</p>
            </div>

            <div className="mission-card">
              <div className="mission-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3>Our Values</h3>
              <p>Authenticity, expertise, and passion guide everything we do. Every book is carefully authenticated and described with scholarly precision.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-team section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Meet Our Curators</h2>
            <p className="section-subtitle">
              A team of bibliophiles, historians, and literary experts dedicated to finding extraordinary books
            </p>
          </div>

          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h4>Eleanor Ashford</h4>
              <p className="team-role">Chief Curator</p>
              <p className="team-bio">30 years of experience in rare book authentication and literary history. Specializes in 19th-century first editions.</p>
            </div>

            <div className="team-card">
              <div className="team-avatar">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h4>Marcus Chen</h4>
              <p className="team-role">Senior Acquisitions</p>
              <p className="team-bio">Expert in Asian literature and manuscripts. Travels globally to source exceptional additions to our collection.</p>
            </div>

            <div className="team-card">
              <div className="team-avatar">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h4>Sofia Ramirez</h4>
              <p className="team-role">Conservation Specialist</p>
              <p className="team-bio">Master conservator ensuring every book is preserved with archival-quality care and restoration techniques.</p>
            </div>

            <div className="team-card">
              <div className="team-avatar">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h4>James Whitmore</h4>
              <p className="team-role">Literary Historian</p>
              <p className="team-bio">PhD in Comparative Literature. Provides scholarly context and provenance research for our rare acquisitions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-features section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-number">130+</div>
              <h4>Years of Heritage</h4>
              <p>Over a century of expertise in rare book curation</p>
            </div>

            <div className="feature-item">
              <div className="feature-number">50K+</div>
              <h4>Rare Books</h4>
              <p>Carefully authenticated titles in our collection</p>
            </div>

            <div className="feature-item">
              <div className="feature-number">120+</div>
              <h4>Countries Served</h4>
              <p>Global reach with secure worldwide shipping</p>
            </div>

            <div className="feature-item">
              <div className="feature-number">98%</div>
              <h4>Satisfaction Rate</h4>
              <p>Trusted by collectors and institutions worldwide</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
