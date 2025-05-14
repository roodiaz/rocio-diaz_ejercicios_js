const array = [];
let count = 1;

const btn = document.getElementById('btn');
const list = document.getElementById('list'); // me traigo el elemento de lista

// agreggo evento para boton
btn.addEventListener('click', () => {
    array.push(count); // agrego el nro actual al array
    count++; // incremento el contador para ya saber que nro sigue al siguiente click

    // creo un nuevo item li para mostrar el nro generado
    const li = document.createElement('li');
    li.textContent = `Number: ${array[array.length - 1]}`;
    
    // agrego el nuevo elemento con el nro a la lsita
    list.appendChild(li);
});
