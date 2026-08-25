/* =========================================
   CAFE 9T9 - COMPLETE ORDER SYSTEM
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       MOBILE MENU
    ========================================= */

    const toggle = document.querySelector(".menu-toggle");
    const links = document.querySelector(".nav-links");

    if (toggle && links) {

        toggle.addEventListener("click", () => {

            const open = links.classList.toggle("open");

            toggle.setAttribute(
                "aria-expanded",
                String(open)
            );

            toggle.textContent = open ? "✕" : "☰";

        });

        links.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                links.classList.remove("open");

                toggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                toggle.textContent = "☰";

            });

        });

    }


    /* =========================================
       MENU FILTER
    ========================================= */

    const filters = document.querySelectorAll(".filter");
    const cards = document.querySelectorAll(".menu-card");

    filters.forEach(button => {

        button.addEventListener("click", () => {

            filters.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            const filter = button.dataset.filter;

            cards.forEach(card => {

                const category = card.dataset.category;

                if (
                    filter === "all" ||
                    category === filter
                ) {

                    card.classList.remove("hidden");

                } else {

                    card.classList.add("hidden");

                }

            });

            const menu = document.querySelector("#menu");

            if (menu) {

                menu.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =========================================
       CATEGORY CARDS
    ========================================= */

    const categoryCards =
        document.querySelectorAll(".category-card");

    categoryCards.forEach(card => {

        card.addEventListener("click", () => {

            const target = card.dataset.jump;

            const filter =
                document.querySelector(
                    `.filter[data-filter="${target}"]`
                );

            if (filter) {

                filter.click();

            } else {

                const menu =
                    document.querySelector("#menu");

                if (menu) {

                    menu.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        });

    });


    /* =========================================
       WHATSAPP NUMBER
    ========================================= */

    const whatsappNumber = "923401720333";


    /* =========================================
       CART
    ========================================= */

    let cart = [];


    /* =========================================
       CREATE CART BUTTON
    ========================================= */

    const cartButton = document.createElement("button");

    cartButton.className = "floating-cart";

    cartButton.innerHTML = `
        🛒
        <span class="cart-count">0</span>
    `;

    cartButton.setAttribute(
        "aria-label",
        "Open Cart"
    );

    document.body.appendChild(cartButton);


    /* =========================================
       CREATE CART PANEL
    ========================================= */

    const cartPanel = document.createElement("div");

    cartPanel.className = "cart-panel";

    cartPanel.innerHTML = `

        <div class="cart-header">

            <div>
                <h2>Your Cart</h2>
                <small>CAFE 9T9</small>
            </div>

            <button class="cart-close">
                ✕
            </button>

        </div>


        <div class="cart-items"></div>


        <div class="cart-empty">

            <div>🛒</div>

            <h3>Your cart is empty</h3>

            <p>
                Add something delicious from our menu.
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


            <button class="checkout-button">
                Checkout / Order
            </button>

            <button class="clear-cart">
                Clear Cart
            </button>

        </div>

    `;

    document.body.appendChild(cartPanel);


    /* =========================================
       OVERLAY
    ========================================= */

    const overlay = document.createElement("div");

    overlay.className = "cart-overlay";

    document.body.appendChild(overlay);


    /* =========================================
       CHECKOUT MODAL
    ========================================= */

    const checkoutModal = document.createElement("div");

    checkoutModal.className = "checkout-modal";

    checkoutModal.innerHTML = `

        <div class="checkout-box">

            <div class="checkout-header">

                <div>
                    <h2>Place Your Order</h2>
                    <small>CAFE 9T9</small>
                </div>

                <button class="checkout-close">
                    ✕
                </button>

            </div>


            <div class="checkout-summary">

                <h3>
                    Order Summary
                </h3>

                <div class="checkout-items"></div>

                <div class="checkout-total">

                    Total:

                    <strong>
                        Rs. 0
                    </strong>

                </div>

            </div>


            <form id="checkoutForm">

                <label>
                    Your Name
                </label>

                <input
                    type="text"
                    id="customerName"
                    placeholder="Enter your name"
                    required
                >


                <label>
                    Phone Number
                </label>

                <input
                    type="tel"
                    id="customerPhone"
                    placeholder="03XX-XXXXXXX"
                    required
                >


                <label>
                    Delivery Address
                </label>

                <textarea
                    id="customerAddress"
                    placeholder="Enter complete delivery address"
                    rows="3"
                    required
                ></textarea>


                <label>
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
       MENU PRODUCTS
    ========================================= */

    const menuCards =
        document.querySelectorAll(".menu-card");


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


        /* -----------------------------------------
           PRICE ROW
        ----------------------------------------- */

        const priceRows =
            card.querySelectorAll(".price-row span");

        if (priceRows.length > 0) {

            priceRows.forEach(priceElement => {

                const text =
                    priceElement.innerText
                        .replace(/\s+/g, " ")
                        .trim();

                const priceMatch =
                    text.match(/Rs\.\s*([\d,]+)/i);

                if (!priceMatch) {
                    return;
                }

                const price =
                    parseInt(
                        priceMatch[1].replace(/,/g, ""),
                        10
                    );

                const size =
                    text.split(" ")[0];


                const button =
                    document.createElement("button");

                button.className =
                    "add-to-cart";

                button.textContent =
                    `Add ${size} • Rs. ${price.toLocaleString()}`;

                button.addEventListener(
                    "click",
                    () => {

                        addToCart(
                            `${productName} (${size})`,
                            price
                        );

                    }
                );

                priceElement.appendChild(button);

            });

        }


        /* -----------------------------------------
           PRICE LIST
        ----------------------------------------- */

        const priceList =
            card.querySelectorAll(".price-list span");

        if (priceList.length > 0) {

            priceList.forEach(priceElement => {

                const text =
                    priceElement.innerText
                        .replace(/\s+/g, " ")
                        .trim();

                const priceMatch =
                    text.match(/Rs\.\s*([\d,]+)/i);

                if (!priceMatch) {
                    return;
                }

                const price =
                    parseInt(
                        priceMatch[1].replace(/,/g, ""),
                        10
                    );

                const product =
                    text.replace(
                        /Rs\.\s*[\d,]+/i,
                        ""
                    ).trim();


                const button =
                    document.createElement("button");

                button.className =
                    "add-to-cart";

                button.textContent =
                    `Add • Rs. ${price.toLocaleString()}`;

                button.addEventListener(
                    "click",
                    () => {

                        addToCart(
                            `${productName} - ${product}`,
                            price
                        );

                    }
                );

                priceElement.appendChild(button);

            });

        }


        /* -----------------------------------------
           SINGLE PRICE
        ----------------------------------------- */

        const singlePrice =
            card.querySelector(".single-price");

        if (singlePrice) {

            const priceMatch =
                singlePrice.innerText.match(
                    /Rs\.\s*([\d,]+)/i
                );

            if (priceMatch) {

                const price =
                    parseInt(
                        priceMatch[1].replace(/,/g, ""),
                        10
                    );


                const button =
                    document.createElement("button");

                button.className =
                    "add-to-cart";

                button.textContent =
                    `🛒 Add to Cart • Rs. ${price.toLocaleString()}`;

                button.addEventListener(
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
                    button
                );

            }

        }

    });


    /* =========================================
       ADD TO CART
    ========================================= */

    function addToCart(name, price) {

        const existing =
            cart.find(
                item => item.name === name
            );

        if (existing) {

            existing.quantity++;

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
            cartPanel.querySelector(".cart-items");

        const empty =
            cartPanel.querySelector(".cart-empty");

        const totalElement =
            cartPanel.querySelector(".cart-total");

        const countElement =
            cartButton.querySelector(".cart-count");


        cartItems.innerHTML = "";


        if (cart.length === 0) {

            empty.style.display = "block";

        } else {

            empty.style.display = "none";


            cart.forEach((item, index) => {

                const itemTotal =
                    item.price * item.quantity;


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
                            class="quantity-minus"
                            data-index="${index}"
                        >
                            −
                        </button>

                        <strong>
                            ${item.quantity}
                        </strong>

                        <button
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
                        class="remove-item"
                        data-index="${index}"
                    >
                        🗑
                    </button>

                `;


                cartItems.appendChild(
                    itemElement
                );

            });

        }


        const total =
            getCartTotal();


        totalElement.textContent =
            `Rs. ${total.toLocaleString()}`;


        const count =
            cart.reduce(
                (sum, item) =>
                    sum + item.quantity,
                0
            );


        countElement.textContent =
            count;


        countElement.style.display =
            count > 0 ? "flex" : "none";


        attachCartButtons();

    }


    /* =========================================
       CART TOTAL
    ========================================= */

    function getCartTotal() {

        return cart.reduce(
            (total, item) =>
                total +
                item.price * item.quantity,
            0
        );

    }


    /* =========================================
       CART BUTTON EVENTS
    ========================================= */

    function attachCartButtons() {

        document
            .querySelectorAll(".quantity-minus")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        const index =
                            Number(
                                button.dataset.index
                            );

                        if (
                            cart[index].quantity > 1
                        ) {

                            cart[index].quantity--;

                        } else {

                            cart.splice(index, 1);

                        }

                        updateCart();

                    }
                );

            });


        document
            .querySelectorAll(".quantity-plus")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        const index =
                            Number(
                                button.dataset.index
                            );

                        cart[index].quantity++;

                        updateCart();

                    }
                );

            });


        document
            .querySelectorAll(".remove-item")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        const index =
                            Number(
                                button.dataset.index
                            );

                        cart.splice(index, 1);

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

}
/* =========================================
       CHECKOUT / WHATSAPP ORDER
    ========================================= */

    const checkoutButton =
        cartPanel.querySelector(".checkout-button");

    const checkoutClose =
        checkoutModal.querySelector(".checkout-close");

    const checkoutItems =
        checkoutModal.querySelector(".checkout-items");

    const checkoutTotal =
        checkoutModal.querySelector(".checkout-total strong");


    checkoutButton.addEventListener("click", () => {

        if (cart.length === 0) {
            alert("Your cart is empty.");
            return;
        }

        checkoutItems.innerHTML = cart.map(item => `
            <div class="checkout-item">
                <span>
                    ${escapeHTML(item.name)} × ${item.quantity}
                </span>

                <strong>
                    Rs. ${(item.price * item.quantity).toLocaleString()}
                </strong>
            </div>
        `).join("");

        checkoutTotal.textContent =
            `Rs. ${getCartTotal().toLocaleString()}`;

        checkoutModal.classList.add("show");

    });


    /* =========================================
       CLOSE CHECKOUT
    ========================================= */

    checkoutClose.addEventListener("click", () => {

        checkoutModal.classList.remove("show");

    });


    /* =========================================
       WHATSAPP ORDER
    ========================================= */

    const checkoutForm =
        document.querySelector("#checkoutForm");

    checkoutForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const customerName =
            document.querySelector("#customerName").value.trim();

        const customerPhone =
            document.querySelector("#customerPhone").value.trim();

        const customerAddress =
            document.querySelector("#customerAddress").value.trim();

        const customerNote =
            document.querySelector("#customerNote").value.trim();


        if (
            !customerName ||
            !customerPhone ||
            !customerAddress
        ) {
            alert("Please fill in all required fields.");
            return;
        }


        const orderLines = cart.map((item, index) => {

            const itemTotal =
                item.price * item.quantity;

            return `${index + 1}. ${item.name}
Qty: ${item.quantity}
Price: Rs. ${item.price.toLocaleString()}
Subtotal: Rs. ${itemTotal.toLocaleString()}`;

        }).join("\n\n");


        const message =
`🍕 CAFE 9T9 - NEW ORDER

👤 Name: ${customerName}
📞 Phone: ${customerPhone}

📦 Delivery Address:
${customerAddress}

🛒 ORDER:

${orderLines}

💰 TOTAL: Rs. ${getCartTotal().toLocaleString()}

📝 Note:
${customerNote || "No special instructions."}`;


        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, "_blank");

    });


    /* =========================================
       ESCAPE HTML
    ========================================= */

    function escapeHTML(value) {

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }


    /* =========================================
       START CART
    ========================================= */

    updateCart();

});