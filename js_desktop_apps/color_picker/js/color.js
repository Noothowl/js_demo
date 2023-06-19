const color = document.querySelector("#color");
const output = document.querySelector("#output");
function invertColor(hexColor) {
  // Remove the # character if present
  hexColor = hexColor.replace("#", "");

  // Convert the hex color to RGB
  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);

  // Calculate the inverse RGB values
  const inverseR = 255 - r;
  const inverseG = 255 - g;
  const inverseB = 255 - b;

  // Convert the inverse RGB values back to hex
  const inverseHex =
    "#" + inverseR.toString(16) + inverseG.toString(16) + inverseB.toString(16);

  return inverseHex;
}

//console.log(color.value);
color.addEventListener("input", () => {
  const value = color.value;
  output.innerHTML = value;
  output.style.color = invertColor(value);
  output.style.backgroundColor = value;
});
