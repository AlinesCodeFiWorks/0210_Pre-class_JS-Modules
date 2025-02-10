export function capitalize(textInput) {
  return textInput.toUpperCase();
}

export function reverseString(textInput) {
  let splitString = textInput.split("");
  let reverseArray = splitString.reverse("");
  let joinArray = reverseArray.join("");
  return joinArray;
}
