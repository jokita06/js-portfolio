const numeros_pares_impares = [];

document.getElementById("l3-ex4-input").addEventListener("submit", function(event) {
    event.preventDefault();

    const numeroInput = document.getElementById('numero_par_impar');
    const resultado = document.getElementById('resultado_pares');
    const botaoClicado = event.submitter; 

    if (botaoClicado.id === 'adicionar') {
        if (numeros_pares_impares.length >= 10) {
            resultado.textContent = 'Você já adicionou 10 números! Clique em "Verificar".';
            document.getElementById('verificar').focus();
            return;
        }

        const valor = numeroInput.value.trim();

        if (valor === '' || isNaN(valor)) {
            resultado.textContent = 'Por favor, insira um número válido!';
            return;
        }

        const numero = Number(valor);
        numeros_pares_impares.push(numero);
        numeroInput.value = '';

        resultado.textContent = `Número ${numero} adicionado. Total: ${numeros_pares_impares.length}/10`;

        if (numeros_pares_impares.length === 10) {
            resultado.textContent = 'Você já adicionou 10 números! Clique em "Verificar".';
            document.getElementById('verificar').focus();
        } else {
            numeroInput.focus();
        }
    }   
    else if (botaoClicado.id === 'verificar') {
        if (numeros_pares_impares.length < 10) {
            resultado.textContent = `Você precisa adicionar mais ${10 - numeros_pares_impares.length} número(s)!`;
            numeroInput.focus();
            return;
        }

        const pares = numeros_pares_impares.filter(numero => numero % 2 === 0);

        if (pares.length > 0) {
            resultado.textContent = `Os números pares são: ${pares.join(', ')}.`;
        } else {
            resultado.textContent = 'Todos os números são ímpares.';
        }
    }
});
