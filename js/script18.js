// You are given an array of objects representing users, where each object contains a name and an array of scores. 
// Your task is to write a function that calculates the average score for each user and then returns an array of 
// objects sorted by the average score in descending order. If two users have the same average score, they should 
// be sorted alphabetically by their name.

const users = [
  { name: 'John Doe', scores: [90, 80, 85] },
  { name: 'Jane Smith', scores: [100, 90, 95] },
  { name: 'Alice Johnson', scores: [100, 90, 95] },
  { name: 'Bob Brown', scores: [60, 70, 65] }
];

users.forEach(user => {
  user['avgScore'] = 0;
  user.scores.forEach(score => {
    user['avgScore'] += score/ user.scores.length;
  })
})

//console.log(users);

users.sort((a, b) => {
  if (b.avgScore === a.avgScore) {
    //return a.name.localeCompare(b.name);
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  }
  return b.avgScore - a.avgScore;
});
console.log(users);