document.getElementById("l3-ex6-input").addEventListener("submit", function(event) {
    event.preventDefault();

    const nomes = ["Gabriela", "Bruno", "Carlos", "Ariane", "Geovanna", "Fernanda", "Gabriel", "Nicolas", "Thifany", "João"];
    const nomeInput = document.getElementById('nome');
    const resultado = document.getElementById('resultado_nome');

    const nomeProcurado = nomeInput.value.trim();

    if (nomeProcurado === '') {
        resultado.textContent = 'Por favor, insira um nome válido!';
        return;
    }

    const indice = nomes.indexOf(nomeProcurado);

    if (indice !== -1) {
        resultado.textContent = `O nome "${nomeProcurado}" foi encontrado na posição ${indice}.`;
    } else {
        resultado.textContent = 'Nome não encontrado!';
    }
    nomeInput.value = '';
});
