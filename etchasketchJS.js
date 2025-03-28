/* etchasketchJS.js */

/*
using JS + flexbox:
create 16x16 grid
of squares (divs?)
with a black border
and no text content
inside of a container div (created in html file)
use flexbox:
to make divs appear as grid
be careful with borders and margins
as they can adjust the size of the squares
*/

// creating container element
const container = document.querySelector("#container");

document.getElementById("container").style.width = "500px";

// create grid square element
const gridSquare = document.createElement("div");
gridSquare.classList.add("gridSquare");
gridSquare.style.border = "solid";
gridSquare.style.borderWidth = "thin";
gridSquare.textContent = "I should become a square";

// add grid square to page
// container.appendChild(gridSquare);

// set grid dimensions
let width = 16;
let height = 16;

// function with for loop to create grid
function createGrid(horizontalSize, verticalSize) {
  let grid = "";

  for (let y = 0; y < verticalSize; y++) {
    let currentRow = "";
    for (let x = 0; x < horizontalSize; x++) {
      currentRow += " X ";
    }
    if (y < verticalSize - 1) {
      grid += currentRow + "\n";
    } else {
      grid += currentRow;
    }
  }
  return grid;
}

console.log(createGrid(width, height)); // currently only showing in console log
