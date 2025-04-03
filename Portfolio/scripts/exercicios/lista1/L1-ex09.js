document.getElementById("l1-ex9-input").addEventListener("submit", function(event) {
    event.preventDefault();
    converterMoeda();
});

function converterMoeda() {
    let valorReal = parseFloat(document.getElementById("real").value);
    let moedaEscolhida = document.getElementById("moeda").value;
    let resultado = document.getElementById("resultado");

    if (moedaEscolhida === "none" || isNaN(valorReal)) {
        resultado.innerText = "Por favor, escolha uma moeda.";
        return;
    }

    let valorConvertido;
    let taxaDolar = 0.18; 
    let taxaEuro = 0.15; 

    if (moedaEscolhida === "dolar") {
        valorConvertido = valorReal * taxaDolar;
        resultado.textContent = `Valor em Dólar: USD$ ${valorConvertido.toFixed(2)}`;
    } else if (moedaEscolhida === "euro") {
        valorConvertido = valorReal * taxaEuro;
        resultado.textContent = `Valor em Euro: EUR€ ${valorConvertido.toFixed(2)}`;
    }
}