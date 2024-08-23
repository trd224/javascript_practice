const transactions = [
  {
    id: 1,
    customerId: 101,
    products: [
      { productId: 'P1', quantity: 2, price: 20 },
      { productId: 'P2', quantity: 1, price: 50 },
    ],
    transactionDate: '2024-08-01',
    status: 'completed',
  },
  {
    id: 2,
    customerId: 102,
    products: [
      { productId: 'P3', quantity: 1, price: 100 },
      { productId: 'P4', quantity: 3, price: 30 },
    ],
    transactionDate: '2024-08-02',
    status: 'completed',
  },
  {
    id: 3,
    customerId: 103,
    products: [
      { productId: 'P2', quantity: 2, price: 50 },
      { productId: 'P5', quantity: 1, price: 80 },
    ],
    transactionDate: '2024-08-03',
    status: 'canceled',
  },
  {
    id: 4,
    customerId: 101,
    products: [
      { productId: 'P1', quantity: 1, price: 20 },
      { productId: 'P4', quantity: 2, price: 30 },
    ],
    transactionDate: '2024-08-04',
    status: 'completed',
  },
  {
    id: 5,
    customerId: 104,
    products: [
      { productId: 'P3', quantity: 2, price: 100 },
      { productId: 'P6', quantity: 1, price: 60 },
    ],
    transactionDate: '2024-08-05',
    status: 'completed',
  },
];

//////////////////////////////////////////////////////////////////////////

const totalRevenue = transactions.filter(item => item.status == 'completed')
.reduce((acc, transaction) => {
  const ttr = transaction.products.reduce((acc2, product) => acc2 + product.quantity * product.price,0);
  return acc + ttr;
},0)
console.log(totalRevenue)

//////////////////////////////////////////////////////////////////////////

const productSales = transactions.filter(item => item.status == 'completed')
.reduce((acc, transaction) => {
  transaction.products.forEach(product => {
    if(!acc[product.productId]){
      acc[product.productId] = 0;
    }
    acc[product.productId] += product.quantity
  })
  return acc;
},{})
console.log(productSales);

const mostPopularProduct = {productName: '', quantity: 0};
let maxQuantity = 0;
for(let key in productSales){
  if(productSales[key] > maxQuantity){
    maxQuantity = productSales[key];
    mostPopularProduct.productName = key;
    mostPopularProduct.quantity = maxQuantity;
  }
  
}
console.log(mostPopularProduct);

///////////////////////////////////////////////////////////////////////////////////

const customerTransactionCount = transactions.reduce((acc, transaction) => {
  if(!acc[transaction.customerId]){
    acc[transaction.customerId] = 0;
  }
  acc[transaction.customerId] += 1;
  return acc;
},{})



console.log(customerTransactionCount);

///////////////////////////////////////////////////////////////////////////////////////

const transactionsByStatus = transactions.reduce((acc, transaction) => {
  if(!acc[transaction.status]){
    acc[transaction.status] = [];
  }
  acc[transaction.status].push(transaction);
  return acc;
},{})

console.log(transactionsByStatus);