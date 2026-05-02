import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageErrors, setImageErrors] = useState({});

  const slides = [
    {
      label: "Spring Collection 2026",
      title: "Discover Stories That Transform",
      description: "Curated selections from the world's finest authors. Each book chosen for its ability to transport, inspire, and endure.",
      books: [
        {
          id: 1,
          image: "https://covers.openlibrary.org/b/isbn/9780525559474-L.jpg",
          title: "The Midnight Library",
          author: "Matt Haig",
          price: "24.99"
        },
        {
          id: 2,
          image: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg",
          title: "Atomic Habits",
          author: "James Clear",
          price: "27.99"
        },
        {
          id: 3,
          image: "https://covers.openlibrary.org/b/isbn/9780593135204-L.jpg",
          title: "Project Hail Mary",
          author: "Andy Weir",
          price: "28.99"
        }
      ]
    },
    {
      label: "Bestsellers 2026",
      title: "Most Loved Books This Year",
      description: "Join millions of readers worldwide. These are the books everyone is talking about, from gripping thrillers to heartwarming tales.",
      books: [
        {
          id: 4,
          image: "https://covers.openlibrary.org/b/isbn/9780316769174-L.jpg",
          title: "The Catcher in the Rye",
          author: "J.D. Salinger",
          price: "22.99"
        },
        {
          id: 5,
          image: "https://covers.openlibrary.org/b/isbn/9780061120084-L.jpg",
          title: "To Kill a Mockingbird",
          author: "Harper Lee",
          price: "25.99"
        },
        {
          id: 6,
          image: "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg",
          title: "The Great Gatsby",
          author: "F. Scott Fitzgerald",
          price: "21.99"
        }
      ]
    },
    {
      label: "New Arrivals",
      title: "Fresh Off The Press",
      description: "Be the first to explore our newest additions. From debut authors to established voices, discover your next favorite read.",
      books: [
        {
          id: 7,
          image: "https://covers.openlibrary.org/b/isbn/9780385490818-L.jpg",
          title: "The Handmaid's Tale",
          author: "Margaret Atwood",
          price: "26.99"
        },
        {
          id: 8,
          image: "https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg",
          title: "The Hobbit",
          author: "J.R.R. Tolkien",
          price: "29.99"
        },
        {
          id: 9,
          image: "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg",
          title: "1984",
          author: "George Orwell",
          price: "23.99"
        }
      ]
    },
    {
      label: "Award Winners",
      title: "Critically Acclaimed Masterpieces",
      description: "Celebrate excellence in literature. These award-winning titles have captivated critics and readers alike with their brilliance.",
      books: [
        {
          id: 10,
          image: "https://covers.openlibrary.org/b/isbn/9780060935467-L.jpg",
          title: "To Kill a Mockingbird",
          author: "Harper Lee",
          price: "24.99"
        },
        {
          id: 11,
          image: "https://covers.openlibrary.org/b/isbn/9780679783268-L.jpg",
          title: "Pride and Prejudice",
          author: "Jane Austen",
          price: "20.99"
        },
        {
          id: 12,
          image: "https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg",
          title: "Jane Eyre",
          author: "Charlotte Brontë",
          price: "22.99"
        }
      ]
    },
    {
      label: "Limited Edition",
      title: "Exclusive Collector's Items",
      description: "Own a piece of literary history. These special editions feature stunning covers, premium paper, and exclusive content.",
      books: [
        {
          id: 13,
          image: "https://covers.openlibrary.org/b/isbn/9780544003415-L.jpg",
          title: "The Lord of the Rings",
          author: "J.R.R. Tolkien",
          price: "49.99"
        },
        {
          id: 14,
          image: "https://covers.openlibrary.org/b/isbn/9780439708180-L.jpg",
          title: "Harry Potter",
          author: "J.K. Rowling",
          price: "45.99"
        },
        {
          id: 15,
          image: "https://covers.openlibrary.org/b/isbn/9780345339683-L.jpg",
          title: "The Hobbit",
          author: "J.R.R. Tolkien",
          price: "39.99"
        }
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleImageError = (bookId) => {
    setImageErrors(prev => ({ ...prev, [bookId]: true }));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-carousel">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className={`hero-content ${slideIndex === currentSlide ? 'active' : ''}`}
            >
              <div className="hero-text">
                <span className="hero-label">{slide.label}</span>
                <h1 className="hero-title">
                  {slide.title.split(' ').slice(0, 2).join(' ')}<br />
                  {slide.title.split(' ').slice(2).join(' ')}
                </h1>
                <p className="hero-description">
                  {slide.description}
                </p>
                <div className="hero-buttons">
                  <button className="btn btn-primary">Explore Collection</button>
                  <button className="btn btn-secondary">View Bestsellers</button>
                </div>
              </div>

              <div className="hero-books">
                {slide.books.map((book, index) => (
                  <div
                    key={book.id}
                    className="hero-book"
                    style={{
                      animationDelay: `${index * 0.2}s`
                    }}
                  >
                    <div className="hero-book-cover">
                      {!imageErrors[book.id] ? (
                        <img
                          src={book.image}
                          alt={book.title}
                          className="hero-book-image"
                          onError={() => handleImageError(book.id)}
                        />
                      ) : (
                        <div className="hero-book-placeholder">
                          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="hero-book-info">
                      <h3>{book.title}</h3>
                      <p>{book.author}</p>
                      <span className="price">${book.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="hero-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
