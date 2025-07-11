// script.js

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Toggle mobile nav menu
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Smooth scroll behavior on nav links
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      navMenu.classList.remove("active"); // close menu on link click

      const targetId = link.getAttribute("href").slice(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 50, // adjust for fixed navbar height
          behavior: "smooth"
        });
      }
    });
  });
});
