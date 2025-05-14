let onOff = false;
let ingresoPermitido=true;

let displayById = document.getElementById('display');
let onOffById=document.getElementById('onOff')

function encenderApagar() {
    let buttons = document.getElementsByClassName('btn');

    if (onOff == false) {
        displayById.style.backgroundColor = "yellowgreen";
        onOffById.value = 'Off'
        onOffById.style.cssText = "background-color:orange;"

        setTimeout(() => {
            displayById.value = '0'
        }, 500);

        onOff = true;
        ingresoPermitido = true;

        for(let i=0;i<buttons.length; i++) {
            buttons[i].disabled = false
        }
        
    }else {
        for (let i=0; i<buttons.length; i++) {
            buttons[i].disabled=true
        }
        displayById.value=''
        displayById.style.backgroundColor = "gray"
        onOffById.value = 'On'
        onOffById.style.cssText = "background-color: green; color:white"
        onOff = false
        ingresoPermitido =false
    }

}

function ingresarDato(valor){
    if(ingresoPermitido ==false) {
        displayById.value=''
    }else {
        if(displayById.value == '0') {
            displayById.value = ''
        }
        displayById.value += valor
    }
}

function ingresarOperador(valor){
    if(ingresoPermitido == false){
        displayById.value = ''
    }else {
        displayById.value += valor
    }
}

function calcular() {
    if(ingresoPermitido==false) {
        displayById.value = ''
    }else {
        
        let valorDisplay = displayById.value
        try {
            let resultado = math.evaluate(valorDisplay)
            displayById.value = resultado
            
        } catch (error) {
            displayById.value = "Error"
        }
    }
}

function borrar() {
    if(ingresoPermitido == false) {
        displayById.value = ''
    } else {
        displayById.value = '0'
    }
}