const transactions = [
  { id: 1, amount: 100, date: '2024-08-01' },
  { id: 2, amount: 200, date: '2024-08-01' },
  { id: 3, amount: -50, date: '2024-08-02' },
  { id: 4, amount: 150, date: '2024-08-02' },
  { id: 5, amount: -30, date: '2024-08-03' },
  { id: 6, amount: 300, date: '2024-08-03' },
];
//// 1. Group Transactions by Date////////////////////////////////
// const result = {};
// transactions.forEach(item => {
//   if(!result[item.date]){
//     result[item.date] = [];
//   }
//   result[item.date].push(item);
// })

// console.log(result);


//// 2. Calculate Daily Totals///////////////////////////////
// const result = {};
// transactions.forEach(item => {
//   if(!result[item.date]){
//     result[item.date] = 0
//   }
//   result[item.date] += item.amount;
// })
// console.log(result);

//// 3. Identify the Date with Highest Transaction Amount////////////////////////////////
// const result = {
//   highestTransactionDate: '',
//   highestTotalTransactionDate: ''
// }

// let ht = 0;
// transactions.forEach(item => {
//   if(item.amount > ht){
//     ht = item.amount;
//   }
// })

// result.highestTransactionDate = transactions.find(item => item.amount == ht).date;
// console.log(result);

// const result = {};
// transactions.forEach(item => {
//   if(!result[item.date]){
//     result[item.date] = 0
//   }
//   result[item.date] += item.amount;
// })
// console.log(result);

// const date = Object.keys(result).find(date => result[date] == Math.max(...Object.values(result)))
// console.log(date);


