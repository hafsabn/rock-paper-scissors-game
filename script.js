
function getComputerChoice() {
    let words = ["Rock", "Paper", "Scissor"];
    return words[Math.floor(Math.random() * 3)];
}
// declare two global variables to modify it in the function to count how much each one win
let computer_count = 0;
let player_count = 0;

function playRound(playerSelection, computerSelection) {
    //each player choice i did all the probabilities
    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection.toLowerCase() == "rock") {
            console.log("TIE!");
        } else if (computerSelection.toLowerCase() == "paper") {
            console.log("You lose , paper covers rock");
            computer_count++;
        } else{
            console.log(`You win , rock beats scissor`);
            player_count++;
        }
    } else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection.toLowerCase() == "paper") {
            console.log( `TIE!`);
        } else if (computerSelection.toLowerCase() == "scissor") {
            console.log( `You lose , scissor cuts paper`);
            computer_count++;
        } else {
            console.log(`You win , paper covers rock`);
            player_count++;
        }
    } else if (playerSelection.toLowerCase() == "scissor") {
        if (computerSelection.toLowerCase() == "scissor") {
            console.log( `TIE!`);
        } else if (computerSelection.toLowerCase() == "rock") {
            console.log(`You lose , rock beats scissor`);
            computer_count++;
        } else {
            console.log(`You win , scissor cuts paper`);
            player_count++;
        }
    }
}
    function game() {
        for (let i = 1; i <= 5; i++) {
            const playerSelection = prompt("What is your choice?", '');
            if (playerSelection === "rock" || playerSelection === "scissor" || playerSelection === "paper") {
                const computerSelection = getComputerChoice();
                console.log("The computer choice: " + computerSelection.toLocaleLowerCase());
                console.log(playRound(playerSelection, computerSelection));
            } else { //if the player enter something out of those words exit the game   
                confirm("Try again you didn't enter an existent word");
                 break;
            }
        }
        //testing to know who is the winner
        if(player_count > computer_count ){
            console.log("You are the winner");
        }else if(player_count < computer_count){
            console.log("Computer is the winner");
        }else{
            console.log("Tie ... no one win");
        }
        console.log(computer_count);
        console.log(player_count);

    }

    game();
