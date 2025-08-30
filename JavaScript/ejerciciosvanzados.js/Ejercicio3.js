// Ejercicio 1: Conteo de sonidos favoritos
const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Santiago",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Laura",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

const conteoSonidos = {};

for (const user of users) {
  for (const soundName in user.favoritesSounds) {
    if (conteoSonidos[soundName]) {
      conteoSonidos[soundName]++;
    } else {
      conteoSonidos[soundName] = 1;
    }
  }
}

console.log(conteoSonidos);

// Ejercicio 2: findArrayIndex y removeItem

function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }
  return -1;
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

console.log(findArrayIndex(mainCharacters, "Luke"));
console.log(findArrayIndex(mainCharacters, "Chewbacca"));
console.log(findArrayIndex(mainCharacters, "Yoda"));

function removeItem(array, text) {
  const index = findArrayIndex(array, text);
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
}

const characters1 = ["Luke", "Leia", "Han Solo", "Chewbacca"];
console.log(removeItem(characters1, "Han Solo"));

const characters2 = ["Rey", "Anakin", "Obi-Wan"];
console.log(removeItem(characters2, "Rey"));
console.log(removeItem(characters2, "Darth Vader"));

const characters3 = ["Spock", "Kirk", "Picard"];
console.log(removeItem(characters3, "Spock"));