// Wait for the DOM to finish loading before running the game
// Get the button elements and add avent listeners to them

document.addEventListener("DOMContentLoaded", function() {
  let buttons = document.getElementsByTagName("button");

  for (let button of buttons) {
    button.addEventListener("click", function() {
      if (this.getAttribute("data-type") === "submit") {
        alert("You clicked Submit!");
      } else {
        let gameType = this.getAttribute("data-type");
        alert(`You clicked ${gameType}`);  
      }
    })
  }
})


// FUNCTION TO RUN THE GAME 
function runGame() {

}

//  CHECKS THE USERS ANSWER
function checkAnswer() {

}

// PERFORM CALCULATION AND RETURN CORRECT ANSWER
function calculateCorrectAnswer() {

}

// INCREMENT THE SCORE IF ANSWER IS CORRECT
function incrementScore() {

}

// INCREMENT THE INCORRECT ANSWER COUNT IF THE ANSWER IS WRONG
function incrementWrongAnswer() {

}

// DISPLAY THE ADDITION QUESTION
function displayAdditionQuestion() {

}

// DISPLY THE SUBTRACT QUESTION
function displaySubtractQuestion() {

}

// DISPLAY THE MULTIPLY
function displayMultiplyQuestion() {

}


