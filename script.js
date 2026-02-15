/* ============================
   SMOOTH SCROLLING FOR NAV LINKS
============================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

/* ============================
   SCROLL FADE-IN EFFECT
============================= */
const fadeElements = document.querySelectorAll(".section, .project-card, .edu-card, .exp-card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
        }
    });
});

fadeElements.forEach(el => observer.observe(el));

/* ============================
   STICKY NAVBAR ON SCROLL
============================= */
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});
/* ===============================
   SLIDE-IN ON SCROLL
================================ */

const slideElements = document.querySelectorAll(".exp-card, .project-card");

const slideObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("slide-in");
        }
    });
}, {
    threshold: 0.2
});

slideElements.forEach(el => {
    slideObserver.observe(el);
});
/* ===============================
   SCROLL SLIDE ANIMATION (WORKING)
================================ */

document.addEventListener("DOMContentLoaded", function () {

    const elements = document.querySelectorAll(".exp-card, .project-card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("slide-in");
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));

});
