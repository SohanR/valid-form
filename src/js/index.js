const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


//show error message
function showError(input, message) {
    const formGroup = input.parentElement;
    formGroup.className = 'form-group error';
    const small = formGroup.querySelector('small');
    small.innerText = message;
}

//show success
function showSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.className = 'form-group valid';
}

//check email valid
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//event listener
form.addEventListener('submit', e => {
    e.preventDefault();

    //username
    if (username.value === '') {
        showError(username, 'Username is required');
    } else {
        showSuccess(username);
    }

    //email
    if (email.value === '') {
        showError(email, 'Email is required');
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Email is not Valid');
    }
    else {
        showSuccess(email);
    }

    //password
    if (password.value === '') {
        showError(password, 'Password is required');
    } else {
        showSuccess(password);
    }

    //confirm password
    if (password2.value === '') {
        showError(password2, 'Password2 is required');
    } else {
        showSuccess(password2);
    }
})