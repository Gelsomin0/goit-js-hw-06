const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', (e) => {
    console.log(Number(e.target.dataset.length)); 
    console.log(e.target.value.length); 

    if (Number(e.target.dataset.length) !== e.target.value.length) {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    } else {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    }
});