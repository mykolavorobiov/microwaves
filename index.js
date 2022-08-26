const express = require("express");
const app = express();
const port = 3000;
const productService = require("./src/backend/services/product.service");
const orderService = require("./src/backend/services/order.service");

// routes/
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/products", (req, res) => {
  res.json(productService.getItems());
});
app.get("/product/:id", (req, res) => {
  res.json(productService.getItemById(req.params.id));
});

app.get("/orders", (req, res) => {
  res.json(orderService.getOrders());
});
app.get("/order/:id", (req, res) => {
  res.json(orderService.getOrderById(req.params.id));
});
app.post("/order", (req, res) => {
  res.json(orderService.saveOrder(req.body));
});

// middlewares
// app.use(express.static("backend/public"));
app.use(express.static(__dirname + "/src/backend/public"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
