
let timeLeft = 60; 
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


const number1 = getRandomNumber(1, 100);
const number2 = getRandomNumber(1, 100);


document.getElementById("number1").textContent = number1;
document.getElementById("number2").textContent = number2;


// Select option buttons by their IDs
const greaterThanButton = document.getElementById("greater-than");
const equalToButton = document.getElementById("equal-to");
const lesserThanButton = document.getElementById("lesser-than");


greaterThanButton.addEventListener("click", function () {
  checkRelation("greater"); 
});

equalToButton.addEventListener("click", function () {
  checkRelation("equal"); 
});

lesserThanButton.addEventListener("click", function () {
  checkRelation("lesser"); 
});


function checkRelation(choice) {
  let isCorrect = false;

  if (choice === "greater" && number1 > number2) {
    isCorrect = true;
  } else if (choice === "equal" && number1 === number2) {
    isCorrect = true;
  } else if (choice === "lesser" && number1 < number2) {
    isCorrect = true;
  }

  
  if (isCorrect) {
   
    timeLeft = 60;
    updateScore()
   
    const newNumber1 = getRandomNumber(1, 100);
    const newNumber2 = getRandomNumber(1, 100);

    
    document.getElementById("number1").textContent = newNumber1;
    document.getElementById("number2").textContent = newNumber2;
  } else {
    
    window.location.href = "./gameover.html";
  }
}



const timerElement = document.getElementById("timer"); // Assuming you have a timer element on game.html


function updateTimer() {
  timerElement.textContent = `Time Left: ${timeLeft} seconds`;

  if (timeLeft === 0) {
    endGame(); 
  } else {
    timeLeft--;
  }
}


function startTimer() {
  setInterval(updateTimer, 1000); // Update the timer every second (1000 milliseconds)
}


startTimer();
