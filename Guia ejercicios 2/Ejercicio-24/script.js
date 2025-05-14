const btn = document.getElementById('btn');
let fechaActual = document.getElementById('fechaActual');

fechaActual.textContent = new Date().toLocaleString();

btn.addEventListener('click', function () {
  fechaActual.textContent = new Date().toLocaleString();
});
