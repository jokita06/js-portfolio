const idades = [];

document.getElementById("l3-ex3-input").addEventListener("submit", function(event) {
    event.preventDefault();


    const idadeInput = document.getElementById('idade');
    const resultado = document.getElementById('resultado_acima_media');
    const botaoClicado = event.submitter; 

    if (botaoClicado.id === 'adicionar') {

        if (idades.length >= 20) {
            resultado.innerHTML = 'Você já adicionou 20 idades! <br>Clique em "Calcular" para verificar.';
            document.getElementById('calcular').focus();
            return;
        }

        const valor = idadeInput.value.trim();

        if (valor === '' || isNaN(valor) || Number(valor) < 0) {
            resultado.textContent = 'Por favor, digite uma idade válida!';
            return;
        }

        const idade = Number(valor);
        idades.push(idade);
        idadeInput.value = '';

        resultado.textContent = `Idade ${idade} adicionada. Total: ${idades.length}/20`;

        if (idades.length === 20) {
            resultado.innerHTML = 'Você já adicionou 20 idades! <br>Clique em "Calcular".';
            document.getElementById('calcular').focus();
        } else {
            idadeInput.focus();
        }
    } else if (botaoClicado.id === 'calcular') {

        if (idades.length < 20) {
            resultado.innerHTML = `Você precisa adicionar mais ${20 - idades.length} idade(s)!`;
            idadeInput.focus();
            return;
        }

        const soma = idades.reduce((acumulador, idade) => acumulador + idade, 0);
        const media = soma / idades.length;

        const acimaDaMedia = idades.filter(idade => idade > media);

        resultado.innerHTML = `A média das idades é ${media.toFixed(2)}. <br>Idades acima da média: ${acimaDaMedia.join(', ')}`;
    }
});
