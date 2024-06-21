// Question:

// You have an array of product objects, where each product has the following structure:

// Write a function categorizeProducts that returns an array of objects where each object represents a category and contains the total number of products and the average price of products in that category. Use reduce and map array methods to solve this problem.

// Requirements:

// Use reduce to group the products by category and calculate the total number of products and the sum of their prices for each category.
// Use map to transform the grouped data into the desired output format, including calculating the average price for each category.

const products = [
  { id: 1, name: 'Laptop', price: 1000, category: 'Electronics' },
  { id: 2, name: 'Shirt', price: 50, category: 'Clothing' },
  { id: 3, name: 'Phone', price: 500, category: 'Electronics' },
  { id: 4, name: 'Pants', price: 60, category: 'Clothing' },
  { id: 5, name: 'Tablet', price: 300, category: 'Electronics' },
  { id: 6, name: 'Jacket', price: 120, category: 'Clothing' }
];

// Output:
// [
//   { category: 'Electronics', totalProducts: 3, averagePrice: 600 },
//   { category: 'Clothing', totalProducts: 3, averagePrice: 76.67 }
// ]


function categorizeProducts(products){
  const summary = products.reduce((acc, initValue) => {
      if(!acc[initValue.category]){
          acc[initValue.category] = {category: initValue.category, totalProducts: 0, totalSum : 0};
      }
      acc[initValue.category].totalProducts += 1;
      acc[initValue.category].totalSum += initValue.price;
      return acc;
  }, {})
  //console.log(Object.values(summary));
  return Object.values(summary).map(item => {
      return {
          category: item.category,
          totalProducts: item.totalProducts,
          averagePrice: (item.totalSum / item.totalProducts).toFixed(2)

      }
  })
}
console.log(categorizeProducts(products));

