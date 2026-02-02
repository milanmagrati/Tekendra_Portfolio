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

  // ===== Photos Floating Animation (safe small movement) =====
  document.querySelectorAll(".photo-card").forEach((card) => {
    const duration = Math.random() * 6 + 3;   // 4s - 8s
    const distance = Math.random() * 15 + 20;  // small (mobile safe)

    card.style.animation = `float ${duration}s ease-in-out infinite alternate`;
    card.style.setProperty("--float-distance", `${distance}px`);
  });

});
