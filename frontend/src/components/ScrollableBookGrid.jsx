import React, { useRef, useEffect, useCallback } from 'react';
import BookCard from './BookCard';
import './ScrollableBookGrid.css';

const ScrollableBookGrid = ({ books, title, subtitle, showViewAll = false }) => {
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const lastX = useRef(0);
  const lastTime = useRef(0);
  const velocity = useRef(0);
  const momentumAnimation = useRef(null);

  const handleMouseDown = useCallback((e) => {
    if (momentumAnimation.current) {
      cancelAnimationFrame(momentumAnimation.current);
      momentumAnimation.current = null;
    }
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
    lastX.current = e.pageX;
    lastTime.current = Date.now();
    velocity.current = 0;
    scrollRef.current.style.cursor = 'grabbing';
    scrollRef.current.classList.add('dragging');
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();

    const now = Date.now();
    const timeDiff = now - lastTime.current;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (startX.current - x) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current + walk;

    // Calculate velocity
    if (timeDiff > 0) {
      const deltaX = lastX.current - e.pageX;
      velocity.current = deltaX / timeDiff * 10;
    }
    lastX.current = e.pageX;
    lastTime.current = now;
  }, []);

  const handleMouseUp = useCallback(() => {
    if (!isDragging.current) return;
    isDragging.current = false;

    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab';
      scrollRef.current.classList.remove('dragging');

      // Apply momentum with smooth deceleration
      const applyMomentum = () => {
        if (Math.abs(velocity.current) < 0.5 || !scrollRef.current) return;

        scrollRef.current.scrollLeft += velocity.current;
        velocity.current *= 0.95; // Deceleration factor

        momentumAnimation.current = requestAnimationFrame(applyMomentum);
      };

      momentumAnimation.current = requestAnimationFrame(applyMomentum);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      if (momentumAnimation.current) {
        cancelAnimationFrame(momentumAnimation.current);
      }
    };
  }, [handleMouseMove, handleMouseUp]);

  const handleMouseLeave = () => {
    if (isDragging.current) {
      isDragging.current = false;
      if (scrollRef.current) {
        scrollRef.current.style.cursor = 'grab';
        scrollRef.current.classList.remove('dragging');
      }
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="scrollable-book-grid-section section">
      <div className="container">
        {title && (
          <div className="section-header">
            <h2 className="section-title">{title}</h2>
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </div>
        )}

        <div className="book-scroll-wrapper">
          <button
            className="book-scroll-btn book-scroll-left"
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            ←
          </button>

          <div
            className="book-scroll-container"
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
          >
            {books.map((book) => (
              <div key={book.id} className="book-scroll-item">
                <BookCard book={book} />
              </div>
            ))}
          </div>

          <button
            className="book-scroll-btn book-scroll-right"
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            →
          </button>
        </div>

        {showViewAll && (
          <div className="book-scroll-footer">
            <button className="btn-view-all">View All Books</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ScrollableBookGrid;
