const btn = document.getElementById("btn");
const tabla = document.getElementById("tabla");
const nombre = document.getElementById("nombre");
const edad = document.getElementById("edad");
const pais = document.getElementById("pais");

btn.addEventListener("click", function () {
  const nuevaFila = document.createElement("tr");
  const celdaNombre = document.createElement("td");
  const celdaEdad = document.createElement("td");
  const celdaPais = document.createElement("td");

  celdaNombre.textContent = nombre.value;
  celdaEdad.textContent = edad.value;
  celdaPais.textContent = pais.value;

  nuevaFila.appendChild(celdaNombre);
  nuevaFila.appendChild(celdaEdad);
  nuevaFila.appendChild(celdaPais);

  tabla.appendChild(nuevaFila);

  // logica para eliminar la fila
  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar";
  nuevaFila.appendChild(btnEliminar);
  btnEliminar.addEventListener("click", function () {
    tabla.removeChild(nuevaFila);
  });

  // Limpiar los campos de entrada
  nombre.value = "";
  edad.value = "";
  pais.value = "";
});

