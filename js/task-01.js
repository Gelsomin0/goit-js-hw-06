const categoryEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryEl.length}`);
console.log('---------------------------');

categoryEl.forEach((category) => {
    const categoryTitleEl = category.querySelector('h2');
    console.log(`Category: ${categoryTitleEl.textContent}`);

    const categoryNameEl = category.querySelectorAll('li');
    console.log(`Elements: ${categoryNameEl.length}`); 

    console.log('------------------');
});