const btn = document.getElementById('btn');
const titulo = document.getElementById('titulo');
const genero = document.getElementById('genero');
const anio = document.getElementById('anio');
const clasificacion = document.getElementById('clasificacion');
const tabla = document.getElementById('tabla');

btn.addEventListener('click', function (event) {
    // Prevenir el envío del formulario
    event.preventDefault();

    // Verificar si el formulario está completo
    if (titulo.value === '' || genero.value === '' || clasificacion.value === '' || anio.value === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Verificar si el año es válido
    const anioNum = parseInt(anio.value);
    if (isNaN(anioNum) || anioNum < 1900 || anioNum > new Date().getFullYear()) {
        alert('Por favor, ingresa un año válido.');
        return;
    }

    // Crear una nueva fila en la tabla
    const fila = document.createElement('tr');
    const clasif = clasificacion.value; // Guardamos la clasificación
    fila.innerHTML = `
        <td>${titulo.value}</td>
        <td>${genero.value}</td>
        <td>${anio.value}</td>
        <td>${clasificacion.value}</td>
    `;
    tabla.querySelector('tbody').appendChild(fila);    

    // Agregar eventos para cambiar el color de fondo al pasar el mouse
    fila.addEventListener('mouseover', function () {
        switch (clasif) {
            case 'ATP':
                fila.style.backgroundColor = 'green';
                break;
            case '+13':
                fila.style.backgroundColor = 'yellow';
                break;
            case '+16':
                fila.style.backgroundColor = 'orange';
                break;
            case '+18':
                fila.style.backgroundColor = 'red';
                break;
            default:
                fila.style.backgroundColor = '';
        }
    });

    fila.addEventListener('mouseout', function () {
        fila.style.backgroundColor = ''; // Volver al color original
    });

    // Limpiar los campos del formulario
    titulo.value = '';
    genero.value = '';
    clasificacion.value = '';
    anio.value = '';
});
