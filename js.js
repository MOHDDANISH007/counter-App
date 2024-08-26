const count = document.querySelector(".count");
const buttons = document.querySelectorAll("button");
const input = document.querySelector("input");

const reset_btn = document.querySelector(".reset-btn");

const gitLink = document.querySelector(".gitLink");

gitLink.href = "https://github.com/MOHDDANISH007?tab=repositories";

let countNum = 0;
let incrementByDecrement = 0;

// Update the increment/decrement value based on user input
input.addEventListener("input", () => {
    incrementByDecrement = parseInt(input.value) || 0; // Default to 0 if input is not a valid number
});

// Increment button logic
buttons[1].addEventListener("click", () => {
    countNum += incrementByDecrement > 0 ? incrementByDecrement : 1;
    count.innerHTML = countNum;
});

// Decrement button logic
buttons[0].addEventListener("click", () => {
    countNum -= incrementByDecrement > 0 ? incrementByDecrement : 1;
    count.innerHTML = countNum;
});


reset_btn.addEventListener("click", () => {
    countNum = 0;
    count.innerHTML = countNum;
    input.value = 1;

})
