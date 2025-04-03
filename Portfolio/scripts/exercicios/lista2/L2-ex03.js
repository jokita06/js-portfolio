document.getElementById("l2-ex3-input").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let nome = document.getElementById("nome").value;

    let resultado_nome = document.getElementById("resultado_nome");
    resultado_nome.textContent = ""; 

    nome.split("").forEach(function(letra) {
        resultado_nome.textContent += letra + ", ";
    });
});
