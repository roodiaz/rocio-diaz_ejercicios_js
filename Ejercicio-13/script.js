const btn = document.getElementById('btn');
const tarea = document.getElementById('tarea');
const list = document.getElementById('list');

btn.addEventListener('click', () => {
    // creo un nuevo item li con la tarea ingresada
    const li = document.createElement('li');
    li.textContent = tarea.value + ' ';

    // creo el boton para tachar
    const btnRealizado = document.createElement('button');
    btnRealizado.textContent = 'Realizada';

    // agrego el boton de tachar al item li
    li.appendChild(btnRealizado);

    // agrego el nuevo elemento con la tarea a la lista
    list.appendChild(li);

    // agrego el evento de "Eliminar" al botón
    btnRealizado.addEventListener('click', () => {
        li.style.textDecoration = 'line-through'; // tacho el texto
    });
});