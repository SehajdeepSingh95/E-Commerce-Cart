document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 1, name: "Product 1", price: 29.99, quantity: 1 },
        { id: 2, name: "Product 2", price: 19.99, quantity: 1 },
        { id: 3, name: "Product 3", price: 24.99, quantity: 1 },
    ];

    let cart = [];

    const productList = document.querySelector(".productList");
    const cartItems = document.querySelector("#cartItems");
    const emptyCart = document.querySelector("#emptyCart");
    const checkoutBtn = document.querySelector("#checkoutBtn");
    const totalPrice = document.querySelector("#totalPrice");

    const productsContainer = document.createElement("div");
    productsContainer.style.display = "flex";
    productsContainer.style.flexWrap = "wrap";
    productsContainer.style.justifyContent = "center";
    productsContainer.style.gap = "16px";

    // --- LocalStorage helpers ---
    const saveCartToLocalStorage = () => {
        localStorage.setItem("cart", JSON.stringify(cart));
    };

    const loadCartFromLocalStorage = () => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            cart = JSON.parse(storedCart);
        }
    };

    // --- Render product list ---
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product");
        productCard.style.flex = "0 0 200px";
        productCard.style.display = "flex";
        productCard.style.flexDirection = "column";
        productCard.style.padding = "16px";
        productCard.style.border = "1px solid #ccc";
        productCard.style.boxSizing = "border-box";
        productCard.style.textAlign = "center";

        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button>Add to Cart</button>
        `;

        productCard.querySelector("button").addEventListener("click", () => {
            const existingProduct = cart.find(p => p.id === product.id);
            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                cart.push({ ...product });
            }
            updateCart();
            saveCartToLocalStorage();
        });

        productsContainer.appendChild(productCard);
    });

    productList.appendChild(productsContainer);

    // --- Cart rendering logic ---
    function updateCart() {
        cartItems.innerHTML = "";

        if (cart.length === 0) {
            emptyCart.style.display = "block";
            checkoutBtn.style.display = "none";
            totalPrice.style.display = "none";
            return;
        } else {
            emptyCart.style.display = "none";
            checkoutBtn.style.display = "block";
            totalPrice.style.display = "block";
        }

        cart.forEach(product => {
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <h4>${product.name}</h4>
                <p>Price: $${product.price}</p>
                <p>Quantity: ${product.quantity}</p>
                <button class="add">+</button>
                <button class="remove">-</button>
            `;

            cartItem.querySelector(".add").addEventListener("click", () => {
                product.quantity++;
                updateCart();
                saveCartToLocalStorage();
            });

            cartItem.querySelector(".remove").addEventListener("click", () => {
                if (product.quantity > 1) {
                    product.quantity--;
                } else {
                    cart.splice(cart.indexOf(product), 1);
                }
                updateCart();
                saveCartToLocalStorage();
            });

            cartItems.appendChild(cartItem);
        });

        totalPrice.textContent = cart
            .reduce((total, product) => total + product.price * product.quantity, 0)
            .toFixed(2);
    }

    checkoutBtn.addEventListener("click", () => {
        alert(`Total Price: $${totalPrice.textContent}`);
        cart = [];
        updateCart();
        saveCartToLocalStorage();
    });

    loadCartFromLocalStorage();
    updateCart();
});