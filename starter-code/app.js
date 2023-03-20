const gameIntro = document.querySelector(".game-intro-info");
const introButtons = document.querySelectorAll(".choice-btn");
const gameBoardSection = document.querySelector(".game-board-section");
const soundBtn = document.querySelector(".game-board-section svg");

soundBtn.addEventListener("click", () => {
  const soundBar = soundBtn.querySelectorAll("path");
  soundBar.forEach((bar) => {
    bar.setAttribute("style", "display:none");
  });
});

const playerIcon = document.querySelectorAll(".marks-btn-wrapper button");
playerIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    if (icon.classList.contains("")) {
    }
  });
});

const opponentMark = document.querySelector(".opponent-score");
introButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("vs-cpu-btn")) opponentMark.innerHTML = `O (cpu)<span class="o-score">0</span>`;
    else opponentMark.innerHTML = `O (player)<span class="o-score">0</span>`;
    gameIntro.classList.add("hide");
    gameBoardSection.classList.add("show");
  });
});

let move = "game-circle";
let score = 0;

const gameBoard = document.querySelector(".game-board");
const infoTab = document.querySelector(".turn-display");
const startCells = ["", "", "", "", "", "", "", "", ""];

const createBoard = () => {
  startCells.forEach((_cell, index) => {
    const createBlocks = document.createElement("div");
    createBlocks.id = index;
    createBlocks.classList.add("square");
    createBlocks.addEventListener("click", addMove);
    gameBoard.append(createBlocks);
  });
};

createBoard();

function addMove(e) {
  const moveDisplay = document.createElement("div");
  move = move === "game-circle" ? "game-cross" : "game-circle";
  moveDisplay.classList.add(move);
  e.target.append(moveDisplay);
  e.target.removeEventListener("click", addMove);
  checkScores();
}

const checkScores = () => {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const blocks = document.querySelectorAll(".square");
  const crossScores = document.querySelector(".x-score");
  const circleScores = document.querySelector(".o-score");
  //   Cross Won
  winningCombinations.forEach((arr) => {
    const crossWon = arr.every((element) => blocks[element].firstChild?.classList.contains("game-cross"));
    if (crossWon) {
      blocks.forEach((block) => {
        crossScores.textContent = score + 1;
        block.replaceWith(block.cloneNode(true));
        return;
      });
    }
    console.log(crossWon);
  });

  //   Circle Won
  winningCombinations.forEach((arr) => {
    const circleWon = arr.every((element) => blocks[element].firstChild?.classList.contains("game-circle"));
    if (circleWon) {
      blocks.forEach((block) => {
        circleScores.textContent = score + 1;
        block.replaceWith(block.cloneNode(true));
        return;
      });
    }
    console.log(circleWon);
  });
};
