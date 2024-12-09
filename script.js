//Computer choice logic

function getComputerChoice() {
  let choiceC = Math.floor(Math.random() * 3) + 1;

  if (choiceC === 1) {
    return "rock";
  } else if (choiceC === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

//Human choice logic

function getHumanChoice() {
  let choiceH = prompt("Choose one: rock, paper or scissors!");
  return choiceH;
}

//Player score variables

let humanScore = 0;
let computerScore = 0;

//Logic for playing a single round

function playRound(humanChoice, computerChoice) {
  let lowercaseChoice = humanChoice.toLowerCase();

  if (lowercaseChoice === computerChoice) {
    console.log("It is a draw!");
  } else if (lowercaseChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock beats scissors");
    humanScore++;
  } else if (lowercaseChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rock beats scissors");
    computerScore++;
  } else if (lowercaseChoice === "paper" && computerChoice === "rock") {
    console.log("You win! Paper beats rock");
    humanScore++;
  } else if (lowercaseChoice === "rock" && computerChoice === "paper") {
    console.log("You lose! Paper beats rock");
    computerScore++;
  } else if (lowercaseChoice === "scissors" && computerChoice === "paper") {
    console.log("You win! Scissors beat paper");
    humanScore++;
  } else if (lowercaseChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose! Scissors beat paper");
    computerScore++;
  }
}

//logic to play the entire game (5 rounds)

function playGame() {
  for (let round = 1; round <= 5; round++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`You score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
  }

  if (humanScore === computerScore) {
    console.log("Result ----- Draw!");
  } else if (humanScore > computerScore) {
    console.log("Result ----- Player Wins!");
  } else {
    console.log("Result ----- Computer wins!");
  }
}

playGame();
