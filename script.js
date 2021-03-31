const burger = document.querySelector(".burger");
const container = document.querySelector(".bloc-container");
const containerLi = document.querySelector(".container-burger");

burger.addEventListener("click", () => {
  burger.classList.toggle("open");
});

burger.addEventListener("click", () => {
  container.classList.toggle("visible-1");
});
burger.addEventListener("click", () => {
  containerLi.classList.toggle("li-visible");
});
