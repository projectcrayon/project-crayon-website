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
const brandLink = document.querySelector(".brand");
const header = document.querySelector(".site-header");

if (navToggle && navLinks.length) {
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navToggle.checked) {
        navToggle.checked = false;
      }
    });
  });
}

if (brandLink) {
  brandLink.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (navToggle && navToggle.checked) {
      navToggle.checked = false;
    }
  });
}

const syncHeaderState = () => {
  if (!header) return;
  if (window.scrollY > 24) {
    header.classList.add("is-scrolled");
  } else {
    header.classList.remove("is-scrolled");
  }
};

syncHeaderState();
window.addEventListener("scroll", syncHeaderState);

const introCrayon = document.querySelector(".intro__interactive");
const catSticker = document.querySelector(".pp-illustration__img");

if (introCrayon) {
  const animateCrayon = () => {
    introCrayon.classList.remove("is-animating");
    void introCrayon.offsetWidth; // restart animation
    introCrayon.classList.add("is-animating");
  };

  introCrayon.addEventListener("click", animateCrayon);
  introCrayon.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      animateCrayon();
    }
  });
  introCrayon.addEventListener("animationend", () => {
    introCrayon.classList.remove("is-animating");
  });
}

const copyCtas = document.querySelectorAll(".cta[data-copy]");

copyCtas.forEach((cta) => {
  const button = cta.querySelector(".cta__copy");
  const toast = cta.querySelector(".cta__toast");
  const value = cta.getAttribute("data-copy");
  let toastTimer;

  if (!button || !toast || !value) return;

  const showToast = (message) => {
    toast.textContent = message;
    cta.classList.add("cta--toast-active");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      cta.classList.remove("cta--toast-active");
    }, 1800);
  };

  const fallbackCopy = () => {
    const temp = document.createElement("textarea");
    temp.value = value;
    temp.setAttribute("readonly", "");
    temp.style.position = "absolute";
    temp.style.left = "-9999px";
    document.body.appendChild(temp);
    temp.select();
    try {
      document.execCommand("copy");
      showToast("Copied!");
    } catch (error) {
      showToast("Press Ctrl+C to copy");
    }
    document.body.removeChild(temp);
  };

  button.addEventListener("click", async () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(value);
        showToast("Copied!");
      } catch (error) {
        fallbackCopy();
      }
    } else {
      fallbackCopy();
    }
  });
});

const platformChips = document.querySelectorAll(".card__platforms .chip");

platformChips.forEach((chip) => {
  chip.addEventListener("focusout", () => {
    chip.blur();
  });
});

if (catSticker) {
  const animateCat = () => {
    catSticker.classList.remove("is-purring");
    void catSticker.offsetWidth;
    catSticker.classList.add("is-purring");
  };

  catSticker.addEventListener("click", animateCat);
  catSticker.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      animateCat();
    }
  });
  catSticker.addEventListener("animationend", () => {
    catSticker.classList.remove("is-purring");
  });
}
