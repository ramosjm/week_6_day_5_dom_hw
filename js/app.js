document.addEventListener('DOMContentLoaded',() =>{

  const listContainer = document.querySelector('#flower-form');
  listContainer.addEventListener('submit',formEventSubmit);
  const deleteAllbutton = document.querySelector('#delete-all');
  deleteAllbutton.addEventListener('click',deleteAllOnClick)
})

const formEventSubmit = function (event) {
  event.preventDefault();
  const newItem = createNewItem(event);
  const list = document.querySelector('#list-container');
  list.classList.toggle('hidden');
  list.appendChild(newItem);
  event.target.reset();
  deleteButton = document.querySelector('#delete-all');
  deleteButton.classList.toggle('hidden');

}

const createNewItem = function(form) {
  const name = form.target['name-input'].value;
  const colour = form.target['colour-input'].value;
  const price = form.target['price-input'].value;
  const list = document.createElement('li');
  nameParagraph = document.createElement('p');
  colourParagraph = document.createElement('p');
  priceParagraph = document.createElement('p');
  nameParagraph.textContent = name;
  colourParagraph.textContent = colour;
  priceParagraph.textContent = price;
  list.appendChild(nameParagraph);
  list.appendChild(colourParagraph);
  list.appendChild(priceParagraph);
  return list;
}
const deleteAllOnClick = function (event) {
  const flowerList = document.querySelector('#list-container');
  flowerList.innerHTML = '';
}
