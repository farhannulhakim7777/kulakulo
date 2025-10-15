document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("nav-toggle");
  const navbar = document.getElementById("navbar");

  navToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  const sr = ScrollReveal({
    origin: "bottom",
    distance: "50px",
    duration: 800,
    delay: 100,
  });

  sr.reveal(".hero-content", {});
  sr.reveal(".about-card", { interval: 150 });
  sr.reveal(".galery-container img", { interval: 100 });
  sr.reveal(".menu-card", { interval: 100 });
  sr.reveal(".location-container", {});
});
