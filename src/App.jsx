import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import BookGrid from './components/BookGrid';
import Footer from './components/Footer';
import { books } from './data/books';
import './App.css';

function App() {
  const nonFeaturedBooks = books.filter(book => !book.featured);

  return (
    <div className="app">
      <Header />
      <Hero />
      <Categories />
      <BookGrid books={nonFeaturedBooks} title="Curated Collection" />
      <Footer />
    </div>
  );
}

export default App;
