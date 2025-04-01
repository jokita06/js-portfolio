document.getElementById("l1-ex8-input").addEventListener("submit", function(event) {
    event.preventDefault();

    let ano_atual = Number(document.getElementById("ano").value);
    let resultado_ano = document.getElementById("resultado_ano");
    
    if(ano_atual % 4 == 0) {
        resultado_ano.textContent = `O ano ${ano_atual} é bissexto!`;
    } else {
        resultado_ano.textContent = `O ano ${ano_atual} não é bissexto!`;
    }
});