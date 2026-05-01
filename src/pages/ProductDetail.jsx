import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { books } from '../data/books';
import BookCard from '../components/BookCard';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = books.find(b => b.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  if (!book) {
    return (
      <div className="container section">
        <h2>Book not found</h2>
        <button onClick={() => navigate('/shop')} className="btn btn-primary">
          Back to Shop
        </button>
      </div>
    );
  }

  const relatedBooks = books
    .filter(b => b.genre === book.genre && b.id !== book.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    alert(`Added ${quantity} x ${book.title} to cart!`);
  };

  return (
    <div className="product-detail section">
      <div className="container">
        <button className="back-btn" onClick={() => navigate('/shop')}>
          ← Back to Shop
        </button>

        <div className="product-main">
          {/* Product Image */}
          <div className="product-image-section">
            <div
              className="product-image"
              style={{ backgroundColor: book.color }}
            >
              <div className="book-spine"></div>
              <div className="product-image-content">
                <h2 className="product-image-title">{book.title}</h2>
                <p className="product-image-author">{book.author}</p>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="product-info">
            <div className="product-genre">{book.genre}</div>
            <h1 className="product-title">{book.title}</h1>
            <p className="product-author">by {book.author}</p>

            <div className="product-rating">
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill={i < Math.floor(book.rating) ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <span className="rating-value">{book.rating} / 5.0</span>
            </div>

            <div className="product-price">
              <span className="price-current">${book.price}</span>
            </div>

            <div className="product-description">
              <h3>Description</h3>
              <p>
                {book.description ||
                  `${book.title} by ${book.author} is a captivating ${book.genre.toLowerCase()} novel that will keep you engaged from start to finish. This highly-rated book has earned ${book.rating} stars from readers worldwide.`
                }
              </p>
            </div>

            <div className="product-actions">
              <div className="quantity-selector">
                <button
                  className="quantity-btn"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <span className="quantity-value">{quantity}</span>
                <button
                  className="quantity-btn"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>

              <button className="btn btn-primary add-to-cart" onClick={handleAddToCart}>
                Add to Cart
              </button>

              <button className="btn btn-secondary">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>

        {/* Related Books */}
        {relatedBooks.length > 0 && (
          <div className="related-section">
            <h2 className="related-title">Related Books</h2>
            <div className="related-grid">
              {relatedBooks.map(book => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
