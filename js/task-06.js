const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  const valueInput = input.value.length;
  const dataLength = input.dataset.length;
  if (valueInput === Number(dataLength)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
