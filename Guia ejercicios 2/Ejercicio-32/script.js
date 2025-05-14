const btn = document.getElementById("btn");
const lista = document.getElementById("lista");

let ultimoElemento = 0;


btn.addEventListener("click", function () {
  const nuevoElemento = document.createElement("li");
  nuevoElemento.textContent = `Elemento ${ultimoElemento + 1}`;
  lista.appendChild(nuevoElemento);
  ultimoElemento++;
});


