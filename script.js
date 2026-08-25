/* =========================================
   CAFE 9T9 - COMPLETE ORDER SYSTEM
   Add to Cart + Checkout + WhatsApp
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       SETTINGS
    ========================================= */

    // WhatsApp number
    // 0340-1720333
    const whatsappNumber = "923401720333";


    /* =========================================
       MOBILE MENU
    ========================================= */

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            const isOpen =
                navLinks.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuToggle.textContent =
                isOpen ? "✕" : "☰";

        });


        navLinks.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.textContent = "☰";

            });

        });

    }


    /* =========================================
       MENU FILTER
    ========================================= */

    const filters =
        document.querySelectorAll(".filter");

    const menuCards =
        document.querySelectorAll(".menu-card");


    filters.forEach(filterButton => {

        filterButton.addEventListener("click", () => {

            filters.forEach(button => {
                button.classList.remove("active");
            });

            filterButton.classList.add("active");

            const selectedCategory =
                filterButton.dataset.filter;


            menuCards.forEach(card => {

                const category =
                    card.dataset.category;

                if (
                    selectedCategory === "all" ||
                    category === selectedCategory
                ) {

                    card.classList.remove("hidden");

                } else {

                    card.classList.add("hidden");

                }

            });

        });

    });


    /* =========================================
       CATEGORY BUTTONS
    ========================================= */

    const categoryCards =
        document.querySelectorAll(".category-card");


    categoryCards.forEach(categoryCard => {

        categoryCard.addEventListener("click", () => {

            const target =
                categoryCard.dataset.jump;


            const filterButton =
                document.querySelector(
                    `.filter[data-filter="${target}"]`
                );


            if (filterButton) {

                filterButton.click();

            }


            const menuSection =
                document.querySelector("#menu");


            if (menuSection) {

                setTimeout(() => {

                    menuSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }, 100);

            }

        });

    });


    /* =========================================
       CART DATA
    ========================================= */

    let cart = [];


    /* =========================================
       CREATE FLOATING CART BUTTON
    ========================================= */

    const cartButton =
        document.createElement("button");

    cartButton.className =
        "floating-cart";

    cartButton.type = "button";

    cartButton.setAttribute(
        "aria-label",
        "Open Shopping Cart"
    );

    cartButton.innerHTML = `
        🛒
        <span class="cart-count">0</span>
    `;

    document.body.appendChild(cartButton);


    /* =========================================
       CREATE CART PANEL
    ========================================= */

    const cartPanel =
        document.createElement("div");

    cartPanel.className =
        "cart-panel";

    cartPanel.innerHTML = `

        <div class="cart-header">

            <div>
                <h2>Your Cart</h2>
                <small>CAFE 9T9</small>
            </div>

            <button
                type="button"
                class="cart-close"
                aria-label="Close Cart"
            >
                ✕
            </button>

        </div>


        <div class="cart-items"></div>


        <div class="cart-empty">

            <div class="cart-empty-icon">
                🛒
            </div>

            <h3>
                Your cart is empty
            </h3>

            <p>
                Add something delicious
                from our menu.
            </p>

        </div>


        <div class="cart-footer">

            <div class="cart-total-row">

                <strong>
                    Total
                </strong>

                <strong class="cart-total">
                    Rs. 0
                </strong>

            </div>


            <button
                type="button"
                class="checkout-button"
            >
                Checkout / Order
            </button>


            <button
                type="button"
                class="clear-cart"
            >
                Clear Cart
            </button>

        </div>

    `;

    document.body.appendChild(cartPanel);


    /* =========================================
       OVERLAY
    ========================================= */

    const overlay =
        document.createElement("div");

    overlay.className =
        "cart-overlay";

    document.body.appendChild(overlay);


    /* =========================================
       CHECKOUT MODAL
    ========================================= */

    const checkoutModal =
        document.createElement("div");

    checkoutModal.className =
        "checkout-modal";


    checkoutModal.innerHTML = `

        <div class="checkout-box">

            <div class="checkout-header">

                <div>
                    <h2>
                        Place Your Order
                    </h2>

                    <small>
                        CAFE 9T9
                    </small>
                </div>


                <button
                    type="button"
                    class="checkout-close"
                    aria-label="Close Checkout"
                >
                    ✕
                </button>

            </div>


            <div class="checkout-summary">

                <h3>
                    Order Summary
                </h3>

                <div class="checkout-items"></div>


                <div class="checkout-total">

                    <span>
                        Total:
                    </span>

                    <strong>
                        Rs. 0
                    </strong>

                </div>

            </div>


            <form id="checkoutForm">

                <label for="customerName">
                    Your Name
                </label>

                <input
                    type="text"
                    id="customerName"
                    placeholder="Enter your name"
                    autocomplete="name"
                    required
                >


                <label for="customerPhone">
                    Phone Number
                </label>

                <input
                    type="tel"
                    id="customerPhone"
                    placeholder="03XX-XXXXXXX"
                    autocomplete="tel"
                    required
                >


                <label for="customerAddress">
                    Delivery Address
                </label>

                <textarea
                    id="customerAddress"
                    placeholder="Enter complete delivery address"
                    rows="3"
                    required
                ></textarea>


                <label for="customerNote">

                    Order Note

                    <span>
                        Optional
                    </span>

                </label>


                <textarea
                    id="customerNote"
                    placeholder="Any special instructions?"
                    rows="2"
                ></textarea>


                <button
                    type="submit"
                    class="send-whatsapp-order"
                >
                    📱 Send Order on WhatsApp
                </button>

            </form>

        </div>

    `;

    document.body.appendChild(checkoutModal);


    /* =========================================
       ADD TO CART BUTTONS
    ========================================= */

    menuCards.forEach(card => {

        const titleElement =
            card.querySelector("h3");

        if (!titleElement) {
            return;
        }


        const productName =
            titleElement.innerText
                .replace(/\s+/g, " ")
                .trim();


        /* =====================================
           PIZZA PRICE ROW
        ===================================== */

        const priceRows =
            card.querySelectorAll(
                ".price-row span"
            );


        priceRows.forEach(priceElement => {

            const text =
                priceElement.innerText
                    .replace(/\s+/g, " ")
                    .trim();


            const priceMatch =
                text.match(
                    /Rs\.\s*([\d,]+)/i
                );


            if (!priceMatch) {
                return;
            }


            const price =
                parseInt(
                    priceMatch[1]
                        .replace(/,/g, ""),
                    10
                );


            const size =
                text.split(" ")[0];


            const addButton =
                document.createElement("button");


            addButton.type = "button";

            addButton.className =
                "add-to-cart";


            addButton.textContent =
                `🛒 Add ${size} • Rs. ${price.toLocaleString()}`;


            addButton.addEventListener(
                "click",
                () => {

                    addToCart(
                        `${productName} (${size})`,
                        price
                    );

                }
            );


            priceElement.appendChild(
                addButton
            );

        });


        /* =====================================
           COFFEE / TEA / SHAKE PRICE LIST
        ===================================== */

        const priceList =
            card.querySelectorAll(
                ".price-list span"
            );


        priceList.forEach(priceElement => {

            const text =
                priceElement.innerText
                    .replace(/\s+/g, " ")
                    .trim();


            const priceMatch =
                text.match(
                    /Rs\.\s*([\d,]+)/i
                );


            if (!priceMatch) {
                return;
            }


            const price =
                parseInt(
                    priceMatch[1]
                        .replace(/,/g, ""),
                    10
                );


            const product =
                text
                    .replace(
                        /Rs\.\s*[\d,]+/i,
                        ""
                    )
                    .trim();


            const addButton =
                document.createElement("button");


            addButton.type = "button";

            addButton.className =
                "add-to-cart";


            addButton.textContent =
                `🛒 Add • Rs. ${price.toLocaleString()}`;


            addButton.addEventListener(
                "click",
                () => {

                    addToCart(
                        `${productName} - ${product}`,
                        price
                    );

                }
            );


            priceElement.appendChild(
                addButton
            );

        });


        /* =====================================
           SINGLE PRICE
        ===================================== */

        const singlePrice =
            card.querySelector(
                ".single-price"
            );


        if (singlePrice) {

            const priceMatch =
                singlePrice.innerText.match(
                    /Rs\.\s*([\d,]+)/i
                );


            if (priceMatch) {

                const price =
                    parseInt(
                        priceMatch[1]
                            .replace(/,/g, ""),
                        10
                    );


                const addButton =
                    document.createElement("button");


                addButton.type = "button";

                addButton.className =
                    "add-to-cart";


                addButton.textContent =
                    `🛒 Add to Cart • Rs. ${price.toLocaleString()}`;


                addButton.addEventListener(
                    "click",
                    () => {

                        addToCart(
                            productName,
                            price
                        );

                    }
                );


                singlePrice.insertAdjacentElement(
                    "afterend",
                    addButton
                );

            }

        }

    });


    /* =========================================
       ADD ITEM TO CART
    ========================================= */

    function addToCart(name, price) {

        const existingItem =
            cart.find(
                item => item.name === name
            );


        if (existingItem) {

            existingItem.quantity += 1;

        } else {

            cart.push({

                name: name,

                price: price,

                quantity: 1

            });

        }


        updateCart();

        openCart();

    }


    /* =========================================
       UPDATE CART
    ========================================= */

    function updateCart() {

        const cartItems =
            cartPanel.querySelector(
                ".cart-items"
            );


        const emptyMessage =
            cartPanel.querySelector(
                ".cart-empty"
            );


        const totalElement =
            cartPanel.querySelector(
                ".cart-total"
            );


        const countElement =
            cartButton.querySelector(
                ".cart-count"
            );


        cartItems.innerHTML = "";


        /* EMPTY CART */

        if (cart.length === 0) {

            emptyMessage.style.display =
                "block";

        } else {

            emptyMessage.style.display =
                "none";


            cart.forEach((item, index) => {

                const itemTotal =
                    item.price *
                    item.quantity;


                const itemElement =
                    document.createElement("div");


                itemElement.className =
                    "cart-item";


                itemElement.innerHTML = `

                    <div class="cart-item-info">

                        <strong>
                            ${escapeHTML(item.name)}
                        </strong>

                        <small>
                            Rs. ${item.price.toLocaleString()}
                        </small>

                    </div>


                    <div class="cart-item-actions">

                        <button
                            type="button"
                            class="quantity-minus"
                            data-index="${index}"
                        >
                            −
                        </button>


                        <strong>
                            ${item.quantity}
                        </strong>


                        <button
                            type="button"
                            class="quantity-plus"
                            data-index="${index}"
                        >
                            +
                        </button>

                    </div>


                    <strong class="item-total">
                        Rs. ${itemTotal.toLocaleString()}
                    </strong>


                    <button
                        type="button"
                        class="remove-item"
                        data-index="${index}"
                        aria-label="Remove item"
                    >
                        🗑
                    </button>

                `;


                cartItems.appendChild(
                    itemElement
                );

            });

        }


        /* TOTAL */

        const total =
            getCartTotal();


        totalElement.textContent =
            `Rs. ${total.toLocaleString()}`;


        /* CART COUNT */

        const count =
            cart.reduce(
                (sum, item) =>
                    sum + item.quantity,
                0
            );


        countElement.textContent =
            count;


        countElement.style.display =
            count > 0
                ? "flex"
                : "none";


        attachCartButtons();

    }


    /* =========================================
       GET CART TOTAL
    ========================================= */

    function getCartTotal() {

        return cart.reduce(
            (total, item) => {

                return total +
                    item.price *
                    item.quantity;

            },
            0
        );

    }


    /* =========================================
       CART + / - / REMOVE
    ========================================= */

    function attachCartButtons() {

        /* MINUS */

        cartPanel
            .querySelectorAll(".quantity-minus")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        const index =
                            Number(
                                button.dataset.index
                            );


                        if (!cart[index]) {
                            return;
                        }


                        if (
                            cart[index].quantity > 1
                        ) {

                            cart[index].quantity -= 1;

                        } else {

                            cart.splice(
                                index,
                                1
                            );

                        }


                        updateCart();

                    }
                );

            });


        /* PLUS */

        cartPanel
            .querySelectorAll(".quantity-plus")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        const index =
                            Number(
                                button.dataset.index
                            );


                        if (!cart[index]) {
                            return;
                        }


                        cart[index].quantity += 1;

                        updateCart();

                    }
                );

            });


        /* REMOVE */

        cartPanel
            .querySelectorAll(".remove-item")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        const index =
                            Number(
                                button.dataset.index
                            );


                        if (!cart[index]) {
                            return;
                        }


                        cart.splice(
                            index,
                            1
                        );


                        updateCart();

                    }
                );

            });

    }


    /* =========================================
       OPEN CART
    ========================================= */

    function openCart() {

        cartPanel.classList.add("open");

        overlay.classList.add("show");

        document.body.classList.add(
            "cart-open"
        );

    }


    /* =========================================
       CLOSE CART
    ========================================= */

    function closeCart() {

        cartPanel.classList.remove("open");

        overlay.classList.remove("show");

        document.body.classList.remove(
            "cart-open"
        );

    }


    /* =========================================
       OPEN CART BUTTON
    ========================================= */

    cartButton.addEventListener(
        "click",
        openCart
    );


    /* =========================================
       CART CLOSE BUTTON
    ========================================= */

    const cartCloseButton =
        cartPanel.querySelector(
            ".cart-close"
        );


    cartCloseButton.addEventListener(
        "click",
        closeCart
    );


    /* =========================================
       OVERLAY CLOSE
    ========================================= */

    overlay.addEventListener(
        "click",
        () => {

            closeCart();

            closeCheckout();

        }
    );


    /* =========================================
       CLEAR CART
    ========================================= */

    const clearCartButton =
        cartPanel.querySelector(
            ".clear-cart"
        );


    clearCartButton.addEventListener(
        "click",
        () => {

            if (cart.length === 0) {

                return;

            }


            const shouldClear =
                confirm(
                    "Are you sure you want to clear your cart?"
                );


            if (shouldClear) {

                cart = [];

                updateCart();

            }

        }
    );


    /* =========================================
       CHECKOUT ELEMENTS
    ========================================= */

    const checkoutButton =
        cartPanel.querySelector(
            ".checkout-button"
        );


    const checkoutCloseButton =
        checkoutModal.querySelector(
            ".checkout-close"
        );


    const checkoutItems =
        checkoutModal.querySelector(
            ".checkout-items"
        );


    const checkoutTotal =
        checkoutModal.querySelector(
            ".checkout-total strong"
        );


    /* =========================================
       OPEN CHECKOUT
    ========================================= */

    checkoutButton.addEventListener(
        "click",
        () => {

            if (cart.length === 0) {

                alert(
                    "Your cart is empty. Please add an item first."
                );

                return;

            }


            renderCheckout();

            checkoutModal.classList.add(
                "show"
            );

        }
    );


    /* =========================================
       RENDER CHECKOUT
    ========================================= */

    function renderCheckout() {

        checkoutItems.innerHTML =
            cart.map(item => {

                const subtotal =
                    item.price *
                    item.quantity;


                return `

                    <div class="checkout-item">

                        <span>
                            ${escapeHTML(item.name)}
                            × ${item.quantity}
                        </span>

                        <strong>
                            Rs. ${subtotal.toLocaleString()}
                        </strong>

                    </div>

                `;

            }).join("");


        checkoutTotal.textContent =
            `Rs. ${getCartTotal().toLocaleString()}`;

    }


    /* =========================================
       CLOSE CHECKOUT
    ========================================= */

    function closeCheckout() {

        checkoutModal.classList.remove(
            "show"
        );

    }


    checkoutCloseButton.addEventListener(
        "click",
        closeCheckout
    );


    /* =========================================
       CHECKOUT FORM
    ========================================= */

    const checkoutForm =
        checkoutModal.querySelector(
            "#checkoutForm"
        );


    checkoutForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            if (cart.length === 0) {

                alert(
                    "Your cart is empty."
                );

                closeCheckout();

                return;

            }


            const customerName =
                document
                    .querySelector("#customerName")
                    .value
                    .trim();


            const customerPhone =
                document
                    .querySelector("#customerPhone")
                    .value
                    .trim();


            const customerAddress =
                document
                    .querySelector("#customerAddress")
                    .value
                    .trim();


            const customerNote =
                document
                    .querySelector("#customerNote")
                    .value
                    .trim();


            /* REQUIRED FIELDS */

            if (
                !customerName ||
                !customerPhone ||
                !customerAddress
            ) {

                alert(
                    "Please fill in Name, Phone Number and Delivery Address."
                );

                return;

            }


            /* =================================
               CREATE ORDER TEXT
            ================================= */

            const orderLines =
                cart.map(
                    (item, index) => {

                        const itemTotal =
                            item.price *
                            item.quantity;


                        return `${index + 1}. ${item.name}
Qty: ${item.quantity}
Price: Rs. ${item.price.toLocaleString()}
Subtotal: Rs. ${itemTotal.toLocaleString()}`;

                    }
                ).join("\n\n");


            const total =
                getCartTotal();


            const message =
`🍕 CAFE 9T9 - NEW ORDER

👤 Customer Name:
${customerName}

📞 Phone:
${customerPhone}

📍 Delivery Address:
${customerAddress}

🛒 ORDER DETAILS:

${orderLines}

💰 TOTAL:
Rs. ${total.toLocaleString()}

📝 ORDER NOTE:
${customerNote || "No special instructions."}

Thank you - CAFE 9T9`;


            /* =================================
               WHATSAPP URL
            ================================= */

            const whatsappURL =
                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


            /*
             * Try WhatsApp in a new tab.
             */

            const whatsappWindow =
                window.open(
                    whatsappURL,
                    "_blank"
                );


            /*
             * If browser blocks popup,
             * open in current tab.
             */

            if (!whatsappWindow) {

                window.location.href =
                    whatsappURL;

            }

        }
    );


    /* =========================================
       ESCAPE HTML
    ========================================= */

    function escapeHTML(value) {

        return String(value)
            .replace(
                /&/g,
                "&amp;"
            )
            .replace(
                /</g,
                "&lt;"
            )
            .replace(
                />/g,
                "&gt;"
            )
            .replace(
                /"/g,
                "&quot;"
            )
            .replace(
                /'/g,
                "&#039;"
            );

    }


    /* =========================================
       ESC KEY
       Close Cart / Checkout
    ========================================= */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                closeCart();

                closeCheckout();

            }

        }
    );


    /* =========================================
       START SYSTEM
    ========================================= */

    updateCart();

});