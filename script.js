let scores = {
  playerOne: 0,
  computerPlayer: 0,
  playedRounds: 0,
  round: 0,
  playerbo5: 0,
  computerbo5: 0,
};

let choices = ["rock", "paper", "scissors"];

window.addEventListener("DOMContentLoaded", (event) => {
  scores.round = 0;
  scores.playerOne = 0;
  scores.computerPlayer = 0;
  scores.playedRounds = 0;
  scores.round = 0;
});

// reset after game one  scores.playerOne and scores.computerPlayer
// reset pleyedRounds
// show who one the last Round
function resetGame() {
  let whowinPlayer = document.querySelector(".whowinPlayer");
  let whowinPc = document.querySelector(".whowinPc");
  let bo5player = document.querySelector(".bo5player");
  let bo5computer = document.querySelector(".bo5computer");

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

function showRound(winner) {
  resetGame();
  let round = document.querySelector(".roundCounter");

  round.innerText = `Round: ${scores.playedRounds}`;
  let playerScore = document.querySelector(".scorePlayer");
  playerScore.innerText = `Score: ${scores.playerOne}`;
  let computerScore = document.querySelector(".scorePC");
  computerScore.innerText = `Score: ${scores.computerPlayer}`;

  if (winner === "player") {
    document.querySelector(".winnerOne").style.visibility = "visible";
    document.querySelector(".winnerPc").style.visibility = "hidden";
    document.querySelector(".winnerOne").innerText = "Player Wins!";
    document.querySelector(".winnerPc").innerText = "";

    setTimeout(() => {
      document.querySelector(".winnerPc").style.visibility = "hidden";
      document.querySelector(".winnerOne").style.visibility = "hidden";
    }, 2000);
  } else if (winner === "computer") {
    document.querySelector(".winnerOne").style.visibility = "hidden";
    document.querySelector(".winnerPc").style.visibility = "visible";
    document.querySelector(".winnerOne").innerText = "";
    document.querySelector(".winnerPc").innerText = "Computer Wins!";

    setTimeout(() => {
      document.querySelector(".winnerPc").style.visibility = "hidden";
      document.querySelector(".winnerOne").style.visibility = "hidden";
    }, 2000);
    //show computer wins label
  } else {
    document.querySelector(".winnerOne").style.visibility = "visible";
    document.querySelector(".winnerOne").innerText = "Its a Tie!";

    document.querySelector(".winnerPc").style.visibility = "visible";
    document.querySelector(".winnerPc").innerText = "Its a Tie!";

    setTimeout(() => {
      document.querySelector(".winnerPc").style.visibility = "hidden";
      document.querySelector(".winnerOne").style.visibility = "hidden";
    }, 2000);
    //its a tie,
  }
}

// function getPlayerChoice() {
//   let playerChoice = "";
//   while (!playerChoice) {
//     let playerPrompt = prompt("Pick rock, paper, scissors!")
//       .toLowerCase()
//       .trim();
//     if (choices.includes(playerPrompt)) {
//       playerChoice = playerPrompt;
//     } else {
//       continue;
//     }
//   }
//   return playerChoice;
// }

function getComputerChoice() {
  //gets called when the button inputs it into the playRound function
  let computerChoice = Math.floor(Math.random() * 3);
  console.log(`Computer chose: ${choices[computerChoice]}`);
  let pcChose = document.querySelector(".pcChose"); //updates the dom with the pick
  pcChose.textContent = `Computer: ${
    choices[computerChoice].charAt(0).toUpperCase() +
    choices[computerChoice].slice(1)
  }`;
  return choices[computerChoice];
}

function showPlayerChoice(pChoice) {
  let playerChose = document.querySelector(".playerChose"); //updates the dom with the pick
  playerChose.textContent = `Player: ${
    pChoice.charAt(0).toUpperCase() + pChoice.slice(1)
  }`;
}

function playRound(pChoice, cChoice) {
  //gets called from a button that inputs a string: rock,paper,scissors and the function getComputerChoice()
  showPlayerChoice(pChoice);
  switch (pChoice + cChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      scores.playerOne++;
      scores.playedRounds++;
      scores.round++;
      console.log("PlayerOne wins this round!");
      showRound("player");
      return "PlayerOne wins this round!";
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      scores.computerPlayer++;
      console.log("Computer wins this round!");
      scores.playedRounds++;
      scores.round++;
      showRound("computer");
      return "Computer wins this round!";
    default:
      scores.playedRounds++;
      scores.round++;
      showRound("tie");
      console.log("Its a Tie Game!");
      return "It's a Tie game!";
  }
}

// function fiveRoundGame() {
//   for (let i = 0; i < 5; i++) {
//     alert(
//       `${playRound(getPlayerChoice(), getComputerChoice())}\nPlayer Score: ${
//         scores.playerOne
//       } \nComputer Score: ${scores.computerPlayer}\n`
//     );
//     if (i === 4) {
//       if (scores.playerOne > scores.computerPlayer) {
//         alert("PlayerOne Wins the game");
//       } else {
//         alert("Computer Wins the game");
//       }
//     }
//   }
// }
// fiveRoundGame();
