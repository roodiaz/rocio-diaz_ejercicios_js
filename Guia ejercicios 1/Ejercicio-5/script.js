let counter = 0;

const divCounter = document.getElementById('counter');
const btnIncrement = document.getElementById('increment');
const btnDecrement = document.getElementById('decrement');

btnIncrement.addEventListener('click', () => {
    counter++;
    divCounter.textContent = counter;
});

btnDecrement.addEventListener('click', () => {
    counter--;
    divCounter.textContent = counter;
});
