playerOne = {
  score: 0,
  playerChoice: function () {
    let playerChoice = "";
    while (!playerChoice) {
      let playerPrompt = prompt("Pick rock, paper, scissors!")
        .toLowerCase()
        .trim();
      if (
        playerPrompt === "rock" ||
        playerPrompt === "paper" ||
        playerPrompt === "scissors"
      ) {
        playerChoice = playerPrompt;
      } else {
        continue;
      }
    }
    return playerChoice;
  },
};

computerPlayer = {
  score: 0,
  computerChoice: function () {
    let computerChoice = Math.floor(Math.random() * 3);
    let compChoiceArr = ["rock", "paper", "scissors"];
    console.log(compChoiceArr[computerChoice]);
    return compChoiceArr[computerChoice];
  },
};

function checkWinner(pChoice, cChoice) {
  if (pChoice === cChoice) {
    return "It's a Tie game!";
  } else if (pChoice === "rock" && cChoice === "paper") {
    computerPlayer.score++;
    return "Computer wins this round!";
  } else if (pChoice === "paper" && cChoice === "scissor") {
    computerPlayer.score++;
    return "Computer wins this round!";
  } else if (pChoice === "scissors" && cChoice === "rock") {
    computerPlayer.score++;
    return "Computer wins this round!";
  } else {
    playerOne.score++;
    return "PlayerOne wins this round!";
  }
}

function whoFiveGame() {
  while (computerPlayer.score <= 5 && playerOne.score <= 5) {
    if (computerPlayer.score === 5) {
      alert("The computer wins!");
      break;
    } else if (playerOne.score === 5) {
      alert("The player wins!");
      break;
    } else {
      alert(
        `${checkWinner(
          playerOne.playerChoice(),
          computerPlayer.computerChoice()
        )}\nPlayer Score: ${playerOne.score} \nComputer Score: ${
          computerPlayer.score
        }\n`
      );
    }
  }
}

function fiveRoundGame() {
  for (let i = 0; i < 5; i++) {
    alert(
      `${checkWinner(
        playerOne.playerChoice(),
        computerPlayer.computerChoice()
      )}\nPlayer Score: ${playerOne.score} \nComputer Score: ${
        computerPlayer.score
      }\n`
    );
    if (i === 4) {
      if (playerOne.score > computerPlayer.score) {
        alert("PlayerOne Wins the game");
      } else {
        alert("Computer Wins the game");
      }
    }
  }
}

fiveRoundGame();
//whoFiveGame();
