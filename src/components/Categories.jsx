import React from 'react';
import { categories } from '../data/books';
import './Categories.css';

const Categories = () => {
  return (
    <section className="categories section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Browse by Genre</h2>
          <p className="section-subtitle">
            Explore our carefully curated collections across diverse literary landscapes
          </p>
        </div>

        <div className="categories-grid">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="category-card"
              style={{
                '--category-color': category.color,
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="category-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
              </div>
              <h3 className="category-name">{category.name}</h3>
              <p className="category-count">{category.count} Books</p>
              <button className="category-btn">Explore →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
