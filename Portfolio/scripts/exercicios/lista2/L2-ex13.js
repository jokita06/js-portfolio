const formulario_13 = document.getElementById("l2-ex13-input");

formulario_13.onsubmit = function (event) {
    event.preventDefault(); 

    const valor_inicial = parseFloat(document.getElementById("valor_inicial").value);
    const periodo_simples = parseInt(document.getElementById("periodo_simples").value);
    const taxa_simples = parseFloat(document.getElementById("taxa_simples").value) / 100;

    if (isNaN(valor_inicial) || isNaN(periodo_simples) || isNaN(taxa_simples) || valor_inicial <= 0 || periodo_simples <= 0 || taxa_simples <= 0) {
        document.getElementById("resultado_financiamento").innerHTML = "Por favor, insira valores válidos.";
        return;
    }

    const juros = valor_inicial * periodo_simples * taxa_simples;
    const montante = valor_inicial + juros;
    const parcelas = (montante / periodo_simples).toFixed(2);

    const resultado = `Valor final: R$ ${montante.toFixed(2)}, ${periodo_simples}x de R$ ${parcelas}`;

    let resultado_financiamento = document.getElementById("resultado_financiamento");
    resultado_financiamento.textContent = resultado;
};