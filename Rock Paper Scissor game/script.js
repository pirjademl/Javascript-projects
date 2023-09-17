const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultText = document.getElementById("result");
const buttons = document.querySelectorAll(".options");
buttons.forEach((possibleChoice) => {
  possibleChoice.addEventListener("click", (e) => {
    const userChoice = possibleChoice.querySelector("img").alt;
    userChoiceDisplay.innerHTML = userChoice;
    let computerChoice = getCompChoice();
    computerChoiceDisplay.textContent = computerChoice;
    determineResult(userChoice, computerChoice);
  });
}); 
function getCompChoice() {
  let choices = ["rock", "paper", "scissor"];
  let randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}
function determineResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    resultText.textContent = "It's a tie";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    resultText.textContent = "You win!";
  } else {
    resultText.textContent = "You Lost ";
  }
}
