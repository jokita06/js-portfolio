document.getElementById("l1-ex3-input").addEventListener("submit", function(event) {
    event.preventDefault();

    let primeiraNota = Number(document.getElementById("primeiraNota").value);
    let segundaNota = Number(document.getElementById("segundaNota").value);

    let resultElement = document.getElementById("resultado_nota");
    if (primeiraNota % segundaNota === 0) {
        resultElement.textContent = `O número ${primeiraNota} é múltiplo do número ${segundaNota}.`;
    } else {
        resultElement.textContent = `O número ${primeiraNota} não é múltiplo do número ${segundaNota}.`;
    }
});
