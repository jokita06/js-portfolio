document.getElementById("l1-ex4-input").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let temp_celsius = Number(document.getElementById("temp_celsius").value)
    let fahrenheit = (temp_celsius * 9/5) + 32
    
    let resultElement = document.getElementById("resultado_fahrenheit")
    resultElement.textContent = `${temp_celsius} ºC em fahrenheit é: ${fahrenheit} ºF`
})