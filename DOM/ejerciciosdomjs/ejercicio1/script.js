const botonShowMe = document.querySelector('.showme');
console.log('Botón con clase .showme:', botonShowMe);

const h1Pillado = document.querySelector('#pillado');
console.log('h1 con id #pillado:', h1Pillado);

const todosLosP = document.querySelectorAll('p');
console.log('Todos los elementos p:', todosLosP);

const todosLosPokemon = document.querySelectorAll('.pokemon');
console.log('Todos los elementos con clase .pokemon:', todosLosPokemon);

const elementosTestMe = document.querySelectorAll('[data-function="testMe"]');
console.log('Todos los elementos con data-function="testMe":', elementosTestMe);

const tercerPersonajeTestMe = document.querySelectorAll('[data-function="testMe"]')[2];
console.log('El 3er personaje con data-function="testMe":', tercerPersonajeTestMe);