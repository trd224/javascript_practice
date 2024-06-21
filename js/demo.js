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
  //console.log(bookObj);
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