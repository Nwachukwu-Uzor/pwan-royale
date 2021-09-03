window.addEventListener("DOMContentLoaded", () => {
  const fadeInAnimate = document.querySelectorAll(".fade-in-animate");

  const fadeInOptions = {
    rootMargin: "-100px 0px",
  };

  const fadeInObserver = new IntersectionObserver((entries, fadeInObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        fadeInObserver.unobserve(entry.target);
      }
    });
  }, fadeInOptions);

  fadeInAnimate.forEach((fadeIn) => fadeInObserver.observe(fadeIn));
});
