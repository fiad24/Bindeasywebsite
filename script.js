// Smooth Scrolling for Links
document.querySelectorAll('.menu a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Scroll Animations
const scrollElements = document.querySelectorAll("[data-scroll]");

const observerOptions = {
  threshold: 0.2,
};

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
}, observerOptions);

scrollElements.forEach((el) => scrollObserver.observe(el));