const nomes = ["Gabriela", "Bruno", "Carlos", "Ariane", "Geovanna", "Fernanda", "Gabriel", "Nicolas", "Thifany", "João"];
const maxTentativas = 5;
let tentativas = maxTentativas; 

document.getElementById("l3-ex7-input").addEventListener("submit", function(event) {
    event.preventDefault();

    const nomeInput = document.getElementById("nome_chute");
    const resultado = document.getElementById("resultado_chute");
    const tentativasElement = document.getElementById("tentativas");

    if (tentativas <= 0) {
        resultado.textContent = "Você atingiu o limite de tentativas! Tente novamente mais tarde.";
        return;
    }

    const valor = nomeInput.value.trim();

    if (valor === "") {
        resultado.textContent = "Por favor, insira um nome válido!";
        return;
    }

    const indice = nomes.indexOf(valor);

    tentativas--; 
    tentativasElement.textContent = tentativas; 

    if (indice !== -1) {
        resultado.innerHTML = `"${valor}" foi encontrado na posição ${indice}. <br>Você utilizou ${maxTentativas - tentativas} tentativa(s).`;
        nomeInput.value = ""; 
    } else {
        resultado.innerHTML = `Nome "${valor}" não encontrado.`;
        nomeInput.value = ""; 
        nomeInput.focus();
    }
});
