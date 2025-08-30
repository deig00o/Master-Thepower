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
  
  console.log(findArrayIndex(mainCharacters, "Leia"));
  console.log(findArrayIndex(mainCharacters, "Chewbacca"));
  console.log(findArrayIndex(mainCharacters, "Yoda"));
  
  function removeItem(array, text) {
    const index = findArrayIndex(array, text);
    if (index !== -1) {
      array.splice(index, 1);
    }
    return array;
  }
  
  const characters1 = ["Luke", "Leia", "Han Solo"];
  console.log(removeItem(characters1, "Leia"));
  
  const characters2 = ["Chewbacca", "Rey", "Anakin"];
  console.log(removeItem(characters2, "Darth Vader"));
  
  const characters3 = ["Obi-Wan"];
  console.log(removeItem(characters3, "Obi-Wan"));
  
  const characters4 = ["Luke", "Leia", "Han Solo", "Chewbacca", "Rey", "Anakin", "Obi-Wan"];
  console.log(removeItem(characters4, "Han Solo"));