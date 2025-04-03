document.getElementById("l2-ex9-input").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const inputs = document.querySelectorAll("#l2-ex9-input input[type='text']");
    let todosPreenchidos = true;

    inputs.forEach(input => {
        if (input.value.trim() === "") {
            input.style.border = "1.3px solid red";
            todosPreenchidos = false;
        } else {
            input.style.border = "";
        }
    });

    if (!todosPreenchidos) {
        alert("Por favor, preencha todos os campos obrigatórios!");
    } else {
        alert("Cadastrado com sucesso!");
        document.getElementById("l2-ex9-input").reset();
    }
});
