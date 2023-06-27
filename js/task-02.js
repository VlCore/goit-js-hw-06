const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ul = document.querySelector('#ingredients')
ingredients.forEach(el => {
  const li = document.createElement('li')
  li.className = 'item'
  li.textContent = el
  ul.appendChild(li)
})

// Done ;)



