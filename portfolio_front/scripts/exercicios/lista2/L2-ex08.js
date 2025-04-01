const formulario_l28 = document.getElementById("l2-ex8-input");

formulario_l28.onsubmit = function(event) {
    event.preventDefault();


    let numero = Number(document.getElementById("numero").value);

    if (numero === '' || isNaN(numero) || numero < 0) {
        let resultado_raiz = document.getElementById("resultado_raiz");
        resultado_raiz.textContent = `Por favor, insira um número válido e não negativo.`;
        return;
    }

    numero = parseFloat(numero);

    let raizQuadrada = Math.sqrt(numero);

    let resultado_raiz = document.getElementById("resultado_raiz");
    resultado_raiz.textContent = `A raiz quadrada de ${numero} é: ${raizQuadrada.toFixed(2)}.`;
};