const formulario_12 = document.getElementById("l1-ex12-input");

formulario_12.onsubmit = function(event) {
    event.preventDefault();

    const numero_fatorial = Number(document.getElementById("numero_fatorial").value);

    if (isNaN(numero_fatorial) || numero_fatorial < 0) {
        let resultado_fatorial = document.getElementById("resultado_fatorial");
        resultado_fatorial.textContent = `Por favor, insira um número válido e não negativo.`;
        return;
    }

    function calcularFatorial(numero_fatorial) {
        if (numero_fatorial === 0 || numero_fatorial === 1) {
            return 1;
        }
        let resultado = 1;
        for (let i = 2; i <= numero_fatorial; i++) {
            resultado *= i;
        }
        return resultado;
    }

    let fatorial = calcularFatorial(numero_fatorial);

    let resultado_fatorial = document.getElementById("resultado_fatorial");
    resultado_fatorial.textContent = `O fatorial de ${numero_fatorial} é: ${fatorial}.`;
};
