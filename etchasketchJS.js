/* etchasketchJS.js */

// creating and styling header
const headerText = document.createElement("h2");
headerText.classList.add("headerText");
headerText.textContent = "It's time to draw!";
headerText.style.color = getColorHeader();
headerText.style.textAlign = "center";
header.appendChild(headerText);

// creating button
const btn = document.createElement("button");
btn.classList.add("btn");
let btnText = document.createTextNode("Set Grid Size");
btn.appendChild(btnText);
button.appendChild(btn);

// creating and styling container element
const container = document.getElementById("container");
container.classList.add("container");
document.getElementById("container").style.width = "900px";
document.getElementById("container").style.height = "900px";
container.style.border = "solid";
container.style.borderWidth = "thin";

// random page background color
document.body.style.backgroundColor = getColor();

// creating hover constants with random color function
const hoverIn = (ev) => {
  ev.currentTarget.style.backgroundColor = getColor();
  // opacity increase
  ev.currentTarget.style.opacity -= "-0.1";
};
const hoverOut = (ev) => {
  ev.currentTarget.style.backgroundColor = getColor();
};

// creating random color function for gridSquares
function getColor() {
  return (
    "hsl(" +
    360 * Math.random() +
    "," +
    (25 + 70 * Math.random()) +
    "%," +
    (80 + 10 * Math.random()) +
    "%)"
  );
}

// creating random color function for headerText
function getColorHeader() {
  return (
    "hsl(" +
    360 * Math.random() +
    "," +
    (25 + 70 * Math.random()) +
    "%," +
    (50 + 10 * Math.random()) +
    "%)"
  );
}

// set default grid dimensions
let num = 16;

// for loop function to create grid rows
function createGridRow(num) {
  for (let x = 0; x < num; x++) {
    let gridSquare = document.createElement("div");
    gridSquare.setAttribute("class", "new");
    gridSquare.classList.add("gridSquare");
    // gridSquare styling
    gridSquare.style.height = `${900 / num}px`;
    gridSquare.style.width = `${900 / num}px`;
    // mouse hover event listener
    gridSquare.addEventListener("mouseover", hoverIn);
    gridSquare.addEventListener("mouseout", hoverOut);
    // appending gridSquare
    container.appendChild(gridSquare);
  }
}

// for loop function to create grid columns by calling grid row function
function createGridColumn(num) {
  for (let y = 0; y < num; y++) {
    newGridRow(num);
  }
}

// calling functions to create grid
createGridColumn(num);

// button event
btn.addEventListener("click", () => {
  let userInput = prompt("Please choose a canvas size.");
  if (userInput == null || userInput == "" || userInput > 100) {
    alert("Please input a valid number between 1 and 100!");
  } else {
    console.log(userInput);
    // clearing existing grid
    container.replaceChildren();
    // creating new grid with user input
    userNum = Number(userInput);
    newGridColumn(userNum);
    // return canvasQuery;
  }
});

// for loop function to create new grid rows
function newGridRow(userNum) {
  for (let x = 0; x < userNum; x++) {
    let gridSquare = document.createElement("div");
    gridSquare.setAttribute("class", "new");
    gridSquare.classList.add("gridSquare");
    // gridSquare styling
    gridSquare.style.height = `${900 / userNum}px`;
    gridSquare.style.width = `${900 / userNum}px`;
    // mouse hover event listener
    gridSquare.addEventListener("mouseover", hoverIn);
    gridSquare.addEventListener("mouseout", hoverOut);
    // appending gridSquare
    container.appendChild(gridSquare);
  }
}

// for loop function to create new grid columns by calling new grid row function
function newGridColumn(userNum) {
  for (let y = 0; y < userNum; y++) {
    newGridRow(userNum);
  }
}
