const btn = document.getElementById('btn');
const producto = document.getElementById('producto');
const categoria = document.getElementById('categoria');
const precio = document.getElementById('precio');
const stock = document.getElementById('stock');
const tabla = document.getElementById('tabla');

btn.addEventListener('click', function (event) {

    // Verificar si el formulario está completo
    if (producto.value === '' || categoria.value === '' || stock.value === '' || precio.value === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    if(precio.value < 0 || stock.value < 0){
        alert('El precio y el stock deben ser mayores a 0');
        return;
    }
    
    // Crear una nueva fila en la tabla
    const fila = document.createElement('tr');
    fila.innerHTML = `
        <td>${producto.value}</td>
        <td>${categoria.value}</td>
        <td>${precio.value}</td>
        <td>${stock.value}</td>
    `;
    tabla.querySelector('tbody').appendChild(fila);    

    // Limpiar los campos del formulario
    producto.value = '';
    categoria.value = '';
    stock.value = '';
    precio.value = '';
});
