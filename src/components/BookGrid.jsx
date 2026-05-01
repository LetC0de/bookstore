import React from 'react';
import BookCard from './BookCard';
import './BookGrid.css';

const BookGrid = ({ books, title, subtitle }) => {
  return (
    <section className="book-grid-section section">
      <div className="container">
        {title && (
          <div className="section-header">
            <h2 className="section-title">{title}</h2>
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </div>
        )}
        <div className="book-grid">
          {books.map((book, index) => (
            <div key={book.id} style={{ animationDelay: `${index * 0.05}s` }}>
              <BookCard book={book} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookGrid;
