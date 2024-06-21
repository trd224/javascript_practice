// Question
// You are given an array of objects representing orders. Each order object contains the properties orderId, 
// customerName, items, and totalPrice. The items property is an array of objects where each object represents 
// an item with properties itemName, quantity, and price. Write a function that takes this array and returns a 
// summary object. The summary object should contain the total number of orders, the total quantity of each item 
// sold, and the total revenue generated.

// const orders = [
//   {
//     orderId: 1,
//     customerName: 'Alice',
//     items: [
//       { itemName: 'Apple', quantity: 2, price: 3 },
//       { itemName: 'Banana', quantity: 1, price: 1 }
//     ],
//     totalPrice: 7
//   },
//   {
//     orderId: 2,
//     customerName: 'Bob',
//     items: [
//       { itemName: 'Apple', quantity: 1, price: 3 },
//       { itemName: 'Orange', quantity: 3, price: 2 }
//     ],
//     totalPrice: 9
//   },
//   {
//     orderId: 3,
//     customerName: 'Charlie',
//     items: [
//       { itemName: 'Banana', quantity: 2, price: 1 },
//       { itemName: 'Orange', quantity: 1, price: 2 }
//     ],
//     totalPrice: 4
//   }
// ];

// output
// {
//   totalOrders: 3,
//   totalQuantity: {
//     Apple: 3,
//     Banana: 3,
//     Orange: 4
//   },
//   totalRevenue: 20
// }

//-----------------------------------------------------------------------

const orders = [
  {
    orderId: 1,
    customerName: 'Alice',
    items: [
      { itemName: 'Apple', quantity: 2, price: 3 },
      { itemName: 'Banana', quantity: 1, price: 1 }
    ],
    totalPrice: 7
  },
  {
    orderId: 2,
    customerName: 'Bob',
    items: [
      { itemName: 'Apple', quantity: 1, price: 3 },
      { itemName: 'Orange', quantity: 3, price: 2 }
    ],
    totalPrice: 9
  },
  {
    orderId: 3,
    customerName: 'Charlie',
    items: [
      { itemName: 'Banana', quantity: 2, price: 1 },
      { itemName: 'Orange', quantity: 1, price: 2 }
    ],
    totalPrice: 4
  }
];

const summary = {
  totalOrders: 0,
  totalQuantity: {},
  totalRevenue: 0
};

orders.forEach(order => {
  summary.totalOrders += 1;
  summary.totalRevenue += order.totalPrice;
  order.items.forEach(item => {
    if(!summary.totalQuantity[item.itemName]){
      summary.totalQuantity[item.itemName] = 0;
    }
    summary.totalQuantity[item.itemName] +=  item.quantity
  })
})

console.log(summary);
