const products = [
  {
    id: 1,
    name: "Waterproof Mattress Protector",
    price: 2000,
    image: "waterproof-mattress-protector.jpg",
    category: "Home",
    description: "Comfortable and practical protection for your mattress."
  },
  {
    id: 2,
    name: "16-in-1 Nail Care Set",
    price: 1599,
    image: "16-in-1-nail-care-set.jpg",
    category: "Beauty",
    description: "Complete manicure and pedicure tools for everyday grooming."
  },
  {
    id: 3,
    name: "X3 Electric Toothbrush",
    price: 1499,
    image: "x3-electric-toothbrush.jpg",
    category: "Personal Care",
    description: "Modern electric toothbrush for convenient daily care."
  },
  {
    id: 4,
    name: "JAWA Lumina Shaver",
    price: 2299,
    image: "jawa-lumina-shaver.jpg",
    category: "Personal Care",
    description: "Stylish grooming solution for a smooth and convenient shave."
  },
  {
    id: 5,
    name: "Water Cycle Blackhead Cleanser",
    price: 2699,
    image: "water-cycle-blackhead-cleanser.jpg",
    category: "Beauty",
    description: "Convenient facial cleansing device for your skincare routine."
  },
  {
    id: 6,
    name: "7-Piece Manicure Kit",
    price: 1299,
    image: "7-piece-manicure-kit.jpg",
    category: "Beauty",
    description: "Compact manicure set for neat and professional-looking nails."
  }
];

const whatsappNumber = "923465463058";

let cart = JSON.parse(
  localStorage.getItem("alphaShopCart")
) || [];


/* FORMAT PRICE */

function formatPrice(price) {
  return "Rs. " + price.toLocaleString("en-PK");
}


/* PRODUCT GRID */

function renderProducts(filter = "All") {

  const grid = document.getElementById("productGrid");

  const filtered =
    filter === "All"
      ? products
      : products.filter(
          product => product.category === filter
        );

  grid.innerHTML = filtered.map(product => {

    return `
      <article class="product-card">

        <div class="product-image-frame">

          <img
            src="${product.image}"
            alt="${product.name}"
            loading="lazy"
          >

          <span class="product-badge">
            PREMIUM
          </span>

          <button
            class="quick-view"
            onclick="openQuickView(${product.id})"
          >
            Quick View
          </button>

        </div>

        <div class="product-info">

          <div class="product-category">
            ${product.category}
          </div>

          <h3>${product.name}</h3>

          <p class="product-description">
            ${product.description}
          </p>

          <div class="rating">
            ★★★★★
          </div>

          <div class="product-bottom">

            <div class="price">
              ${formatPrice(product.price)}
            </div>

            <button
              class="add-cart"
              onclick="addToCart(${product.id})"
            >
              Add to Cart
            </button>

          </div>

          <a
            href="https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              "Hello ALPHA SHOP, I want to order: " +
              product.name +
              " - " +
              formatPrice(product.price)
            )}"
            target="_blank"
            class="product-whatsapp"
          >
            💬 Order on WhatsApp
          </a>

        </div>

      </article>
    `;

  }).join("");
}


/* ADD CART */

function addToCart(id) {

  const existing = cart.find(
    item => item.id === id
  );

  if (existing) {
    existing.qty++;
  } else {

    const product = products.find(
      item => item.id === id
    );

    cart.push({
      ...product,
      qty: 1
    });
  }

  saveCart();
  renderCart();

  openCart();
}


/* SAVE CART */

function saveCart() {

  localStorage.setItem(
    "alphaShopCart",
    JSON.stringify(cart)
  );
}


/* CART COUNT */

function updateCartCount() {

  const count = cart.reduce(
    (total, item) => total + item.qty,
    0
  );

  document.getElementById("cartCount").textContent =
    count;
}


/* RENDER CART */

function renderCart() {

  const cartItems =
    document.getElementById("cartItems");

  const cartSubtitle =
    document.getElementById("cartSubtitle");

  const cartTotal =
    document.getElementById("cartTotal");

  if (!cart.length) {

    cartItems.innerHTML = `
      <div class="empty-cart">
        🛒
        <h3>Your cart is empty</h3>
        <p>Add some products to continue.</p>
      </div>
    `;

  } else {

    cartItems.innerHTML = cart.map(item => {

      return `
        <div class="cart-item">

          <img
            src="${item.image}"
            alt="${item.name}"
          >

          <div>

            <h4>${item.name}</h4>

            <div class="cart-item-price">
              ${formatPrice(item.price)}
            </div>

            <div class="cart-controls">

              <button
                onclick="changeQty(${item.id}, -1)"
              >
                −
              </button>

              <span>${item.qty}</span>

              <button
                onclick="changeQty(${item.id}, 1)"
              >
                +
              </button>

              <button
                class="remove-item"
                onclick="removeFromCart(${item.id})"
              >
                ×
              </button>

            </div>

          </div>

        </div>
      `;

    }).join("");
  }

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.qty,
    0
  );

  const count = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  cartSubtitle.textContent =
    `${count} item${count !== 1 ? "s" : ""}`;

  cartTotal.textContent =
    formatPrice(total);

  updateCartCount();
}


/* CHANGE QUANTITY */

function changeQty(id, amount) {

  const item = cart.find(
    product => product.id === id
  );

  if (!item) return;

  item.qty += amount;

  if (item.qty <= 0) {
    cart = cart.filter(
      product => product.id !== id
    );
  }

  saveCart();
  renderCart();
}


/* REMOVE */

function removeFromCart(id) {

  cart = cart.filter(
    item => item.id !== id
  );

  saveCart();
  renderCart();
}


/* CART OPEN */

function openCart() {

  document
    .getElementById("cartDrawer")
    .classList.add("show");

  document
    .getElementById("overlay")
    .classList.add("show");
}


/* CART CLOSE */

function closeCart() {

  document
    .getElementById("cartDrawer")
    .classList.remove("show");

  document
    .getElementById("overlay")
    .classList.remove("show");
}


/* CATEGORY FILTER */

document
  .querySelectorAll(".category-card")
  .forEach(button => {

    button.addEventListener("click", () => {

      document
        .querySelectorAll(".category-card")
        .forEach(card =>
          card.classList.remove(
            "active-category"
          )
        );

      button.classList.add(
        "active-category"
      );

      renderProducts(
        button.dataset.filter
      );

      document
        .getElementById("products")
        .scrollIntoView({
          behavior: "smooth"
        });

    });

  });


/* QUICK VIEW */

function openQuickView(id) {

  const product =
    products.find(item => item.id === id);

  if (!product) return;

  document.getElementById(
    "quickContent"
  ).innerHTML = `

    <img
      src="${product.image}"
      alt="${product.name}"
    >

    <h2>${product.name}</h2>

    <div class="quick-price">
      ${formatPrice(product.price)}
    </div>

    <p class="quick-description">
      ${product.description}
    </p>

    <button
      class="btn btn-primary quick-add"
      onclick="addToCart(${product.id}); closeQuickView();"
    >
      Add to Cart
    </button>

  `;

  document
    .getElementById("quickModal")
    .classList.add("show");
}


function closeQuickView() {

  document
    .getElementById("quickModal")
    .classList.remove("show");
}


/* CHECKOUT */

function openCheckout() {

  if (!cart.length) {

    alert("Your cart is empty.");

    return;
  }

  document
    .getElementById("checkoutModal")
    .classList.add("show");
}


function closeCheckout() {

  document
    .getElementById("checkoutModal")
    .classList.remove("show");
}


/* WHATSAPP ORDER */

document
  .getElementById("checkoutForm")
  .addEventListener(
    "submit",
    function(event) {

      event.preventDefault();

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

      const payment =
        document.getElementById(
          "paymentMethod"
        ).value;


      const items = cart.map(item =>
        `• ${item.name} x${item.qty} = ${formatPrice(
          item.price * item.qty
        )}`
      ).join("\n");


      const total = cart.reduce(
        (sum, item) =>
          sum + item.price * item.qty,
        0
      );


      const message = `

🛍️ *NEW ALPHA SHOP ORDER*

👤 Name: ${name}

📱 Phone: ${phone}

📍 Address:
${address}

💳 Payment:
${payment}

📦 Products:
${items}

💰 *TOTAL: ${formatPrice(total)}*

✅ Customer has confirmed the order details.

      `.trim();


      window.open(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
        "_blank"
      );

    }
  );


/* REVIEWS */

const defaultReviews = [
  {
    name: "Muhammad",
    rating: 5,
    text: "Very good product and fast delivery."
  },
  {
    name: "Ayesha",
    rating: 5,
    text: "Product quality was really good."
  },
  {
    name: "Ali",
    rating: 4,
    text: "Good experience. Will order again."
  }
];


function getReviews() {

  return JSON.parse(
    localStorage.getItem(
      "alphaShopReviews"
    )
  ) || defaultReviews;
}


function renderReviews() {

  const reviews =
    getReviews();

  document.getElementById(
    "reviewsGrid"
  ).innerHTML = reviews.map(
    review => `

      <div class="review-card">

        <div class="review-top">

          <div class="avatar">
            ${review.name
              .charAt(0)
              .toUpperCase()}
          </div>

          <div>

            <strong>
              ${review.name}
            </strong>

            <div class="review-stars">
              ${"★".repeat(review.rating)}
              ${"☆".repeat(5 - review.rating)}
            </div>

          </div>

        </div>

        <p>
          "${review.text}"
        </p>

      </div>

    `
  ).join("");
}


document
  .getElementById("reviewForm")
  .addEventListener(
    "submit",
    function(event) {

      event.preventDefault();

      const reviews =
        getReviews();

      reviews.unshift({

        name:
          document.getElementById(
            "reviewName"
          ).value.trim(),

        rating:
          Number(
            document.getElementById(
              "reviewRating"
            ).value
          ),

        text:
          document.getElementById(
            "reviewText"
          ).value.trim()

      });

      localStorage.setItem(
        "alphaShopReviews",
        JSON.stringify(reviews)
      );

      this.reset();

      renderReviews();

      alert(
        "Thank you! Your review has been added."
      );

    }
  );


/* MOBILE MENU */

document
  .getElementById("menuToggle")
  .addEventListener(
    "click",
    () => {

      document
        .getElementById("mobileMenu")
        .classList.toggle("show");

    }
  );


document
  .querySelectorAll(".mobile-menu a")
  .forEach(link => {

    link.addEventListener(
      "click",
      () => {

        document
          .getElementById("mobileMenu")
          .classList.remove("show");

      }
    );

  });


/* EVENTS */

document
  .getElementById("cartBtn")
  .addEventListener(
    "click",
    openCart
  );


document
  .getElementById("closeCart")
  .addEventListener(
    "click",
    closeCart
  );


document
  .getElementById("overlay")
  .addEventListener(
    "click",
    closeCart
  );


document
  .getElementById("checkoutBtn")
  .addEventListener(
    "click",
    openCheckout
  );


document
  .getElementById("closeCheckout")
  .addEventListener(
    "click",
    closeCheckout
  );


document
  .getElementById("closeQuick")
  .addEventListener(
    "click",
    closeQuickView
  );


/* INITIAL LOAD */

renderProducts();
renderCart();
renderReviews();