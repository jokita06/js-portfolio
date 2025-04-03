document.getElementById("l2-ex2-input").addEventListener("submit", function(event) {
    event.preventDefault();

    const texto = document.getElementById("frase").value;

    const textoInvertido = texto.split("").reverse().join("");

    document.getElementById("resultado_texto").textContent = `Texto invertido: ${textoInvertido}`;
});