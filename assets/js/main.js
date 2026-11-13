// Mobile navigation toggle
const navToggle = document.querySelector(".nav-toggle");
const mobileNav = document.querySelector(".mobile-nav");

if (navToggle && mobileNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Close mobile nav on resize to desktop width
window.addEventListener("resize", () => {
  if (window.innerWidth >= 900 && mobileNav) {
    mobileNav.classList.remove("is-open");
  }
});

// Set current year in footer
const yearEl = document.querySelector("[data-year]");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Only one FAQ item open at a time
document.querySelectorAll(".faq-item").forEach((item) => {
  item.addEventListener("toggle", () => {
    if (item.open) {
      document.querySelectorAll(".faq-item").forEach((other) => {
        if (other !== item) other.open = false;
      });
    }
  });
});
