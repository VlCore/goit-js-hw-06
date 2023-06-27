function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorChangeBtn = document.querySelector('.change-color')
const colorChangeText = document.querySelector('.color')
const body = document.body

colorChangeBtn.addEventListener('click', () => {
  const randomColor = getRandomHexColor()
  body.style.backgroundColor = randomColor
  colorChangeText.textContent = randomColor
})

// Done ;)
