var color = document.querySelector("#color");
var output = document.querySelector("#output");
function invertColor(hexColor) {
  // Remove the # character if present
  hexColor = hexColor.replace("#", "");

  // Convert the hex color to RGB
  var r = parseInt(hexColor.substring(0, 2), 16);
  var g = parseInt(hexColor.substring(2, 4), 16);
  var b = parseInt(hexColor.substring(4, 6), 16);

  // Calculate the inverse RGB values
  var inverseR = 255 - r;
  var inverseG = 255 - g;
  var inverseB = 255 - b;

  // Convert the inverse RGB values back to hex
  var inverseHex =
    "#" + inverseR.toString(16) + inverseG.toString(16) + inverseB.toString(16);
  return inverseHex;
}

//console.log(color.value);
color.addEventListener("input", function () {
  var value = color.value;
  output.innerHTML = value;
  output.style.color = invertColor(value);
  output.style.backgroundColor = value;
});
