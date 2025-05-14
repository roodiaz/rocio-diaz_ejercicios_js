const btn = document.getElementById('btn-agregar');
const marca = document.getElementById('marca');
const modelo = document.getElementById('modelo');
const anio = document.getElementById('anio');
const color = document.getElementById('color');
const tabla = document.querySelector('#tabla-autos tbody');
const mensajeError = document.getElementById('mensaje-error');

btn.addEventListener('click', () => {
    
    const marcaVal = marca.value.trim();
    const modeloVal = modelo.value.trim();
    const anioVal = anio.value;
    const colorVal = color.value;

    // Validación
    if (marcaVal === '' || modeloVal === '' || anioVal === '' || colorVal === '' || parseInt(anioVal) < 1886) {
        mensajeError.style.color = 'red';
        mensajeError.style.display = 'block';
        return;
    }

    mensajeError.style.display = 'none';

    // Crear fila
    const fila = document.createElement('tr');
    
    const backgroundColor = colorVal.toLowerCase();
    fila.innerHTML = `
        <td>${marcaVal}</td>
        <td>${modeloVal}</td>
        <td>${anioVal}</td>
        <td class="celda-color">${colorVal}</td>
    `;

    // Agregar comportamiento dinámico a la celda de color
    const celdaColor = fila.querySelector('.celda-color');
    celdaColor.addEventListener('mouseover', () => {
        celdaColor.style.backgroundColor = backgroundColor;
        celdaColor.style.color = 'white';
    });
    celdaColor.addEventListener('mouseout', () => {
        celdaColor.style.backgroundColor = '';
        celdaColor.style.color = '';
    });

    tabla.appendChild(fila);

    // Limpiar campos
    marca.value = '';
    modelo.value = '';
    anio.value = '';
    color.value = '';
});
