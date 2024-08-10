document.addEventListener("DOMContentLoaded", function () {
  const hash = window.location.hash;
  if (hash) {
    const targetElement = document.querySelector(hash);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  // Scroll to top button functionality
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Navigation menu toggle
  const menuBtn = document.getElementById("menuBtn");
  const navList = document.getElementById("navList");
  const navLinks = navList.querySelectorAll("a");

  menuBtn.addEventListener("click", () => {
    navList.style.display =
      navList.style.display === "block" ? "none" : "block";
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navList.style.display = "none";
    });
  });
});

// Close the menu if clicking outside of it
document.addEventListener("click", (event) => {
  const target = event.target;
  if (!navList.contains(target) && target !== menuBtn) {
    navList.style.display = "none";
  }
});
