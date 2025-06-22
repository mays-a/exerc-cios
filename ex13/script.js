const temperaturaInput = document.getElementById("temperatura");
const resultadoParagrafo = document.getElementById("resultado");
const converterCelsiusBtn = document.getElementById("converterCelsius");
const converterFahrenheitBtn = document.getElementById("converterFahrenheit");

function converterCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function converterFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

converterCelsiusBtn.addEventListener("click", function() {
    const temperaturaFahrenheit = parseFloat(temperaturaInput.value);
    if (!isNaN(temperaturaFahrenheit)) {
        const temperaturaCelsius = converterCelsius(temperaturaFahrenheit);
        resultadoParagrafo.textContent = `${temperaturaFahrenheit}°F é igual a ${temperaturaCelsius.toFixed(2)}°C`;
    } else {
        resultadoParagrafo.textContent = "Por favor, insira um valor numérico válido.";
    }
});

converterFahrenheitBtn.addEventListener("click", function() {
    const temperaturaCelsius = parseFloat(temperaturaInput.value);
    if (!isNaN(temperaturaCelsius)) {
        const temperaturaFahrenheit = converterFahrenheit(temperaturaCelsius);
        resultadoParagrafo.textContent = `${temperaturaCelsius}°C é igual a ${temperaturaFahrenheit.toFixed(2)}°F`;
    } else {
        resultadoParagrafo.textContent = "Por favor, insira um valor numérico válido.";
    }
});