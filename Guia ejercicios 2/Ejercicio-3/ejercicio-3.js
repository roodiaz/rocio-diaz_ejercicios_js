const quantityOfNumbers = 10;
const numbers = generateRandomArray(quantityOfNumbers);

console.log(numbers);

// hago que se retrase la impresion de los elementos multiplicando su indice por los milisegundos
// milisegundos * indice -> tiempo que va a tardar en imprimirse el elemento
//    1000      *   0    -> 0 milisegundos
//    1000      *   1    -> 1000 milisegundos
//    1000      *   2    -> 2000 milisegundos
//    1000      *   3    -> 3000 milisegundos
//    etc
numbers.forEach((num, index) => {
    setTimeout(() => {
        console.log(num);
    }, 1000 * index); 
});


function generateRandomArray(quantityOfNumbers){

    var randomNumbers = [];

    // genero array de n numeros random del 0 al 99
    for (let i = 0; i < quantityOfNumbers; i++) {
        randomNumbers.push(Math.floor(Math.random() * 100)); 
    }

    return randomNumbers;
}