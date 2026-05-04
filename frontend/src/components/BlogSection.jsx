import React, { useRef, useEffect, useCallback } from 'react';
import './BlogSection.css';

const BlogSection = () => {
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

  const blogPosts = [
    {
      id: 1,
      title: "10 Must-Read Books of 2026",
      excerpt: "Discover the most captivating books that defined this year's literary landscape.",
      date: "April 28, 2026",
      image: "#8E44AD",
      category: "Book Lists"
    },
    {
      id: 2,
      title: "How to Build a Reading Habit",
      excerpt: "Simple strategies to help you read more consistently and enjoy the journey.",
      date: "April 25, 2026",
      image: "#3498DB",
      category: "Reading Tips"
    },
    {
      id: 3,
      title: "Author Spotlight: Contemporary Fiction",
      excerpt: "Meet the voices shaping modern storytelling and their latest works.",
      date: "April 20, 2026",
      image: "#E74C3C",
      category: "Authors"
    },
    {
      id: 4,
      title: "The Art of Slow Reading",
      excerpt: "Why taking your time with literature creates deeper connections and lasting memories.",
      date: "April 15, 2026",
      image: "#27AE60",
      category: "Reading Philosophy"
    },
    {
      id: 5,
      title: "Book Club Essentials",
      excerpt: "Everything you need to host the perfect literary gathering with friends.",
      date: "April 12, 2026",
      image: "#F39C12",
      category: "Book Clubs"
    },
    {
      id: 6,
      title: "Literary Travel Destinations",
      excerpt: "Visit the places that inspired the world's greatest novels and authors.",
      date: "April 10, 2026",
      image: "#1ABC9C",
      category: "Travel"
    },
    {
      id: 7,
      title: "Classic Books for Beginners",
      excerpt: "A curated list of timeless masterpieces perfect for new readers.",
      date: "April 8, 2026",
      image: "#9B59B6",
      category: "Beginners"
    },
    {
      id: 8,
      title: "The Psychology of Storytelling",
      excerpt: "How narratives shape our minds and influence human behavior.",
      date: "April 5, 2026",
      image: "#34495E",
      category: "Psychology"
    },
    {
      id: 9,
      title: "Indie Authors to Watch",
      excerpt: "Discover emerging voices that are redefining contemporary literature.",
      date: "April 2, 2026",
      image: "#E67E22",
      category: "Indie"
    }
  ];

  return (
    <section className="blog-section section">
      <div className="container">
        <div className="blog-header">
          <h2 className="blog-title">Good Reads</h2>
          <p className="blog-subtitle">Stories, insights, and recommendations from the world of books</p>
        </div>

        <div className="blog-scroll-wrapper">
          <button
            className="blog-scroll-btn blog-scroll-left"
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            ←
          </button>

          <div
            className="blog-grid"
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
          >
            {blogPosts.map(post => (
            <article key={post.id} className="blog-card">
              <div className="blog-image" style={{ backgroundColor: post.image }}>
                <div className="blog-category">{post.category}</div>
              </div>
              <div className="blog-content">
                <div className="blog-date">{post.date}</div>
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <a href="#" className="blog-link">
                  Read More →
                </a>
              </div>
            </article>
          ))}
          </div>

          <button
            className="blog-scroll-btn blog-scroll-right"
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            →
          </button>
        </div>

        <div className="blog-footer">
          <button className="btn btn-secondary">View All Articles</button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
