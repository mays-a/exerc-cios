const inputElement = document.getElementById('inputTecla');
const spanElement = document.getElementById('teclaPressionada');

inputElement.addEventListener('keydown', function (event) {
    spanElement.textContent = event.key;
});