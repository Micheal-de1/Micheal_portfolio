/* =========================
   TYPING ANIMATION
========================= */

const words = [
  "Frontend Developer",
  "Web Developer",
  "Creative Designer",
  "JavaScript Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const typing = document.getElementById("typing");

  if (!typing) return;

  const currentWord = words[wordIndex];

  if (!deleting) {
    charIndex++;
    typing.textContent = currentWord.substring(0, charIndex);

    if (charIndex === currentWord.length) {
      deleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }
  } else {
    charIndex--;
    typing.textContent = currentWord.substring(0, charIndex);

    if (charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, deleting ? 60 : 120);
}

typeEffect();

/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* Close menu when link clicked */

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

/* =========================
   SCROLL REVEAL
========================= */

const reveals = document.querySelectorAll(".reveal");

function revealSections() {
  reveals.forEach(section => {

    const windowHeight = window.innerHeight;
    const revealTop = section.getBoundingClientRect().top;

    if (revealTop < windowHeight - 100) {
      section.classList.add("active");
    }

  });
}

window.addEventListener("scroll", revealSections);

revealSections();

/* =========================
   ACTIVE NAV LINK
========================= */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
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

/* =========================
   PROGRESS BAR
========================= */

window.addEventListener("scroll", () => {

  const winScroll =
    document.documentElement.scrollTop ||
    document.body.scrollTop;

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrolled = (winScroll / height) * 100;

  document.getElementById("progress-bar").style.width =
    scrolled + "%";

});

/* =========================
   THEME TOGGLE
========================= */

const themeBtn = document.getElementById("theme-toggle");

/* Load saved theme */

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
    themeBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "dark");
    themeBtn.textContent = "🌙";
  }

});

/* =========================
   BACK TO TOP BUTTON
========================= */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }

});

topBtn.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});
