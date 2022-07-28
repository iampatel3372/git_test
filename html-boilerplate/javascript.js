const rock = document.querySelector(".Rock");
const paper = document.querySelector(".Paper");
const scissor = document.querySelector(".Scissor")
const main = document.querySelector('.main');
const youP = document.querySelector('.youP');
const computerP = document.querySelector('.computerP');

function computer(){
    choice = ["Rock", "Paper", "Scissor"];
    return choice[Math.floor(Math.random()*3)];
}
let player = 0, computerScore = 0;
function playRound(e) {
    if(player >= 5 || computerScore >= 5) {
        return;
    }
    computerSelection = computer();
    computerSelection = computerSelection.toLowerCase();
    if(this == rock) {
        if(computerSelection == 'paper') {computerScore++; computerP.textContent = `computer: ${computerScore}`;}
        else if(computerSelection == 'scissor') {player++; youP.textContent = `you: ${player}`;}
    } else if(this == paper) {
        if(computerSelection == 'scissor') {computerScore++; computerP.textContent = `computer: ${computerScore}`;}
        else if(computerSelection == 'rock') {player++; youP.textContent = `you: ${player}`;}
    } else if(this == scissor) {
        if(computerSelection == 'rock') {computerScore++; computerP.textContent = `computer: ${computerScore}`;}
        else if(computerSelection == 'paper') {player++; youP.textContent = `you: ${player}`;}
    }
    console.log(player);
    console.log(computerScore);
    if(player == 5) {
        const winner = document.createElement('div');
        winner.textContent = `You:   ${player}  Computer:  ${computerScore}  !! Congrats you won !!`;
        
        main.appendChild(winner);
        console.log(winner);
        return;
    } else if(computerScore == 5) {
        const winner = document.createElement('div');
        winner.textContent = `You:   ${player}  Computer:   ${computerScore}   !! Computer won !!`;
        
        main.appendChild(winner);
        console.log(winner);
        return;
    }
}

rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissor.addEventListener('click', playRound);