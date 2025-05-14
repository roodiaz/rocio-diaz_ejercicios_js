const quantityOfNumbers = 10;
const numbers = generateRandomArray(quantityOfNumbers);

console.log(numbers);
console.log(calculateAverage(numbers));


function generateRandomArray(quantityOfNumbers){

    var randomNumbers = [];

    // genero array de n numeros random del 0 al 99
    for (let i = 0; i < quantityOfNumbers; i++) {
        randomNumbers.push(Math.floor(Math.random() * 100)); 
    }

    return randomNumbers;
}

function calculateAverage(array) {
    let total = 0;
    let quantity = array.length;

    for (let i = 0; i < quantity; i++) {
        total += array[i];
    }

    return total / quantity;
  }  