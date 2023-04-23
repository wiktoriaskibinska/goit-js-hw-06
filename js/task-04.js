const buttonMinus = document.querySelector('[data-action="decrement"]');
const buttonAdd = document.querySelector('[data-action="increment"]');
const counter = document.getElementById("value");
let counterValue = 0;
counter.textContent = counterValue;

buttonMinus.addEventListener("click", () => {
  counterValue -= 1;
  counter.textContent = counterValue;
});
buttonAdd.addEventListener("click", () => {
  counterValue += 1;
  counter.textContent = counterValue;
});
