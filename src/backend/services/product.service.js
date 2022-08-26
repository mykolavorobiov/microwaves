const items = [
  {
    id: 1,
    title: "Product 1",
    price: 100,
    status: "new" // new, not_available
  },
  {
    id: 2,
    title: "Product 2",
    price: 900,
    status: "not_available" // new, not_available
  }
];
module.exports = {
  getItems() {
    return items;
  },
  getItemById(id) {
    console.log(id);
    if (!id) {
      return null;
    }
    return items.find((item) => item.id === Number(id));
  }
};
