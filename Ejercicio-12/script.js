const btn = document.getElementById('btn');
const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');

btn.addEventListener('click', () => {
    if(nombre.value === '' || correo.value === '') {
        alert('Por favor, completa todos los campos.');
    }
    else {
        alert('Formulario enviado correctamente.');
    }
});