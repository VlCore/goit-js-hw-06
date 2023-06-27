const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', (event) => {
    const inputValue = event.target.value;
    const trueLength = parseInt(event.target.dataset.length);

    if (inputValue.length === trueLength) {
        event.target.classList.remove('invalid');
        event.target.classList.add('valid');
    } else {
        event.target.classList.remove('valid');
        event.target.classList.add('invalid');
    }
});

// Done ;)