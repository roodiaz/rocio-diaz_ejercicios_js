let input = document.getElementById("input");
let h2 = document.getElementById("h2");

input.addEventListener("input", function () {
  let inputValue = input.value;
  h2.textContent = "Longitud: " + inputValue.length;
});
