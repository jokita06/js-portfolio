const vetorA = [];
const vetorB = [];
const vetorC = [];
const tamanhoVetor = 5;

document.getElementById("l3-ex9-input").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const numeroInput = Number(document.getElementById("numero_aEb"));
    const resultado = document.getElementById("resultado_vetores");
    const vetores = document.getElementById("vetores");

    const valor = numeroInput.value.trim();

    if (valor === "" || isNaN(valor) || !Number.isInteger(Number(valor))) {
        resultado.textContent = "Por favor, insira um número inteiro válido!";
        return;
    }

    const numero = Number(valor);

    if (vetorA.length < tamanhoVetor) {
        vetorA.push(numero);
        resultado.textContent = `Número ${numero} adicionado ao vetor A. Total: ${vetorA.length}/${tamanhoVetor}.`;
    } else if (vetorB.length < tamanhoVetor) {
        vetorB.push(numero);
        resultado.textContent = `Número ${numero} adicionado ao vetor B. Total: ${vetorB.length}/${tamanhoVetor}.`;
    }

    numeroInput.value = ""; 


    if (vetorA.length === tamanhoVetor && vetorB.length === tamanhoVetor) {
        vetorC.length = 0; 
        for (let i = 0; i < tamanhoVetor; i++) {
            vetorC.push(vetorA[i]);
            vetorC.push(vetorB[i]);
        }

        vetores.innerHTML = `Vetor A: [${vetorA.join(", ")}] <br> Vetor B: [${vetorB.join(", ")}] <br> Vetor C (alternado): [${vetorC.join(", ")}]`;
        resultado.textContent = "Todos os números foram inseridos e os vetores foram exibidos!";
    }

    numeroInput.focus(); 
});
