import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import BookGrid from '../components/BookGrid';
import DealsSection from '../components/DealsSection';
import BlogSection from '../components/BlogSection';
import AboutSection from '../components/AboutSection';
import SectionDivider from '../components/SectionDivider';
import { books } from '../data/books';

const Home = () => {
  const featuredBooks = books.filter(book => book.featured);
  const trendingBooks = books.filter(book => book.rating >= 4.6).slice(0, 8);
  const fictionBooks = books.filter(book => book.genre === 'Fiction').slice(0, 6);
  const nonFictionBooks = books.filter(book => book.genre === 'Non-Fiction').slice(0, 6);
  const dealsBooks = books.slice(0, 6);

  return (
    <div>
      <Hero />
      <SectionDivider variant="default" />
      <Categories />
      <SectionDivider variant="cool" />
      <BookGrid books={trendingBooks} title="Trending Now" subtitle="Most popular books this week" variant="trending" />
      <SectionDivider variant="pink" />
      <BookGrid books={fictionBooks} title="Fiction Favorites" subtitle="Dive into captivating stories" />
      <SectionDivider variant="default" />
      <BookGrid books={nonFictionBooks} title="Non-Fiction Essentials" subtitle="Learn, grow, and discover" />
      <SectionDivider variant="warm" />
      <DealsSection books={dealsBooks} />
      <SectionDivider variant="cool" />
      <BlogSection />
      <SectionDivider variant="default" />
      <AboutSection />
    </div>
  );
};

export default Home;
