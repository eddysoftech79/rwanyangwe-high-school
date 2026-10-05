/* =========================================================
   RWANYANGWE HIGH SCHOOL
   COMPLETE JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       MOBILE MENU
       ===================================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const mainNav =
        document.getElementById("mainNav");


    if (menuToggle && mainNav) {


        menuToggle.addEventListener("click", function () {

            const isOpen =
                mainNav.classList.toggle("active");


            if (isOpen) {

                menuToggle.innerHTML = "✕";

                menuToggle.setAttribute(
                    "aria-label",
                    "Close menu"
                );

                menuToggle.setAttribute(
                    "aria-expanded",
                    "true"
                );

            } else {

                menuToggle.innerHTML = "☰";

                menuToggle.setAttribute(
                    "aria-label",
                    "Open menu"
                );

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }

        });


        /* =================================================
           CLOSE MENU AFTER CLICKING A LINK
           ================================================= */

        const navLinks =
            mainNav.querySelectorAll("a");


        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                mainNav.classList.remove("active");

                menuToggle.innerHTML = "☰";

                menuToggle.setAttribute(
                    "aria-label",
                    "Open menu"
                );

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });


        /* =================================================
           CLOSE MENU WHEN CLICKING OUTSIDE
           ================================================= */

        document.addEventListener(
            "click",
            function (event) {

                const clickedInsideMenu =
                    mainNav.contains(event.target);

                const clickedMenuButton =
                    menuToggle.contains(event.target);


                if (
                    mainNav.classList.contains("active") &&
                    !clickedInsideMenu &&
                    !clickedMenuButton
                ) {

                    mainNav.classList.remove("active");

                    menuToggle.innerHTML = "☰";

                    menuToggle.setAttribute(
                        "aria-label",
                        "Open menu"
                    );

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                }

            }
        );


        /* =================================================
           RESET MENU ON DESKTOP
           ================================================= */

        window.addEventListener(
            "resize",
            function () {

                if (window.innerWidth > 700) {

                    mainNav.classList.remove("active");

                    menuToggle.innerHTML = "☰";

                    menuToggle.setAttribute(
                        "aria-label",
                        "Open menu"
                    );

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                }

            }
        );

    }



    /* =====================================================
       CURRENT YEAR
       ===================================================== */

    const copyright =
        document.querySelector(".copyright");


    if (copyright) {

        copyright.textContent =
            "© " +
            new Date().getFullYear() +
            " Rwanyangwe High School | All Rights Reserved.";

    }



    /* =====================================================
       SMOOTH SCROLL
       ===================================================== */

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    internalLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");


                if (
                    targetId &&
                    targetId !== "#"
                ) {

                    const target =
                        document.querySelector(targetId);


                    if (target) {

                        event.preventDefault();


                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }

            }
        );

    });



    /* =====================================================
       CARD ANIMATION
       ===================================================== */

    const cards =
        document.querySelectorAll(".card");


    if ("IntersectionObserver" in window) {

        const cardObserver =
            new IntersectionObserver(
                function (entries, observer) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.style.opacity =
                                    "1";

                                entry.target.style.transform =
                                    "translateY(0)";

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.15
                }
            );


        cards.forEach(function (card) {

            card.style.opacity = "0";

            card.style.transform =
                "translateY(25px)";

            card.style.transition =
                "opacity 0.6s ease, transform 0.6s ease";

            cardObserver.observe(card);

        });

    }



    /* =====================================================
       GALLERY ANIMATION
       ===================================================== */

    const galleryItems =
        document.querySelectorAll(
            ".gallery-item"
        );


    if ("IntersectionObserver" in window) {

        const galleryObserver =
            new IntersectionObserver(
                function (entries, observer) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.style.opacity =
                                    "1";

                                entry.target.style.transform =
                                    "translateY(0)";

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.15
                }
            );


        galleryItems.forEach(
            function (item) {

                item.style.opacity = "0";

                item.style.transform =
                    "translateY(25px)";

                item.style.transition =
                    "opacity 0.7s ease, transform 0.7s ease";

                galleryObserver.observe(item);

            }
        );

    }



    /* =====================================================
       WEBSITE LOADED
       ===================================================== */

    console.log(
        "Rwanyangwe High School website loaded successfully."
    );

});
