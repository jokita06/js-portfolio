const formulario = document.getElementById("l1-ex6-input");

formulario.onsubmit = function(event) {
    event.preventDefault();

    let primeiraNota = parseFloat(formulario.primeiraNota.value);
    let segundaNota = parseFloat(formulario.segundaNota.value);
    let resultado_media = document.getElementById("resultado_media");

    if (isNaN(primeiraNota) || isNaN(segundaNota) || primeiraNota > 10 || segundaNota > 10 || primeiraNota < 0 || segundaNota < 0) {
        resultado_media.textContent = `Por favor, insira valores válidos para as notas.`;
        return;
    }

    let media = (primeiraNota + segundaNota) / 2;
    let paridade = (media % 2 === 0) ? "par" : "ímpar";

    if (media >= 6) {
        resultado_media.innerHTML = `Você está acima da média com: ${media}.<br>A média é um número ${paridade}.`;
    } else {
        resultado_media.innerHTML = `Você está abaixo da média com: ${media}.<br>A média é um número ${paridade}.`;
    }
};
