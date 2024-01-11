
let playerScore = 0;


function updateScore() {
    playerScore += 1; 
    sessionStorage.setItem('playerScore', playerScore.toString());
  }
  

function displayScore() {

  const scoreBoard = document.getElementById('score-board');

  scoreBoard.textContent = playerScore.toString(); 
}


displayScore();



function displayScoreOnGameOver() {

    const score = sessionStorage.getItem('playerScore');
  
 
    document.getElementById('score-board').textContent = score || '0'; // Display 0 if the score is not found
  }
  

  displayScoreOnGameOver();



  const playButton = document.getElementById('play-again-button');
  

  playButton.addEventListener('click', function() {
    playerScore = 0; 
    sessionStorage.setItem('playerScore', playerScore.toString());
    window.location.href = './game.html';

  });