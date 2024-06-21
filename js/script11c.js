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


// task 3: Borrow Book: Write a function borrowBook(patronId, bookId, patrons, books) that allows a patron to borrow a 
// book if it is not already borrowed. The function should update the borrowedBy property of the book and return true 
// if the operation was successful, or false if the book is already borrowed.

// const success = borrowBook(1, 2, patrons, books);
// Result: true
// books array is now updated: 
// [
//     { id: 1, title: 'JavaScript: The Good Parts', authorIds: [1], borrowedBy: 2 },
//     { id: 2, title: 'Eloquent JavaScript', authorIds: [2], borrowedBy: 1 },
//     { id: 3, title: 'You Don\'t Know JS', authorIds: [3, 4], borrowedBy: 3 }
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

function borrowBook(patronId, bookId, patrons, books){

    const bookObj = books.find(book => book.id == bookId);
   // console.log(bookObj);
    if(bookObj.borrowedBy == null){
      bookObj.borrowedBy = patronId;
      return true;
    }
    else{
      return false;
    }
  
  }
  console.log(books)
  console.log(borrowBook(1, 2, patrons, books));
