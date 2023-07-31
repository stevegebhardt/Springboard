const gameContainer = document.getElementById("game");
let firstPick = null;
let secondPick = null;
let matches = 0;

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple",
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // check to see if target is already flipped
  if (event.target.classList.contains("flipped")) return;

  //set firstPick and secondPick cards
  let currentPick = event.target;
  currentPick.style.backgroundColor = currentPick.classList[0];

  if (!firstPick || secondPick) {
    currentPick.classList.add("flipped");
    firstPick = firstPick || currentPick;
    secondPick = currentPick === firstPick ? null : currentPick;
  }

  //check to see if first card class equals second card class
  if (firstPick && secondPick) {
    if (firstPick.className === secondPick.className) {
      matches = +1;
      firstPick.removeEventListener("click", handleCardClick);
      secondPick.removeEventListener("click", handleCardClick);
      firstPick = null;
      secondPick = null;
    } else {
      //if first pick is not equal to second pick, revert to previous state
      setTimeout(function () {
        firstPick.style.backgroundColor = "";
        firstPick.classList.remove("flipped");
        firstPick = null;
        secondPick.style.backgroundColor = "";
        secondPick.classList.remove("flipped");
        secondPick = null;
      }, 1000);
    }
  }

  //check for win condition
  if (matches == COLORS.length / 2) alert("Game Over");
}

// when the DOM loads
createDivsForColors(shuffledColors);
