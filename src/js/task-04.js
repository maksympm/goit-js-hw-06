const counterValue = 0;

const counter = document.querySelector('#counter');

const decrementButton = counter.querySelector('[data-action="decrement"]');
const incrementButton = counter.querySelector('[data-action="increment"]');

decrementButton.addEventListener('click', () => {
  counterValue--;
  updateCounter();
});

incrementButton.addEventListener('click', () => {
  counterValue++;
  updateCounter();
});

function updateCounter() {
  const valueSpan = counter.querySelector('#value');
  valueSpan.textContent = counterValue;
}