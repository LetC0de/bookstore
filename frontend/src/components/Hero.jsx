import React, { useState } from 'react';
import { books } from '../data/books';
import './Hero.css';

const Hero = () => {
  const featuredBooks = books.filter(book => book.featured);
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (bookId) => {
    setImageErrors(prev => ({ ...prev, [bookId]: true }));
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-label">Spring Collection 2026</span>
            <h1 className="hero-title">
              Discover Stories<br />
              That Transform
            </h1>
            <p className="hero-description">
              Curated selections from the world's finest authors.
              Each book chosen for its ability to transport, inspire, and endure.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Explore Collection</button>
              <button className="btn btn-secondary">View Bestsellers</button>
            </div>
          </div>

          <div className="hero-books">
            {featuredBooks.map((book, index) => (
              <div
                key={book.id}
                className="hero-book"
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div className="hero-book-cover">
                  {!imageErrors[book.id] ? (
                    <img
                      src={book.image}
                      alt={book.title}
                      className="hero-book-image"
                      onError={() => handleImageError(book.id)}
                    />
                  ) : (
                    <div className="hero-book-placeholder">
                      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                      </svg>
                    </div>
                  )}
                </div>
                <div className="hero-book-info">
                  <h3>{book.title}</h3>
                  <p>{book.author}</p>
                  <span className="price">${book.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
