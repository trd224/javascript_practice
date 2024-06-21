// You are given an array of integers representing stock prices on consecutive days. Your task is to write a function maxProfit(prices) to find the maximum profit that can be obtained by buying and selling a stock at most once. If it's not possible to make a profit, return 0.

// For example, given the array: [7, 1, 5, 3, 6, 4]

function maxProfit(prices) {
  if (prices.length === 0) return 0;

  let minPrice = prices[0]; // Initialize the minimum price to the first day's price
  let maxProfit = 0; // Initialize the maximum profit to 0

  // Iterate through the array of prices
  for (let i = 1; i < prices.length; i++) {
      // If the current price is lower than the minimum price, update the minimum price
      if (prices[i] < minPrice) {
          minPrice = prices[i];
      } else {
          // Otherwise, calculate the profit if the stock was bought at minPrice and sold at the current price
          const profit = prices[i] - minPrice;
          // Update the maximum profit if the current profit is higher
          if (profit > maxProfit) {
              maxProfit = profit;
          }
      }
  }

  return maxProfit;
}

// Test cases
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5
console.log(maxProfit([7, 6, 4, 3, 1])); // Output: 0
