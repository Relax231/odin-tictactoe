let scores = {
  playerOne: 0,
  computerPlayer: 0,
};

let choices = ["rock", "paper", "scissors"];

function getPlayerChoice() {
  let playerChoice = "";
  while (!playerChoice) {
    let playerPrompt = prompt("Pick rock, paper, scissors!")
      .toLowerCase()
      .trim();
    if (choices.includes(playerPrompt)) {
      playerChoice = playerPrompt;
    } else {
      continue;
    }
  }
  return playerChoice;
}

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  console.log(choices[computerChoice]);
  return choices[computerChoice];
}

function checkWinner(pChoice, cChoice) {
  switch (pChoice + cChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      scores.playerOne++;
      return "PlayerOne wins this round!";
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      scores.computerPlayer++;
      return "Computer wins this round!";
    default:
      return "It's a Tie game!";
  }
}

function fiveRoundGame() {
  for (let i = 0; i < 5; i++) {
    alert(
      `${checkWinner(getPlayerChoice(), getComputerChoice())}\nPlayer Score: ${
        scores.playerOne
      } \nComputer Score: ${scores.computerPlayer}\n`
    );
    if (i === 4) {
      if (scores.playerOne > scores.computerPlayer) {
        alert("PlayerOne Wins the game");
      } else {
        alert("Computer Wins the game");
      }
    }
  }
}

fiveRoundGame();
