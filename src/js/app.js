document.addEventListener("DOMContentLoaded", () => {
  const boxCollection = document.querySelectorAll(".box__item");

  function setRandomImg() {
    const getRandom = () => Math.floor(Math.random() * boxCollection.length);

    let count = getRandom();

    while (boxCollection[count].classList.contains("box__item_active")) {
      count = getRandom();
    }

    boxCollection.forEach((i) => i.classList.remove("box__item_active"));
    boxCollection[count].classList.add("box__item_active");
  }

  setInterval(setRandomImg, 1000);
});
