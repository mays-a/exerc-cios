function verificarRespostas() {
  const respostasCorretas = ["c", "b"]; 
  let respostasUsuario = [];
  let acertos = 0;

  for (let i = 1; i <= 2; i++) { 
    const radios = document.getElementsByName(`q${i}`);
    let respostaSelecionada = "";

    for (let j = 0; j < radios.length; j++) {
      if (radios[j].checked) {
        respostaSelecionada = radios[j].value;
        break;
      }
    }
    respostasUsuario.push(respostaSelecionada);
  }

  for (let i = 0; i < respostasCorretas.length; i++) {
    if (respostasUsuario[i] === respostasCorretas[i]) {
      acertos++;
    }
  }

  document.getElementById("resultado").innerText = `Você acertou ${acertos} de ${respostasCorretas.length} perguntas.`;
}