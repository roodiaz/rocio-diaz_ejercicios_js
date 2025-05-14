// cambiar parrafos mediante id
function changeTextById() {
    const p1 = document.getElementById('p1');
    const p2 = document.getElementById('p2');
    const p3 = document.getElementById('p3');

    p1.textContent = "New text for the first paragraph using id";
    p2.textContent = "New text for the second paragraph using id";
    p3.textContent = "New text for the third paragraph using id";
}

// cambiar parrafos mediante la etiqueta
// mas dinamico para seguir agregando etiquetas p y no tener que poner id en cada una
function changeTextUsingQuerySelector() {
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach((p, index) => {
        p.textContent = `New text for paragraph ${index + 1} using query selector`;
    });
}
