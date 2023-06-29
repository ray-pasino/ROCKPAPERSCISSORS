/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/


const totalScore = {computerScore: 0, playerScore: 0}
// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
  const rpsChoice = [ 'Rock', 'Paper', 'Scissors']
  const randomNumber = Math.floor(Math.random() * 3)
  return rpsChoice[randomNumber]
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  
  let score;

  // All situations where human draws, set `score` to 0
  if (playerChoice == computerChoice) {
    score = 0
      // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  }else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
    score = 1

  }else if (playerChoice == 'Paper' && computerChoice == 'Rock'){
    score = 1

  }else if (playerChoice == 'Scissors' && computerChoice == 'Paper'){
    score = 0

  }
  // Otherwise human loses (aka set score to -1)
  
  else {

    score = -1
  }
 
  return score


  
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')
  

  if (score == -1){
    resultDiv.innerText = 'You Lost!'
    

  } else if (score == 0){
    resultDiv.innerText =  "It's a tie!"
    

  }else{

    resultDiv.innerText =  'You Won!'
    
  }
  handsDiv.innerText = `👨${playerChoice} vs 🤖${computerChoice}`
  playerScoreDiv.innerText = `Your Score: ${totalScore['playerScore']}`
  
  
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
const computerChoice = getComputerChoice()
const score = getResult(playerChoice, computerChoice)
totalScore['playerScore'] += score
showResult(score, playerChoice, computerChoice)
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
const rpsButtons = document.querySelectorAll('.rpsButton')
  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument
rpsButtons.forEach (rpsButton => {
  rpsButton.onclick = () => onClickRPS(rpsButton.value)
})
 

const endGameButton = document.getElementById('endGameButton')
endGameButton.onclick = () => endGame(totalScore)

  // Add a click listener to the end game button that runs the endGame() function on click
  
}

// ** endGame function clears all the text on the DOM **
function endGame(totalScore) {
  totalScore['playerScore'] = 0
  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')
  

  resultDiv.innerText = ''
  handsDiv.innerText = ''
  playerScoreDiv.innerText = ''
}

playGame()