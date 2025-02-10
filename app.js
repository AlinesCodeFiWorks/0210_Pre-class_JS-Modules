// Starter code in app.js
import { add, multiply } from "./mathUtils.js";
import { capitalize, reverseString } from "./stringUtils.js";
//This is a named import, right? Since it's naming the functions to be pulled from that other file?
const button = document.getElementById("calculateButton");
const result = document.getElementById("result");

// Event listener for the button
button.addEventListener("click", () => {
  const a = 5;
  const b = 10;
  let textInput = "Hello!";

  // Using imported functions (to be completed in mathUtils.js)
  const sum = add(a, b);
  const product = multiply(a, b);
  const capitalized = capitalize(textInput);
  const reversed = reverseString(textInput);

  result.textContent = `Sum: ${sum}, Product: ${product}, Upper case: ${capitalized}, Reverse: ${reversed}`;
});
