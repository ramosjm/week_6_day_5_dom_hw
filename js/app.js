const start =() =>{
  const addButton = document.querySelector('#add-to-list');
  addButton.addEventListener('click',clickButton);
}

const clickButton = () =>{
  const addButton = document.querySelector('#add-to-list');
  addButton.classList.add('hidden');
  addForm();
}

const addForm = () =>{
  const flowerForm = newFlowerForm();
  const listContainer = document.querySelector('#flower-container');
  listContainer.appendChild(flowerForm);
  flowerForm.addEventListener('submit',formEventSubmit);
}

const newFlowerForm = ()=>{
  const name = document.createElement('input');
  const colour = document.createElement('input');
  const price = document.createElement('input');
  name.type = 'text';
  name.id = 'name-input';
  name.label = 'Name';
  colour.type = 'text';
  colour.id = 'colour-input';
  colour.label = 'Colour'
  price.type = 'number';
  price.id = 'price-input';
  price.label = 'Price';

  const submitFormButton = document.createElement('button');
    submitFormButton.type = 'submit';
    submitFormButton.textContent = 'Add to List';

  const newFlowerForm = document.createElement('form');
  newFlowerForm.appendChild(name);
  newFlowerForm.appendChild(colour);
  newFlowerForm.appendChild(price);
  newFlowerForm.appendChild(submitFormButton);
  return newFlowerForm;
}

const formEventSubmit = (event) =>{
  event.preventDefault();
  console.log(event);
  const name = event.target['name-input'].value;
  const colour = event.target['colour-input'].value;
  const price = event.target['price-input'].value;

  const list = document.querySelector('#list-container');
  nameParagraph = document.createElement('p');
  colourParagraph = document.createElement('p');
  priceParagraph = document.createElement('p');
  nameParagraph.textContent = name;
  colourParagraph.textContent = colour;
  priceParagraph.textContent = price;
  list.appendChild(nameParagraph);
  list.appendChild(colourParagraph);
  list.appendChild(priceParagraph);
  event.target.reset()

}

document.addEventListener('DOMContentLoaded',start);
