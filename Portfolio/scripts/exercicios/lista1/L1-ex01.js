document.getElementById("l1-ex1-input").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let numero1 = Number(document.getElementById("numero1").value)
    let numero2 = Number(document.getElementById("numero2").value)
    let subtracao = numero1 - numero2
    
    let resultElement = document.getElementById("resultado_sub")
    resultElement.textContent = `A subtração é igual à: ${subtracao}`
})