// index.js

// --- Modal functionality ---
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".project-image").forEach(img => {
  img.addEventListener("click", () => {
    modalImg.src = img.src;
    modal.classList.add("show");
    modal.classList.remove("closing");
  });
});

function closeModal() {
  modal.classList.add("closing");
  setTimeout(() => {
    modal.classList.remove("show");
  }, 400);
}

closeBtn.onclick = closeModal;

// --- Close modal with Escape key ---
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("show")) {
    closeModal();
  }
});

modal.onclick = function(e) {
  if (e.target === modal) closeModal();
};

// --- Fade-in on scroll ---
const faders = document.querySelectorAll('.fade, .fade-delayed');
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  }
  });
}, { threshold: 0.1 });

faders.forEach(fader => observer.observe(fader));

// --- Spotlight effect ---
(function () {
  const hero = document.querySelector(".hero");
  const root = document.documentElement;
  
  function setSpotlight(x, y) {
    root.style.setProperty("--x", x + "px");
    root.style.setProperty("--y", y + "px");
  }

  hero.addEventListener("mousemove", (e) => {
    setSpotlight(e.pageX, e.pageY); // fixed with scroll
  });

  setSpotlight(window.innerWidth / 2, window.innerHeight / 2);

  window.addEventListener("resize", () => {
    setSpotlight(window.innerWidth / 2, window.innerHeight / 2);
  });
})();

