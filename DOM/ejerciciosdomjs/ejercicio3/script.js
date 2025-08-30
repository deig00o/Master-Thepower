const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ulCountries = document.createElement('ul');
countries.forEach(country => {
  const li = document.createElement('li');
  li.textContent = country;
  ulCountries.appendChild(li);
});
document.body.appendChild(ulCountries);

const elementToRemove = document.querySelector('.fn-remove-me');
if (elementToRemove) {
  elementToRemove.remove();
}

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const targetDiv = document.querySelector('[data-function="printHere"]');
const ulCars = document.createElement('ul');
cars.forEach(car => {
  const li = document.createElement('li');
  li.textContent = car;
  ulCars.appendChild(li);
});
if (targetDiv) {
  targetDiv.appendChild(ulCars);
}

const complexCountries = [
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

complexCountries.forEach(item => {
  const div = document.createElement('div');
  const h4 = document.createElement('h4');
  const img = document.createElement('img');

  h4.textContent = item.title;
  img.src = item.imgUrl;

  div.appendChild(h4);
  div.appendChild(img);
  document.body.appendChild(div);
});