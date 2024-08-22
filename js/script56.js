const books = [
  { id: 1, title: 'Book A', author: 'Author 1', genre: 'Fantasy', ratings: [4, 5, 3], publishedYear: 2020 },
  { id: 2, title: 'Book B', author: 'Author 2', genre: 'Science Fiction', ratings: [5, 4], publishedYear: 2018 },
  { id: 3, title: 'Book C', author: 'Author 1', genre: 'Fantasy', ratings: [2, 3, 4, 5], publishedYear: 2019 },
  { id: 4, title: 'Book D', author: 'Author 3', genre: 'Science Fiction', ratings: [4, 4, 4], publishedYear: 2021 },
  { id: 5, title: 'Book E', author: 'Author 2', genre: 'Mystery', ratings: [5, 5, 5, 4], publishedYear: 2017 },
  { id: 6, title: 'Book F', author: 'Author 4', genre: 'Fantasy', ratings: [3, 3, 3], publishedYear: 2022 },
];

////////////////////////////////////////////////////////////////////////

const booksWithAverageRating = books.map(book => {
  let avgRating = book.ratings.reduce((acc, rating) => acc + rating / book.ratings.length, 0);
  console.log(avgRating);
  return {...book, avgRating}
})

console.log(booksWithAverageRating);

///////////////////////////////////////////////////////////////////////

let N = 2

const topNBooks = booksWithAverageRating.sort((a,b) => b.avgRating - a.avgRating).slice(0, N).map(t => t.title);

console.log(topNBooks);

///////////////////////////////////////////////////////////////////////

const booksByGenre = books.reduce((acc, book) => {
  if(!acc[book.genre]){
    acc[book.genre] = [];
  }
  acc[book.genre].push(book.title);
  return acc;
},{})

console.log(booksByGenre);

///////////////////////////////////////////////////////////////////////

const specificYear = 2020;

const authorsByYear = booksWithAverageRating
  .filter(book => book.publishedYear === specificYear)
  .map(book => book.author);

  console.log(authorsByYear);
