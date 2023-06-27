// 1
const categoriesItems = document.querySelectorAll('li.item')

console.log(categoriesItems);

const categoriesArrLength = categoriesItems.length
console.log(`Number of categories: ${categoriesArrLength}`);
// 2

categoriesItems.forEach(el => {
    const categoryName = el.querySelector('h2').textContent
    const categoryItems = el.querySelectorAll('li').length
    console.log(`Category: ${categoryName}`);
console.log(`Elements: ${categoryItems}`);
})
// Done ;)



