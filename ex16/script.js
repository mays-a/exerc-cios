const radioButtons = document.querySelectorAll('input[name="cor"]');
const body = document.body;

radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
        const selectedColor = document.querySelector('input[name="cor"]:checked').value;
        switch (selectedColor) {
            case 'vermelho':
                body.style.backgroundColor = 'red';
                break;
            case 'azul':
                body.style.backgroundColor = 'blue';
                break;
            case 'amarelo':
                body.style.backgroundColor = 'yellow';
                break;
            case 'branco':
                body.style.backgroundColor = 'white';
                break;
        }
    });
});