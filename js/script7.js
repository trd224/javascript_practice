// Question
// You are given an array of objects representing a collection of books. Each book object contains the 
// properties id, title, author, and genres. The genres property is an array of strings representing the 
// genres the book belongs to. Write a function that takes this array and returns an object where the keys 
// are genre names and the values are arrays of book titles that belong to that genre.

// const books = [
//   { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genres: ['Classic', 'Fiction'] },
//   { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', genres: ['Classic', 'Historical'] },
//   { id: 3, title: '1984', author: 'George Orwell', genres: ['Dystopian', 'Fiction'] },
//   { id: 4, title: 'Brave New World', author: 'Aldous Huxley', genres: ['Dystopian', 'Science Fiction'] },
//   { id: 5, title: 'Moby Dick', author: 'Herman Melville', genres: ['Classic', 'Adventure'] }
// ];

// output
// {
//   'Classic': ['The Great Gatsby', 'To Kill a Mockingbird', 'Moby Dick'],
//   'Fiction': ['The Great Gatsby', '1984'],
//   'Historical': ['To Kill a Mockingbird'],
//   'Dystopian': ['1984', 'Brave New World'],
//   'Science Fiction': ['Brave New World'],
//   'Adventure': ['Moby Dick']
// }

//-------------------------------------------------------------------------------
const books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genres: ['Classic', 'Fiction'] },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', genres: ['Classic', 'Historical'] },
  { id: 3, title: '1984', author: 'George Orwell', genres: ['Dystopian', 'Fiction'] },
  { id: 4, title: 'Brave New World', author: 'Aldous Huxley', genres: ['Dystopian', 'Science Fiction'] },
  { id: 5, title: 'Moby Dick', author: 'Herman Melville', genres: ['Classic', 'Adventure'] }
];


const result = {}

books.forEach(book => book.genres.forEach(ge => {
  if(!result[ge]){
    result[ge] = []
  }
  result[ge].push(book.title)
}))

console.log(result);

