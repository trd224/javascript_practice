// Question
// You are given an array of objects where each object represents a person with properties 
// like id, name, and friends. The friends property is an array of IDs representing the friends of 
// that person. Write a function that takes this array and returns a new array of objects where each 
// object includes the name and an array of friendNames instead of friends IDs.

// const people = [
//   { id: 1, name: 'Alice', friends: [2, 3] },
//   { id: 2, name: 'Bob', friends: [1, 3] },
//   { id: 3, name: 'Charlie', friends: [1] }
// ];

// output
// [
//   { name: 'Alice', friendNames: ['Bob', 'Charlie'] },
//   { name: 'Bob', friendNames: ['Alice', 'Charlie'] },
//   { name: 'Charlie', friendNames: ['Alice'] }
// ]

//--------------------------------------------------------------------------

const people = [
  { id: 1, name: 'Alice', friends: [2, 3] },
  { id: 2, name: 'Bob', friends: [1, 3] },
  { id: 3, name: 'Charlie', friends: [1] }
];

const result = people.map(person => ({
  name: person.name,
  friendNames: person.friends.map(friendId => people.find(p => p.id === friendId).name)
}));

console.log(result);

//--------------------------------------------------------------------------------

//another solution

// const result = [];

// people.forEach(item => {
//   const innerObj = {
//     name: '',
//     friendNames: []
//   }
  
//   innerObj.name = item.name;
//   item.friends.forEach(friendId => {
//     let a = people.find(oItem => {
//       return oItem.id == friendId
//     })
//     innerObj.friendNames.push(a.name);
//   })
//   result.push(innerObj);
// })


// console.log(result);

