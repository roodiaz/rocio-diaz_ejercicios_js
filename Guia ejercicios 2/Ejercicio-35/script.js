const input = document.getElementById("input");
const btn = document.getElementById("btn");

const intentos = 10;
let contador = 0;
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

btn.addEventListener("click", function () {
  let inputValue = parseInt(input.value);

  if (inputValue === numeroAleatorio) 
    {
        alert("correcto");
        location.reload();
    } 
    else 
    {
        contador++;
        if (contador >= intentos) 
        {
            alert("Perdiste. El número era " + numeroAleatorio);
            location.reload();
        } 
        else 
        {
            if(inputValue < numeroAleatorio)
            {
                alert("El numero es mayor");
            }
            else
            {
                alert("El numero es menor");
            }

            alert("Intento " + contador + " de " + intentos);
        }
    }
});