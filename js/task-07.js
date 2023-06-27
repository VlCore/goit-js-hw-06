const fontSizeControl = document.querySelector('#font-size-control')
const testText = document.querySelector('#text')

fontSizeControl.addEventListener('input', () => {
    const fontSize = fontSizeControl.value + 'px'
    testText.style.fontSize = fontSize
})

// Done ;)