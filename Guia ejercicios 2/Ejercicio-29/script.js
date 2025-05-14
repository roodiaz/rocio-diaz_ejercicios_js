const contenedor = document.getElementById("contenedor");
const color = document.getElementById("color");

color.addEventListener("input", function () {
  let colorValue = color.value;
  contenedor.style.backgroundColor = colorValue;
});
