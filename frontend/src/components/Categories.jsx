import React, { useRef, useState } from 'react';
import { categories } from '../data/books';
import './Categories.css';

const Categories = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <section className="categories section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Browse by Genre</h2>
          <p className="section-subtitle">
            Explore our carefully curated collections across diverse literary landscapes
          </p>
        </div>
      </div>

      <div className="categories-carousel-wrapper">
        <button
          className="carousel-btn carousel-btn-left"
          onClick={() => scroll('left')}
          style={{ opacity: canScrollLeft ? 1 : 0.3, pointerEvents: canScrollLeft ? 'auto' : 'none' }}
          aria-label="Scroll left"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>

        <div
          className="categories-carousel"
          ref={scrollRef}
          onScroll={checkScroll}
        >
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

        <button
          className="carousel-btn carousel-btn-right"
          onClick={() => scroll('right')}
          style={{ opacity: canScrollRight ? 1 : 0.3, pointerEvents: canScrollRight ? 'auto' : 'none' }}
          aria-label="Scroll right"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Categories;