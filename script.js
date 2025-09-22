// Fade-in on scroll
const targets = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);
targets.forEach((t) => io.observe(t));

// Close mobile nav after selecting a link
const navToggle = document.querySelector("#nav-toggle");
const navLinks = document.querySelectorAll(".nav-links a");

if (navToggle && navLinks.length) {
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navToggle.checked) {
        navToggle.checked = false;
      }
    });
  });
}
