const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ul = document.querySelector('#ingredients')
const fragment = document.createDocumentFragment()
ingredients.forEach(el => {
  const li = document.createElement('li')
  li.className = 'item'
  li.textContent = el
  fragment.appendChild(li)
})
ul.appendChild(fragment)

// Done ;)



