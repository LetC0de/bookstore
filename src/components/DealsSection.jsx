import React from 'react';
import BookCard from './BookCard';
import './DealsSection.css';

const DealsSection = ({ books }) => {
  return (
    <section className="deals-section section">
      <div className="container">
        <div className="deals-header">
          <div className="deals-badge">🔥 Limited Time Offer</div>
          <h2 className="deals-title">Special Deals & Discounts</h2>
          <p className="deals-subtitle">Grab these amazing offers before they're gone!</p>
        </div>

        <div className="deals-grid">
          {books.map(book => (
            <div key={book.id} className="deal-item">
              <div className="deal-badge">
                <span className="discount-percent">20% OFF</span>
              </div>
              <BookCard book={book} />
            </div>
          ))}
        </div>

        <div className="deals-footer">
          <button className="btn btn-primary">View All Deals</button>
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
