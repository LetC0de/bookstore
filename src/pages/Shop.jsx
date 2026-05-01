import React, { useState } from 'react';
import { books } from '../data/books';
import BookCard from '../components/BookCard';
import './Shop.css';

const Shop = () => {
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [sortBy, setSortBy] = useState('popularity');

  const categories = ['All', 'Fiction', 'Mystery', 'Science Fiction', 'Fantasy', 'Non-Fiction', 'Self-Help'];

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredBooks(books);
    } else {
      setFilteredBooks(books.filter(book => book.genre === category));
    }
  };

  const handleSort = (sortType) => {
    setSortBy(sortType);
    let sorted = [...filteredBooks];

    switch(sortType) {
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      default:
        sorted.sort((a, b) => b.rating - a.rating);
    }

    setFilteredBooks(sorted);
  };

  return (
    <div className="shop-page section">
      <div className="container">
        <div className="shop-header">
          <h1 className="shop-title">Browse Books</h1>
          <p className="shop-subtitle">Discover your next great read from our curated collection</p>
        </div>

        <div className="shop-content">
          {/* Filters Sidebar */}
          <aside className="shop-filters">
            <div className="filter-section">
              <h3 className="filter-title">Categories</h3>
              <div className="filter-options">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => handleCategoryFilter(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h3 className="filter-title">Sort By</h3>
              <select
                className="sort-select"
                value={sortBy}
                onChange={(e) => handleSort(e.target.value)}
              >
                <option value="popularity">Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>

            <div className="filter-section">
              <h3 className="filter-title">Price Range</h3>
              <div className="price-range">
                <span>${priceRange[0]}</span>
                <span>-</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="shop-products">
            <div className="products-header">
              <p className="products-count">{filteredBooks.length} Books Found</p>
            </div>

            <div className="products-grid">
              {filteredBooks.map(book => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
