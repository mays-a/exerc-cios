let contador = 0;
const btnContador = document.getElementById("btnContador");
const spanContador = document.getElementById("contador");

btnContador.addEventListener("click", function () {
    contador++;
    spanContador.textContent = contador;
});