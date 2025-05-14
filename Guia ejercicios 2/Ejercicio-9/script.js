let btn = document.getElementById('btn');
let paragraph = document.getElementById('paragraph');
let btnState=true;

btn.addEventListener('click', () => {
    if(btnState){
        //si estaba en true, lo cambio a false y oculto el parrafo
        btnState = false;
        btn.textContent = 'Mostrar';
        paragraph.style.display = 'none';

    }else{
        btn.textContent = 'Ocultar';
        btnState = true;
        paragraph.style.display = 'block'; 
    }
});