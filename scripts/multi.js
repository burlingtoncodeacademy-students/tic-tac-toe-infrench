let player;
let playerOne;
let playerTwo;
let count;
let intervalId;
let startButton = document.getElementById("start");
let resetButton = document.getElementById("reset");
let board = document.getElementById("board");
let status = document.getElementById("status");
let timer = document.getElementById("timer");
let invalidMove = document.getElementById("invalid");
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
  console.log("inside start");
  boardArray.forEach((box) => {
    box.addEventListener("click", clickBox);
  });
}

function clickBox(evt) {
  let xArray = [];
  let rowOneArr;
  let rowTwoArr;
  let rowThreeArr;
  let columnOneArr;
  let columnTwoArr;
  let columnThreeArr;
  let diaOneArr;
  let diaTwoArr;
  console.log(evt.target);
  if (gameState !== true) {
  } else if (evt.target.textContent !== "") {
    invalidMove.textContent = " \nPlease select an empty cell.";
  } else if (player === playerOne) {
    invalidMove.textContent = "";
    evt.target.textContent = "x";
    player = playerTwo;
    status.textContent = `${playerTwo}'s turn`;
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
  } else if (player === playerTwo) {
    evt.target.textContent = "O";
    player = playerOne;
    status.textContent = `${playerOne}'s turn`;
    invalidMove.textContent = "";
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
  clearInterval(intervalId)
}

function time() {
  count = 0;
  intervalId = setInterval(tick, 1000);
  function tick() {
    timer.textContent = `Time Elapsed ${count} seconds`;
    count++;
  }
}

function chooseName() {
  let form = document.createElement("form");
  let playerOneName = document.createElement("input");
  let playerTwoName = document.createElement("input");
  let submit = document.createElement("input");
  playerOneName.type = "text";
  playerTwoName.type = "text";
  submit.type = "submit";
  form.appendChild(playerOneName);
  form.appendChild(playerTwoName);
  form.appendChild(submit);
  main.appendChild(form);
  form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    if (playerOneName.value === "") {
      playerOneName.value = "Player X";
    }
    if (playerTwoName.value === "") {
      playerTwoName.value = "Player O";
    }
    playerOne = playerOneName.value;
    playerTwo = playerTwoName.value;
    player = playerOne;
    status.textContent = `${playerOne}'s turn`;
    main.removeChild(form);
    time();
    start();
    
  });
}

startButton.addEventListener("click", (evt) => {
  startButton.disabled = true;
  gameState = true;
  resetButton.disabled = false;
  chooseName();
});

resetButton.addEventListener("click", clearBoard);


