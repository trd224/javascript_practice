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


// Tasks 1: List Borrowed Books: Write a function listBorrowedBooks(patrons, books) that returns an array of 
// patrons with the titles of the books they have borrowed. Each patron object in the result should have an additional 
// property borrowedBooks, which is an array of book titles.

// const result = listBorrowedBooks(patrons, books);

// Result:
// [
//     { id: 1, name: 'Alice', borrowedBooks: [] },
//     { id: 2, name: 'Bob', borrowedBooks: ['JavaScript: The Good Parts'] },
//     { id: 3, name: 'Charlie', borrowedBooks: ['You Don\'t Know JS'] }
// ]

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
  
  
//first solution
  
  // const listBorrowedBooks = (patrons, books) => {
  //   return patrons.map(patron => {
  //     const arr = [];
  //     const a = books.find(book => book.borrowedBy == patron.id)
    
  //     if(a !== undefined){
  //       arr.push(a.title)
  //     }
  //     console.log(arr)
  
  //     return {...patron, borrowedBooks: arr}
  //   })
  // }
  
  // const result = listBorrowedBooks(patrons, books);
  // console.log(result)


  //-------------------------------------------------------------------------
  //second solution

const result = [];
patrons.forEach(patron => {
  const obj = {
    id: null,
    name: '',
    borrowedBooks: []
  }
  obj.id = patron.id;
  obj.name = patron.name;
  obj.borrowedBooks = books.filter(book => book.borrowedBy == patron.id).map(t => t.title)
  result.push(obj);
})


console.log(result);

//------------------------------------------

// function listBorrowedBooks(patrons, books){
//   return patrons.map(p => ({
//       id: p.id,
//       name: p.name,
//       borrowedBooks: books.filter(b => b.borrowedBy == p.id).map(t => t.title)
//   }))
// }

// const result = listBorrowedBooks(patrons, books);
// console.log(result);

  
  
