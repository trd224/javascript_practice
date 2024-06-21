// Question:

// You have an array of transaction objects representing sales data for a store. Each transaction object has the 
// following structure:

// Write a function summarizeSales that returns an array of objects where each object represents a summary of the total quantity sold and the total revenue generated for each unique item. You should use reduce and map array methods to solve this problem.

// Requirements:

// Use reduce to group the transactions by item and calculate the total quantity and total revenue for each item.
// Use map to transform the grouped data into the desired output format.


const transactions = [
  { id: 1, item: 'apple', quantity: 10, pricePerUnit: 1 },
  { id: 2, item: 'banana', quantity: 5, pricePerUnit: 1.5 },
  { id: 3, item: 'apple', quantity: 5, pricePerUnit: 1 },
  { id: 4, item: 'banana', quantity: 10, pricePerUnit: 1.5 },
  { id: 5, item: 'orange', quantity: 10, pricePerUnit: 2 },
  { id: 6, item: 'apple', quantity: 7, pricePerUnit: 1 }
];

// Output:
// [
//   { item: 'apple', totalQuantity: 22, totalRevenue: 22 },
//   { item: 'banana', totalQuantity: 15, totalRevenue: 22.5 },
//   { item: 'orange', totalQuantity: 10, totalRevenue: 20 }
// ]

function summarizeSales(transactions){
  const summary  = transactions.reduce((acc, initValue) => {
      if(!acc[initValue.item]){
          acc[initValue.item] = { item: initValue.item, totalQuantity: 0, totalRevenue: 0}
      }
      acc[initValue.item].totalQuantity += initValue.quantity;
      acc[initValue.item].totalRevenue += initValue.quantity * initValue.pricePerUnit;
      return acc;
  },{})
  return Object.values(summary);
}

console.log(summarizeSales(transactions)); 