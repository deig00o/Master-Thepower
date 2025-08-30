const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];

function averageWord(list) {
  let totalSum = 0;
  let count = 0;

  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    if (typeof element === 'number') {
      totalSum += element;
    } else if (typeof element === 'string') {
      totalSum += element.length;
    }
    count++;
  }

  if (count === 0) {
    return 0;
  }
  return totalSum / count;
}

console.log(averageWord(mixedElements));