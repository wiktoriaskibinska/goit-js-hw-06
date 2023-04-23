const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

for (const ingr of ingredients) {
  // Create the list element
  const addItem = document.createElement("li");
  addItem.classList.add("item");
  addItem.textContent = ingr;
  list.append(addItem);
}
