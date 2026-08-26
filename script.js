/* =========================================================
   CAFE 9T9 — PROFESSIONAL JAVASCRIPT
========================================================= */

const WHATSAPP_NUMBER = "923021720333";
const DELIVERY_FEE = 0;


/* =========================================================
   PRODUCT DATA
========================================================= */

const products = [

    /* ================= PIZZA ================= */

    {
        id: 1,
        name: "Chicken Tikka",
        category: "pizza",
        description: "Chicken tikka, red sauce, onion, cheese, black olives & capsicum.",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=85",
        badge: "Popular",
        sizes: {
            S: 550,
            M: 1100,
            L: 1450,
            XL: 2100
        }
    },

    {
        id: 2,
        name: "Chicken Fajita",
        category: "pizza",
        description: "Chicken fajita, red sauce, onion, cheese & capsicum.",
        image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=85",
        sizes: {
            S: 550,
            M: 1100,
            L: 1450,
            XL: 2100
        }
    },

    {
        id: 3,
        name: "Hot & Spicy",
        category: "pizza",
        description: "Fajita chicken, red sauce, onion, cheese, capsicum, tomatoes & chilli.",
        image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=85",
        badge: "Spicy",
        sizes: {
            S: 550,
            M: 1100,
            L: 1450,
            XL: 2100
        }
    },

    {
        id: 4,
        name: "Achar Gosht",
        category: "pizza",
        description: "Red sauce, tikka chicken, achar, onion, cheese, capsicum & black olives.",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=85",
        sizes: {
            S: 550,
            M: 1100,
            L: 1450,
            XL: 2100
        }
    },

    {
        id: 5,
        name: "Cheese Lover",
        category: "pizza",
        description: "Red sauce & extra cheese for cheese lovers.",
        image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=85",
        badge: "Cheesy",
        sizes: {
            S: 550,
            M: 1100,
            L: 1450,
            XL: 2100
        }
    },

    {
        id: 6,
        name: "Veggie Lover",
        category: "pizza",
        description: "Red sauce, capsicum, onion, tomatoes, mushroom, cheese, sweet corn & jalapeno.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=85",
        sizes: {
            S: 550,
            M: 1100,
            L: 1450,
            XL: 2100
        }
    },


    /* ================= SPECIAL ================= */

    {
        id: 7,
        name: "Malai Boti",
        category: "special",
        description: "Malai boti, onion, cheese, tomato, black olives & special sauce.",
        image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=800&q=85",
        badge: "Classic",
        sizes: {
            M: 1300,
            L: 1750,
            XL: 2450
        }
    },

    {
        id: 8,
        name: "Mughlai",
        category: "special",
        description: "Mughlai chicken, onion, cheese, capsicum, mushroom, tomato & dip sauce.",
        image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=800&q=85",
        sizes: {
            M: 1300,
            L: 1750,
            XL: 2450
        }
    },

    {
        id: 9,
        name: "Peri Peri",
        category: "special",
        description: "Mix chicken, extreme sauce, onion, cheese, black olives & mushroom.",
        image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=85",
        badge: "Spicy",
        sizes: {
            M: 1300,
            L: 1750,
            XL: 2450
        }
    },

    {
        id: 10,
        name: "CAFE 9T9 Special",
        category: "special",
        description: "Mix chicken, onion, capsicum, tomato, black olives, sweet corn, mushroom & special sauce.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=85",
        badge: "9T9 Special",
        sizes: {
            M: 1300,
            L: 1750,
            XL: 2450
        }
    },


    /* ================= BURGERS ================= */

    {
        id: 11,
        name: "Zinger Burger",
        category: "burgers",
        description: "Crispy chicken fillet, fresh lettuce and special sauce.",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=85",
        price: 430,
        badge: "Popular"
    },

    {
        id: 12,
        name: "Patty Burger",
        category: "burgers",
        description: "Crispy spicy chicken patty with fresh salad and signature sauce.",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=85",
        price: 320
    },

    {
        id: 13,
        name: "Cheesy Zinger Burger",
        category: "burgers",
        description: "Tender crispy chicken fillet with extra cheese and special sauce.",
        image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=800&q=85",
        price: 480,
        badge: "Cheesy"
    },

    {
        id: 14,
        name: "Zinger Tower Burger",
        category: "burgers",
        description: "Double crispy zinger fillets, cheese, lettuce, jalapenos and tomato.",
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=85",
        price: 680,
        badge: "Loaded"
    },

    {
        id: 15,
        name: "Cheesy Beef Burger",
        category: "burgers",
        description: "Double beef patty, crispy onion rings, cheese and BBQ sauce.",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=85",
        price: 580
    },

    {
        id: 16,
        name: "Double Decker Burger",
        category: "burgers",
        description: "Double beef patties, double cheese, lettuce, pickles and sauce.",
        image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=800&q=85",
        price: 680
    },


    /* ================= SANDWICHES ================= */

    {
        id: 17,
        name: "Classic Sandwich",
        category: "sandwiches",
        description: "Chicken tikka, onion, capsicum, lettuce and special sauce.",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=85",
        price: 750
    },

    {
        id: 18,
        name: "Five Star Sandwich",
        category: "sandwiches",
        description: "Tender crispy chicken pieces with special sauce.",
        image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=800&q=85",
        price: 850,
        badge: "Popular"
    },

    {
        id: 19,
        name: "Arabian Sandwich",
        category: "sandwiches",
        description: "Arabian style chicken pieces coated in crispy batter.",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=85",
        price: 750
    },


    /* ================= WRAPS ================= */

    {
        id: 20,
        name: "CAFE 9T9 Special Wrap",
        category: "wraps",
        description: "Grilled chicken, cheese, mayo, jalapenos, lettuce and crispy fries.",
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=85",
        price: 550,
        badge: "9T9 Special"
    },

    {
        id: 21,
        name: "White Wrap",
        category: "wraps",
        description: "Crispy chicken strips, garlic mayo, mozzarella cheese and lettuce.",
        image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=800&q=85",
        price: 500
    },

    {
        id: 22,
        name: "Chicken Fillet Wrap",
        category: "wraps",
        description: "Juicy chicken fillet, mayo, cheese, cucumber and lettuce.",
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=85",
        price: 450
    },


    /* ================= ROLLS ================= */

    {
        id: 23,
        name: "Spin Roll",
        category: "rolls",
        description: "Tortilla bread filled with chicken tikka, jalapenos and sweet corn.",
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=85",
        price: 580
    },

    {
        id: 24,
        name: "Kabab Roll",
        category: "rolls",
        description: "Paratha filled with chicken kabab, mayo salad and chilli ketchup.",
        image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=800&q=85",
        price: 700
    },

    {
        id: 25,
        name: "Zinger Roll",
        category: "rolls",
        description: "Paratha filled with chicken zinger, mayo, salad and chilli ketchup.",
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=85",
        price: 350
    },

    {
        id: 26,
        name: "Chicken Shawarma",
        category: "rolls",
        description: "Chicken, cucumber, salad, spicy sauce and special shawarma sauce.",
        image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=800&q=85",
        price: 220
    },


    /* ================= DEALS ================= */

    {
        id: 27,
        name: "Deal 1",
        category: "deals",
        description: "1 Paratha Roll + 1 Chicken Burger + 1 Cold Drink 500ml.",
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=800&q=85",
        price: 640,
        badge: "Hot Deal"
    },

    {
        id: 28,
        name: "Deal 2",
        category: "deals",
        description: "1 Zinger Burger + 1 Chicken Shawarma + 1 Cold Drink 500ml.",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=85",
        price: 720,
        badge: "Hot Deal"
    },

    {
        id: 29,
        name: "Deal 3",
        category: "deals",
        description: "1 Zinger Burger + 1 Paratha Roll + 1 Chicken Shawarma + Drink.",
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=800&q=85",
        price: 960
    },

    {
        id: 30,
        name: "Deal 4",
        category: "deals",
        description: "1 Small Pizza + 1 Zinger Burger + 1 Cold Drink.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=85",
        price: 1050
    },

    {
        id: 31,
        name: "Family Deal",
        category: "deals",
        description: "1 Large Pizza + 2 Zinger Burgers + 2 Rolls + 1.5L Drink.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=85",
        price: 2930,
        badge: "Family"
    },

    {
        id: 32,
        name: "Big Deal",
        category: "deals",
        description: "Large Pizza + Small Pizza + Burger + Roll + Chicken Burger + Drink.",
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=800&q=85",
        price: 3140,
        badge: "Big Deal"
    }

];


/* =========================================================
   VARIABLES
========================================================= */

let cart = [];
let currentCategory = "all";
let searchTerm = "";


/* =========================================================
   DOM
========================================================= */

const $ = id => document.getElementById(id);

const productsGrid = $("productsGrid");
const searchInput = $("searchInput");
const cartButton = $("cartButton");
const cartDrawer = $("cartDrawer");
const cartOverlay = $("cartOverlay");
const closeCartButton = $("closeCart");
const cartItems = $("cartItems");
const cartCount = $("cartCount");
const cartSubtotal = $("cartSubtotal");
const cartDelivery = $("cartDelivery");
const cartTotal = $("cartTotal");
const checkoutButton = $("checkoutButton");
const checkoutModal = $("checkoutModal");
const closeCheckout = $("closeCheckout");
const checkoutForm = $("checkoutForm");
const checkoutItems = $("checkoutItems");
const checkoutTotal = $("checkoutTotal");
const toast = $("toast");
const toastMessage = $("toastMessage");
const mobileMenuBtn = $("mobileMenuBtn");
const navbar = $("navbar");
const addressGroup = $("addressGroup");
const customerAddress = $("customerAddress");


/* =========================================================
   LOCAL STORAGE
========================================================= */

try {

    const saved = localStorage.getItem("cafe9t9Cart");

    if (saved) {
        cart = JSON.parse(saved);
    }

} catch {
    cart = [];
}


function saveCart() {

    localStorage.setItem(
        "cafe9t9Cart",
        JSON.stringify(cart)
    );

}


/* =========================================================
   PRICE
========================================================= */

function formatPrice(price) {

    return "Rs. " +
        Number(price).toLocaleString("en-PK");

}


/* =========================================================
   PRODUCT
========================================================= */

function getProduct(id) {

    return products.find(
        product => product.id === Number(id)
    );

}


function getCategoryName(category) {

    const names = {
        all: "All",
        pizza: "Pizza",
        special: "Special Pizza",
        burgers: "Burgers",
        sandwiches: "Sandwiches",
        wraps: "Wraps",
        rolls: "Rolls",
        deals: "Hot Deals"
    };

    return names[category] || category;

}


/* =========================================================
   RENDER PRODUCTS
========================================================= */

function renderProducts() {

    const filtered = products.filter(product => {

        const categoryMatch =
            currentCategory === "all" ||
            product.category === currentCategory;

        const text =
            (
                product.name +
                " " +
                product.description
            ).toLowerCase();

        const searchMatch =
            text.includes(searchTerm.toLowerCase());

        return categoryMatch && searchMatch;

    });


    if (!filtered.length) {

        productsGrid.innerHTML = `

            <div class="no-results">

                <i class="fa-solid fa-face-frown"></i>

                <h3>No items found</h3>

                <p>
                    Try another food or category.
                </p>

            </div>

        `;

        return;

    }


    productsGrid.innerHTML =
        filtered.map(createProductCard).join("");

}


function createProductCard(product) {

    let price = product.price;
    let sizeHTML = "";


    if (product.sizes) {

        const first =
            Object.keys(product.sizes)[0];

        price = product.sizes[first];


        sizeHTML = `

            <select
                class="size-select"
                data-size-id="${product.id}">

                ${Object.entries(product.sizes)
                    .map(([size, amount]) => `

                        <option
                            value="${size}"
                            data-price="${amount}">

                            ${size} — ${formatPrice(amount)}

                        </option>

                    `)
                    .join("")}

            </select>

        `;

    }


    return `

        <article class="product-card">

            <div class="product-image">

                ${
                    product.badge
                    ?
                    `<span class="product-badge">
                        ${product.badge}
                    </span>`
                    :
                    ""
                }

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                    onerror="
                        this.src='https://placehold.co/700x500/ff8a00/ffffff?text=CAFE+9T9'
                    ">

            </div>


            <div class="product-content">

                <span class="product-category">
                    ${getCategoryName(product.category)}
                </span>

                <h3>${product.name}</h3>

                <p class="product-description">
                    ${product.description}
                </p>

                ${sizeHTML}


                <div class="product-bottom">

                    <strong class="product-price">
                        ${formatPrice(price)}
                    </strong>

                    <button
                        class="add-btn"
                        onclick="addProductFromCard(${product.id})">

                        <i class="fa-solid fa-plus"></i>
                        Add

                    </button>

                </div>

            </div>

        </article>

    `;

}


/* =========================================================
   ADD PRODUCT
========================================================= */

function addProductFromCard(id) {

    const product = getProduct(id);

    if (!product) return;


    let size = null;
    let price = product.price;


    if (product.sizes) {

        const select =
            document.querySelector(
                `.size-select[data-size-id="${id}"]`
            );

        size =
            select
            ? select.value
            : Object.keys(product.sizes)[0];

        price = product.sizes[size];

    }


    addToCart(product, price, size);

}


function addToCart(product, price, size = null) {

    const key =
        size
        ? `${product.id}-${size}`
        : `${product.id}`;


    const existing =
        cart.find(item => item.key === key);


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            key,
            productId: product.id,
            name: product.name,
            image: product.image,
            price: Number(price),
            size,
            quantity: 1

        });

    }


    saveCart();
    renderCart();

    showToast(
        `${product.name}${size ? ` (${size})` : ""} added to cart`
    );

}


/* =========================================================
   CART
========================================================= */

function calculateSubtotal() {

    return cart.reduce(
        (sum, item) =>
            sum + item.price * item.quantity,
        0
    );

}


function calculateDelivery() {

    return cart.length
        ? DELIVERY_FEE
        : 0;

}


function renderCart() {

    const quantity =
        cart.reduce(
            (sum, item) =>
                sum + item.quantity,
            0
        );


    cartCount.textContent = quantity;


    if (!cart.length) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <i class="fa-solid fa-bag-shopping"></i>

                <h3>Your cart is empty</h3>

                <p>
                    Add something delicious.
                </p>

                <button
                    class="btn btn-primary"
                    onclick="closeCart()">

                    Browse Menu

                </button>

            </div>

        `;

        cartSubtotal.textContent =
            formatPrice(0);

        cartDelivery.textContent =
            formatPrice(0);

        cartTotal.textContent =
            formatPrice(0);

        checkoutButton.disabled = true;

        return;

    }


    cartItems.innerHTML =
        cart.map(createCartItem).join("");


    const subtotal =
        calculateSubtotal();

    const delivery =
        calculateDelivery();

    const total =
        subtotal + delivery;


    cartSubtotal.textContent =
        formatPrice(subtotal);

    cartDelivery.textContent =
        formatPrice(delivery);

    cartTotal.textContent =
        formatPrice(total);

    checkoutButton.disabled = false;

}


function createCartItem(item) {

    return `

        <div class="cart-item">

            <div class="cart-item-image">

                <img
                    src="${item.image}"
                    alt="${item.name}">

            </div>


            <div class="cart-item-info">

                <h4>
                    ${item.name}
                    ${item.size ? ` — ${item.size}` : ""}
                </h4>

                <div class="cart-item-price">
                    ${formatPrice(item.price)}
                </div>


                <div class="cart-controls">

                    <div class="quantity-controls">

                        <button
                            onclick="changeQuantity('${item.key}', -1)">
                            −
                        </button>

                        <span>
                            ${item.quantity}
                        </span>

                        <button
                            onclick="changeQuantity('${item.key}', 1)">
                            +
                        </button>

                    </div>


                    <button
                        class="remove-item"
                        onclick="removeFromCart('${item.key}')">

                        <i class="fa-solid fa-trash"></i>
                        Remove

                    </button>

                </div>

            </div>

        </div>

    `;

}


function changeQuantity(key, amount) {

    const item =
        cart.find(
            item => item.key === key
        );

    if (!item) return;


    item.quantity += amount;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                item => item.key !== key
            );

    }


    saveCart();
    renderCart();

}


function removeFromCart(key) {

    cart =
        cart.filter(
            item => item.key !== key
        );

    saveCart();
    renderCart();

    showToast("Item removed");

}


/* =========================================================
   CART OPEN/CLOSE
========================================================= */

function openCart() {

    cartDrawer.classList.add("show");
    cartOverlay.classList.add("show");

    document.body.classList.add("no-scroll");

}


function closeCart() {

    cartDrawer.classList.remove("show");
    cartOverlay.classList.remove("show");

    document.body.classList.remove("no-scroll");

}


cartButton.addEventListener(
    "click",
    openCart
);

closeCartButton.addEventListener(
    "click",
    closeCart
);

cartOverlay.addEventListener(
    "click",
    closeCart
);


/* =========================================================
   CATEGORY
========================================================= */

function selectCategory(category) {

    currentCategory = category;

    document
        .querySelectorAll(".category-btn")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.category === category
            );

        });


    renderProducts();

    document
        .getElementById("menu")
        .scrollIntoView({
            behavior: "smooth"
        });

}


document
    .querySelectorAll(".category-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                selectCategory(
                    button.dataset.category
                );

            }
        );

    });


/* =========================================================
   SEARCH
========================================================= */

searchInput.addEventListener(
    "input",
    event => {

        searchTerm =
            event.target.value.trim();

        renderProducts();

    }
);


/* =========================================================
   FOOTER CATEGORIES
========================================================= */

document
    .querySelectorAll("[data-footer-category]")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                selectCategory(
                    link.dataset.footerCategory
                );

            }
        );

    });


/* =========================================================
   MOBILE NAV
========================================================= */

mobileMenuBtn.addEventListener(
    "click",
    () => {

        navbar.classList.toggle("show");

        const icon =
            mobileMenuBtn.querySelector("i");


        if (navbar.classList.contains("show")) {

            icon.className =
                "fa-solid fa-xmark";

        } else {

            icon.className =
                "fa-solid fa-bars";

        }

    }
);


navbar
    .querySelectorAll("a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navbar.classList.remove("show");

                mobileMenuBtn
                    .querySelector("i")
                    .className =
                    "fa-solid fa-bars";

            }
        );

    });


/* =========================================================
   CHECKOUT
========================================================= */

function openCheckout() {

    if (!cart.length) {

        showToast("Your cart is empty");

        return;

    }


    renderCheckoutSummary();

    checkoutModal.classList.add("show");

    closeCart();

    document.body.classList.add("no-scroll");

}


function closeCheckoutModal() {

    checkoutModal.classList.remove("show");

    document.body.classList.remove("no-scroll");

}


checkoutButton.addEventListener(
    "click",
    openCheckout
);

closeCheckout.addEventListener(
    "click",
    closeCheckoutModal
);


checkoutModal.addEventListener(
    "click",
    event => {

        if (event.target === checkoutModal) {

            closeCheckoutModal();

        }

    }
);


/* =========================================================
   CHECKOUT SUMMARY
========================================================= */

function renderCheckoutSummary() {

    checkoutItems.innerHTML =
        cart.map(item => `

            <div class="checkout-line">

                <span>
                    ${item.name}
                    ${item.size ? ` (${item.size})` : ""}
                    × ${item.quantity}
                </span>

                <strong>
                    ${formatPrice(
                        item.price * item.quantity
                    )}
                </strong>

            </div>

        `).join("");


    checkoutTotal.textContent =
        formatPrice(
            calculateSubtotal() +
            calculateDelivery()
        );

}


/* =========================================================
   ORDER TYPE
========================================================= */

document
    .querySelectorAll(
        'input[name="orderType"]'
    )
    .forEach(radio => {

        radio.addEventListener(
            "change",
            () => {

                const delivery =
                    document.querySelector(
                        'input[name="orderType"]:checked'
                    ).value === "Delivery";


                addressGroup.style.display =
                    delivery ? "block" : "none";

                customerAddress.required =
                    delivery;

            }
        );

    });


/* =========================================================
   WHATSAPP ORDER
========================================================= */

checkoutForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        if (!cart.length) {

            showToast(
                "Your cart is empty"
            );

            return;

        }


        const name =
            $("customerName").value.trim();

        const phone =
            $("customerPhone").value.trim();

        const orderType =
            document.querySelector(
                'input[name="orderType"]:checked'
            ).value;

        const address =
            customerAddress.value.trim();

        const payment =
            $("paymentMethod").value;

        const orderTime =
            $("orderTime").value.trim();

        const notes =
            $("orderNotes").value.trim();


        if (
            orderType === "Delivery" &&
            !address
        ) {

            showToast(
                "Please enter delivery address"
            );

            customerAddress.focus();

            return;

        }


        const orderId =
            "9T9-" +
            Date.now()
                .toString()
                .slice(-7);


        const subtotal =
            calculateSubtotal();

        const delivery =
            calculateDelivery();

        const total =
            subtotal + delivery;


        let message =
            `*CAFE 9T9 — NEW ORDER*\n`;

        message +=
            `━━━━━━━━━━━━━━━━━━━━\n`;

        message +=
            `*Order ID:* ${orderId}\n`;

        message +=
            `*Customer:* ${name}\n`;

        message +=
            `*Phone:* ${phone}\n`;

        message +=
            `*Order Type:* ${orderType}\n`;


        if (orderType === "Delivery") {

            message +=
                `*Address:* ${address}\n`;

        }


        message +=
            `*Payment:* ${payment}\n`;


        if (orderTime) {

            message +=
                `*Preferred Time:* ${orderTime}\n`;

        }


        message +=
            `\n*ORDER ITEMS*\n`;

        message +=
            `━━━━━━━━━━━━━━━━━━━━\n`;


        cart.forEach((item, index) => {

            message +=
                `${index + 1}. ${item.name}`;

            if (item.size) {

                message +=
                    ` (${item.size})`;

            }

            message +=
                ` × ${item.quantity} = ${formatPrice(
                    item.price * item.quantity
                )}\n`;

        });


        message +=
            `\n*Subtotal:* ${formatPrice(subtotal)}\n`;

        message +=
            `*Delivery:* ${formatPrice(delivery)}\n`;

        message +=
            `*TOTAL:* ${formatPrice(total)}\n`;


        if (notes) {

            message +=
                `\n*Special Instructions:* ${notes}\n`;

        }


        message +=
            `\nThank you — CAFE 9T9\n`;

        message +=
            `Please confirm my order.`;


        const whatsappURL =
            `https://wa.me/${WHATSAPP_NUMBER}?text=` +
            encodeURIComponent(message);


        window.open(
            whatsappURL,
            "_blank"
        );


        showToast(
            "Opening WhatsApp..."
        );

    }
);


/* =========================================================
   TOAST
========================================================= */

let toastTimer;


function showToast(message) {

    toastMessage.textContent =
        message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove("show");

            },
            2500
        );

}


/* =========================================================
   ESCAPE
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeCart();
            closeCheckoutModal();

        }

    }
);


/* =========================================================
   INITIALIZE
========================================================= */

renderProducts();
renderCart();

console.log(
    "CAFE 9T9 Professional Website Loaded."
);