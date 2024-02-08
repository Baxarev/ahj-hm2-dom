document.addEventListener("DOMContentLoaded", () => {
  const boxCollection = document.querySelectorAll(".box__item");

  function setRandomImg() {
    boxCollection.forEach((i) => i.classList.remove("box__item_active"));
    boxCollection[
      Math.floor(Math.random() * boxCollection.length)
    ].classList.add("box__item_active");
  }

  setInterval(setRandomImg, 1000);
});
