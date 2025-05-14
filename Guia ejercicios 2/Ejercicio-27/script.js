const cuadrado = document.getElementById('cuadrado');
const tiempo = document.getElementById('tiempo');
const contador = document.getElementById('contador');

let primerClick = true
let cantidadSegundos = 5;
let contadorClick = 0;
let fin=false
cuadrado.addEventListener('click', function () {
  
  if (!fin) {
    contadorClick++;
    contador.textContent = `Contador de clicks: ${contadorClick}`;
  }

  if (primerClick) {
    primerClick = false;

    const intervalo = setInterval(() => {
      if (cantidadSegundos > 0) {
        cantidadSegundos--;
        tiempo.textContent = `Tiempo restante: ${cantidadSegundos} segundos`;
      } else {
        clearInterval(intervalo);
        fin=true;
        tiempo.textContent = `Fin del juego`;
      }
    }, 1000);
  }
  
});