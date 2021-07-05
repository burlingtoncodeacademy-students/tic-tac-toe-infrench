let player;
let playerOne = "Player X";
let playerTwo = "Computer O";
let count;
let intervalId;
let startButton = document.getElementById("start");
let resetButton = document.getElementById("reset");
let board = document.getElementById("board");
let status = document.getElementById("status");
let timer = document.getElementById("timer");
let invalidMove = document.getElementById("invalid");
let boxOne = document.getElementById("top-left");
let boxTwo = document.getElementById("top-center");
let boxThree = document.getElementById("top-right");
let boxFour = document.getElementById("center-left");
let boxFive = document.getElementById("center");
let boxSix = document.getElementById("center-right");
let boxSeven = document.getElementById("bottom-left");
let boxEight = document.getElementById("bottom-center");
let boxNine = document.getElementById("bottom-right");
let rowOne = Array.from(document.getElementsByClassName("row1"));
let rowTwo = Array.from(document.getElementsByClassName("row2"));
let rowThree = Array.from(document.getElementsByClassName("row3"));
let columnOne = Array.from(document.getElementsByClassName("column1"));
let columnTwo = Array.from(document.getElementsByClassName("column2"));
let columnThree = Array.from(document.getElementsByClassName("column3"));
let diaOne = Array.from(document.getElementsByClassName("diagonal1"));
let diaTwo = Array.from(document.getElementsByClassName("diagonal2"));
let gameState = false;
let main = document.getElementById("main");
let xArray = [];
let rowOneArr;
let rowTwoArr;
let rowThreeArr;
let columnOneArr;
let columnTwoArr;
let columnThreeArr;
let diaOneArr;
let diaTwoArr;
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
let boardCollection = board.children;
let boardArray = Array.from(boardCollection);

function start() {
  console.log(boardArray.length);
  if (gameState === false) {
  }// } else if (player === playerTwo) {
  //   compTurn();
  // }
  boardArray.forEach((box) => {
    box.addEventListener("click", clickBox);
  });
}

function clickBox(evt) {
  if (gameState !== true) {
  } else if (evt.target.textContent !== "") {
    invalidMove.textContent = " \nPlease select an empty cell.";
  } else if (player === playerOne) {
    invalidMove.textContent = "";
    evt.target.textContent = "x";
    player = playerTwo;
    status.textContent = `${playerTwo}'s turn`;
    console.log(xArray);
    inRowArray.forEach((line) => {
      line.forEach((box) => {
        xArray.push(box.textContent);
        rowOneArr = xArray.slice(0, 3);
        rowTwoArr = xArray.slice(3, 6);
        rowThreeArr = xArray.slice(6, 9);
        columnOneArr = xArray.slice(9, 12);
        columnTwoArr = xArray.slice(12, 15);
        columnThreeArr = xArray.slice(15, 18);
        diaOneArr = xArray.slice(18, 21);
        diaTwoArr = xArray.slice(21, 24);
      });
    });
    if (rowOneArr.join(" ") === "x x x") {
      rowOne.forEach((box) => {
        box.style.backgroundColor = "blue";
      });
      win(playerOne);
    } else if (rowTwoArr.join(" ") === "x x x") {
      rowTwo.forEach((box) => {
        box.style.backgroundColor = "blue";
      });
      win(playerOne);
    } else if (rowThreeArr.join(" ") === "x x x") {
      rowThree.forEach((box) => {
        box.style.backgroundColor = "blue";
      });
      win(playerOne);
    } else if (columnOneArr.join(" ") === "x x x") {
      columnOne.forEach((box) => {
        box.style.backgroundColor = "blue";
      });
      win(playerOne);
    } else if (columnTwoArr.join(" ") === "x x x") {
      columnTwo.forEach((box) => {
        box.style.backgroundColor = "blue";
      });
      win(playerOne);
    } else if (columnThreeArr.join(" ") === "x x x") {
      columnThree.forEach((box) => {
        box.style.backgroundColor = "blue";
      });
      win(playerOne);
    } else if (diaOneArr.join(" ") === "x x x") {
      diaOne.forEach((box) => {
        box.style.backgroundColor = "blue";
      });
      win(playerOne);
    } else if (diaTwoArr.join(" ") === "x x x") {
      diaTwo.forEach((box) => {
        box.style.backgroundColor = "blue";
      });
      win(playerOne);
    }
    start();
  }
     else if (player === playerTwo) {
  let randBox = Math.floor(Math.random() * boardArray.length + 1);
  console.log(randBox);
  player = playerOne;
  status.textContent = `${playerOne}'s turn`;
  if (
    boxOne.textContent !== "" &&
    boxTwo.textContent !== "" &&
    boxThree.textContent !== "" &&
    boxFour.textContent !== "" &&
    boxFive.textContent !== "" &&
    boxSix.textContent !== "" &&
    boxSeven.textContent !== "" &&
    boxEight.textContent !== "" &&
    boxNine.textContent !== ""
  ) {
  } else if (randBox === 1) {
    if (boxOne.textContent === "") {
      boxOne.textContent = "O";
    } else {
      compTurn();
    }
  } else if (randBox === 2) {
    if (boxTwo.textContent === "") {
      boxTwo.textContent = "O";
    } else {
      compTurn();
    }
  } else if (randBox === 3) {
    if (boxThree.textContent === "") {
      boxThree.textContent = "O";
    } else {
      compTurn();
    }
  } else if (randBox === 4) {
    if (boxFour.textContent === "") {
      boxFour.textContent = "O";
    } else {
      compTurn();
    }
  } else if (randBox === 5) {
    if (boxFive.textContent === "") {
      boxFive.textContent = "O";
    } else {
      compTurn();
    }
  } else if (randBox === 6) {
    if (boxSix.textContent === "") {
      boxSix.textContent = "O";
    } else {
      compTurn();
    }
  } else if (randBox === 7) {
    if (boxSeven.textContent === "") {
      boxSeven.textContent = "O";
    } else {
      compTurn();
    }
  } else if (randBox === 8) {
    if (boxEight.textContent === "") {
      boxEight.textContent = "O";
    } else {
      compTurn();
    }
  } else if (randBox === 9) {
    if (boxNine.textContent === "") {
      boxNine.textContent = "O";
    } else {
      compTurn();
    }
  }
  inRowArray.forEach((line) => {
    line.forEach((box) => {
      xArray.push(box.textContent);
      rowOneArr = xArray.slice(0, 3);
      rowTwoArr = xArray.slice(3, 6);
      rowThreeArr = xArray.slice(6, 9);
      columnOneArr = xArray.slice(9, 12);
      columnTwoArr = xArray.slice(12, 15);
      columnThreeArr = xArray.slice(15, 18);
      diaOneArr = xArray.slice(18, 21);
      diaTwoArr = xArray.slice(21, 24);
    });
  });
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
  }
}
}

// function compTurn() {
//   let randBox = Math.floor(Math.random() * boardArray.length + 1);
//   console.log(randBox);
//   player = playerOne;
//   status.textContent = `${playerOne}'s turn`;
//   if (
//     boxOne.textContent !== "" &&
//     boxTwo.textContent !== "" &&
//     boxThree.textContent !== "" &&
//     boxFour.textContent !== "" &&
//     boxFive.textContent !== "" &&
//     boxSix.textContent !== "" &&
//     boxSeven.textContent !== "" &&
//     boxEight.textContent !== "" &&
//     boxNine.textContent !== ""
//   ) {
//   } else if (randBox === 1) {
//     if (boxOne.textContent === "") {
//       boxOne.textContent = "O";
//     } else {
//       compTurn();
//     }
//   } else if (randBox === 2) {
//     if (boxTwo.textContent === "") {
//       boxTwo.textContent = "O";
//     } else {
//       compTurn();
//     }
//   } else if (randBox === 3) {
//     if (boxThree.textContent === "") {
//       boxThree.textContent = "O";
//     } else {
//       compTurn();
//     }
//   } else if (randBox === 4) {
//     if (boxFour.textContent === "") {
//       boxFour.textContent = "O";
//     } else {
//       compTurn();
//     }
//   } else if (randBox === 5) {
//     if (boxFive.textContent === "") {
//       boxFive.textContent = "O";
//     } else {
//       compTurn();
//     }
//   } else if (randBox === 6) {
//     if (boxSix.textContent === "") {
//       boxSix.textContent = "O";
//     } else {
//       compTurn();
//     }
//   } else if (randBox === 7) {
//     if (boxSeven.textContent === "") {
//       boxSeven.textContent = "O";
//     } else {
//       compTurn();
//     }
//   } else if (randBox === 8) {
//     if (boxEight.textContent === "") {
//       boxEight.textContent = "O";
//     } else {
//       compTurn();
//     }
//   } else if (randBox === 9) {
//     if (boxNine.textContent === "") {
//       boxNine.textContent = "O";
//     } else {
//       compTurn();
//     }
//   }
// }

function clearBoard() {
  boardArray.forEach((box) => {
    box.textContent = "";
    status.textContent = "";
    box.style.backgroundColor = "";
    xArray = [];
    rowOneArr = [];
    rowTwoArr = [];
    rowThreeArr = [];
    columnOneArr = [];
    columnTwoArr = [];
    columnThreeArr = [];
    diaOneArr = [];
    diaTwoArr = [];
    startButton.disabled = false;
    resetButton.disabled = true;
    clearInterval(intervalId);
    timer.textContent = "";
    box.removeEventListener("click", clickBox);
  });
}

function win(player) {
  status.textContent = `Congratulations! ${player} Wins!!`;
  gameState = false;
}

function time() {
  count = 0;
  intervalId = setInterval(tick, 1000);
  function tick() {
    timer.textContent = `Time Elapsed ${count} seconds`;
    count++;
  }
}

startButton.addEventListener("click", (evt) => {
  startButton.disabled = true;
  gameState = true;
  resetButton.disabled = false;
  player = playerOne;
  status.textContent = `${playerOne}'s turn`;
  time();
  start();
});

resetButton.addEventListener("click", clearBoard);
