const categories = document.querySelector('#categories').querySelectorAll('li.item');

const numberOfCategories = categories.length;

console.log(`Number of categories: ${numberOfCategories}`);

categories.forEach(category => {
  const title = category.querySelector('h2').textContent;
  const elementsCount = category.querySelectorAll('li').length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});