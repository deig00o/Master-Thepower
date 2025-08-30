const divVacio = document.createElement('div');
document.body.appendChild(divVacio);

const divConParrafo = document.createElement('div');
const parrafoInterior = document.createElement('p');
divConParrafo.appendChild(parrafoInterior);
document.body.appendChild(divConParrafo);

const divConSeisParrafos = document.createElement('div');
for (let i = 0; i < 6; i++) {
  const pIterado = document.createElement('p');
  divConSeisParrafos.appendChild(pIterado);
}
document.body.appendChild(divConSeisParrafos);

const parrafoDinamico = document.createElement('p');
parrafoDinamico.textContent = 'Soy dinámico!';
document.body.appendChild(parrafoDinamico);

const h2ParaModificar = document.querySelector('.fn-insert-here');
if (h2ParaModificar) {
  h2ParaModificar.textContent = 'Wubba Lubba dub dub';
}

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const listaApps = document.createElement('ul');
apps.forEach(app => {
  const listItem = document.createElement('li');
  listItem.textContent = app;
  listaApps.appendChild(listItem);
});
document.body.appendChild(listaApps);

const nodosAEliminar = document.querySelectorAll('.fn-remove-me');
nodosAEliminar.forEach(nodo => {
  nodo.remove();
});

const divsExistentes = document.querySelectorAll('div');
const parrafoEnMedio = document.createElement('p');
parrafoEnMedio.textContent = 'Voy en medio!';
if (divsExistentes.length >= 2) {
  document.body.insertBefore(parrafoEnMedio, divsExistentes[1]);
}

const divsConClaseInsert = document.querySelectorAll('.fn-insert-here');
divsConClaseInsert.forEach(div => {
  const pDentroDiv = document.createElement('p');
  pDentroDiv.textContent = 'Voy dentro!';
  div.appendChild(pDentroDiv);
});