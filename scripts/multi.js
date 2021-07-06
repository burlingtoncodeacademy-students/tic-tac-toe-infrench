//! Global Variables

// initialize player
let player;
// initialize playerOne
let playerOne;
// initialize playerTwo
let playerTwo;
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
// get elements with class "row1", make them an array, and assign it to rowOne
let rowOne = Array.from(document.getElementsByClassName("row1"));
// get elements with class "row2", make them an array, and assign it to rowTwo
let rowTwo = Array.from(document.getElementsByClassName("row2"));
// get elements with class "row3", make them an array, and assign it to rowThree
let rowThree = Array.from(document.getElementsByClassName("row3"));
// get elements with class "column1", make them an array, and assign it to columnOne
let columnOne = Array.from(document.getElementsByClassName("column1"));
// get elements with class "column2", make them an array, and assign it to columnTwo
let columnTwo = Array.from(document.getElementsByClassName("column2"));
// get elements with class "column3", make them an array, and assign it to columnThree
let columnThree = Array.from(document.getElementsByClassName("column3"));
// get elements with class "diagonal1", make them an array, and assign it to diaOne
let diaOne = Array.from(document.getElementsByClassName("diagonal1"));
// get elements with class "diagonal2", make them an array, and assign it to diaTwo
let diaTwo = Array.from(document.getElementsByClassName("diagonal2"));
// set gameState to false
let gameState = false;
// set main to div containing the main elements of the page excluding header, nav, and footer
let main = document.getElementById("main");
// make an array of the row, column, and diagonal arrays
let inRowArray = [
  rowOne,
  rowTwo,
  rowThree,
  columnOne,
  columnTwo,
  columnThree,
  diaOne,
  diaTwo,
];
// set the children of the board div to boardCollection
let boardCollection = board.children;
// make this collection an array called boardArray
let boardArray = Array.from(boardCollection);

//! Functions

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
  // set xArray to an empty array
  let xArray = [];
  // init. rowOneArr
  let rowOneArr;
  // init. rowTwoArr
  let rowTwoArr;
  // init. rowThreeArr
  let rowThreeArr;
  // init. columnOneArr
  let columnOneArr;
  // init. columnTwoArr
  let columnTwoArr;
  // init. columnThreeArr
  let columnThreeArr;
  // init. diaOneArr
  let diaOneArr;
  // init. diaTwoArr
  let diaTwoArr;
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
    // change player to playerTwo
    player = playerTwo;
    // display that it is playerTwo's turn in the status div, using whatever name they input
    status.textContent = `${playerTwo}'s turn`;
    // for each line in the inRowArray
    inRowArray.forEach((line) => {
      // for each box in that line
      line.forEach((box) => {
        // push the textContent of that box to xArray
        xArray.push(box.textContent);
        // set rowOneArr to be the first three items sliced from xArray
        rowOneArr = xArray.slice(0, 3);
        // set rowTwoArr to be the next three items sliced from xArray
        rowTwoArr = xArray.slice(3, 6);
        // set rowThreeArr to be the next three items sliced from xArray
        rowThreeArr = xArray.slice(6, 9);
        // set columnOneArr to be the next three items sliced from xArray
        columnOneArr = xArray.slice(9, 12);
        // set columnTwoArr to be the next three items sliced from xArray
        columnTwoArr = xArray.slice(12, 15);
        // set columnThreeArr to be the next three items sliced from xArray
        columnThreeArr = xArray.slice(15, 18);
        // set diaOneArr to be the next three items sliced from xArray
        diaOneArr = xArray.slice(18, 21);
        // set diaTwoArr to be the last three items sliced from xArray
        diaTwoArr = xArray.slice(21, 24);
      });
    });
    // if rowOneArr, converted to a string joined by spaces, is the string "x x x"
    if (rowOneArr.join(" ") === "x x x") {
      // for each box in array rowOne from the elements with the classname row1
      rowOne.forEach((box) => {
        // style the background of each box blue
        box.style.backgroundColor = "blue";
      });
      // pass playerOne into win function
      win(playerOne);
      // same as above for rowTwoArr
    } else if (rowTwoArr.join(" ") === "x x x") {
      rowTwo.forEach((box) => {
        box.style.backgroundColor = "blue";
      });
      win(playerOne);
      // same as above for rowThreeArr
    } else if (rowThreeArr.join(" ") === "x x x") {
      rowThree.forEach((box) => {
        box.style.backgroundColor = "blue";
      });
      win(playerOne);
      // same as above for columnOneArr
    } else if (columnOneArr.join(" ") === "x x x") {
      columnOne.forEach((box) => {
        box.style.backgroundColor = "blue";
      });
      win(playerOne);
      // same as above for columnTwoArr
    } else if (columnTwoArr.join(" ") === "x x x") {
      columnTwo.forEach((box) => {
        box.style.backgroundColor = "blue";
      });
      win(playerOne);
      // same as above for columnThreeArr
    } else if (columnThreeArr.join(" ") === "x x x") {
      columnThree.forEach((box) => {
        box.style.backgroundColor = "blue";
      });
      win(playerOne);
      // same as above for diaOneArr
    } else if (diaOneArr.join(" ") === "x x x") {
      diaOne.forEach((box) => {
        box.style.backgroundColor = "blue";
      });
      win(playerOne);
      // same as above for diaTwoArr
    } else if (diaTwoArr.join(" ") === "x x x") {
      diaTwo.forEach((box) => {
        box.style.backgroundColor = "blue";
      });
      win(playerOne);
      // if none of these are true, run draw function
    } else {
      draw();
    }
    // else if the player is playerTwo
  } else if (player === playerTwo) {
    // set the text content of the clicked box to "O"
    evt.target.textContent = "O";
    // change player to playerOne
    player = playerOne;
    // display that it is playerOne's turn in the status div, using whatever name they input
    status.textContent = `${playerOne}'s turn`;
    // change the invalidMove textcontent to empty string
    invalidMove.textContent = "";
    // again, for each line in the inRowArray
    // and each box in that line
    inRowArray.forEach((line) => {
      line.forEach((box) => {
        // push the textContent of that box to xArray
        xArray.push(box.textContent);
        // set rowOneArr to be the first three items sliced from xArray
        rowOneArr = xArray.slice(0, 3);
        // set rowTwoArr to be the next three items sliced from xArray
        rowTwoArr = xArray.slice(3, 6);
        // set rowThreeArr to be the next three items sliced from xArray
        rowThreeArr = xArray.slice(6, 9);
        // set columnOneArr to be the next three items sliced from xArray
        columnOneArr = xArray.slice(9, 12);
        // set columnTwoArr to be the next three items sliced from xArray
        columnTwoArr = xArray.slice(12, 15);
        // set columnThreeArr to be the next three items sliced from xArray
        columnThreeArr = xArray.slice(15, 18);
        // set diaOneArr to be the next three items sliced from xArray
        diaOneArr = xArray.slice(18, 21);
        // set diaTwoArr to be the last three items sliced from xArray
        diaTwoArr = xArray.slice(21, 24);
      });
    });
    // up to line 270 is the same as lines 134-188, substituting x's for O's
    // pass playerTwo into win function instead of playerOne
    if (rowOneArr.join(" ") === "O O O") {
      rowOne.forEach((box) => {
        box.style.backgroundColor = "blue";
      });
      win(playerTwo);
    } else if (rowTwoArr.join(" ") === "O O O") {
      rowTwo.forEach((box) => {
        box.style.backgroundColor = "blue";
      });
      win(playerTwo);
    } else if (rowThreeArr.join(" ") === "O O O") {
      rowThree.forEach((box) => {
        box.style.backgroundColor = "blue";
      });
      win(playerTwo);
    } else if (columnOneArr.join(" ") === "O O O") {
      columnOne.forEach((box) => {
        box.style.backgroundColor = "blue";
      });
      win(playerTwo);
    } else if (columnTwoArr.join(" ") === "O O O") {
      columnTwo.forEach((box) => {
        box.style.backgroundColor = "blue";
      });
      win(playerTwo);
    } else if (columnThreeArr.join(" ") === "O O O") {
      columnThree.forEach((box) => {
        box.style.backgroundColor = "blue";
      });
      win(playerTwo);
    } else if (diaOneArr.join(" ") === "O O O") {
      diaOne.forEach((box) => {
        box.style.backgroundColor = "blue";
      });
      win(playerTwo);
    } else if (diaTwoArr.join(" ") === "O O O") {
      diaTwo.forEach((box) => {
        box.style.backgroundColor = "blue";
      });
      win(playerTwo);
      // if none of these are true, run draw function
    } else {
      draw();
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
    // stop timer
    clearInterval(intervalId);
  }
}
// win function. takes player parameter to display correct winner
function win(player) {
  // display who won in status div
  status.textContent = `Congratulations! ${player} Wins!!`;
  // set gamestate to false
  gameState = false;
  // stop timer
  clearInterval(intervalId);
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
// function allowing users to choose their name
function chooseName() {
  // create a form element and assign it to form variable
  let form = document.createElement("form");
  // create an input element and assign it to playerOneName
  let playerOneName = document.createElement("input");
  // create input element and assign it to playerTwoName
  let playerTwoName = document.createElement("input");
  // create input element and assign it to submit variable
  let submit = document.createElement("input");
  // set type of playerOneName to "text"
  playerOneName.type = "text";
  // set type of playerTwoName to "text"
  playerTwoName.type = "text";
  // set type of submit to "submit"
  submit.type = "submit";
  // append playerOneName to form
  form.appendChild(playerOneName);
  // append playerTwoName to form
  form.appendChild(playerTwoName);
  // append submit to form
  form.appendChild(submit);
  // append form to the main div
  main.appendChild(form);
  // add a "submit" event listener to form
  form.addEventListener("submit", (evt) => {
    // prevent page from refreshing when clicking submit
    evt.preventDefault();
    // if nothing is typed into playerOneName input
    if (playerOneName.value === "") {
      // set playerOneName value to "Player X"
      playerOneName.value = "Player X";
    }
    // if nothing is typed into playerTwoName input
    if (playerTwoName.value === "") {
      // set playerTwoName value to "Player O"
      playerTwoName.value = "Player O";
    }
    // assign playerOneName.value to playerOne
    playerOne = playerOneName.value;
    // assign playerTwoName.value to playerTwo
    playerTwo = playerTwoName.value;
    // set player to playerOne
    player = playerOne;
    // display that it is playerOne's turn
    status.textContent = `${playerOne}'s turn`;
    // remove form from the main div to remove it from the page
    main.removeChild(form);
    // call the time function to start the timer
    time();
    // call the start function to start the game
    start();
  });
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
  // calls chooseName function
  chooseName();
});
// adds a click event listener to the reset button that calls the clearBoard function
resetButton.addEventListener("click", clearBoard);
