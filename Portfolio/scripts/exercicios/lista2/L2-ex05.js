// Array para armazenar os números (fora do evento para persistir entre cliques)
const numeros = [];

document.getElementById("l2-ex5-input").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const numeroInput = document.getElementById('numeros');
    const resultado = document.getElementById('resultado_ordenacao');
    const botaoClicado = event.submitter; // Identifica qual botão foi clicado

    if (botaoClicado.id === 'adicionar') {

        if (numeros.length >= 3) {
            resultado.textContent = 'Você já adicionou 3 números! Clique em "Calcular" para ordenar.';
            document.getElementById('ordenar').focus();
            return;
        }
        
        const valor = numeroInput.value.trim();
        
        if (valor === '' || isNaN(valor)) {
            resultado.textContent = 'Por favor, digite um número válido!';
            return;
        }
        
        const numero = Number(valor);
        numeros.push(numero);
        numeroInput.value = '';
        
        resultado.textContent = `Número ${numero} adicionado. Total: ${numeros.length}/3`;
        
        if (numeros.length === 3) {
            resultado.textContent = 'Você já adicionou 3 números!';
            document.getElementById('ordenar').focus();
        } else {
            numeroInput.focus();
        }
    } 
    else if (botaoClicado.id === 'ordenar') {

        if (numeros.length < 3) {
            resultado.textContent = `Você precisa adicionar mais ${3 - numeros.length} número(s)!`;
            numeroInput.focus();
            return;
        }
        
        for (let i = 0; i < numeros.length; i++) {
            for (let j = 0; j < numeros.length - i - 1; j++) {
                if (numeros[j] > numeros[j + 1]) {
                    // Troca os elementos
                    [numeros[j], numeros[j + 1]] = [numeros[j + 1], numeros[j]];
                }
            }
        }
        
        resultado.textContent = `Números ordenados: ${numeros.join(', ')}`;
        
        setTimeout(() => {
            numeros.length = 0;
            resultado.textContent = '';
            numeroInput.focus();
        }, 3000);
    }
});

document.getElementById('numeros').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        // Só permite adicionar se tiver menos de 3 números
        if (numeros.length < 3) {
            document.getElementById('adicionar').click();
        }
    }
});