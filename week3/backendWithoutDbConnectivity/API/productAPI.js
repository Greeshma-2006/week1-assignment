import express from "express";

var app = express.Router();

// products data
var products = [];

// get all products
app.get("/products", function (req, res) {
  res.json({ message: "All products", payload: products });
});

// get product by id
app.get("/products/:id", function (req, res) {
  var p = products.find(x => x.productid == req.params.id);
  p
    ? res.json({ message: "Product found", payload: p })
    : res.status(404).json({ message: "Product not found" });
});

// get by brand
app.get("/products/brand/:brand", function (req, res) {
  res.json({
    message: "Brand products",
    payload: products.filter(x => x.brand == req.params.brand)
  });
});

// create product
app.post("/products", function (req, res) {
  products.push(req.body);
  res.status(201).json({ message: "Product created", payload: req.body });
});

// update product
app.put("/products/:id", function (req, res) {
  var i = products.findIndex(x => x.productid == req.params.id);
  i != -1 &&
    (req.body.productid = req.params.id,
     products[i] = req.body,
     res.json({ message: "Product updated", payload: req.body }));
  i == -1 && res.status(404).json({ message: "Product not found" });
});

// delete product
app.delete("/products/:id", function (req, res) {
  var i = products.findIndex(x => x.productid == req.params.id);
  i != -1 &&
    res.json({ message: "Product deleted", payload: products.splice(i,1)[0] });
  i == -1 && res.status(404).json({ message: "Product not found" });
});

export default app;
