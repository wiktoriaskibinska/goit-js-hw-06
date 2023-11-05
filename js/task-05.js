const Iinput = document.querySelector("#name-input");
const Ooutput = document.querySelector("#name-output");
Iinput.addEventListener("input", () => {
  const name = Iinput.value;
  
  if (name === "") {
    Ooutput.textContent === "Anonymous";
  } else {
    Ooutput.textContent = name;
  }
});



//or
 // output.textContent = input.value;
//});
//OR
//input.addEventListener("input", (event) => {
//  output.textContent = event.currentTarget.value;
//});
