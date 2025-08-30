function findMutantByPower(mutants, power) {
  const foundMutants = [];
  for (let i = 0; i < mutants.length; i++) {
    if (mutants[i].power === power) {
      foundMutants.push(mutants[i].name);
    }
  }

  if (foundMutants.length > 0) {
    if (foundMutants.length === 1) {
      return `Se encontró un mutante con el poder de ${power}: ${foundMutants[0]}.`;
    } else {
      return `Se encontraron ${foundMutants.length} mutantes con el poder de ${power}: ${foundMutants.join(', ')}.`;
    }
  } else {
    return `No se encontró ningún mutante con el poder de ${power}.`;
  }
}

const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' },
  { name: 'Pyro', power: 'pyrokinesis' },
  { name: 'Iceman', power: 'cryokinesis' },
  { name: 'Phoenix', power: 'telekinesis' } // Añadido para probar múltiples
];

console.log(findMutantByPower(mutants, 'regeneration'));
console.log(findMutantByPower(mutants, 'telepathy'));
console.log(findMutantByPower(mutants, 'healing factor'));
console.log(findMutantByPower(mutants, 'telekinesis'));
console.log(findMutantByPower(mutants, 'magnetism'));