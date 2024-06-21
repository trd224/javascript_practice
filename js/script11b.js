// Question: Managing a Library System
// You are tasked with managing a small library system. The library keeps track of books and their authors, and 
// patrons who borrow the books. Each book can have multiple authors, and each author can have multiple books.
//  Additionally, each patron can borrow multiple books, but each book can only be borrowed by one patron at a time.

// You are provided with three arrays of objects: books, authors, and patrons.


// const books = [
//     { id: 1, title: 'JavaScript: The Good Parts', authorIds: [1], borrowedBy: 2 },
//     { id: 2, title: 'Eloquent JavaScript', authorIds: [2], borrowedBy: null },
//     { id: 3, title: 'You Don\'t Know JS', authorIds: [3, 4], borrowedBy: 3 }
// ];

// const authors = [
//     { id: 1, name: 'Douglas Crockford' },
//     { id: 2, name: 'Marijn Haverbeke' },
//     { id: 3, name: 'Kyle Simpson' },
//     { id: 4, name: 'John Resig' }
// ];

// const patrons = [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
//     { id: 3, name: 'Charlie' }
// ];

// Tasks 2: Find Books by Author: Write a function findBooksByAuthor(authorName, authors, books) that returns an array of book 
// titles written by the specified author.

// const booksByKyle = findBooksByAuthor('Kyle Simpson', authors, books);
// Result: ['You Don\'t Know JS']

//---------------------------------------------------------------------------------------------

const books = [
  { id: 1, title: 'JavaScript: The Good Parts', authorIds: [1], borrowedBy: 2 },
  { id: 2, title: 'Eloquent JavaScript', authorIds: [2], borrowedBy: null },
  { id: 3, title: 'You Don\'t Know JS', authorIds: [3, 4], borrowedBy: 3 }
];

const authors = [
  { id: 1, name: 'Douglas Crockford' },
  { id: 2, name: 'Marijn Haverbeke' },
  { id: 3, name: 'Kyle Simpson' },
  { id: 4, name: 'John Resig' }
];

const patrons = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

// Result: ['You Don\'t Know JS']

function findBooksByAuthor(authorName, authors, books){
  const authorObj = authors.find(author => author.name == authorName);
  //console.log(authorObj);
  const authorId = authorObj.id;
  //console.log(authorId);
  return books.filter(book => book.authorIds.includes(authorId)).map(t => t.title)
 
}

const booksByKyle = findBooksByAuthor('Kyle Simpson', authors, books);

console.log(booksByKyle);

