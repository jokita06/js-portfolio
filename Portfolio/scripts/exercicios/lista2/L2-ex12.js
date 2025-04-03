document.getElementById("l2-ex12-input").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const capital = Number(document.getElementById("capital").value);
    const periodo = Number(document.getElementById("periodo").value);
    const taxa = Number(document.getElementById("taxa").value) / 100;

    if (isNaN(capital) || isNaN(periodo) || isNaN(taxa) || capital <= 0 || periodo <= 0 || taxa <= 0) {
        document.getElementById("resultado_juros").innerHTML = "Por favor, insira valores válidos.";
        return;
    }

    const montante = capital * Math.pow((1 + taxa), periodo);
    const juros = montante - capital; 

    const resultado = `Juros acumulados: R$${juros.toFixed(2)}`;
    document.getElementById("resultado_juros").innerHTML = resultado;
});
