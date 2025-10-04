# 🛒 E-Commerce Cart

A lightweight **vanilla JavaScript** shopping cart application that allows users to browse products, add them to a cart, adjust quantities, and checkout.  
The cart persists between sessions using **LocalStorage**.

---

## 🚀 Features
- 📦 **Product Listing** – Displays a list of products dynamically.
- ➕ **Add/Remove Items** – Easily add products to the cart or remove them.
- 🔄 **Quantity Updates** – Increase or decrease item quantities in real-time.
- 💾 **Persistent Cart** – Cart data is saved in `localStorage`, so it remains after page reload.
- 💰 **Total Price Calculation** – Calculates the total cost automatically.
- ✅ **Checkout Button** – Alerts the user with the total price and clears the cart on checkout.

---

## 🛠️ Technologies Used
- **HTML5**
- **CSS3 (Inline styles in JS)**
- **Vanilla JavaScript (ES6+)**
- **LocalStorage API**

---

 
---

## ⚙️ How It Works
1. **DOMContentLoaded** event ensures DOM elements are ready before execution.
2. Products are defined in an array inside `script.js`.
3. The UI is dynamically generated using JavaScript (`document.createElement`).
4. Cart updates are handled via functions that:
   - Add new items or increase their quantity.
   - Remove items or decrease their quantity.
   - Update the total price automatically.
5. Cart data is stored and loaded from `localStorage` to keep the cart persistent after reload.

---

## 🖥️ Setup & Usage
1. Clone or download the project files.
2. Make sure you have:
   - An HTML container with classes/IDs:
     ```html
     <div class="productList"></div>
     <div id="cartItems"></div>
     <p id="emptyCart">Your cart is empty</p>
     <p>Total: $<span id="totalPrice"></span></p>
     <button id="checkoutBtn">Checkout</button>
     ```
3. Link your `script.js` at the end of the `body` tag:
   ```html
   <script src="script.js"></script>
