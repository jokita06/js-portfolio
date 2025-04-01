document.getElementById("l2-ex11-input").addEventListener("submit", function(event) {
    event.preventDefault();

    const salario = Number(document.getElementById("salario").value);

    if (isNaN(salario) || salario <= 0) {
        document.getElementById("resultado_inss").innerHTML = "Por favor, insira um salário válido.";
        return;
    }

    let inss = 0;

    if (salario <= 1320.00) {
        inss = salario * 0.075; // 7,5% até R$1320,00
    } else if (salario <= 2571.29) {
        inss = (1320.00 * 0.075) + ((salario - 1320.00) * 0.09); // 9% na faixa acima de R$1320,00
    } else if (salario <= 3856.94) {
        inss = (1320.00 * 0.075) + ((2571.29 - 1320.00) * 0.09) + ((salario - 2571.29) * 0.12); // 12% na faixa acima de R$2571,29
    } else if (salario <= 7507.49) {
        inss = (1320.00 * 0.075) + ((2571.29 - 1320.00) * 0.09) + ((3856.94 - 2571.29) * 0.12) + ((salario - 3856.94) * 0.14); // 14% na faixa acima de R$3856,94
    } else {
        inss = (1320.00 * 0.075) + ((2571.29 - 1320.00) * 0.09) + ((3856.94 - 2571.29) * 0.12) + ((7507.49 - 3856.94) * 0.14);
    }

    const resultado = `O valor do INSS é de: R$${inss.toFixed(2)}`;
    document.getElementById("resultado_inss").innerHTML = resultado;
});
