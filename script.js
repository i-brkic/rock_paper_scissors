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

//Player score variables
const resultHuman = document.querySelector(".result-human");
const resultComputer = document.querySelector(".result-computer");

resultHuman.textContent = 0;
resultComputer.textContent = 0;

const announceResults = document.querySelector(".announce");

//Playing the game

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    announceResults.textContent = "It is a draw!";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    announceResults.textContent = "You win! Rock beats scissors";
    resultHuman.textContent++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    announceResults.textContent = "You lose! Rock beats scissors";
    resultComputer.textContent++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    announceResults.textContent = "You win! Paper beats rock";
    resultHuman.textContent++;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    announceResults.textContent = "You lose! Paper beats rock";
    resultComputer.textContent++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    announceResults.textContent = "You win! Scissors beat paper";
    resultHuman.textContent++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    announceResults.textContent = "You lose! Scissors beat paper";
    resultComputer.textContent++;
  }
}

const buttons = document.querySelectorAll(".choice-button");

const restartHidden = document.querySelector(".hidden");

function disableButtons() {
  for (let button of buttons) {
    button.disabled = true;
  }
}

for (let button of buttons) {
  button.addEventListener("click", function () {
    const humanSelection = button.textContent.toLowerCase();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    if (parseInt(resultHuman.textContent) >= 5) {
      announceResults.textContent = "You win the game! Bravo!";
      disableButtons();
      restartHidden.classList.toggle("hidden");
    } else if (parseInt(resultComputer.textContent) >= 5) {
      announceResults.textContent = "OOPS! Better luck next time...";
      disableButtons();
      restartHidden.classList.toggle("hidden");
    }
  });
}

const restartButton = document.querySelector(".restart-button");

function enableButtons() {
  for (button of buttons) {
    button.disabled = false;
  }
}

restartButton.addEventListener("click", function () {
  resultHuman.textContent = 0;
  resultComputer.textContent = 0;
  announceResults.textContent = "Let'start! ";
  enableButtons();
  restartHidden.classList.add("hidden");
});
