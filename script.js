/* =========================================================
   AK COSMETICS
   E-COMMERCE JAVASCRIPT
========================================================= */


/* ================= PRODUCTS ================= */

const products = {

    1: {
        id: 1,
        name: "Bio Revite Night Cream",
        price: 1550,
        category: "cream",
        image: "images/night-cream.jpg",
        reviews: 12,
        views: 128
    },

    2: {
        id: 2,
        name: "Ackler Face Wash",
        price: 1350,
        category: "facewash",
        image: "images/face-wash.jpg",
        reviews: 9,
        views: 96
    }

};


/* ================= CART ================= */

let cart = JSON.parse(
    localStorage.getItem("akCosmeticsCart")
) || [];


/* ================= FIRST ORDER ================= */

let firstOrderDiscount = localStorage.getItem(
    "akFirstOrderDiscount"
);

if (firstOrderDiscount === null) {
    firstOrderDiscount = true;
} else {
    firstOrderDiscount = firstOrderDiscount === "true";
}


/* ================= INIT ================= */

document.addEventListener("DOMContentLoaded", () => {

    updateCart();

    setupFilters();

    setupStarSelector();

});


/* ================= CART FUNCTIONS ================= */

function addToCart(productId) {

    const product = products[productId];

    const existing = cart.find(
        item => item.id === productId
    );

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            id: product.id,
            quantity: 1
        });

    }

    saveCart();

    updateCart();

    showToast(
        `${product.name} added to cart`
    );

    increaseProductView(productId);
}


function removeFromCart(productId) {

    cart = cart.filter(
        item => item.id !== productId
    );

    saveCart();

    updateCart();
}


function changeQuantity(productId, change) {

    const item = cart.find(
        item => item.id === productId
    );

    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {

        removeFromCart(productId);

        return;
    }

    saveCart();

    updateCart();
}


function saveCart() {

    localStorage.setItem(
        "akCosmeticsCart",
        JSON.stringify(cart)
    );

}


function updateCart() {

    const cartItems = document.getElementById(
        "cartItems"
    );

    const cartCount = document.getElementById(
        "cartCount"
    );

    let count = 0;

    cart.forEach(item => {

        count += item.quantity;

    });

    cartCount.textContent = count;


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <i class="fa-solid fa-bag-shopping"></i>

                <h3>Your cart is empty</h3>

                <p>
                    Add some beautiful products to your cart.
                </p>

            </div>

        `;

        updateTotals();

        return;
    }


    cartItems.innerHTML = cart.map(item => {

        const product = products[item.id];

        return `

            <div class="cart-item">

                <div class="cart-item-image">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                    >

                </div>


                <div class="cart-item-info">

                    <h4>${product.name}</h4>

                    <strong>
                        Rs. ${formatPrice(product.price)}
                    </strong>


                    <div class="quantity">

                        <button
                            onclick="changeQuantity(${product.id}, -1)"
                        >
                            −
                        </button>

                        <span>
                            ${item.quantity}
                        </span>

                        <button
                            onclick="changeQuantity(${product.id}, 1)"
                        >
                            +
                        </button>

                    </div>

                </div>


                <button
                    class="remove-item"
                    onclick="removeFromCart(${product.id})"
                >

                    <i class="fa-solid fa-trash"></i>

                </button>

            </div>

        `;

    }).join("");


    updateTotals();
}


/* ================= TOTALS ================= */

function getSubtotal() {

    return cart.reduce(
        (total, item) => {

            const product = products[item.id];

            return total +
                product.price * item.quantity;

        },
        0
    );

}


function getDiscount() {

    if (!firstOrderDiscount) {
        return 0;
    }

    return Math.round(
        getSubtotal() * 0.10
    );

}


function getTotal() {

    return getSubtotal() - getDiscount();

}


function updateTotals() {

    const subtotal = getSubtotal();

    const discount = getDiscount();

    const total = getTotal();


    document.getElementById(
        "discountText"
    ).textContent =
        `- Rs. ${formatPrice(discount)}`;


    document.getElementById(
        "cartTotal"
    ).textContent =
        `Rs. ${formatPrice(total)}`;


    document.getElementById(
        "checkoutSubtotal"
    ).textContent =
        `Rs. ${formatPrice(subtotal)}`;


    document.getElementById(
        "checkoutDiscount"
    ).textContent =
        `- Rs. ${formatPrice(discount)}`;


    document.getElementById(
        "checkoutTotal"
    ).textContent =
        `Rs. ${formatPrice(total)}`;

}


function formatPrice(price) {

    return price.toLocaleString("en-PK");

}


/* ================= CART DRAWER ================= */

function openCart() {

    document.getElementById(
        "cartDrawer"
    ).classList.add("open");

    document.getElementById(
        "cartOverlay"
    ).classList.add("show");

    document.body.classList.add("no-scroll");

}


function closeCart() {

    document.getElementById(
        "cartDrawer"
    ).classList.remove("open");

    document.getElementById(
        "cartOverlay"
    ).classList.remove("show");

    document.body.classList.remove("no-scroll");

}


/* ================= CHECKOUT ================= */

function openCheckout() {

    if (cart.length === 0) {

        showToast(
            "Please add a product to cart first"
        );

        return;
    }


    updateTotals();

    closeCart();

    document.getElementById(
        "checkoutModal"
    ).classList.add("show");

    document.body.classList.add("no-scroll");

}


function closeCheckout() {

    document.getElementById(
        "checkoutModal"
    ).classList.remove("show");

    document.body.classList.remove("no-scroll");

}


/* ================= WHATSAPP ORDER ================= */

document.getElementById(
    "checkoutForm"
).addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        if (cart.length === 0) {

            showToast(
                "Your cart is empty"
            );

            return;
        }


        const name =
            document.getElementById(
                "customerName"
            ).value.trim();


        const phone =
            document.getElementById(
                "customerPhone"
            ).value.trim();


        const address =
            document.getElementById(
                "customerAddress"
            ).value.trim();


        let message =
            `*AK COSMETICS - NEW ORDER*%0A%0A`;


        message +=
            `*Customer:* ${name}%0A`;

        message +=
            `*Phone:* ${phone}%0A`;

        message +=
            `*Address:* ${address}%0A%0A`;


        message +=
            `*ORDER DETAILS:*%0A`;


        cart.forEach(item => {

            const product =
                products[item.id];

            const itemTotal =
                product.price * item.quantity;


            message +=
                `• ${product.name}%0A`;

            message +=
                `  Qty: ${item.quantity} × Rs. ${formatPrice(product.price)}%0A`;

            message +=
                `  Total: Rs. ${formatPrice(itemTotal)}%0A%0A`;

        });


        message +=
            `*Subtotal:* Rs. ${formatPrice(getSubtotal())}%0A`;


        message +=
            `*First Order 10% OFF:* - Rs. ${formatPrice(getDiscount())}%0A`;


        message +=
            `*FINAL TOTAL:* Rs. ${formatPrice(getTotal())}%0A%0A`;


        message +=
            `Thank you for shopping with AK COSMETICS!`;


        const whatsappURL =
            `https://wa.me/923045169552?text=${message}`;


        /* Mark first-order discount as used */

        localStorage.setItem(
            "akFirstOrderDiscount",
            "false"
        );

        firstOrderDiscount = false;


        window.open(
            whatsappURL,
            "_blank"
        );

    }
);


/* ================= SEARCH ================= */

function openSearch() {

    document.getElementById(
        "searchOverlay"
    ).classList.add("show");

    document.getElementById(
        "searchInput"
    ).focus();

}


function closeSearch() {

    document.getElementById(
        "searchOverlay"
    ).classList.remove("show");

}


function searchProducts() {

    const search =
        document.getElementById(
            "searchInput"
        ).value.toLowerCase().trim();


    document.querySelectorAll(
        ".product-card"
    ).forEach(card => {

        const name =
            card.dataset.name.toLowerCase();

        if (
            name.includes(search)
        ) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

}


/* ================= FILTERS ================= */

function setupFilters() {

    const filters =
        document.querySelectorAll(
            ".filter"
        );


    filters.forEach(filter => {

        filter.addEventListener(
            "click",
            () => {

                filters.forEach(
                    f => f.classList.remove("active")
                );

                filter.classList.add("active");


                const category =
                    filter.dataset.category;


                document.querySelectorAll(
                    ".product-card"
                ).forEach(card => {

                    if (
                        category === "all" ||
                        card.dataset.category === category
                    ) {

                        card.style.display = "";

                    } else {

                        card.style.display = "none";

                    }

                });

            }
        );

    });

}


/* ================= PRODUCT VIEW / SEEN ================= */

function increaseProductView(productId) {

    const key =
        `akProductViews_${productId}`;


    let views =
        parseInt(
            localStorage.getItem(key)
        ) || products[productId].views;


    views++;

    localStorage.setItem(
        key,
        views
    );


    const element =
        document.getElementById(
            `views${productId}`
        );


    if (element) {

        element.textContent = views;

    }

}


function loadProductViews() {

    Object.keys(products).forEach(
        id => {

            const stored =
                localStorage.getItem(
                    `akProductViews_${id}`
                );


            if (stored) {

                const element =
                    document.getElementById(
                        `views${id}`
                    );


                if (element) {

                    element.textContent =
                        stored;

                }

            }

        }
    );

}


loadProductViews();


/* ================= QUICK VIEW ================= */

function quickView(productId) {

    const product =
        products[productId];


    increaseProductView(productId);


    document.getElementById(
        "quickViewContent"
    ).innerHTML = `

        <div class="quick-product">

            <img
                src="${product.image}"
                alt="${product.name}"
            >

            <div>

                <span class="product-category">
                    AK COSMETICS
                </span>

                <h2>
                    ${product.name}
                </h2>

                <div class="stars">
                    ★★★★★
                </div>

                <div class="quick-price">
                    Rs. ${formatPrice(product.price)}
                </div>

                <p>
                    Premium skincare product selected
                    for your beauty routine.
                </p>

                <br>

                <button
                    class="btn btn-primary"
                    onclick="addToCart(${product.id}); closeQuickView();"
                >
                    <i class="fa-solid fa-bag-shopping"></i>
                    Add to Cart
                </button>

            </div>

        </div>

    `;


    document.getElementById(
        "quickViewModal"
    ).classList.add("show");

    document.body.classList.add("no-scroll");

}


function closeQuickView() {

    document.getElementById(
        "quickViewModal"
    ).classList.remove("show");

    document.body.classList.remove("no-scroll");

}


/* ================= REVIEWS ================= */

function setupStarSelector() {

    const stars =
        document.querySelectorAll(
            "#starSelector button"
        );


    stars.forEach(star => {

        star.addEventListener(
            "click",
            () => {

                const rating =
                    parseInt(
                        star.dataset.rating
                    );


                document.getElementById(
                    "reviewRating"
                ).value = rating;


                stars.forEach(s => {

                    if (
                        parseInt(
                            s.dataset.rating
                        ) <= rating
                    ) {

                        s.classList.add(
                            "active"
                        );

                    } else {

                        s.classList.remove(
                            "active"
                        );

                    }

                });

            }
        );

    });


    stars[4].click();

}


function openReviewModal() {

    document.getElementById(
        "reviewModal"
    ).classList.add("show");

    document.body.classList.add("no-scroll");

}


function closeReviewModal() {

    document.getElementById(
        "reviewModal"
    ).classList.remove("show");

    document.body.classList.remove("no-scroll");

}


/* ================= SAVE REVIEWS ================= */

document.getElementById(
    "reviewForm"
).addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            document.getElementById(
                "reviewName"
            ).value.trim();


        const text =
            document.getElementById(
                "reviewText"
            ).value.trim();


        const rating =
            parseInt(
                document.getElementById(
                    "reviewRating"
                ).value
            );


        const reviews =
            JSON.parse(
                localStorage.getItem(
                    "akCosmeticsReviews"
                )
            ) || [];


        reviews.push({
            name,
            text,
            rating
        });


        localStorage.setItem(
            "akCosmeticsReviews",
            JSON.stringify(reviews)
        );


        addReviewToPage(
            name,
            text,
            rating
        );


        showToast(
            "Thank you for your review!"
        );


        document.getElementById(
            "reviewForm"
        ).reset();


        document.getElementById(
            "reviewRating"
        ).value = 5;


        setupStarSelector();


        closeReviewModal();

    }
);


/* ================= DISPLAY NEW REVIEW ================= */

function addReviewToPage(
    name,
    text,
    rating
) {

    const grid =
        document.getElementById(
            "reviewsGrid"
        );


    const card =
        document.createElement("div");


    card.className =
        "review-card";


    const stars =
        "★".repeat(rating) +
        "☆".repeat(5 - rating);


    card.innerHTML = `

        <div class="review-top">

            <div class="customer-avatar">
                ${name.charAt(0).toUpperCase()}
            </div>

            <div>

                <strong>
                    ${escapeHTML(name)}
                </strong>

                <div class="stars">
                    ${stars}
                </div>

            </div>

        </div>


        <p>
            "${escapeHTML(text)}"
        </p>

        <small>
            Customer Review
        </small>

    `;


    grid.prepend(card);

}


function loadSavedReviews() {

    const reviews =
        JSON.parse(
            localStorage.getItem(
                "akCosmeticsReviews"
            )
        ) || [];


    reviews.forEach(review => {

        addReviewToPage(
            review.name,
            review.text,
            review.rating
        );

    });

}


loadSavedReviews();


/* ================= HTML SECURITY ================= */

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}


/* ================= MOBILE MENU ================= */

function toggleMobileMenu() {

    document.getElementById(
        "mobileMenu"
    ).classList.toggle("show");

}


/* ================= TOAST ================= */

let toastTimer;


function showToast(message) {

    const toast =
        document.getElementById("toast");


    document.getElementById(
        "toastMessage"
    ).textContent = message;


    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer = setTimeout(
        () => {

            toast.classList.remove("show");

        },
        2500
    );

}


/* ================= CLOSE MODALS ================= */

document.addEventListener(
    "click",
    function(event) {

        if (
            event.target.id ===
            "checkoutModal"
        ) {

            closeCheckout();

        }

        if (
            event.target.id ===
            "reviewModal"
        ) {

            closeReviewModal();

        }

        if (
            event.target.id ===
            "quickViewModal"
        ) {

            closeQuickView();

        }

        if (
            event.target.id ===
            "searchOverlay"
        ) {

            closeSearch();

        }

    }
);


/* ================= ESCAPE KEY ================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeCart();
            closeCheckout();
            closeReviewModal();
            closeQuickView();
            closeSearch();

        }

    }
);