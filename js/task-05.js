const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
input.addEventListener("input", () => {
  const name = input.value;
  
  if (name === null) {
    output.textContent === "Anonymous";
  } else {
    output.textContent = name;
  }
});



//or
 // output.textContent = input.value;
//});
//OR
//input.addEventListener("input", (event) => {
//  output.textContent = event.currentTarget.value;
//});
