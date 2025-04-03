document.getElementById("l2-ex10-input").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const salario = Number(document.getElementById("salario").value);

    if (isNaN(salario) || salario <= 0) {
        document.getElementById("resultado_imposto").innerHTML = "Por favor, insira um salário válido.";
        return;
    }

    let imposto = 0;

    if (salario <= 1903.98) {
        imposto = 0; 
    } else if (salario <= 2826.65) {
        imposto = (salario - 1903.98) * 0.075;
    } else if (salario <= 3751.05) {
        imposto = (salario - 2826.65) * 0.15 + (2826.65 - 1903.98) * 0.075;
    } else if (salario <= 4664.68) {
        imposto = (salario - 3751.05) * 0.225 + (3751.05 - 2826.65) * 0.15 + (2826.65 - 1903.98) * 0.075;
    } else {
        imposto = (salario - 4664.68) * 0.275 + (4664.68 - 3751.05) * 0.225 + (3751.05 - 2826.65) * 0.15 + (2826.65 - 1903.98) * 0.075;
    }

    const resultado = `O imposto de renda é de: R$${imposto.toFixed(2)}`;
    document.getElementById("resultado_imposto").innerHTML = resultado;
});
