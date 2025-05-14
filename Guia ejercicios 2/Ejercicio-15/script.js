const btn = document.getElementById("btn");
let image = document.getElementById("image");

// rutas de las imágenes
const imagenes = [
  "../../img/imagen 1.jpg",
  "../../img/imagen 2.jpg",
  "../../img/imagen 3.jpg"
];

btn.addEventListener("click", function () {
  // genero indice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * imagenes.length);

  image.src = imagenes[indiceAleatorio];
});

