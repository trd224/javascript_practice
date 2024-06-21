// Question:
// You are given an array of integers representing stock prices on consecutive days. Your task is to write a 
// function maxProfit(prices) to find the maximum profit that can be obtained by buying and selling a stock 
// multiple times. However, you must sell the stock before you buy again.

function maxProfit(prices) {

  let totalProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i + 1] > prices[i]) {
      totalProfit += prices[i + 1] - prices[i];
    }
  }
  return totalProfit;
}

// Example usage
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 7
console.log(maxProfit([1, 2, 3, 4, 5]));    // Output: 4
console.log(maxProfit([7, 6, 4, 3, 1]));    // Output: 0
