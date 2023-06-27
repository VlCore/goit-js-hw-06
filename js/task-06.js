const validationInput = document.querySelector('#validation-input')

validationInput.addEventListener('blur', () => {
    const inputValue = validationInput.value
    const trueLength = parseInt(validationInput.dataset.length)

    if (inputValue.length === trueLength) {
        validationInput.classList.remove('invalid')
        validationInput.classList.add('valid')
    } else {
        validationInput.classList.remove('valid')
        validationInput.classList.add('invalid')
    }
})

// Done ;)