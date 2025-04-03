document.getElementById("l2-ex1-input").addEventListener("submit", function(event) {
    event.preventDefault();
    // Funções de cálculo usando Arrow Functions
    const somar = (a, b) => a + b;
    const subtrair = (a, b) => a - b;
    const multiplicar = (a, b) => a * b;
    const dividir = (a, b) => b !== 0 ? (a / b).toFixed(2) : "Erro: Divisão por zero não permitida.";

    document.getElementById("somar").addEventListener("click", () => {
        const num1 = parseFloat(document.getElementById("numero1").value);
        const num2 = parseFloat(document.getElementById("numero2").value);
        document.getElementById("resultado").textContent = `Resultado: ${somar(num1, num2)}`;
    });

    document.getElementById("subtrair").addEventListener("click", () => {
        const num1 = parseFloat(document.getElementById("numero1").value);
        const num2 = parseFloat(document.getElementById("numero2").value);
        document.getElementById("resultado").textContent = `Resultado: ${subtrair(num1, num2)}`;
    });

    document.getElementById("multiplicar").addEventListener("click", () => {
        const num1 = parseFloat(document.getElementById("numero1").value);
        const num2 = parseFloat(document.getElementById("numero2").value);
        document.getElementById("resultado").textContent = `Resultado: ${multiplicar(num1, num2)}`;
    });

    document.getElementById("dividir").addEventListener("click", () => {
        const num1 = parseFloat(document.getElementById("numero1").value);
        const num2 = parseFloat(document.getElementById("numero2").value);
        document.getElementById("resultado").textContent = `Resultado: ${dividir(num1, num2)}`;
    });

});