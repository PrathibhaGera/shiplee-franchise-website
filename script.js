const themeToggleBtn = document.getElementById("mobile-menu-btn");
const themeToggleBtnDesktop = document.getElementById("desktop-darktheme-btn");

themeToggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
});

themeToggleBtnDesktop.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
});
