// ===============================
// EduMentor AI - script.js
// ===============================

// Dark Mode Toggle
const darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const icon = darkBtn.querySelector("i");

    if (document.body.classList.contains("dark")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
});

// Smooth Scroll
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {

        const target = this.getAttribute("href");

        if (target.startsWith("#")) {
            e.preventDefault();

            document.querySelector(target).scrollIntoView({
                behavior: "smooth"
            });
        }

    });
});

// Get Started Button
const startBtn = document.querySelector(".startBtn");

startBtn.addEventListener("click", () => {
    alert("Welcome to EduMentor AI 🚀");
});

// Contact Form
const form = document.querySelector("form");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    const name = document.querySelector("input[type='text']").value;
    const email = document.querySelector("input[type='email']").value;
    const message = document.querySelector("textarea").value;

    if (name === "" || email === "" || message === "") {

        alert("Please fill all fields.");

        return;
    }

    alert("Message Sent Successfully ✅");

    form.reset();

});

// Scroll Animation
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        const top = card.getBoundingClientRect().top;

        if (top < window.innerHeight - 80) {

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }

    });

});

// Initial Card Style
cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.8s";

});

// Hero Animation
window.onload = () => {

    document.querySelector(".hero-text").style.opacity = "1";
    document.querySelector(".hero-image").style.opacity = "1";

    document.querySelector(".hero-text").style.transform = "translateX(0)";
    document.querySelector(".hero-image").style.transform = "translateX(0)";

};

document.querySelector(".hero-text").style.opacity = "0";
document.querySelector(".hero-image").style.opacity = "0";

document.querySelector(".hero-text").style.transform = "translateX(-50px)";
document.querySelector(".hero-image").style.transform = "translateX(50px)";

document.querySelector(".hero-text").style.transition = "1s";
document.querySelector(".hero-image").style.transition = "1s";

// Feature Card Hover
cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow = "0 15px 35px rgba(79,70,229,0.3)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "0 5px 20px rgba(0,0,0,0.08)";

    });

});

console.log("EduMentor AI Loaded Successfully 🚀");