document.getElementById("l2-ex7-input").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let valor = Number(document.getElementById("valor").value);

    if (isNaN(valor) || valor <= 0) {
        document.getElementById("resultado_cedulas").innerHTML = "Por favor, insira um valor válido maior que zero.";
        return;
    }

    const cedulas = [200, 100, 50, 20, 10, 5, 1];
    let resultado = "";

    cedulas.forEach((cedula) => {
        const quantidade = Math.floor(valor / cedula);
        if (quantidade > 0) {
            resultado += `Cédulas de R$${cedula}: ${quantidade}<br>`;
        }
        valor %= cedula;
    });

    document.getElementById("resultado_cedulas").innerHTML = resultado.trim();
});
