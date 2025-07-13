const offScreenMenu = document.querySelector(".off-screen-menu");
const main = document.querySelector(".main");
const openMenu = document.querySelector("#open-sidebar");

openMenu.addEventListener("click", () => {
  offScreenMenu.classList.toggle("active");
  openMenu.classList.toggle("active");
  main.classList.toggle("active");
});

closeMenu.addEventListener("click", () => {
  offScreenMenu.classList.remove("active");
  openMenu.classList.remove("active");
});
