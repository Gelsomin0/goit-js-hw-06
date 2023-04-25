const nameEl = document.querySelector('#name-output');
const inputEl = document.querySelector('#name-input');

inputEl.addEventListener('input', () => {
    nameEl.textContent = inputEl.value;

    if (inputEl.value === '') {
        nameEl.textContent = 'Anonymous';
    }
});