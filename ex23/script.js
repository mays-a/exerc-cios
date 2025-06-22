function habilitarBotao() {
  const checkbox = document.getElementById("checkPermissao");
  const botao = document.getElementById("meuBotao");

  if (checkbox.checked) {
    botao.disabled = false;
  } else {
    botao.disabled = true;
  }
}