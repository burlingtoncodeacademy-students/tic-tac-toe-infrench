//! Global variables

// initialize player
let player;
// set playerOne to player X
let playerOne = "Player X";
// set playerTwo to "Computer O"
let playerTwo = "Computer O";
// initialize count for time function
let count;
// initialize intervalId for time function
let intervalId;
// set startButton to button with Id "start"
let startButton = document.getElementById("start");
// set resetButton to button with Id "reset"
let resetButton = document.getElementById("reset");
// set board to div with id "board"
let board = document.getElementById("board");
// set status to div with id "status"
let status = document.getElementById("status");
// set timer to div with id "timer"
let timer = document.getElementById("timer");
// set invalidMove to div with id "invalid"
let invalidMove = document.getElementById("invalid");
// set square to all elements with class "box"
let square = document.getElementsByClassName("box");
// set main to div containing the main elements of the page excluding header, nav, and footer
let main = document.getElementById("main");
// convert the square collection to an array and set it to variable boardArray
let boardArray = Array.from(square);
// initialize gameStatus as an array of numbers 1-9
let gameStatus = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

//! functions

// start function
function start() {
  // for each box in the boardArray
  boardArray.forEach((box) => {
    // add an event listener and run clickBox function when clicked
    box.addEventListener("click", clickBox);
  });
}
// function when a box is clicked after the start function has been called
function clickBox(evt) {
  // if the gameState doesnt equal true, do not go further
  if (gameState !== true) {
    // else if the textContent of the target of the event,
    // the box that was clicked,
    // does not equal an empty string,
  } else if (evt.target.textContent !== "") {
    // change the textContent of the invalidMove div to tell the user to select an empty cell
    invalidMove.textContent = " \nPlease select an empty cell.";
    // else if the player is playerOne
  } else if (player === playerOne) {
    // set invalidMove.textContent to an empty string
    invalidMove.textContent = "";
    // set the textcontent of the clicked box to "x"
    evt.target.textContent = "x";
    // set the item at the gameStatus index of the clicked box's id minus 1 to "x"
    gameStatus[evt.target.id.slice(3) - 1] = "x";
    // change the player to playerTwo
    player = playerTwo;
    // display that it is playerTwo's turn in the status div
    status.textContent = `${playerTwo}'s turn`;
    // run the win function
    win();
    // if the gameState is true after the win function runs
    if (gameState === true) {
      // run the compTurn function after .5 seconds
      setTimeout(compTurn, 500);
    }
  }
}
// function for the computer's turn
function compTurn() {
  // get a random number between 0 and 1, multiply it by the length of the board array, and round it down to the nearest integer
  // set this number to randBox
  let randBox = Math.floor(Math.random() * boardArray.length);
  console.log(randBox);
  // set player to playerOne
  player = playerOne;
  // display that it is playerTwo's turn in the status div
  status.textContent = `${playerOne}'s turn`;
  // if the gameState is true
  if (gameState === true) {
    // if the item in gameStatus at the index of the randomly generated number is either "x" or "O"
    if (gameStatus[randBox] === "x" || gameStatus[randBox] === "O") {
      // run this function again
      compTurn();
      // otherwise
    } else {
      // the textContent of the box at the index selected in the collection of squares is set to "O"
      square[randBox].textContent = "O";
      // and the item in gameStatus at the index selected is set to "O"
      gameStatus[randBox] = "O";
      // run the win function
      win();
    }
  }
}
// function to reset the board
function clearBoard() {
  // for each box in the boardArray
  boardArray.forEach((box) => {
    // set the textContent to an empty string
    box.textContent = "";
    // set the status to an empty string
    status.textContent = "";
    // remove the background color from each box
    box.style.backgroundColor = "";
    // reset the gameStatus array
    gameStatus = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    // enable the start button
    startButton.disabled = false;
    // disable the reset button
    resetButton.disabled = true;
    // clear the interval of the setInterval in the timer function
    clearInterval(intervalId);
    // set the textContent of the timer div to and empty string
    timer.textContent = "";
    // remove the event listen from each box
    box.removeEventListener("click", clickBox);
  });
}
// function to check for draws
function draw() {
  // filter each box with a textContent of "x" or "O" in the boardArray
  // return them to a new array, drawArray
  let drawArray = boardArray.filter((box) => {
    return box.textContent === "x" || box.textContent === "O";
  });
  // if the length of drawArray is 9
  if (drawArray.length === 9) {
    // change gameState to false to stop it from continuing
    gameState = false;
    // display "draw" in the status textcontent
    status.textContent = "Draw";
  }
}
// function to check if either player has won
function win() {
  // if the gameState is true
  if (gameState === true) {
    // if the item at the 0 index of gamestatus is equal to the one at the 1 index and 2 index
    // this is the top row
    if (gameStatus[0] === gameStatus[1] && gameStatus[0] === gameStatus[2]) {
      // and it is equal to "x"
      if (gameStatus[0] === "x") {
        // display that player x wins
        status.textContent = "Congratulations! Player X Wins!!";
        // otherwise
      } else {
        // display that player O wins
        status.textContent = "Congratulations! Player O Wins!!";
      }
      // set gameState to false to stop the game
      gameState = false;
      //otherwise
    } else if (
      // if the item at 0 index is equal to 3 index and 6 index
      // this is the left column
      gameStatus[0] === gameStatus[3] &&
      gameStatus[0] === gameStatus[6]
    ) {
      // same as above
      if (gameStatus[0] === "x") {
        status.textContent = "Congratulations! Player X Wins!!";
      } else {
        status.textContent = "Congratulations! Player O Wins!!";
      }
      gameState = false;
    } else if (
      // backslash diagonal
      gameStatus[0] === gameStatus[4] &&
      gameStatus[0] === gameStatus[8]
    ) {
      if (gameStatus[0] === "x") {
        status.textContent = "Congratulations! Player X Wins!!";
      } else {
        status.textContent = "Congratulations! Player O Wins!!";
      }
      gameState = false;
    } else if (
      // middle column
      gameStatus[1] === gameStatus[4] &&
      gameStatus[1] === gameStatus[7]
    ) {
      if (gameStatus[1] === "x") {
        status.textContent = "Congratulations! Player X Wins!!";
      } else {
        status.textContent = "Congratulations! Player O Wins!!";
      }
      gameState = false;
    } else if (
      // right column
      gameStatus[2] === gameStatus[5] &&
      gameStatus[2] === gameStatus[8]
    ) {
      if (gameStatus[2] === "x") {
        status.textContent = "Congratulations! Player X Wins!!";
      } else {
        status.textContent = "Congratulations! Player O Wins!!";
      }
      gameState = false;
    } else if (
      // forward slash diagonal
      gameStatus[2] === gameStatus[4] &&
      gameStatus[2] === gameStatus[6]
    ) {
      if (gameStatus[2] === "x") {
        status.textContent = "Congratulations! Player X Wins!!";
      } else {
        status.textContent = "Congratulations! Player O Wins!!";
      }
      gameState = false;
    } else if (
      // middle row
      gameStatus[3] === gameStatus[4] &&
      gameStatus[3] === gameStatus[5]
    ) {
      gameState = false;
      if (gameStatus[3] === "x") {
        status.textContent = "Congratulations! Player X Wins!!";
      } else {
        status.textContent = "Congratulations! Player O Wins!!";
      }
      gameState = false;
    } else if (
      // bottom row
      gameStatus[6] === gameStatus[7] &&
      gameStatus[6] === gameStatus[8]
    ) {
      if (gameStatus[6] === "x") {
        status.textContent = "Congratulations! Player X Wins!!";
      } else {
        status.textContent = "Congratulations! Player O Wins!!";
      }
      gameState = false;
    } else {
      // if none of these are true, run the draw function
      draw();
    }
  }
}
// function counting time elapsed
function time() {
  // set the count to 0
  count = 0;
  // call tick function every second, setting this to a variable intervalId
  intervalId = setInterval(tick, 1000);
  // tick function
  function tick() {
    // display the textcontent of timer div to show amount of seconds elapsed
    timer.textContent = `Time Elapsed ${count} seconds`;
    // increase count by 1
    count++;
  }
}

//! event listeners

// adds click event listener to start button
startButton.addEventListener("click", (evt) => {
  // disables start button
  startButton.disabled = true;
  // sets gamestate to true
  gameState = true;
  // enables reset button
  resetButton.disabled = false;
  // sets player to player one
  player = playerOne;
  // display that its player one's turn
  status.textContent = `${playerOne}'s turn`;
  // run the timer function
  time();
  // run the start function
  start();
});
// adds a click event listener to the reset button that calls the clearBoard function
resetButton.addEventListener("click", clearBoard);
