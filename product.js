const products = [
    { id: 1, product_name: "Wireless Headphones", category: "Electronics", rating: 4.5, price: 59.99, discount: 10, image_url: "https://images.pexels.com/photos/7657593/pexels-photo-7657593.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 2, product_name: "Gaming Mouse", category: "Electronics", rating: 4.7, price: 29.99, discount: 15, image_url: "https://images.pexels.com/photos/7657593/pexels-photo-7657593.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 3, product_name: "4K Monitor", category: "Electronics", rating: 4.8, price: 299.99, discount: 20, image_url: "https://images.pexels.com/photos/7657593/pexels-photo-7657593.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 4, product_name: "Bluetooth Speaker", category: "Electronics", rating: 4.6, price: 89.99, discount: 25, image_url: "https://images.pexels.com/photos/7657593/pexels-photo-7657593.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 5, product_name: "Smartwatch", category: "Electronics", rating: 4.4, price: 199.99, discount: 15, image_url: "https://images.pexels.com/photos/7657593/pexels-photo-7657593.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 6, product_name: "Instant Camera", category: "Cameras", rating: 4.7, price: 129.99, discount: 10, image_url: "https://images.pexels.com/photos/7657593/pexels-photo-7657593.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 7, product_name: "DSLR Camera", category: "Cameras", rating: 4.9, price: 899.99, discount: 5, image_url: "https://images.pexels.com/photos/7657593/pexels-photo-7657593.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 8, product_name: "Action Camera", category: "Cameras", rating: 4.6, price: 149.99, discount: 15, image_url: "https://images.pexels.com/photos/7657593/pexels-photo-7657593.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 9, product_name: "Tripod Stand", category: "Cameras", rating: 4.3, price: 39.99, discount: 20, image_url: "https://images.pexels.com/photos/7657593/pexels-photo-7657593.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 10, product_name: "Camera Bag", category: "Cameras", rating: 4.2, price: 59.99, discount: 10, image_url: "https://images.pexels.com/photos/5712088/pexels-photo-5712088.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 11, product_name: "Gaming Keyboard", category: "Computer Accessories", rating: 4.8, price: 79.99, discount: 15, image_url: "https://images.pexels.com/photos/5712088/pexels-photo-5712088.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 12, product_name: "Gaming Headset", category: "Computer Accessories", rating: 4.7, price: 89.99, discount: 20, image_url: "https://images.pexels.com/photos/5712088/pexels-photo-5712088.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 13, product_name: "External Hard Drive", category: "Computer Accessories", rating: 4.5, price: 119.99, discount: 10, image_url: "https://images.pexels.com/photos/5712088/pexels-photo-5712088.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 14, product_name: "USB Flash Drive", category: "Computer Accessories", rating: 4.6, price: 29.99, discount: 25, image_url: "https://images.pexels.com/photos/5712088/pexels-photo-5712088.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 15, product_name: "Wireless Mouse", category: "Computer Accessories", rating: 4.4, price: 19.99, discount: 20, image_url: "https://images.pexels.com/photos/5712088/pexels-photo-5712088.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 16, product_name: "Laptop Stand", category: "Computer Accessories", rating: 4.7, price: 49.99, discount: 15, image_url: "https://images.pexels.com/photos/5712088/pexels-photo-5712088.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 17, product_name: "Mechanical Keyboard", category: "Computer Accessories", rating: 4.8, price: 129.99, discount: 10, image_url: "https://images.pexels.com/photos/5712088/pexels-photo-5712088.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 18, product_name: "Webcam", category: "Computer Accessories", rating: 4.5, price: 59.99, discount: 20, image_url: "https://images.pexels.com/photos/5712088/pexels-photo-5712088.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 19, product_name: "Monitor Mount", category: "Computer Accessories", rating: 4.3, price: 79.99, discount: 25, image_url: "https://images.pexels.com/photos/7657736/pexels-photo-7657736.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 20, product_name: "Wireless Router", category: "Computer Accessories", rating: 4.6, price: 99.99, discount: 15, image_url: "https://images.pexels.com/photos/7657736/pexels-photo-7657736.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 21, product_name: "Smart TV", category: "Home Electronics", rating: 4.8, price: 799.99, discount: 10, image_url: "https://images.pexels.com/photos/7657736/pexels-photo-7657736.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 22, product_name: "Robot Vacuum", category: "Home Electronics", rating: 4.7, price: 299.99, discount: 20, image_url: "https://images.pexels.com/photos/7657736/pexels-photo-7657736.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 23, product_name: "Air Purifier", category: "Home Electronics", rating: 4.5, price: 199.99, discount: 15, image_url: "https://images.pexels.com/photos/7657736/pexels-photo-7657736.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 24, product_name: "Electric Kettle", category: "Home Electronics", rating: 4.6, price: 49.99, discount: 25, image_url: "https://images.pexels.com/photos/7657736/pexels-photo-7657736.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 25, product_name: "Microwave Oven", category: "Home Electronics", rating: 4.7, price: 149.99, discount: 20, image_url: "https://images.pexels.com/photos/7657736/pexels-photo-7657736.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 26, product_name: "Coffee Maker", category: "Home Electronics", rating: 4.4, price: 99.99, discount: 15, image_url: "https://images.pexels.com/photos/7657736/pexels-photo-7657736.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 27, product_name: "Blender", category: "Home Electronics", rating: 4.5, price: 79.99, discount: 10, image_url: "https://images.pexels.com/photos/7657736/pexels-photo-7657736.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 28, product_name: "Electric Toothbrush", category: "Home Electronics", rating: 4.3, price: 59.99, discount: 20, image_url: "https://images.pexels.com/photos/7657736/pexels-photo-7657736.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 29, product_name: "Hair Dryer", category: "Home Electronics", rating: 4.6, price: 39.99, discount: 25, image_url: "https://images.pexels.com/photos/7657736/pexels-photo-7657736.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 30, product_name: "Smart Light Bulbs", category: "Home Electronics", rating: 4.7, price: 49.99, discount: 15, image_url: "https://images.pexels.com/photos/7657736/pexels-photo-7657736.jpeg?auto=compress&cs=tinysrgb&w=600" }
];

const cart = JSON.parse(localStorage.getItem("cart")) || [];
const productListElement = document.getElementById("product-list");
const cartCountElement = document.getElementById("cart-count");
const viewCartButton = document.getElementById("view-cart");

const displayProducts = () =>{
    if (productListElement) {
        productListElement.innerHTML = products.map(({ id, product_name, category, rating, price, discount, image_url }) => {
            const discountedPrice = (price - (price * discount / 100)).toFixed(2);
            return `
                <div class="card">
                    <img src="${image_url}" alt="${product_name}">
                    <div class="card-content">
                        <h2>${product_name}</h2>
                        <p>Category: ${category}</p>
                        <p class="rating">Rating: ${rating}</p>
                        <p class="price">Original Price: <s>$${price.toFixed(2)}</s></p>
                        <p class="discounted-price">Discounted Price: $${discountedPrice} (${discount}% off)</p>
                        <button class="add-to-cart" onclick="addToCart(${id})">Add to Cart</button>
                    </div>
                </div>
            `;
        }).join('');
        updateCartCount();
    }
};

const addToCart = (id)=>{
    const product = products.find(p => p.id === id);
    const item = cart.find(p => p.id === id);
    item ? item.quantity++ : cart.push({ ...product, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(`${product.product_name} added to cart!`);
};

const updateCartCount = () => {
    cartCountElement.textContent = cart.reduce((total, item) => total + item.quantity, 0);
};

if (viewCartButton) viewCartButton.addEventListener("click", () => window.location.href = "cart.html");
window.addEventListener("load", displayProducts);

