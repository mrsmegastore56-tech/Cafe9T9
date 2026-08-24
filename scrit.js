/* =========================================
   MOBILE MENU
========================================= */

const toggle =
    document.querySelector(".menu-toggle");

const links =
    document.querySelector(".nav-links");


if (toggle && links) {


    toggle.addEventListener(
        "click",
        () => {


            const open =
                links.classList.toggle("open");


            toggle.setAttribute(
                "aria-expanded",
                String(open)
            );


        }
    );


    /* CLOSE MENU AFTER CLICK */

    links
        .querySelectorAll("a")
        .forEach(link => {


            link.addEventListener(
                "click",
                () => {

                    links.classList.remove(
                        "open"
                    );

                }
            );


        });

}



/* =========================================
   MENU FILTER
========================================= */

const filters =
    document.querySelectorAll(".filter");


const cards =
    document.querySelectorAll(".menu-card");


filters.forEach(button => {


    button.addEventListener(
        "click",
        () => {


            /* REMOVE ACTIVE */

            filters.forEach(btn => {

                btn.classList.remove(
                    "active"
                );

            });


            /* ADD ACTIVE */

            button.classList.add(
                "active"
            );


            /* GET CATEGORY */

            const filter =
                button.dataset.filter;


            /* FILTER CARDS */

            cards.forEach(card => {


                const category =
                    card.dataset.category;


                if (
                    filter === "all" ||
                    category === filter
                ) {

                    card.classList.remove(
                        "hidden"
                    );

                }

                else {

                    card.classList.add(
                        "hidden"
                    );

                }


            });


            /* SCROLL MENU */

            document
                .querySelector("#menu")
                .scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });


        }
    );


});



/* =========================================
   CATEGORY CARDS
========================================= */

const categoryCards =
    document.querySelectorAll(
        ".category-card"
    );


categoryCards.forEach(card => {


    card.addEventListener(
        "click",
        () => {


            const target =
                card.dataset.jump;


            const filter =
                document.querySelector(
                    `.filter[data-filter="${target}"]`
                );


            if (filter) {

                filter.click();

            }

            else {

                document
                    .querySelector("#menu")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            }


        }
    );


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

document.addEventListener(
    "keydown",
    event => {


        if (
            event.key === "Escape" &&
            links
        ) {

            links.classList.remove(
                "open"
            );


            if (toggle) {

                toggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }


    }
);