import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BookCard.css';

const BookCard = ({ book }) => {
  const navigate = useNavigate();

  const handleQuickView = () => {
    navigate(`/product/${book.id}`);
  };

  return (
    <div className="book-card">
      <div className="book-card-cover" style={{ backgroundColor: book.color }} onClick={handleQuickView}>
        <div className="book-card-spine"></div>
        <div className="book-card-title">{book.title}</div>
        <div className="book-card-author">{book.author}</div>
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
