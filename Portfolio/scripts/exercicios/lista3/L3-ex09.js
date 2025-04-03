const vetora = [];
const vetorb = [];
const vetorc = [];
const tamanhovetor = 5; 

document.getElementById("l3-ex9-input").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const numeroInput = Number(document.getElementById("numero_aEb").value);
    console.log(numeroInput)
    const resultado = document.getElementById("resultado_vetores");
    const vetores = document.getElementById("vetores");
    const botaoClicado = event.submitter;

    if (botaoClicado.id === "adicionar") {
        if (numeroInput === "" || isNaN(numeroInput) || !Number.isInteger(Number(numeroInput))) {
            resultado.textContent = "Por favor, insira um número inteiro válido!";
            return;
        }

        const numero = Number(numeroInput);

        if (vetora.length < tamanhovetor) {
            vetora.push(numero);
            resultado.textContent = `Número ${numero} adicionado ao vetor A. Total: ${vetora.length}/${tamanhovetor}.`;
        } else if (vetorb.length < tamanhovetor) {
            vetorb.push(numero);
            resultado.textContent = `Número ${numero} adicionado ao vetor B. Total: ${vetorb.length}/${tamanhovetor}.`;
        }

        numeroInput.value = ""; // Limpa o campo de entrada
        numeroInput.focus(); // Foco no campo de entrada

        if (vetora.length === tamanhovetor && vetorb.length === tamanhovetor) {
            resultado.textContent = `Ambos os vetores estão completos! Clique em "Verificar" para ver o vetor alternado.`;
        }
    } 

    else if (botaoClicado.id === "verificar") {
        if (vetora.length < tamanhovetor || vetorb.length < tamanhovetor) {
            resultado.textContent = `Preencha completamente os vetores A e B antes de verificar!`;
            numeroInput.focus();
            return;
        }

        // Preenchendo o vetor C com os valores alternados
        vetorc.length = 0; // Resetar o vetor C
        for (let i = 0; i < tamanhovetor; i++) {
            vetorc.push(vetora[i]);
            vetorc.push(vetorb[i]);
        }

        // Exibe os vetores A, B e C
        vetores.innerHTML = `
            Vetor A: [${vetora.join(", ")}] <br>
            Vetor B: [${vetorb.join(", ")}] <br>
            Vetor C (alternado): [${vetorc.join(", ")}]
        `;
    }
});
