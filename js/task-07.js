const fontSizeControl = document.querySelector('#font-size-control');
const testText = document.querySelector('#text');

fontSizeControl.addEventListener('input', (event) => {
    const fontSize = event.target.value + 'px';
    testText.style.fontSize = fontSize;
});

// Done ;)