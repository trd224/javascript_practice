// Question
// You are given an array of objects representing transactions. Each transaction object contains the 
// properties id, amount, and date. Write a function that groups these transactions by the month and year 
// they occurred and calculates the total amount for each month.

// const transactions = [
//   { id: 1, amount: 100, date: '2023-01-15' },
//   { id: 2, amount: 200, date: '2023-01-30' },
//   { id: 3, amount: 150, date: '2023-02-10' },
//   { id: 4, amount: 300, date: '2023-02-22' },
//   { id: 5, amount: 250, date: '2023-03-05' }
// ];

// output
// {
//   '2023-01': 300,
//   '2023-02': 450,
//   '2023-03': 250
// }

//--------------------------------------------------------------

const transactions = [
  { id: 1, amount: 100, date: '2023-01-15' },
  { id: 2, amount: 200, date: '2023-01-30' },
  { id: 3, amount: 150, date: '2023-02-10' },
  { id: 4, amount: 300, date: '2023-02-22' },
  { id: 5, amount: 250, date: '2023-03-05' }
];


function groupTransactionsByMonth(transactions) {
  const grouped = {};

  transactions.forEach(transaction => {
    // Extract the year and month from the date
    const date = new Date(transaction.date);
    console.log(date.getMonth() + 1)
    const yearMonth = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    console.log(yearMonth);

    // Initialize the group if it doesn't exist
    if (!grouped[yearMonth]) {
      grouped[yearMonth] = 0;
    }

    // Add the transaction amount to the corresponding month
    grouped[yearMonth] += transaction.amount;
  });

  return grouped;
}

console.log(groupTransactionsByMonth(transactions));
