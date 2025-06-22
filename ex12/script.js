const botoesRespostas = document.querySelectorAll('.resposta');
const feedback = document.querySelector('.feedback');

botoesRespostas.forEach(botao => {
  botao.addEventListener('click', () => {
    const respostaCorreta = botao.dataset.correta === 'true';

    if (respostaCorreta) {
      feedback.textContent = 'Resposta correta!';
      feedback.classList.add('correta');
      botao.classList.add('correta');
    } else {
      feedback.textContent = 'Resposta incorreta. Tente novamente!';
      feedback.classList.add('incorreta');
      botao.classList.add('incorreta');
    }

    // Desabilitar botões após a resposta
    botoesRespostas.forEach(b => b.disabled = true);
  });
});