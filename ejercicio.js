let numero1 = document.querySelector('#numero1');

let numero2 = document.querySelector('#numero2');


function btnSumar() {
    let sumaton = parseInt(numero1.value) + parseInt(numero2.value);
    document.getElementById("resultado").value = sumaton;
}

function btnRestar () {
    let resta = parseInt(numero1.value) - parseInt(numero2.value);
    document.getElementById("resultado").value = resta;
}

function btnMultiplicar () {
    let multiplicar = parseInt(numero1.value) * parseInt(numero2.value);
    document.getElementById("resultado").value = multiplicar;
}

function btnDividir () {
    let dividir = parseInt(numero1.value) / parseInt(numero2.value);
    document.getElementById("resultado").value = dividir;
}

function btnEliminar () { 
    document.getElementById("numero1").value = " ";
    document.getElementById("numero2").value = " ";
    document.getElementById("resultado").value = " ";
}