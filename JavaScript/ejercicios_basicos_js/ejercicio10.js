function average(numberList) {
  let sum = 0;
  for (const number of numberList) {
    sum += number;
  }
  return sum / numberList.length;
}

const numbers = [12, 21, 38, 5, 45, 37, 6];
console.log(average(numbers));