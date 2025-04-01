document.getElementById("l1-ex5-input").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let base = Number(document.getElementById("base").value);
    let altura = Number(document.getElementById("altura").value);
    let area_retangulo = base * altura;
    
    let resultado_area = document.getElementById("resultado_area");
    resultado_area.textContent = `A área do seu retângulo é: ${area_retangulo} cm²`;
})