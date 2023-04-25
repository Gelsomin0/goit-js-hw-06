function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonEl = document.querySelector('.change-color');
const colorTextEl = document.querySelector('.color');

buttonEl.addEventListener('click', () => {
  const randomColor = getRandomHexColor();

  colorTextEl.textContent = randomColor;
  document.body.setAttribute('style', `background-color: ${randomColor}`);
});