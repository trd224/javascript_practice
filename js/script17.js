const orders = [
  {
    orderId: 1,
    customerName: "Alice Johnson",
    items: [
      { productId: 1, productName: "Laptop", quantity: 1, price: 1000 },
      { productId: 2, productName: "Mouse", quantity: 2, price: 25 }
    ]
  },
  {
    orderId: 2,
    customerName: "Bob Smith",
    items: [
      { productId: 1, productName: "Laptop", quantity: 1, price: 1000 },
      { productId: 3, productName: "Keyboard", quantity: 1, price: 100 }
    ]
  },
  {
    orderId: 3,
    customerName: "Charlie Davis",
    items: [
      { productId: 2, productName: "Mouse", quantity: 1, price: 25 },
      { productId: 3, productName: "Keyboard", quantity: 2, price: 100 }
    ]
  },
  {
    orderId: 4,
    customerName: "Alice Johnson",
    items: [
      { productId: 1, productName: "Laptop", quantity: 2, price: 1000 }
    ]
  }
];

//output
// {
//   totalOrders: 4,
//   totalRevenue: 4500,
//   totalItemsSold: 8,
//   totalRevenueOfEachCustome: {
//     "Alice Johnson": 3050,
//     "Bob Smith": 1100,
//     "Charlie Davis": 225
//   }
//   revenueByProduct: {
//     Laptop: 4000,
//     Mouse: 75,
//     Keyboard: 300
//   },
//   topCustomer: "Alice Johnson"
// }

const result = {
  totalOrders: 0,
  totalRevenue: 0,
  totalItemsSold: 0,
  totalRevenueOfEachCustome: {},
  revenueByProduct : {},
  topCustomer: ''
}

result.totalOrders = orders.length;



orders.forEach(order => {
  
  order.items.forEach(item => {
    result.totalRevenue += item.quantity * item.price;
    result.totalItemsSold += item.quantity;

    if(!result.revenueByProduct[item.productName]){
      result.revenueByProduct[item.productName] = 0;
    }
    result.revenueByProduct[item.productName] += item.price * item.quantity;

    if(!result.totalRevenueOfEachCustome[order.customerName]){
      result.totalRevenueOfEachCustome[order.customerName] = 0;
    }

    result.totalRevenueOfEachCustome[order.customerName] += item.price * item.quantity;

  })

  
})

let maxRevenue = 0;

for(const customer in result.totalRevenueOfEachCustome){
  if(result.totalRevenueOfEachCustome[customer] > maxRevenue){
    maxRevenue = result.totalRevenueOfEachCustome[customer];
    result.topCustomer = customer;
  }
}



console.log(result);



