// Array para armazenar os números (fora do evento para persistir entre cliques)
const numeros = [];

document.getElementById("l3-ex1-input").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const numeroInput = document.getElementById('numeros');
    const resultado = document.getElementById('resultado_dobro');
    const botaoClicado = event.submitter; // Identifica qual botão foi clicado

    if (botaoClicado.id === 'adicionar') {
        if (numeros.length >= 5) {
            resultado.textContent = 'Você já adicionou 5 números!';
            document.getElementById('calcular').focus();
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
        
        resultado.textContent = `Número ${numero} adicionado. Total: ${numeros.length}/5`;
        
        if (numeros.length === 5) {
            resultado.textContent = 'Você já adicionou 5 números!';
            document.getElementById('calcular').focus();
        } else {
            numeroInput.focus();
        }
    } 
    
    else if (botaoClicado.id === 'calcular') {

        if (numeros.length < 5) {
            resultado.textContent = `Você precisa adicionar mais ${5 - numeros.length} número(s)!`;
            numeroInput.focus();
            return;
        }
        
        // Calcula o dobro de cada número
        const numerosDobro = numeros.map(numero => numero * 2);
        
        resultado.textContent = `${numeros} = ${numerosDobro.join(', ')}`;
        
    }
});

document.getElementById('numeros').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        // Só permite adicionar se tiver menos de 3 números
        if (numeros.length < 5) {
            document.getElementById('adicionar').click();
        }
    }
});
