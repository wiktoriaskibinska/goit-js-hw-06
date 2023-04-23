const categories = document.querySelectorAll(".item");
console.log("Number of categories: ", categories.length);
//first category
const firstHeading = document.querySelector("h2");
console.log("Category: ", firstHeading.innerHTML);
const firstList = document.querySelector(".item");
const firstListElements = firstList.querySelectorAll("ul>li");
console.log("Elements: ", firstListElements.length);
//second category
const secondHeading = document.querySelectorAll("h2")[1];
console.log("Category: ", secondHeading.innerHTML);
const secondList = document.querySelectorAll(".item")[1];
const secondListElements = secondList.querySelectorAll("ul>li");
console.log("Elements: ", secondListElements.length);
//third category
const thirdHeading = document.querySelectorAll("h2")[2];
console.log("Category: ", thirdHeading.innerHTML);
const thirdList = document.querySelectorAll(".item")[2];
const thirdListElements = thirdList.querySelectorAll("ul>li");
console.log("Elements: ", thirdListElements.length);
