document.getElementById("l2-ex4-input").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let idade = Number(document.getElementById("idade").value);
    let resultado_cnh = document.getElementById("resultado_cnh");

    if (idade >= 18) {
        resultado_cnh.textContent = `Você pode tirar CNH!`
    } else {
        resultado_cnh.textContent = `Você não pode tirar CNH!`
    }
});
