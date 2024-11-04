const cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartItemsContainer = document.getElementById("cart-items");
const backToProductsButton = document.getElementById("back-to-products");

const displayCartItems = ()=>{
    if (cartItemsContainer){
        if (cart.length === 0){
            cartItemsContainer.innerHTML = "<p>Your cart is empty!</p>";
            return;
        }
        
        let cartHTML = cart.map(({ id, product_name, price, discount, quantity, image_url })=>{
            const originalTotal = (price * quantity).toFixed(2);
            const discountedPrice = price - (price * discount / 100);
            const discountedTotal = (discountedPrice * quantity).toFixed(2);

            return `
                <div class="card">
                    <img src="${image_url}" alt="${product_name}">
                    <div class="card-content">
                        <h2>${product_name}</h2>
                        <p>Quantity: <button onclick="updateQuantity(${id}, -1)">-</button> ${quantity} <button onclick="updateQuantity(${id}, 1)">+</button></p>
                        <p class="price">Original Total: <s>$${originalTotal}</s></p>
                        <p class="discounted-price">Discounted Total: $${discountedTotal} (${discount}% off)</p>
                        <button class="remove-from-cart" onclick="removeFromCart(${id})">Remove</button>
                    </div>
                </div>
            `;
        }).join('');

        const total = cart.reduce((sum, { price, discount, quantity }) => sum + (price - (price * discount / 100)) * quantity, 0).toFixed(2);
        cartHTML += `<div class="total-price">Total Cart Price: $${total}</div>`;

        cartItemsContainer.innerHTML = cartHTML;
    }
};

const updateQuantity = (productId, change)=>{
    const item = cart.find(({ id }) => id === productId);
    if (item) {
        item.quantity = Math.max(1, item.quantity + change); 
        localStorage.setItem("cart", JSON.stringify(cart));
        displayCartItems();
    }
};

const removeFromCart = (productId) => {
    const index = cart.findIndex(({ id }) => id === productId);
    if (index > -1) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        displayCartItems();
    }
};

if (backToProductsButton) backToProductsButton.addEventListener("click", () => window.location.href = "index1.html");
window.addEventListener("load", displayCartItems);



