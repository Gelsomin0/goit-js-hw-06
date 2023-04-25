const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];




const ingredientsEl = document.querySelector('#ingredients'); 

const elements = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = ingredients[i];
  elements.push(itemEl);
}

ingredientsEl.append(...elements);