const btn = document.getElementById('btn');
let mensaje = document.getElementById('mensaje');

btn.addEventListener('click', function () {
  mensaje.textContent = "¡Hola, Mundo!";
});
