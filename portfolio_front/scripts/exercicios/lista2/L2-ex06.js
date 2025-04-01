document.getElementById("l2-ex6-input").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const horas = document.getElementById("horas").value;

    const min = horas * 60;

    document.getElementById("resultado_min").textContent = `${min}min.`;
});