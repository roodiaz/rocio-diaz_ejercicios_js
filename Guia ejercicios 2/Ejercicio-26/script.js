const btn = document.getElementById('btn');
const nombre = document.getElementById('nombre');
const edad = document.getElementById('edad');
const resumen = document.getElementById('resumen');

btn.addEventListener('click', () => {
    if(nombre.value === '' || edad.value === '') {
        alert('Por favor, completa todos los campos.');
    }
    else {
        resumen.textContent = `Nombre: ${nombre.value}, Edad: ${edad.value}`;
        nombre.value = '';
        edad.value = '';
    }
});