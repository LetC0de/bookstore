export const books = [
  // Featured Books
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 24.99,
    genre: "Fiction",
    rating: 4.8,
    featured: true,
    description: "A dazzling novel about all the choices that go into a life well lived.",
    image: "https://covers.openlibrary.org/b/isbn/9780525559474-L.jpg"
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    price: 27.99,
    genre: "Self-Help",
    rating: 4.9,
    featured: true,
    description: "An easy and proven way to build good habits and break bad ones.",
    image: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg"
  },
  {
    id: 3,
    title: "Project Hail Mary",
    author: "Andy Weir",
    price: 28.99,
    genre: "Science Fiction",
    rating: 4.7,
    featured: true,
    description: "A lone astronaut must save the earth from disaster in this incredible new science-based thriller.",
    image: "https://covers.openlibrary.org/b/isbn/9780593135204-L.jpg"
  },

  // Fiction
  {
    id: 4,
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    price: 26.99,
    genre: "Fiction",
    rating: 4.6,
    image: "https://covers.openlibrary.org/b/isbn/9780735219090-L.jpg"
  },
  {
    id: 5,
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    price: 25.99,
    genre: "Fiction",
    rating: 4.7,
    image: "https://covers.openlibrary.org/b/isbn/9781501139239-L.jpg"
  },
  {
    id: 6,
    title: "Circe",
    author: "Madeline Miller",
    price: 27.50,
    genre: "Fiction",
    rating: 4.5,
    image: "https://covers.openlibrary.org/b/isbn/9780316556347-L.jpg"
  },

  // Mystery & Thriller
  {
    id: 7,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    price: 26.50,
    genre: "Mystery",
    rating: 4.4,
    image: "https://covers.openlibrary.org/b/isbn/9781250301697-L.jpg"
  },
  {
    id: 8,
    title: "Gone Girl",
    author: "Gillian Flynn",
    price: 24.99,
    genre: "Mystery",
    rating: 4.3,
    image: "https://covers.openlibrary.org/b/isbn/9780307588371-L.jpg"
  },
  {
    id: 9,
    title: "The Guest List",
    author: "Lucy Foley",
    price: 25.99,
    genre: "Mystery",
    rating: 4.2,
    image: "https://covers.openlibrary.org/b/isbn/9780062868930-L.jpg"
  },

  // Science Fiction & Fantasy
  {
    id: 10,
    title: "Dune",
    author: "Frank Herbert",
    price: 29.99,
    genre: "Science Fiction",
    rating: 4.8,
    image: "https://covers.openlibrary.org/b/isbn/9780441172719-L.jpg"
  },
  {
    id: 11,
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    price: 28.50,
    genre: "Fantasy",
    rating: 4.7,
    image: "https://covers.openlibrary.org/b/isbn/9780756404741-L.jpg"
  },
  {
    id: 12,
    title: "Neuromancer",
    author: "William Gibson",
    price: 24.99,
    genre: "Science Fiction",
    rating: 4.5,
    image: "https://covers.openlibrary.org/b/isbn/9780441569595-L.jpg"
  },

  // Non-Fiction
  {
    id: 13,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    price: 32.99,
    genre: "Non-Fiction",
    rating: 4.6,
    image: "https://covers.openlibrary.org/b/isbn/9780062316110-L.jpg"
  },
  {
    id: 14,
    title: "Educated",
    author: "Tara Westover",
    price: 28.99,
    genre: "Non-Fiction",
    rating: 4.7,
    image: "https://covers.openlibrary.org/b/isbn/9780399590504-L.jpg"
  },
  {
    id: 15,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    price: 30.99,
    genre: "Non-Fiction",
    rating: 4.5,
    image: "https://covers.openlibrary.org/b/isbn/9780374533557-L.jpg"
  }
];

export const categories = [
  { name: "Fiction", count: 6, color: "#2C3E50" },
  { name: "Mystery", count: 3, color: "#34495E" },
  { name: "Science Fiction", count: 3, color: "#3498DB" },
  { name: "Fantasy", count: 1, color: "#922B21" },
  { name: "Non-Fiction", count: 3, color: "#117A65" },
  { name: "Self-Help", count: 1, color: "#E74C3C" }
];
