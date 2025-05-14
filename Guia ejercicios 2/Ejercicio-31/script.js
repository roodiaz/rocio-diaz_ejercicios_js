const selector = document.getElementById("selector");
const lista = document.getElementById("lista");

const paises = [
  "Argentina",
  "Bolivia",
  "Brasil",
  "Chile",
  "Colombia",
  "Ecuador",
  "Paraguay",
  "Perú",
  "Uruguay",
  "Venezuela"
];

const provincias = [
  "Buenos Aires",
  "Catamarca",
  "Chaco",
  "Chubut",
  "Córdoba",
  "Corrientes",
  "Entre Ríos",
  "Formosa",
  "Jujuy",
  "La Pampa",
  "La Rioja",
  "Mendoza",
  "Misiones",
  "Neuquén"
];

const ciudades = [
  "Buenos Aires",
  "CABA",
  "La Plata",
  "Mar del Plata",
  "Rosario",
  "Mendoza",
  "Córdoba",
  "Salta",
  "Tucumán",
  "Neuquén"
];

selector.addEventListener("change", function () {

  // Limpiar la lista antes de agregar nuevos elementos
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }

  let selectedValue = selector.value;
  let listado = [];

  if (selectedValue === "paises") {
    listado = paises;
  } else if (selectedValue === "provincias") {
    listado = provincias;
  } else if (selectedValue === "ciudades") {
    listado = ciudades;
  }

  // Crear un nuevo elemento li para cada elemento en el listado
  listado.forEach(element => {
    const li = document.createElement("li");
    li.textContent = element;
    lista.appendChild(li);
  });

});
