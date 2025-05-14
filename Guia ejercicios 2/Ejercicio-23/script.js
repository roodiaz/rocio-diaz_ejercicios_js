const btn = document.getElementById('btn');
const numero = document.getElementById('numero');
const contador = document.getElementById('contador');

btn.addEventListener('click', function () {
  let segundos = parseInt(numero.value);

  if (isNaN(segundos) || segundos < 0) {
    contador.textContent = "Ingresa un numero valido.";
    return;
  }

  contador.textContent = segundos;

  const intervalo = setInterval(() => {
    segundos--;
    contador.textContent = segundos;

    if (segundos <= 0) {
      clearInterval(intervalo);
    }
  }, 1000);
});
