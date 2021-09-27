const burgerElement = document.getElementById("burger");
const menuElement = document.querySelector(".menu");
const backdropElement = document.querySelector(".backdrop");

burgerElement.addEventListener("click", () => {
  const hasOpenClass = burgerElement.classList.contains("open");
  menuElement.classList.toggle("menu--open");
  backdropElement.classList.add("backdrop--visible");

  if (hasOpenClass) {
    burgerElement.classList.remove("open");
    burgerElement.classList.add("closed");
  } else {
    burgerElement.classList.add("open");
    burgerElement.classList.remove("closed");
  }
});

backdropElement.addEventListener("click", () => {
  menuElement.classList.remove("menu--open");
  backdropElement.classList.remove("backdrop--visible");
  burgerElement.classList.remove("open");
  burgerElement.classList.add("closed");
});
