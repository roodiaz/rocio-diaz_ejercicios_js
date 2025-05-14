const cuadrado = document.getElementById('cuadrado');

let posX = 0;
let posY = 0;
const movimiento = 50; // defino cuantos px se moverá el cuadrado
const limite = 250; // 300 (contenedor) - 50 (cuadrado)

document.getElementById('btnUp').addEventListener('click', () => {
  // Solo mover hacia arriba si no está en el borde superior
  const puedeSubir = posY - movimiento >= 0;
  if (puedeSubir) {
    posY -= movimiento;
    cuadrado.style.top = posY + 'px';
  }
});

document.getElementById('btnDown').addEventListener('click', () => {
  // Solo mover hacia abajo si no se pasa del límite inferior
  const puedeBajar = posY + movimiento <= limite;
  if (puedeBajar) {
    posY += movimiento;
    cuadrado.style.top = posY + 'px';
  }
});

document.getElementById('btnLeft').addEventListener('click', () => {
  // Solo mover a la izquierda si no está en el borde izquierdo
  const puedeIzquierda = posX - movimiento >= 0;
  if (puedeIzquierda) {
    posX -= movimiento;
    cuadrado.style.left = posX + 'px';
  }
});

document.getElementById('btnRight').addEventListener('click', () => {
  // Solo mover a la derecha si no se pasa del límite derecho
  const puedeDerecha = posX + movimiento <= limite;
  if (puedeDerecha) {
    posX += movimiento;
    cuadrado.style.left = posX + 'px';
  }
});
