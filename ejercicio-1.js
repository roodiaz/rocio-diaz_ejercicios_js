const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterEvenNumbers(numbers));

function filterEvenNumbers(array) {
    return array.filter(num => num % 2 === 0);
  }  
  
