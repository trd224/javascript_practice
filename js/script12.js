// Question:
// You are given an array of objects representing a collection of books in a library. Each book object has the following properties:

// id (number): A unique identifier for the book.
// title (string): The title of the book.
// author (string): The author of the book.
// genres (array of strings): A list of genres the book belongs to.
// rating (number): The rating of the book (from 1 to 5).
// Write a function analyzeLibrary that takes this array as input and returns an object with the following properties:

// totalBooks: The total number of books.
// averageRating: The average rating of all books.
// booksByGenre: An object where the keys are genres and the values are arrays of book titles that belong to that genre.
// topRatedBook: The book object with the highest rating. If there are multiple books with the same highest rating, return the one that appears first in the array.

// const library = [
//   {
//     id: 1,
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     genres: ["Classic", "Fiction"],
//     rating: 4.5
//   },
//   {
//     id: 2,
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     genres: ["Classic", "Historical", "Fiction"],
//     rating: 4.8
//   },
//   {
//     id: 3,
//     title: "1984",
//     author: "George Orwell",
//     genres: ["Dystopian", "Science Fiction"],
//     rating: 4.7
//   },
//   {
//     id: 4,
//     title: "The Catcher in the Rye",
//     author: "J.D. Salinger",
//     genres: ["Classic", "Fiction"],
//     rating: 3.9
//   }
// ];


// output:
// {
//   totalBooks: 4,
//   averageRating: 4.475,
//   booksByGenre: {
//     Classic: ["The Great Gatsby", "To Kill a Mockingbird", "The Catcher in the Rye"],
//     Fiction: ["The Great Gatsby", "To Kill a Mockingbird", "The Catcher in the Rye"],
//     Historical: ["To Kill a Mockingbird"],
//     Dystopian: ["1984"],
//     "Science Fiction": ["1984"]
//   },
//   topRatedBook: {
//     id: 2,
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     genres: ["Classic", "Historical", "Fiction"],
//     rating: 4.8
//   }
// }

//----------------------------------------------------------------------------------------

const library = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genres: ["Classic", "Fiction"],
    rating: 4.5
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genres: ["Classic", "Historical", "Fiction"],
    rating: 4.8
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    genres: ["Dystopian", "Science Fiction"],
    rating: 4.7
  },
  {
    id: 4,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genres: ["Classic", "Fiction"],
    rating: 3.9
  }
];

//first solution

// const result = {
//   totalBooks: 0,
//   averageRating: 0,
//   booksByGenre: {},
//   topRatedBook: {}
// };


// result.totalBooks = library.length;

// result.averageRating =  library.reduce((acc, inicialValue) => acc + inicialValue.rating, 0) / library.length;

// result.topRatedBook = library.reduce((acc, inicialValue) => Math.max(acc, inicialValue.rating), -Infinity);

// library.forEach(book => {
//   book.genres.forEach(genre => {
//       if(!result.booksByGenre[genre]){
//         result.booksByGenre[genre] = [];
//       }

//       result.booksByGenre[genre] = library.filter(item => item.genres.includes(genre)).map(t => t.title)
//   })
// })




// console.log(result)

//-----------------------------------------------------------------------------
//second solution

const result = {
  totalBooks: 0, 
  averageRating: 0,
  booksByGenre: {},
  topRatedBook: {}
}
let topRating = 0;
result.totalBooks = library.length;
library.forEach(book => {
  result.averageRating += book.rating / library.length;
  book.genres.forEach(genre => {
    if(!result.booksByGenre[genre]){
      result.booksByGenre[genre] = [];
    }
    result.booksByGenre[genre].push(book.title);
  })
  if(book.rating > topRating){
    topRating = book.rating;
    result.topRatedBook = book;
  }
  
})

console.log(result);


