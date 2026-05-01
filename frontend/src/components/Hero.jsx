import React from 'react';
import { books } from '../data/books';
import './Hero.css';

const Hero = () => {
  const featuredBooks = books.filter(book => book.featured);

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
                  animationDelay: `${index * 0.2}s`,
                  '--book-color': book.color
                }}
              >
                <div className="hero-book-cover" style={{ backgroundColor: book.color }}>
                  <div className="book-spine"></div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-author">{book.author}</div>
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
