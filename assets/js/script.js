const modals = document.querySelector(".pop-up");
const Closemodals = document.querySelector(".pop-up i");
const allocationImage = document.querySelector("#allocation-image");
const check = document.querySelector("#check");
const navLinks = document.querySelectorAll(".nav-link");
const dropdownLinks = document.querySelectorAll(".dropdown-link");

const imgArray = [
  "assets/images/royale-images/ALL UYO I.jpg",
  "assets/images/royale-images/ALL OTA.jpg",
  "assets/images/royale-images/ALL UYO.jpg",
  "/assets/images/royale-images/FEN EGU.png",
];

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    modals.classList.add("appear");
  }, 3000);

  modals.addEventListener("click", () => {
    modals.classList.remove("appear");
  });

  Closemodals.addEventListener("click", () => {
    modals.classList.remove("appear");
  });

  dropdownLinks.forEach((link) => {
    link.addEventListener("click", () => {
      check.checked = false;
    });
  });
});
