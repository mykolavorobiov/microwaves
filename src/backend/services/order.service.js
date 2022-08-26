const orders = [
  {
    id: 1,
    details: {
      address: "Address 1",
      payment: "online"
    },
    products: [
      {
        id: 1,
        count: 2
      }
    ]
  }
];
let count = orders.length;

module.exports = {
  getOrders() {
    return orders;
  },
  getOrderById(id) {
    return orders.find((order) => order.id === Number(id));
  },
  saveOrder(data) {
    console.log("new order: ", data);
    count++;
    orders.push({
      id: count,
      ...data
    });
  }
};
