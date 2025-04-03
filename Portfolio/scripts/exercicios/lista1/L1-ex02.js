document.getElementById("l1-ex2-input").addEventListener("submit", function(event) {
    event.preventDefault();

    let numero = Number(document.getElementById("numero").value);
    let resultElement = document.getElementById("resultado_par");

    if (numero === 0) {
        resultElement.textContent = 'O número digitado é 0.';
    } else if (numero % 2 === 0) {
        resultElement.textContent = 'O número é par!';
    } else {
        resultElement.textContent = 'O número é ímpar!';
    }
});