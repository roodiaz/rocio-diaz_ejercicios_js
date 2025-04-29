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
    li.textContent = `Number: ${array[array.length - 1]} `;

    // creo el boton para eliminar
    const btnDelete = document.createElement('button');
    btnDelete.textContent = 'Delete';

    // agrego el boton de delimnar al item li
    li.appendChild(btnDelete);
    
    // agrego el nuevo elemento con el nro a la lsita
    list.appendChild(li);

    // agrego el evento de "Eliminar" al botón
    btnDelete.addEventListener('click', () => {
        li.remove();  // elimino el ítem de la lista
    });
});
