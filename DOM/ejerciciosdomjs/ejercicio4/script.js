const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
  ];
  
  const elBoton = document.getElementById('btnToClick');
  const manejarClic = (eventoDeClic) => {
    console.log('Se hizo clic:', eventoDeClic);
  };
  elBoton.addEventListener('click', manejarClic);
  
  const elInputFocus = document.getElementsByClassName('focus')[0];
  const cuandoSeEnfoca = (e) => {
    console.log('Valor del input en focus:', e.target.value);
  };
  elInputFocus.addEventListener('focus', cuandoSeEnfoca);
  
  const elInputValor = document.getElementsByClassName('value')[0];
  const cuandoSeEscribe = (e) => {
    console.log('Valor actual del input:', e.target.value);
  };
  elInputValor.addEventListener('input', cuandoSeEscribe);
  
  const contenedorDeAlbums = document.createElement('ul');
  for (let i = 0; i < albums.length; i++) {
    const unAlbum = document.createElement('li');
    unAlbum.textContent = albums[i];
    contenedorDeAlbums.appendChild(unAlbum);
  }
  document.body.appendChild(contenedorDeAlbums);