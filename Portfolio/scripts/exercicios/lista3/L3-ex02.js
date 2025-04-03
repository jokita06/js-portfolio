// Array para armazenar os números (fora do evento para persistir entre cliques)
const numeros_media = [];

document.getElementById("l3-ex2-input").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const numeroInput = document.getElementById('numeros_media');
    const resultado = document.getElementById('resultado_media');
    const botaoClicado = event.submitter; 

    if (botaoClicado.id === 'adicionar') {

        if (numeros_media.length >= 8) {
            resultado.textContent = 'Você já adicionou 8 números!';
            document.getElementById('calcular').focus();
            return;
        }
        
        // Lógica para adicionar número
        const valor = numeroInput.value.trim();
        
        if (valor === '' || isNaN(valor)) {
            resultado.textContent = 'Por favor, digite um número válido!';
            return;
        }
        
        const numero = Number(valor);
        numeros_media.push(numero);
        numeroInput.value = '';
        
        resultado.textContent = `Número ${numero} adicionado. Total: ${numeros_media.length}/8`;
        
        if (numeros_media.length === 8) {
            resultado.textContent = 'Você já adicionou 8 números!';
            document.getElementById('calcular').focus();
        } else {
            numeroInput.focus();
        }
    } 
    else if (botaoClicado.id === 'calcular') {

        if (numeros_media.length < 8) {
            resultado.textContent = `Você precisa adicionar mais ${8 - numeros_media.length} número(s)!`;
            numeroInput.focus();
            return;
        }
        
        const soma = numeros_media.reduce((acumulador, numero) => acumulador + numero, 0);
        const media = soma / numeros_media.length;
        
        resultado.textContent = `A média aritmética é: ${media}`;
        
    }
});

document.getElementById('numeros_media').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();

        if (numeros_media.length < 8) {
            document.getElementById('adicionar').click();
        }
    }
});
