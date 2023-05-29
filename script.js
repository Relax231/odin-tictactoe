let scores = {
  playerOne: 0,
  computerPlayer: 0,
  playedRounds: 0,
  playerbo5: 0,
  computerbo5: 0,
};

let choices = ["rock", "paper", "scissors"];

window.addEventListener("DOMContentLoaded", (event) => {
  scores.playerOne = 0;
  scores.computerPlayer = 0;
  scores.playedRounds = 0;
});

function resetGame() {
  const whowinPlayer = document.querySelector(".whowinPlayer");
  const whowinPc = document.querySelector(".whowinPc");
  const bo5player = document.querySelector(".bo5player");
  const bo5computer = document.querySelector(".bo5computer");

  if (scores.playedRounds === 5) {
    if (scores.playerOne > scores.computerPlayer) {
      whowinPlayer.textContent =
        "PlayerOne was the winner of the last bo5 Round!";
      whowinPc.textContent = "";
      scores.playerbo5++;
      bo5player.textContent = `bo5 wins: ${scores.playerbo5}`;
      console.log("Player Wins!");
    } else if (scores.playerOne < scores.computerPlayer) {
      whowinPc.textContent =
        "The Computer was the winner of the last bo5 Round!";
      whowinPlayer.textContent = "";
      scores.computerbo5++;
      bo5computer.textContent = `bo5 wins: ${scores.computerbo5}`;
      console.log("Computer Wins!");
    } else {
      whowinPlayer.textContent = "Last Round was a Tie!";
      whowinPc.textContent = "Last Round was a Tie!";
    }

    scores.playedRounds = 0;
    scores.playerOne = 0;
    scores.computerPlayer = 0;
  }
}

function updateDOM() {
  const round = document.querySelector(".roundCounter");
  round.textContent = `Round: ${scores.playedRounds}`;

  const playerScore = document.querySelector(".scorePlayer");
  playerScore.textContent = `Score: ${scores.playerOne}`;

  const computerScore = document.querySelector(".scorePC");
  computerScore.textContent = `Score: ${scores.computerPlayer}`;
}

function showWinner(winner) {
  const winnerOne = document.querySelector(".winnerOne");
  const winnerPc = document.querySelector(".winnerPc");

  winnerOne.style.visibility = "hidden";
  winnerPc.style.visibility = "hidden";

  if (winner === "player") {
    winnerOne.textContent = "Player Wins!";
    winnerOne.style.visibility = "visible";
  } else if (winner === "computer") {
    winnerPc.textContent = "Computer Wins!";
    winnerPc.style.visibility = "visible";
  } else {
    winnerOne.textContent = "It's a Tie!";
    winnerPc.textContent = "It's a Tie!";
    winnerOne.style.visibility = "visible";
    winnerPc.style.visibility = "visible";
  }

  setTimeout(() => {
    winnerOne.style.visibility = "hidden";
    winnerPc.style.visibility = "hidden";
  }, 2000);
}

function showRound(winner) {
  resetGame();
  updateDOM();
  showWinner(winner);
}

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);
  console.log(`Computer chose: ${choices[computerChoice]}`);
  const pcChose = document.querySelector(".pcChose"); // updates the DOM with the pick
  pcChose.textContent = `Computer: ${
    choices[computerChoice].charAt(0).toUpperCase() +
    choices[computerChoice].slice(1)
  }`;
  return choices[computerChoice];
}

function showPlayerChoice(pChoice) {
  const playerChose = document.querySelector(".playerChose"); // updates the DOM with the pick
  playerChose.textContent = `Player: ${
    pChoice.charAt(0).toUpperCase() + pChoice.slice(1)
  }`;
}

function playRound(pChoice, cChoice) {
  showPlayerChoice(pChoice); //my button inputs the pChoice here. so i use it to call the showPlayerChoice funciton to update the DOM
  switch (pChoice + cChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      scores.playerOne++;
      scores.playedRounds++;
      console.log("PlayerOne wins this round!");
      showRound("player");
      return "PlayerOne wins this round!";
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      scores.computerPlayer++;
      console.log("Computer wins this round!");
      scores.playedRounds++;
      showRound("computer");
      return "Computer wins this round!";
    default:
      scores.playedRounds++;
      showRound("tie");
      console.log("It's a Tie Game!");
      return "It's a Tie game!";
  }
}
