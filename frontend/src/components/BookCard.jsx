import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookCard.css';

const BookCard = ({ book }) => {
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);

  const handleQuickView = () => {
    navigate(`/product/${book.id}`);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="book-card">
      <div className="book-card-cover" onClick={handleQuickView}>
        {!imageError ? (
          <img
            src={book.image}
            alt={book.title}
            className="book-cover-image"
            onError={handleImageError}
          />
        ) : (
          <div className="book-cover-placeholder">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            <p className="placeholder-text">{book.title}</p>
          </div>
        )}
        <div className="book-card-overlay">
          <button className="quick-view-btn" onClick={handleQuickView}>Quick View</button>
        </div>
      </div>
      <div className="book-card-info">
        <div className="book-card-genre">{book.genre}</div>
        <h3 className="book-card-name">{book.title}</h3>
        <p className="book-card-writer">{book.author}</p>
        <div className="book-card-footer">
          <div className="book-card-rating">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span>{book.rating}</span>
          </div>
          <div className="book-card-price">${book.price}</div>
        </div>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default BookCard;
