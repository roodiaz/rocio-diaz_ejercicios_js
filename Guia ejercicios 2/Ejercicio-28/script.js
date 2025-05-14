const btn = document.getElementById('btn');
const cantidad = document.getElementById('cantidad');
const precio = document.getElementById('precio');
const total = document.getElementById('total');

btn.addEventListener('click', () => {
    let totalValue = parseInt(cantidad.value) * parseFloat(precio.value);
    total.textContent = "Total: $" + totalValue.toFixed(2);
});