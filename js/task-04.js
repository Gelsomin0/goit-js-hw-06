let counterValue = 0;

const valueEl = document.querySelector('#value');
valueEl.textContent = counterValue;

const changeValue = (event) => {
    if (event.target.dataset.action === 'decrement') {
        counterValue -= 1;
        valueEl.textContent = counterValue;
    } else if (event.target.dataset.action === 'increment') {
        counterValue += 1;
        valueEl.textContent = counterValue;
    }
};

document.addEventListener('click', (e) => {
    changeValue(e);
});

