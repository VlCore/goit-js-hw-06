const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.getElementById("ingredients");

const liElements = ingredients.map((el) => {
  const li = document.createElement("li");
  li.textContent = el;
  li.classList.add("item");
  return li;
});

ul.append(...liElements);
// Done ;)



