let number = 7;
const display = document.getElementById('display');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
function updateDisplay() {
  display.textContent = number;
}

incrementButton.addEventListener('click', function() {
  number++;
  updateDisplay();
});

decrementButton.addEventListener('click', function() {
  number--;
  updateDisplay();
});

updateDisplay();
