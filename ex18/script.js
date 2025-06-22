function mudarCorDeFundo() {
    const cores = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    document.body.style.backgroundColor = corAleatoria;
}

document.getElementById("meuBotao").addEventListener("click", mudarCorDeFundo);