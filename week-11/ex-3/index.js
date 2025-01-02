const width = document.querySelector("#width");
const height = document.querySelector("#height");
const padding = document.querySelector("#padding");
const margin = document.querySelector("#margin");
const bgColor = document.querySelector("#background");
const bgImage = document.querySelector("#background-image");
const color = document.querySelector("#color");
const content = document.querySelector("#content");

const square = document.querySelector(".square");
const drawBtn = document.querySelector("button.draw");
const resetBtn = document.querySelector("button.reset");

drawBtn.addEventListener("click", function () {
  square.style.display = "none";
  square.style.width = `${width.value}`;
  square.style.height = `${height.value}`;
  square.style.padding = `${padding.value}`;
  square.style.margin = `${margin.value}`;
  square.style.backgroundImage = `url(${bgImage.value})`;
  square.style.backgroundRepeat = "no-repeat";
  square.style.backgroundSize = "auto";
  square.style.backgroundPosition = "center";
  square.style.backgroundColor = `${bgColor.value}`;
  square.style.color = `${color.value}`;
  square.textContent = content.value;
  setTimeout(function () {
    square.style.display = "block";
  }, 500);
});

resetBtn.addEventListener("click", function () {
  location.reload();
});
