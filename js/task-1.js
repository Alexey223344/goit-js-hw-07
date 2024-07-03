const category = document.querySelector('#categories');
console.log(`Number of categories: ${category.children.length}`);

const categoryItem = document.querySelectorAll('.item');
categoryItem.forEach(element => {
  console.log(`Catagory: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.querySelector('ul').children.length}`);
});
