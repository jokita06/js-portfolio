document.getElementById("l1-ex11-input").addEventListener("submit", function(event) {
    event.preventDefault();

    const opcoes = ["Pedra", "Papel", "Tesoura"];
    const jogador = document.getElementById("jogador").value;
    const maquina = opcoes[Math.floor(Math.random() * 3)]; // Escolha aleatória da máquina
    
    let resultado_jogo = "";
    if (jogador === maquina) {
        resultado_jogo = "Você venceu!";
    } else if (
        (jogador === "Pedra" && maquina === "Tesoura") ||
        (jogador === "Papel" && maquina === "Pedra") ||
        (jogador === "Tesoura" && maquina === "Papel")
    ) {
        resultado = "A máquina venceu!";
    } else {
        resultado_jogo = "Deu empate!";
    }
    
    document.getElementById("resultado_jogo").innerText = `${resultado_jogo}`;
});