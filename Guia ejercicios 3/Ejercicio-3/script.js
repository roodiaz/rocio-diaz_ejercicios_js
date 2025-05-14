const btn = document.getElementById('btn');
const nombre = document.getElementById('nombre');
const cargo = document.getElementById('cargo');
const edad = document.getElementById('edad');
const departamento = document.getElementById('departamento');
const mensajeError = document.getElementById('mensaje-error');

btn.addEventListener('click', function (event) {

    // Validar campos
    if (nombre.value === '' || cargo.value === '' || edad.value === '' || departamento.value === '') {
        mensajeError.textContent = 'Por favor, completa todos los campos.';
        mensajeError.style.display = 'block'; //muestra el elemento
        return;
    }

    if (edad.value < 18) {
        mensajeError.textContent = 'La edad debe ser mayor o igual a 18.';
        mensajeError.style.display = 'block';
        return;
    }

    // Ocultar mensaje si todo está bien
    mensajeError.style.display = 'none';
    
    const empleado = new Empleado(nombre.value, cargo.value, edad.value, departamento.value);
    console.log(empleado);

    // Limpiar los campos del formulario
    nombre.value = '';
    cargo.value = '';
    edad.value = '';
    departamento.value = '';
});


class Empleado {
    constructor(nombre, cargo, edad, departamento) {
        this.nombre = nombre;
        this.cargo = cargo;
        this.edad = edad;
        this.departamento = departamento;
    }
}

