let buscador = document.getElementById("buscador");

buscador.addEventListener("input", function () {
  let productos = document.querySelectorAll("li");
  let texto = buscador.value.toLowerCase();

  productos.forEach(function (producto) {
    let nombre = producto.textContent.toLowerCase();
    if (nombre.includes(texto)) {
      producto.style.display = "";
    } else {
      producto.style.display = "none";
    }
  });
});

