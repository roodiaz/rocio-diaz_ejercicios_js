const btnStart = document.getElementById("btnStart");
const btnStop = document.getElementById("btnStop");
const btnRestart = document.getElementById("btnRestart");

let paragraph = document.getElementById("paragraph");

let isCounting = false;
let i = 0;

btnStart.addEventListener("click", function () {
  if (!isCounting) { 
    isCounting = true;
    startCounting();
  }
});

btnStop.addEventListener("click", function () {
  // detengo el contador
  isCounting = false; 
});

btnRestart.addEventListener("click", function () {
  isCounting = false; 
  i = 0; 
  paragraph.textContent = i; 
});

function startCounting() {
  if (isCounting) { 
    paragraph.textContent = i;
    i++; 
    setTimeout(startCounting, 1000); 
  }
}