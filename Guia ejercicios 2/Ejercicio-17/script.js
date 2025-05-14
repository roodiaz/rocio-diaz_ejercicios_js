
function resaltarItem(selectedItem) {
  // me traigo todos los elementos li
  const items = document.querySelectorAll('li');

  // elimino el fondo de todos los elementos li
  items.forEach(item => {
    item.style.backgroundColor = ''; // Elimina el fondo de todos
  });

  // resalto el elemento seleccionado
  selectedItem.style.backgroundColor = 'yellow';
}