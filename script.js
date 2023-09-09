
//function to get the computer choice randomly
function getComputerChoice() {
    let words = ["rock", "paper", "scissors"];
    return words[Math.floor(Math.random() * 3)];
}
// declare two global variables to modify it in the function to count how much earn each one 

let computerScore = 0;
let playerScore = 0;

//function to compare who is the winner each round
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        setRoundResult("TIE!");
    } else if ((playerSelection.toLowerCase() == "rock" & computerSelection.toLowerCase() == "paper") || (playerSelection.toLowerCase() == "paper" & computerSelection.toLowerCase() == "scissors") || (playerSelection.toLowerCase() == "scissors" & computerSelection.toLowerCase() == "rock")) {
        setRoundResult("you lose");
        setCounts(++computerScore);
    } else {
        setRoundResult("you win");
        setCounts(++playerScore);
    }
}

//function to display what choose each one
function updatePlayerAndComputerDisplay(playerSelection, computerSelection) {
    playerChoiceText.textContent = playerSelection;
    computerChoiceText.textContent = computerSelection;
    if (playerSelection == "rock") {
        playerChoiceText.style.color = '#ED3493';
    } else if (playerSelection == "paper") {
        playerChoiceText.style.color = '#F8C800';
    } else if (playerSelection == "scissors") {
        playerChoiceText.style.color = '#00CAE5';
    }
    if (computerSelection == "rock") {
        computerChoiceText.style.color = '#ED3493';
    } else if (computerSelection == "paper") {
        computerChoiceText.style.color = '#F8C800';
    } else if (computerSelection == "scissors") {
        computerChoiceText.style.color = '#00CAE5';
    }
}

//display the result of each round
function setRoundResult(result) {
    roundResult.textContent = result;
    if (result == "TIE!") {
        roundResult.style.color = '#6A5E5E';
    } else if (result == "you lose") {
        roundResult.style.color = '#FF1818';
    } else if (result == "you win") {
        roundResult.style.color = '#5EFA28';
    }
}

//display the score of each round
function setCounts() {
    computerCount.textContent = computerScore;
    userCount.textContent = playerScore;
}

//testing to know if there is a winner and display play again button
function checkForWinner() {
    if (playerScore == 5 || computerScore == 5) {
        //display the result and play again button
        playAgainBtnDiv.classList.remove('noneBtn');
        playAgainBtnDiv.classList.add('displayBtn');
        if (playerScore > computerScore) {
            finalResult.textContent = "Congrats! you win";
        } else if (playerScore < computerScore) {
            finalResult.textContent = "Game over !!!";
        }
        playAgain();
    }
}

// function to reset all the values
function playAgain() {
    playAgainBtn.addEventListener('click', function () {
        playerScore = 0;
        computerScore = 0;
        setCounts();
        updatePlayerAndComputerDisplay('', '');
        setRoundResult('');
        playAgainBtnDiv.classList.remove('displayBtn');
        playAgainBtnDiv.classList.add('noneBtn');

    })
}

const userChoiceElement = document.querySelector('.elements');
const startBtn = document.querySelector('#startBtn');
const playerChoiceText = document.querySelector('.playerChoice');
const computerChoiceText = document.querySelector('.computerChoice');
const roundResult = document.querySelector('.roundResult p');
const userCount = document.querySelector(".userCount");
const computerCount = document.querySelector('.computerCount');
const finalResult = document.querySelector('.finalResult');
const playAgainBtnDiv = document.querySelector('div.noneBtn');
const playAgainBtn = document.querySelector('#playAgainBtn');

window.onload = function play() {
    userChoiceElement.addEventListener('click', function (e) {
        let playerSelection = e.target.getAttribute('data-name');
        let computerSelection = getComputerChoice();
        updatePlayerAndComputerDisplay(playerSelection, computerSelection);
        playRound(playerSelection, computerSelection);
        checkForWinner();
    })
}
startBtn.addEventListener('click', function () {
    window.location.href = 'gamePage.html';

})
