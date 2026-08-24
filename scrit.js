/* =========================================
   CAFE 9T9 JAVASCRIPT
========================================= */


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
   WHATSAPP ORDER
========================================= */

const whatsappNumber = "923401720333";

const whatsappMessage =
    "Assalam o Alaikum CAFE 9T9, mujhe menu/order ke bare mein maloomat chahiye.";

const whatsappURL =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


/* =========================================
   ADD WHATSAPP TO BUTTONS
========================================= */

document.querySelectorAll(".whatsapp-order")
    .forEach(button => {

        button.addEventListener("click", () => {

            window.open(
                whatsappURL,
                "_blank"
            );

        });

    });


/* =========================================
   MAKE PHONE NUMBERS CLICKABLE
========================================= */

document.querySelectorAll(".contact-card p")
    .forEach(element => {

        let html = element.innerHTML;

        html = html.replace(
            /0340-1720333/g,
            '<a href="https://wa.me/923401720333" target="_blank" rel="noopener">0340-1720333</a>'
        );

        html = html.replace(
            /0328-6120333/g,
            '<a href="https://wa.me/923286120333" target="_blank" rel="noopener">0328-6120333</a>'
        );

        element.innerHTML = html;

    });


/* =========================================
   CURRENT YEAR
========================================= */

const year =
    document.getElementById("year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener("keydown", event => {

    if (
        event.key === "Escape" &&
        links
    ) {

        links.classList.remove("open");

        if (toggle) {

            toggle.setAttribute(
                "aria-expanded",
                "false"
            );

            toggle.textContent = "☰";

        }

    }

});


/* =========================================
   CLOSE MOBILE MENU OUTSIDE
========================================= */

document.addEventListener("click", event => {

    if (
        !links ||
        !toggle
    ) {
        return;
    }

    if (
        links.classList.contains("open") &&
        !links.contains(event.target) &&
        !toggle.contains(event.target)
    ) {

        links.classList.remove("open");

        toggle.setAttribute(
            "aria-expanded",
            "false"
        );

        toggle.textContent = "☰";

    }

});


/* =========================================
   WHATSAPP CONSOLE CHECK
========================================= */

console.log(
    "CAFE 9T9 website loaded successfully."
);

console.log(
    "WhatsApp:",
    whatsappNumber
);