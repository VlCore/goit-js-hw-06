let counterValue = 0

const valueEl = document.querySelector('#value')
const posBtn = document.querySelector('button[data-action="increment"]')
const negBtn = document.querySelector('button[data-action="decrement"]')

const valueResult = () => {
    valueEl.textContent = counterValue
}

const posBtnClick = () => {
    counterValue++
    valueResult()
}

const negBtnClick = () => {
    counterValue--
    valueResult()
}

posBtn.addEventListener('click', posBtnClick)
negBtn.addEventListener('click', negBtnClick)

// Done ;)
// Доречі дуже затупив коли воно почало декремент додавати, а інкремент навпаки, переплутав xD