const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
nameInput.addEventListener("input", () => {
  const name = nameInput.value;
  
  if (name === "") {
    nameOutput.textContent === "Anonymous";
  } else {
    nameOutput.textContent = name;
  }
});



//or
 // output.textContent = input.value;
//});
//OR
//input.addEventListener("input", (event) => {
//  output.textContent = event.currentTarget.value;
//});
