const valueEl = document.querySelector('#value')
const posBtn = document.querySelector('button[data-action="increment"]')
const negBtn = document.querySelector('button[data-action="decrement"]')

let counterValue = 0

const handleBtnClick = (value) => {
  if (value === 'increment') {
    counterValue++;
  } else if (value === 'decrement') {
    counterValue--;
  }
  valueEl.textContent = counterValue;
};

posBtn.addEventListener('click', () => handleBtnClick('increment'));
negBtn.addEventListener('click', () => handleBtnClick('decrement'));

// Done ;)
// Доречі дуже затупив коли воно почало декремент додавати, а інкремент навпаки, переплутав xD