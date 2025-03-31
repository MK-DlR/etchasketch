/* etchasketchJS.js */

// creating container element
const container = document.getElementById("container");

// set grid dimensions
let num = 16;

// for loop function to create grid rows
function createGridRow(num) {
  for (let x = 0; x < num; x++) {
    const gridSquare = document.createElement("div");
    gridSquare.setAttribute("class", "new");
    gridSquare.classList.add("gridSquare");
    // grid square styling
    gridSquare.style.width = "50px";
    gridSquare.style.height = "50px";
    gridSquare.style.border = "solid";
    gridSquare.style.borderWidth = "thin";

    container.appendChild(gridSquare);
  }
}

// for loop function to create grid columns by calling grid row function
function createGridColumn(num) {
  for (let y = 1; y < num; y++) {
    createGridRow(num);
  }
}

// calling functions to create grid
createGridColumn(num);
