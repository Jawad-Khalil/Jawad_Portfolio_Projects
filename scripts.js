document.addEventListener("DOMContentLoaded", function () {
  // Wait until the DOM is fully loaded before running the code

  const hash = window.location.hash;
  // Get the hash value from the URL (e.g., #section1)

  if (hash) {
    // Check if there is a hash in the URL

    const targetElement = document.querySelector(hash);
    // Find the element that corresponds to the hash

    if (targetElement) {
      // If the element exists

      targetElement.scrollIntoView({ behavior: "smooth" });
      // Scroll smoothly to the target element
    }
  }

  // Scroll to top button functionality
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  // Get the "Scroll to Top" button by its ID

  window.addEventListener("scroll", () => {
    // Add an event listener for the window's scroll event

    if (window.scrollY > 300) {
      // If the page is scrolled down more than 300 pixels

      scrollToTopBtn.style.display = "block";
      // Show the "Scroll to Top" button
    } else {
      scrollToTopBtn.style.display = "none";
      // Hide the "Scroll to Top" button
    }
  });

  scrollToTopBtn.addEventListener("click", () => {
    // Add a click event listener to the "Scroll to Top" button

    window.scrollTo({ top: 0, behavior: "smooth" });
    // Smoothly scroll to the top of the page
  });

  // Navigation menu toggle
  const menuBtn = document.getElementById("menuBtn");
  // Get the navigation menu button by its ID

  const navList = document.getElementById("navList");
  // Get the navigation list by its ID

  const navLinks = navList.querySelectorAll("a");
  // Get all anchor links within the navigation list

  menuBtn.addEventListener("click", () => {
    // Add a click event listener to the menu button

    navList.style.display =
      navList.style.display === "block" ? "none" : "block";
    // Toggle the navigation list display between block and none
  });

  navLinks.forEach((link) => {
    // Loop through each navigation link

    link.addEventListener("click", () => {
      navList.style.display = "none";
      // Hide the navigation list when a link is clicked
    });
  });
});

// Close the menu if clicking outside of it
document.addEventListener("click", (event) => {
  // Add a click event listener to the document

  const target = event.target;
  // Get the element that was clicked

  if (!navList.contains(target) && target !== menuBtn) {
    // If the click is outside the menu and not on the menu button

    navList.style.display = "none";
    // Hide the navigation list
  }
});
