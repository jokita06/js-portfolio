// Captura o formulário
const formulario_7 = document.getElementById("l1-ex7-input");

// Adiciona um evento de envio ao formulário
formulario_7.onsubmit = function(event) {
    event.preventDefault(); // Evita o envio do formulário, o que recarregaria a página

    // Obtém o valor do peso e da altura
    let peso_imc = parseFloat(document.getElementById("peso_imc").value.trim());
    let altura_imc = parseFloat(document.getElementById("altura_imc").value.trim()) / 100;

    // Verifica se os valores são válidos
    if (isNaN(peso_imc) || isNaN(altura_imc) || peso_imc <= 0 || altura_imc <= 0) {
        let resultado_imc = document.getElementById("resultado_imc");
        resultado_imc.textContent = `Por favor, insira valores válidos para peso e altura.`;
        return;
    }

    // Calcula o IMC (Índice de Massa Corporal)
    let imc = peso_imc / (altura_imc * altura_imc);

    imc = imc.toFixed(2);

    // Exibe o resultado do IMC
    let resultado_imc = document.getElementById("resultado_imc");
    resultado_imc.textContent = `Seu IMC é: ${imc} kg/m².`;
};
