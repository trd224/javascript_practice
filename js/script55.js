const orders = [
  {
    orderId: 101,
    customerId: 1,
    items: [
      { productId: 'A', quantity: 2, price: 50 },
      { productId: 'B', quantity: 1, price: 30 },
    ],
    orderDate: '2024-08-01',
  },
  {
    orderId: 102,
    customerId: 2,
    items: [
      { productId: 'A', quantity: 1, price: 50 },
      { productId: 'C', quantity: 4, price: 25 },
    ],
    orderDate: '2024-08-02',
  },
  {
    orderId: 103,
    customerId: 1,
    items: [
      { productId: 'B', quantity: 3, price: 30 },
      { productId: 'D', quantity: 2, price: 60 },
    ],
    orderDate: '2024-08-03',
  },
  {
    orderId: 104,
    customerId: 3,
    items: [
      { productId: 'A', quantity: 5, price: 50 },
      { productId: 'C', quantity: 1, price: 25 },
    ],
    orderDate: '2024-08-04',
  },
];

//////////////////////////////////////////////////////////////////////////////////

const N = 2; // Number of top customers to find

// 1. Calculate Total Order Value for Each Order

const ordersWithTotal = orders.map(order => {
  const total = order.items.reduce((acc, item) => acc + item.quantity * item.price, 0);
  return {...order, total: total};
})

console.log(ordersWithTotal);




// // 2. Group Orders by Customer

const ordersByCustomer = ordersWithTotal.reduce((acc, item) => {
  if(!acc[item.customerId]){
    acc[item.customerId] = [];
  }
  acc[item.customerId].push(item);
  return acc;
},{})

console.log(ordersByCustomer);

// // 3. Identify the Top N Customers by Total Spend

const topNCustomers = Object.entries(ordersByCustomer)
.map(([customerId, orders]) => {
  const ttl = orders.reduce((acc, itm) => acc + itm.total, 0);
  return {customerId: customerId, totalSpend: ttl}
})
.sort((a,b) => b.totalSpend - a.totalSpend)
.slice(0, N)
.map(c => c.customerId)
.map(Number);
console.log(topNCustomers);


// // 4. List Unique Products Ordered by Each Customer
const uniqueProductsByCustomer = Object.entries(ordersByCustomer).reduce((acc, [customerId, orders]) => {
  const uniqueProducts = new Set();
  orders.forEach(order => {
    order.items.forEach(({ productId }) => uniqueProducts.add(productId));
  });
  acc[customerId] = Array.from(uniqueProducts);
  return acc;
}, {});

console.log(uniqueProductsByCustomer)



/////////////////////////////////////////////////////////////////////////////////////


