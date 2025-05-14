const btn = document.getElementById('btn');
const circulos = document.querySelectorAll('div');

const colores = ['red', 'yellow', 'green'];

btn.addEventListener('click', () => {
    
  // apago todos
  circulos.forEach(c => c.style.backgroundColor = 'gray');

  // prendo uno al azar
  const randomIndex = Math.floor(Math.random() * circulos.length);
  circulos[randomIndex].style.backgroundColor = colores[randomIndex];
});