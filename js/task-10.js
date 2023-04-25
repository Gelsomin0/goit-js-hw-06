function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const temporaryArray = [];
const boxesEl = document.querySelector('#boxes');
const inputEl = document.querySelector('#controls input');

let elementWidth = 20;
let elementHeight = 20;
let boxesCount = 0;


function destroyBoxes() {
  boxesEl.innerHTML = '';
  boxesCount = 0;
  elementWidth = 20;
  elementHeight = 20;
}


function createBoxes(amount) {

  if (boxesEl.innerHTML !== '') {
    destroyBoxes();
  };

  for (let i = 0; i < amount; i += 1) {
    const divEl = `<div class='diver' style='width: ${elementWidth += 10}px; height: ${elementHeight += 10}px; background-color: ${getRandomHexColor()}'>${boxesCount += 1}</div>`;
    temporaryArray.push(divEl);
  }

  boxesEl.innerHTML = `${temporaryArray.join(' ')}`;
  inputEl.value = '';
  temporaryArray.splice(0, temporaryArray.length);
  elementWidth = 20;
  elementHeight = 20;
}



document.addEventListener('click', (event) => {

  if (event.target.hasAttribute('data-create')) {
    createBoxes(inputEl.value); 
  };  
  if (event.target.hasAttribute('data-destroy')) {
    destroyBoxes(); 
  };
});