function dice() {
  userChoice=prompt("What is your choice: `rock`, `paper` or `scissors`?");
  if (userChoice === "rock") {
    alert("You are winner 🎉")
  } else if (userChoice === "paper") {
    alert("Game over, please try again!")
  } else if (userChoice === "scissors"){
    alert("Game over, please try one more time")
  } else {
    alert("Wrong value⚠️. Try again!")
  }
}