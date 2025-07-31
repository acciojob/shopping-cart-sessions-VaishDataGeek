// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const clearCartBtn = document.getElementById("clear-cart-btn");

// Get cart from sessionStorage or initialize as empty array
let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

// Save cart to sessionStorage
function saveCartToSession() {
  sessionStorage.setItem("cart", JSON.stringify(cart));
}

// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}


// Render cart list
function renderCart() {
	cartList.innerHTML = ""; // Clear existing items
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
	   <button onclick="removeFromCart(${item.id})">Remove</button>`;
    cartList.appendChild(li);
  });
}
function updateScore() {
  const score = cart.reduce((acc, item) => acc + item.price, 0);
  localStorage.setItem("score", score);
}

// Add item to cart
function addToCart(productId) {
	const product = products.find((p) => p.id === parseInt(productId));
  if (product) {
    cart.push(product);                    // Add to cart
    saveCartToSession();                  // Update sessionStorage
    renderCart();                         // Re-render cart
  }
}

// Remove item from cart
function removeFromCart(productId) {
	const index = cart.findIndex(item => item.id === parseInt(productId));
  if (index !== -1) {
    cart.splice(index, 1);                // Remove the item
    saveCartToSession();                 // Update session storage
    renderCart();                        // Re-render cart list
  }
}

// Clear cart
function clearCart() {
	 cart = [];
  saveCartToSession();                   // Clear sessionStorage
  renderCart();
}
function updateScore() {
  const score = cart.reduce((acc, item) => acc + item.price, 0);
  localStorage.setItem("score", score);
  document.getElementById("score").textContent = score;
}
// Initial render
renderProducts();
renderCart();
updateScore();
