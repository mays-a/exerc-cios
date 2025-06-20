let numeroSorteado = Math.floor(Math.random()*10);
  
function conferir() {
  let tentativa = Number(document.getElementById("guessField").value);
  document.getElementById("guessField").value = "";

  if (tentativa === numeroSorteado) {
    document.getElementById("resposta").textContent = `Parabéns! Você acertou o número ${numeroSorteado}!`;
    document.getElementById("guessField").disabled = true;
  }  else {
    let dica = tentativa < numeroSorteado ? "Maior!" : "Menor!";
    document.getElementById("resposta").textContent = `Errado! Tente novamente. Dica: ${dica}`;
  }
}
  