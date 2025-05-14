
/*
Conversor de temperaturas
Crear un input para ingresar grados Celsius y muestra automáticamente la
conversión a Fahrenheit.
*/ 

const btn = document.getElementById('btn');
const inputCelsius = document.getElementById('celsius');
let fahrenheitValue = document.getElementById('fahrenheit');

btn.addEventListener('click', () => {

  let resultFahrenheit = (inputCelsius.value * 9 / 5) + 32;
  fahrenheitValue.textContent = `Temperatura Fahrenheit: ${resultFahrenheit.toFixed(1)}`;
});