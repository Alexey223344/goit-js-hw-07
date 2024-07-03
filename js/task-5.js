const btnChangeColor = document.querySelector('.change-color');
btnChangeColor.addEventListener('click', getChangeColor);
const getBoddy = document.querySelector('body');
const getSpanColor = document.querySelector('.color');

function getChangeColor() {
  getBoddy.style.backgroundColor = getRandomHexColor();
  getSpanColor.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
