const formEl = document.querySelector('.login-form');

const userData = {
    email: undefined,
    password: undefined,
};

formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.currentTarget.email.value === '' && e.currentTarget.password.value === '') {
        alert('Please enter your email address and password!');
    } else if (e.currentTarget.password.value === '') {
        alert('Please enter your password!');
    } else if (e.currentTarget.email.value === '')  {
        alert('Please enter your email address!');
    } else {
        userData.email = e.currentTarget.email.value;
        userData.password = e.currentTarget.password.value;
        formEl.reset();
        console.log(userData);
    }    
});