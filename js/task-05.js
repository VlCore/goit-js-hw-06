const inputName = document.querySelector('#name-input')
const outputName = document.querySelector('#name-output')

inputName.addEventListener('input', (event) => {
    const target = event.target;
    
    if (target.value === '') {
        outputName.textContent = 'Anonymous'
    } else {
        outputName.textContent = target.value
    }
})

// Done ;)