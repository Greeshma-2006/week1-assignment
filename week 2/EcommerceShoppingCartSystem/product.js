// product.js
// simple product catalog (fake database)

const products = [
  { id: 1, name: "Laptop", price: 50000, stock: 10, category: "electronics" },
  { id: 2, name: "Phone", price: 30000, stock: 15, category: "electronics" },
  { id: 3, name: "Headphones", price: 2000, stock: 25, category: "accessories" },
  { id: 4, name: "Mouse", price: 500, stock: 50, category: "accessories" },
  { id: 5, name: "Keyboard", price: 1500, stock: 30, category: "accessories" }
];

// get product by id
export function getProductById(id) {
  return products.find(p => p.id === id);
}

// return all products
export function getAllProducts() {
  return products;
}

// filter by category
export function getProductsByCategory(category) {
  return products.filter(p => p.category === category);
}

// search by name (case-insensitive)
export function searchProducts(query) {
  return products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );
}

// check stock availability
export function checkStock(productId, quantity) {
  const product = getProductById(productId);
  return product && product.stock >= quantity;
}

// reduce stock after purchase
export function reduceStock(productId, quantity) {
  const product = getProductById(productId);
  if (product) product.stock -= quantity;
}
