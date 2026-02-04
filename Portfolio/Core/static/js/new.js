document.addEventListener("DOMContentLoaded", function () {

  // ===== Portfolio: See More Toggle =====
  document.querySelectorAll(".see-more-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const desc = button.previousElementSibling; // p.portfolio-desc
      desc.classList.toggle("show");

      if (desc.classList.contains("show")) {
        button.textContent = "कम हेर्नुहोस्";
      } else {
        button.textContent = "पुरा पढ्नुहोस";
      }
    });
  });

  // ===== Hamburger Menu =====
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }

  // ===== Photos Floating Animation =====
  const photoCards = document.querySelectorAll(".photo-card");
  
  photoCards.forEach((card, index) => {
    // Random duration between 3-6 seconds
    const duration = Math.random() * 3 + 3;
    
    // Apply animation with staggered delay
    card.style.animation = `floatUp ${duration}s ease-in-out infinite`;
    card.style.animationDelay = `${index * 0.1}s`;
  });

});
