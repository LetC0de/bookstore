import React from 'react';
import './BlogSection.css';

const BlogSection = () => {
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
    }
  ];

  return (
    <section className="blog-section section">
      <div className="container">
        <div className="blog-header">
          <h2 className="blog-title">Good Reads</h2>
          <p className="blog-subtitle">Stories, insights, and recommendations from the world of books</p>
        </div>

        <div className="blog-grid">
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

        <div className="blog-footer">
          <button className="btn btn-secondary">View All Articles</button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
