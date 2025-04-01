const numeros_validos = [];

document.getElementById("l3-ex5-input").addEventListener("submit", function(event) {
    event.preventDefault();

    const numeroInput = document.getElementById('numero_validos');
    const resultado = document.getElementById('numeros_validos');
    const botaoClicado = event.submitter; 

    if (botaoClicado.id === 'adicionar') {
        if (numeros_validos.length >= 8) {
            resultado.textContent = 'Você já adicionou 8 números! Clique em "Verificar".';
            document.getElementById('verificar').focus();
            return;
        }

        const valor = numeroInput.value.trim();

        if (valor === '' || isNaN(valor)) {
            resultado.textContent = 'Por favor, insira um número válido!';
            return;
        }

        const numero = Number(valor);

        if (numero < 100 || numero > 200) {
            resultado.textContent = 'Valor inválido! O número deve estar entre 100 e 200.';
            return;
        }

        numeros_validos.push(numero);
        numeroInput.value = '';

        resultado.textContent = `Número ${numero} adicionado. Total: ${numeros_validos.length}/8`;

        if (numeros_validos.length === 8) {
            resultado.textContent = 'Você já adicionou 8 números! Clique em "Verificar".';
            document.getElementById('verificar').focus();
        } 
        else {
            numeroInput.focus();
        }
        
    } 
    
    else if (botaoClicado.id === 'verificar') {
        if (numeros_validos.length < 8) {
            resultado.textContent = `Você precisa adicionar mais ${8 - numeros_validos.length} número(s)!`;
            numeroInput.focus();
            return;
        }

        resultado.textContent = `Os números válidos são: ${numeros_validos.join(', ')}`;
    }
});
