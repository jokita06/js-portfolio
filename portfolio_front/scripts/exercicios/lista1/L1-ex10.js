document.getElementById("l1-ex10-input").addEventListener("submit", function(event) {
    event.preventDefault();

    let numero_tabuada = Number(document.getElementById("numero_tabuada").value);
    let tabuada = document.getElementById("tabuada");
    tabuada.value = ""; 

    for (let indice = 0; indice <= 10; indice++) {
        let resultado = numero_tabuada * indice;
        tabuada.value += `${numero_tabuada} X ${indice} = ${resultado}\n`;
    }
});