const loginForm = document.querySelector('.login-form')

loginForm.addEventListener('submit', Submit)

function Submit(event) {
    event.preventDefault();


    const formEmail = loginForm.querySelector('input[name="email"]')
    const formPass = loginForm.querySelector('input[name="password"]')

    if (formEmail.value === '' || formPass.value === '') {
        alert('Заповни усі поля! Будь ласка :)')
        return
    }

    const formObj = {
        email: formEmail.value,
        password: formPass.value,
    }

    console.log(formObj);

    loginForm.reset()
}

// Done ;) 