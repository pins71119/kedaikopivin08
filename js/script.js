// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika Hamburger Menu di Klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.containts(e.target) && !navbarNav.containts(e.target))
    navbarNav.classList.remove("active");
});
