/* =========================================================
   CAFE 9T9 PROFESSIONAL WEBSITE
   JAVASCRIPT
========================================================= */


/* =========================================================
   SETTINGS
========================================================= */

// CAFE 9T9 WhatsApp number
const WHATSAPP_NUMBER = "923401720333";

// Delivery fee.
// Change this number if you have a fixed delivery charge.
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
        image: "assets/pizza.jpg",
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
        image: "assets/pizza.jpg",
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
        image: "assets/pizza.jpg",
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
        image: "assets/pizza.jpg",
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
        image: "assets/pizza.jpg",
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
        image: "assets/pizza.jpg",
        sizes: {
            S: 550,
            M: 1100,
            L: 1450,
            XL: 2100
        }
    },


    /* ================= CLASSIC PIZZA ================= */

    {
        id: 7,
        name: "Malai Boti",
        category: "pizza",
        description: "Malai boti, onion, cheese, tomato, black olives & special sauce.",
        image: "assets/pizza.jpg",
        badge: "Classic",
        sizes: {
            S: 700,
            M: 1300,
            L: 1750,
            XL: 2450
        }
    },

    {
        id: 8,
        name: "Mughlai",
        category: "pizza",
        description: "Mughlai chicken, onion, cheese, capsicum, mushroom, tomato & dip sauce.",
        image: "assets/pizza.jpg",
        sizes: {
            S: 700,
            M: 1300,
            L: 1750,
            XL: 2450
        }
    },

    {
        id: 9,
        name: "Peri Peri",
        category: "pizza",
        description: "Mix chicken, extreme sauce, onion, cheese, black olives & mushroom.",
        image: "assets/pizza.jpg",
        badge: "Spicy",
        sizes: {
            S: 700,
            M: 1300,
            L: 1750,
            XL: 2450
        }
    },

    {
        id: 10,
        name: "CAFE 9T9 Special",
        category: "pizza",
        description: "Mix chicken, onion, capsicum, tomato, black olives, sweet corn, mushroom & special sauce.",
        image: "assets/pizza.jpg",
        badge: "9T9 Special",
        sizes: {
            S: 700,
            M: 1300,
            L: 1750,
            XL: 2450
        }
    },

    {
        id: 11,
        name: "Supreme",
        category: "pizza",
        description: "Mix chicken, red sauce, onion, cheese, capsicum, black olives & mushroom.",
        image: "assets/pizza.jpg",
        sizes: {
            S: 700,
            M: 1300,
            L: 1750,
            XL: 2450
        }
    },


    /* ================= SPECIAL PIZZA ================= */

    {
        id: 12,
        name: "Crown Crust",
        category: "special",
        description: "Mix chicken, extreme sauce, onion, cheese, black olives & mushroom.",
        image: "assets/special.jpg",
        sizes: {
            M: 1350,
            L: 1750,
            XL: 2450
        }
    },

    {
        id: 13,
        name: "Kabab Stuffed",
        category: "special",
        description: "Chicken kebab, tikka chicken, onions, capsicum, mushrooms, black olives & dip sauce.",
        image: "assets/special.jpg",
        sizes: {
            M: 1350,
            L: 1750,
            XL: 2450
        }
    },

    {
        id: 14,
        name: "Behari Kebab",
        category: "special",
        description: "Grilled chicken, kabab, black olives, onions, capsicum & special sauce.",
        image: "assets/special.jpg",
        sizes: {
            M: 1350,
            L: 1750,
            XL: 2450
        }
    },

    {
        id: 15,
        name: "Lasagna Pizza",
        category: "special",
        description: "Chicken, macaroni, red sauce, capsicum & cheese.",
        image: "assets/special.jpg",
        sizes: {
            M: 1350,
            L: 1750,
            XL: 2450
        }
    },

    {
        id: 16,
        name: "CAFE 9T9 Special",
        category: "special",
        description: "Mix chicken, onions, capsicum, tomatoes, black olives, sweet corn, mushrooms & special sauce.",
        image: "assets/special.jpg",
        sizes: {
            M: 1350,
            L: 1750,
            XL: 2450
        }
    },

    {
        id: 17,
        name: "Stuff Square",
        category: "special",
        description: "Chicken kebab, chicken tikka, onions, cheese, capsicum, mushrooms, black olives & sauce.",
        image: "assets/special.jpg",
        sizes: {
            M: 1350,
            L: 1750,
            XL: 2450
        }
    },


    /* ================= BURGERS ================= */

    {
        id: 18,
        name: "Zinger Burger",
        category: "burgers",
        description: "Tender crispy chicken fillet in crispy batter served with special sauce.",
        image: "assets/burgers.jpg",
        price: 430,
        badge: "Popular"
    },

    {
        id: 19,
        name: "Patty Burger",
        category: "burgers",
        description: "Crispy spicy chicken patty topped with fresh salad and signature sauce.",
        image: "assets/burgers.jpg",
        price: 320
    },

    {
        id: 20,
        name: "Cheesy Zinger Burger",
        category: "burgers",
        description: "Tender crispy chicken fillet with extra cheese and special sauce.",
        image: "assets/burgers.jpg",
        price: 480
    },

    {
        id: 21,
        name: "Zinger Tower Burger",
        category: "burgers",
        description: "Double crispy zinger fillets, extra cheese, lettuce, jalapenos, tomato & sesame bun.",
        image: "assets/burgers.jpg",
        price: 680,
        badge: "Loaded"
    },

    {
        id: 22,
        name: "Cheesy Beef Burger",
        category: "burgers",
        description: "Double beef patty with crispy onion rings, cheese and tangy BBQ sauce.",
        image: "assets/burgers.jpg",
        price: 580
    },

    {
        id: 23,
        name: "Cheesy Chapli Burger",
        category: "burgers",
        description: "Grilled patty with cheese, onion rings and rich cheddar.",
        image: "assets/burgers.jpg",
        price: 480
    },

    {
        id: 24,
        name: "Double Decker Burger",
        category: "burgers",
        description: "Double beef patties, double cheese, lettuce, pickles, onion & signature sauce.",
        image: "assets/burgers.jpg",
        price: 680
    },

    {
        id: 25,
        name: "Lava Burger",
        category: "burgers",
        description: "Grilled patty stacked with crispy onion rings, rich cheddar & special sauce.",
        image: "assets/burgers.jpg",
        price: 900,
        badge: "Special"
    },

    {
        id: 26,
        name: "Grill Burger",
        category: "burgers",
        description: "Grilled patty, crispy onion rings, rich cheddar & special sauce.",
        image: "assets/burgers.jpg",
        price: 600
    },


    /* ================= SANDWICHES ================= */

    {
        id: 27,
        name: "Classic Sandwich",
        category: "sandwiches",
        description: "Sandwich bread, chicken tikka, onion, capsicum, iceberg lettuce & special sauce.",
        image: "assets/sandwiches.jpg",
        price: 750
    },

    {
        id: 28,
        name: "Five Star Sandwich",
        category: "sandwiches",
        description: "Tender chicken pieces coated in crispy batter and served with special sauce.",
        image: "assets/sandwiches.jpg",
        price: 850,
        badge: "Popular"
    },

    {
        id: 29,
        name: "Arabian Sandwich",
        category: "sandwiches",
        description: "Special Arabian style chicken pieces coated in crispy batter.",
        image: "assets/sandwiches.jpg",
        price: 750
    },

    {
        id: 30,
        name: "Mughlai Sandwich",
        category: "sandwiches",
        description: "Tender Mughlai chicken pieces coated in crispy batter with special sauce.",
        image: "assets/sandwiches.jpg",
        price: 850
    },


    /* ================= WRAPS ================= */

    {
        id: 31,
        name: "CAFE 9T9 Special Wrap",
        category: "wraps",
        description: "Grilled chicken, cheese, special mayo sauce, jalapenos, fresh lettuce & crispy fries.",
        image: "assets/wraps.jpg",
        price: 550,
        badge: "9T9 Special"
    },

    {
        id: 32,
        name: "White Wrap",
        category: "wraps",
        description: "Crispy chicken strips, garlic mayo, mozzarella cheese & fresh lettuce.",
        image: "assets/wraps.jpg",
        price: 500
    },

    {
        id: 33,
        name: "Chicken Fillet Wrap",
        category: "wraps",
        description: "Juicy chicken fillet, mayo sauce, cheese slice, cucumber & fresh lettuce.",
        image: "assets/wraps.jpg",
        price: 450
    },

    {
        id: 34,
        name: "Tortilla Wrap",
        category: "wraps",
        description: "BBQ chicken, capsicum, onion, cheese sauce & Mexican spices.",
        image: "assets/wraps.jpg",
        price: 500
    },


    /* ================= ROLLS ================= */

    {
        id: 35,
        name: "Spin Roll",
        category: "rolls",
        description: "Tortilla bread filled with chicken tikka, jalapenos & sweet corn.",
        image: "assets/rolls.jpg",
        price: 580
    },

    {
        id: 36,
        name: "Kabab Roll",
        category: "rolls",
        description: "Paratha filled with chicken kabab, mayo salad & chilli ketchup.",
        image: "assets/rolls.jpg",
        price: 700
    },

    {
        id: 37,
        name: "Zinger Roll",
        category: "rolls",
        description: "Paratha filled with chicken zinger, mayo, salad & chilli ketchup.",
        image: "assets/rolls.jpg",
        price: 350
    },

    {
        id: 38,
        name: "Zinger Shawarma",
        category: "rolls",
        description: "Zinger chicken with shawarma sauces, cabbage & onion.",
        image: "assets/rolls.jpg",
        price: 350
    },

    {
        id: 39,
        name: "Zinger Shawarma With Cheese",
        category: "rolls",
        description: "Zinger chicken, cheese slice or mozzarella, garlic mayo & veggies.",
        image: "assets/rolls.jpg",
        price: 480,
        badge: "Cheesy"
    },

    {
        id: 40,
        name: "Chicken Shawarma",
        category: "rolls",
        description: "Shawarma bread filled with chicken, cucumber, salad, spicy sauce & special shawarma sauce.",
        image: "assets/rolls.jpg",
        price: 220
    },

    {
        id: 41,
        name: "Chicken Paratha",
        category: "rolls",
        description: "Paratha bread filled with chicken, cucumber, salad, spicy sauce & special shawarma sauce.",
        image: "assets/rolls.jpg",
        price: 240
    },

    {
        id: 42,
        name: "Platter",
        category: "rolls",
        description: "4 pcs Spin Roll, 6 pcs Oven Baked Wings & regular fries with dip sauce.",
        image: "assets/rolls.jpg",
        price: 1150,
        badge: "Family"
    },


    /* ================= HOT DEALS ================= */

    {
        id: 43,
        name: "Deal 1",
        category: "deals",
        description: "1 Paratha Roll + 1 Chicken Burger + 1 Cold Drink 500ml.",
        image: "assets/deals.jpg",
        price: 640,
        badge: "Hot Deal"
    },

    {
        id: 44,
        name: "Deal 2",
        category: "deals",
        description: "1 Zinger Burger + 1 Chicken Shawarma + 1 Cold Drink 500ml.",
        image: "assets/deals.jpg",
        price: 720,
        badge: "Hot Deal"
    },

    {
        id: 45,
        name: "Deal 3",
        category: "deals",
        description: "1 Zinger Burger + 1 Paratha Roll + 1 Chicken Shawarma + 1 Cold Drink 500ml.",
        image: "assets/deals.jpg",
        price: 960
    },

    {
        id: 46,
        name: "Deal 4",
        category: "deals",
        description: "1 Small Pizza + 1 Zinger Burger + 1 Cold Drink 500ml.",
        image: "assets/deals.jpg",
        price: 1050
    },

    {
        id: 47,
        name: "Deal 5",
        category: "deals",
        description: "1 Medium Pizza + 2 Zinger Burgers + 1 Chicken Shawarma + 1 Cold Drink 1.5L.",
        image: "assets/deals.jpg",
        price: 2540
    },

    {
        id: 48,
        name: "Deal 6",
        category: "deals",
        description: "1 Large Pizza + 2 Zinger Burgers + 2 Paratha Rolls + 1 Cold Drink 1.5L.",
        image: "assets/deals.jpg",
        price: 2930
    },

    {
        id: 49,
        name: "Deal 7",
        category: "deals",
        description: "2 Medium Pizzas + 1 Cold Drink 1.5L.",
        image: "assets/deals.jpg",
        price: 2350
    },

    {
        id: 50,
        name: "Student Deal",
        category: "deals",
        description: "1 Small Pizza + 1 Tin Pack.",
        image: "assets/deals.jpg",
        price: 650,
        badge: "Student"
    },

    {
        id: 51,
        name: "Evening Deal",
        category: "deals",
        description: "1 Large Pizza + 1 Cold Drink.",
        image: "assets/deals.jpg",
        price: 1600
    },

    {
        id: 52,
        name: "Midnight Deal",
        category: "deals",
        description: "2 Large Pizzas + 1.5L Drink.",
        image: "assets/deals.jpg",
        price: 3100,
        badge: "Midnight"
    },

    {
        id: 53,
        name: "Big Deal 1",
        category: "deals",
        description: "1 Large Pizza + 1 Small Pizza + 1 Zinger Burger + 1 Chicken Burger + 1 Paratha Roll + 1 Cold Drink 1.5L.",
        image: "assets/deals.jpg",
        price: 3140,
        badge: "Big Deal"
    },

    {
        id: 54,
        name: "Big Deal 2",
        category: "deals",
        description: "2 Chicken Burgers + 2 Paratha Rolls + 2 Cold Drinks 1.5L + 2 Large Pizzas + 2 Chicken Shawarma + 2 Zinger Burgers.",
        image: "assets/deals.jpg",
        price: 5620,
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
   DOM ELEMENTS
========================================================= */

const productsGrid =
    document.getElementById("productsGrid");

const categoryButtons =
    document.querySelectorAll(".category-btn");

const searchInput =
    document.getElementById("searchInput");

const cartButton =
    document.getElementById("cartButton");

const cartDrawer =
    document.getElementById("cartDrawer");

const cartOverlay =
    document.getElementById("cartOverlay");

const closeCart =
    document.getElementById("closeCart");

const cartItems =
    document.getElementById("cartItems");

const cartCount =
    document.getElementById("cartCount");

const cartSubtotal =
    document.getElementById("cartSubtotal");

const cartDelivery =
    document.getElementById("cartDelivery");

const cartTotal =
    document.getElementById("cartTotal");

const checkoutButton =
    document.getElementById("checkoutButton");

const checkoutModal =
    document.getElementById("checkoutModal");

const closeCheckout =
    document.getElementById("closeCheckout");

const checkoutForm =
    document.getElementById("checkoutForm");

const checkoutItems =
    document.getElementById("checkoutItems");

const checkoutTotal =
    document.getElementById("checkoutTotal");

const toast =
    document.getElementById("toast");

const toastMessage =
    document.getElementById("toastMessage");

const mobileMenuBtn =
    document.getElementById("mobileMenuBtn");

const navbar =
    document.getElementById("navbar");

const addressGroup =
    document.getElementById("addressGroup");

const customerAddress =
    document.getElementById("customerAddress");


/* =========================================================
   LOAD CART
========================================================= */

const savedCart =
    localStorage.getItem("cafe9t9Cart");

if (savedCart) {

    try {

        cart = JSON.parse(savedCart);

    } catch (error) {

        cart = [];

    }

}


/* =========================================================
   SAVE CART
========================================================= */

function saveCart() {

    localStorage.setItem(
        "cafe9t9Cart",
        JSON.stringify(cart)
    );

}


/* =========================================================
   FORMAT PRICE
========================================================= */

function formatPrice(price) {

    return "Rs. " +
        Number(price).toLocaleString("en-PK");

}


/* =========================================================
   GET PRODUCT
========================================================= */

function getProduct(productId) {

    return products.find(
        product => product.id === Number(productId)
    );

}


/* =========================================================
   RENDER PRODUCTS
========================================================= */

function renderProducts() {

    let filteredProducts =
        products.filter(product => {

            const categoryMatch =
                currentCategory === "all" ||
                product.category === currentCategory;

            const searchMatch =
                product.name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||

                product.description
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());

            return categoryMatch && searchMatch;

        });


    if (!filteredProducts.length) {

        productsGrid.innerHTML = `

            <div class="no-results">

                <i class="fa-solid fa-face-frown"></i>

                <h3>No items found</h3>

                <p>
                    Try another search or category.
                </p>

            </div>

        `;

        return;

    }


    productsGrid.innerHTML =
        filteredProducts.map(product =>
            createProductCard(product)
        ).join("");

}


/* =========================================================
   PRODUCT CARD
========================================================= */

function createProductCard(product) {

    let price = product.price;

    let sizeHTML = "";


    if (product.sizes) {

        const firstSize =
            Object.keys(product.sizes)[0];

        price =
            product.sizes[firstSize];


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

        <article
            class="product-card"
            data-product-id="${product.id}">

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
                    onerror="this.src='https://placehold.co/500x500/f6a313/351617?text=CAFE+9T9'">

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

                    <strong
                        class="product-price"
                        id="price-${product.id}">
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
   CATEGORY NAME
========================================================= */

function getCategoryName(category) {

    const names = {

        pizza: "Pizza",
        deals: "Hot Deals",
        wraps: "Wraps",
        burgers: "Burgers",
        sandwiches: "Sandwiches",
        rolls: "Rolls",
        special: "Special"

    };

    return names[category] || category;

}


/* =========================================================
   ADD PRODUCT FROM CARD
========================================================= */

function addProductFromCard(productId) {

    const product =
        getProduct(productId);

    if (!product) return;


    let size = null;

    let price = product.price;


    if (product.sizes) {

        const select =
            document.querySelector(
                `.size-select[data-size-id="${productId}"]`
            );

        size =
            select ? select.value : Object.keys(product.sizes)[0];

        price =
            product.sizes[size];

    }


    addToCart(
        product,
        price,
        size
    );

}


/* =========================================================
   ADD TO CART
========================================================= */

function addToCart(
    product,
    price,
    size = null
) {

    const cartKey =
        size
        ? `${product.id}-${size}`
        : `${product.id}`;


    const existing =
        cart.find(
            item => item.key === cartKey
        );


    if (existing) {

        existing.quantity += 1;

    } else {

        cart.push({

            key: cartKey,

            productId: product.id,

            name: product.name,

            category: product.category,

            image: product.image,

            price: Number(price),

            size: size,

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
   RENDER CART
========================================================= */

function renderCart() {

    const totalQuantity =
        cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );

    cartCount.textContent =
        totalQuantity;


    if (!cart.length) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <i class="fa-solid fa-cart-shopping"></i>

                <h3>Your cart is empty</h3>

                <p>
                    Add delicious items from the menu.
                </p>

                <button
                    class="btn btn-primary"
                    id="startShopping">
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
        cart.map(item =>
            createCartItem(item)
        ).join("");


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


    const startShopping =
        document.getElementById("startShopping");

    if (startShopping) {

        startShopping.addEventListener(
            "click",
            closeCartDrawer
        );

    }

}


/* =========================================================
   CART ITEM
========================================================= */

function createCartItem(item) {

    return `

        <div class="cart-item">

            <div class="cart-item-image">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                    onerror="this.src='https://placehold.co/200x200/f6a313/351617?text=9T9'">

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


/* =========================================================
   CHANGE QUANTITY
========================================================= */

function changeQuantity(
    key,
    amount
) {

    const item =
        cart.find(
            product => product.key === key
        );

    if (!item) return;


    item.quantity += amount;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                product => product.key !== key
            );

    }


    saveCart();

    renderCart();

}


/* =========================================================
   REMOVE ITEM
========================================================= */

function removeFromCart(key) {

    cart =
        cart.filter(
            item => item.key !== key
        );

    saveCart();

    renderCart();

    showToast("Item removed from cart");

}


/* =========================================================
   CALCULATE SUBTOTAL
========================================================= */

function calculateSubtotal() {

    return cart.reduce(
        (total, item) =>
            total +
            (item.price * item.quantity),
        0
    );

}


/* =========================================================
   DELIVERY
========================================================= */

function calculateDelivery() {

    if (!cart.length) {
        return 0;
    }

    return DELIVERY_FEE;

}


/* =========================================================
   OPEN CART
========================================================= */

function openCartDrawer() {

    cartDrawer.classList.add("show");

    cartOverlay.classList.add("show");

    document.body.classList.add("no-scroll");

}


/* =========================================================
   CLOSE CART
========================================================= */

function closeCartDrawer() {

    cartDrawer.classList.remove("show");

    cartOverlay.classList.remove("show");

    document.body.classList.remove("no-scroll");

}


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

    closeCartDrawer();

    document.body.classList.add("no-scroll");

}


/* =========================================================
   CLOSE CHECKOUT
========================================================= */

function closeCheckoutModal() {

    checkoutModal.classList.remove("show");

    document.body.classList.remove("no-scroll");

}


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


    const total =
        calculateSubtotal() +
        calculateDelivery();


    checkoutTotal.textContent =
        formatPrice(total);

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
            function () {

                if (this.value === "Delivery") {

                    addressGroup.style.display =
                        "flex";

                    customerAddress.required =
                        true;

                } else {

                    addressGroup.style.display =
                        "none";

                    customerAddress.required =
                        false;

                }

            }
        );

    });


/* =========================================================
   SEND ORDER TO WHATSAPP
========================================================= */

checkoutForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        if (!cart.length) {

            showToast(
                "Your cart is empty"
            );

            return;

        }


        const name =
            document
                .getElementById("customerName")
                .value.trim();


        const phone =
            document
                .getElementById("customerPhone")
                .value.trim();


        const orderType =
            document
                .querySelector(
                    'input[name="orderType"]:checked'
                )
                .value;


        const address =
            customerAddress
                .value.trim();


        const payment =
            document
                .getElementById("paymentMethod")
                .value;


        const orderTime =
            document
                .getElementById("orderTime")
                .value.trim();


        const notes =
            document
                .getElementById("orderNotes")
                .value.trim();


        if (
            orderType === "Delivery" &&
            !address
        ) {

            showToast(
                "Please enter your delivery address"
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


        let orderMessage = "";

        orderMessage +=
            `*CAFE 9T9 — NEW ORDER*%0A`;

        orderMessage +=
            `━━━━━━━━━━━━━━━━━━━━%0A`;

        orderMessage +=
            `*Order ID:* ${orderId}%0A`;

        orderMessage +=
            `*Customer:* ${encodeURIComponent(name)}%0A`;

        orderMessage +=
            `*Phone:* ${encodeURIComponent(phone)}%0A`;

        orderMessage +=
            `*Order Type:* ${orderType}%0A`;


        if (orderType === "Delivery") {

            orderMessage +=
                `*Address:* ${encodeURIComponent(address)}%0A`;

        }


        orderMessage +=
            `*Payment:* ${encodeURIComponent(payment)}%0A`;


        if (orderTime) {

            orderMessage +=
                `*Preferred Time:* ${encodeURIComponent(orderTime)}%0A`;

        }


        orderMessage +=
            `%0A*ORDER ITEMS*%0A`;

        orderMessage +=
            `━━━━━━━━━━━━━━━━━━━━%0A`;


        cart.forEach((item, index) => {

            const itemTotal =
                item.price *
                item.quantity;


            orderMessage +=
                `${index + 1}. ${encodeURIComponent(item.name)}`;

            if (item.size) {

                orderMessage +=
                    ` (${item.size})`;

            }

            orderMessage +=
                ` × ${item.quantity} = ${formatPrice(itemTotal)}%0A`;

        });


        orderMessage +=
            `%0A*Subtotal:* ${formatPrice(subtotal)}%0A`;

        orderMessage +=
            `*Delivery:* ${formatPrice(delivery)}%0A`;

        orderMessage +=
            `*TOTAL:* ${formatPrice(total)}%0A`;


        if (notes) {

            orderMessage +=
                `%0A*Special Instructions:* ${encodeURIComponent(notes)}%0A`;

        }


        orderMessage +=
            `%0AThank you — CAFE 9T9%0A`;

        orderMessage +=
            `Please confirm my order.`;


        const whatsappURL =
            `https://wa.me/${WHATSAPP_NUMBER}?text=${orderMessage}`;


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
   CATEGORY FILTER
========================================================= */

categoryButtons.forEach(button => {

    button.addEventListener(
        "click",
        function () {

            categoryButtons.forEach(btn => {

                btn.classList.remove("active");

            });


            this.classList.add("active");


            currentCategory =
                this.dataset.category;


            renderProducts();


            document
                .getElementById("menu")
                .scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

        }
    );

});


/* =========================================================
   SEARCH
========================================================= */

searchInput.addEventListener(
    "input",
    function () {

        searchTerm =
            this.value.trim();

        renderProducts();

    }
);


/* =========================================================
   MOBILE MENU
========================================================= */

mobileMenuBtn.addEventListener(
    "click",
    function () {

        navbar.classList.toggle("show");

        const icon =
            this.querySelector("i");


        if (navbar.classList.contains("show")) {

            icon.className =
                "fa-solid fa-xmark";

        } else {

            icon.className =
                "fa-solid fa-bars";

        }

    }
);


/* CLOSE MOBILE MENU WHEN LINK CLICKED */

navbar
    .querySelectorAll("a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navbar.classList.remove(
                    "show"
                );

                mobileMenuBtn
                    .querySelector("i")
                    .className =
                    "fa-solid fa-bars";

            }
        );

    });


/* =========================================================
   CART EVENTS
========================================================= */

cartButton.addEventListener(
    "click",
    openCartDrawer
);


closeCart.addEventListener(
    "click",
    closeCartDrawer
);


cartOverlay.addEventListener(
    "click",
    closeCartDrawer
);


checkoutButton.addEventListener(
    "click",
    openCheckout
);


closeCheckout.addEventListener(
    "click",
    closeCheckoutModal
);


/* CLOSE MODAL BY CLICKING OUTSIDE */

checkoutModal.addEventListener(
    "click",
    function (event) {

        if (
            event.target === checkoutModal
        ) {

            closeCheckoutModal();

        }

    }
);


/* ESCAPE KEY */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeCartDrawer();

            closeCheckoutModal();

        }

    }
);


/* =========================================================
   FOOTER CATEGORY LINKS
========================================================= */

document
    .querySelectorAll(
        "[data-footer-category]"
    )
    .forEach(link => {

        link.addEventListener(
            "click",
            function () {

                const category =
                    this.dataset.footerCategory;


                currentCategory =
                    category;


                categoryButtons.forEach(
                    button => {

                        button.classList.toggle(
                            "active",
                            button.dataset.category === category
                        );

                    }
                );


                renderProducts();

            }
        );

    });


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

                toast.classList.remove(
                    "show"
                );

            },
            2500
        );

}


/* =========================================================
   INITIAL RENDER
========================================================= */

renderProducts();

renderCart();


/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log(
    "CAFE 9T9 Website Loaded Successfully."
);