const categoryEl = document.querySelectorAll('.item');
const titleEl = document.querySelectorAll('h2');

console.log(`Number of categories: ${categoryEl.length}`);

titleEl.forEach(title => {
    console.log(`Category: ${title.textContent}`);

    
});