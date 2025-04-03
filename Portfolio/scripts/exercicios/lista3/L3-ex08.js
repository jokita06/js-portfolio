const vetorA = [];
const vetorB = [];
const tamanhoVetor = 6;

document.getElementById("l3-ex8-input").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const numeroInput = document.getElementById("numero_a");
    const resultado = document.getElementById("resultado");

    if (vetorA.length < tamanhoVetor) {

        const valor = numeroInput.value.trim();

        if (valor === "" || isNaN(valor) || !Number.isInteger(Number(valor))) {
            resultado.textContent = "Por favor, insira um número inteiro válido!";
            return;
        }

        const numero = Number(valor);
        vetorA.push(numero);
        numeroInput.value = "";

        resultado.innerHTML = `Número ${numero} adicionado ao vetor A. <br>Total: ${vetorA.length}/${tamanhoVetor}.`;

        if (vetorA.length === tamanhoVetor) {
            resultado.textContent = 'Verificando os vetores...';
        }
    }

    if (vetorA.length === tamanhoVetor) {
       
        vetorB.length = 0; 
        for (const numero of vetorA) {
            vetorB.push(numero / 2);
        }

        resultado.innerHTML = `Vetor A: [${vetorA.join(", ")}] <br> Vetor B: [${vetorB.join(", ")}]`;
    }

    numeroInput.focus(); 
});
