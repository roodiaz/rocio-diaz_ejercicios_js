const btn = document.getElementById('btn');
let esTemaClaro = true;

btn.addEventListener('click', function () {
  
  if (esTemaClaro) {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    btn.textContent = 'Cambiar a tema claro';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    btn.textContent = 'Cambiar a tema oscuro';
  }

  esTemaClaro = !esTemaClaro;
});