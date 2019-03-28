console.log("Starting");

// setting up global variables we want to use later
let form = document.querySelector(".characterForm");
let product = document.querySelector(".characterForm__product");
let category = document.querySelector(".characterForm__category");
let price = document.querySelector(".characterForm__price");
let generateButton = document.querySelector(".characterForm__generateButton");

// setting up event handler for generate button
generateButton.addEventListener("click", function () {
    console.log("Click on generate button");
    populate(product, products);
    populate(category, categories);
    populate(price, prices);
});

// Helper functions, so we don't have to repeat ourselves all the time
function populate(element, dataArray) {
    // create random index value
    let index = Math.floor(Math.random()*dataArray.length);
    // get random text value from dataArray
    random = dataArray[index];
    // set this value as the text node of the element
    element.innerText = random;
}
