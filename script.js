/*==========================================
  TYPING ANIMATION
==========================================*/

const words = [
    "Business Information Systems Student",
    "Shopify Developer",
    "Web Developer",
    "Python Programmer",
    "UI / UX Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const current = words[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === current.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typing.textContent = current.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 100);

}

typeEffect();


/*==========================================
  DARK / LIGHT MODE
==========================================*/

const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const icon = themeButton.querySelector("i");

    if (document.body.classList.contains("light")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});


/*==========================================
  MOBILE MENU
==========================================*/

const hamburger = document.querySelector(".hamburger");

const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/*==========================================
  CLOSE MENU WHEN LINK IS CLICKED
==========================================*/

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/*==========================================
  SCROLL REVEAL
==========================================*/

const sections = document.querySelectorAll(".section");

const reveal = () => {

    const trigger = window.innerHeight * 0.85;

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < trigger) {

            section.classList.add("show");

        }

    });

};

window.addEventListener("scroll", reveal);

reveal();


/*==========================================
  ACTIVE NAVIGATION
==========================================*/

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    document.querySelectorAll("section").forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


const card = document.querySelector(".image-circle");

card.addEventListener("mousemove",(e)=>{

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 20;

    const rotateX = ((rect.height / 2 - y) / rect.height) * 20;

    card.style.transform =
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});

card.addEventListener("mouseleave",()=>{

    card.style.transform="rotateX(0deg) rotateY(0deg)";

});


/*==========================================
  NAVBAR SHADOW ON SCROLL
==========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 20px 45px rgba(0,0,0,.45)";

    } else {

        header.style.boxShadow = "0 12px 35px rgba(0,0,0,.25)";

    }

});


/*==========================================
  BUTTON RIPPLE EFFECT
==========================================*/

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-5px) scale(1.03)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0) scale(1)";

    });

});


console.log("%cWelcome to Dipesh's Portfolio 🚀", "color:#38bdf8;font-size:20px;font-weight:bold;");