'use strict';
const players = document.querySelector('.players');
const guns = document.querySelector('.weapons');
const playerEl = document.querySelector('.player');
const computerEl = document.querySelector('.computer');
const weapons = document.querySelectorAll('.btn');
const comScore = document.querySelector('.c-score');
const plaScore = document.querySelector('.p-score');
const result = document.querySelector('.wining-message');
const resetBtn = document.querySelector('.reset-game');
const winner = document.querySelector('.winner');



let playerScore = 0;
let computerScore = 0;

function checker(input) {
    const choices = ['✊', '✋', '✌'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    computerEl.innerHTML = choices[randomIndex];

    playerEl.innerHTML = `${input}`;

    let computer_choice = choices[randomIndex];
    if(computer_choice === input) {
        result.textContent = 'DRAW';
    } else if(computer_choice === '✊' && input === '✌') {
        computerScore++;
        comScore.textContent = computerScore;
        result.textContent = 'Computer Wins'
    } else if(computer_choice === '✋' && input === '✊') {
        computerScore++;
        comScore.textContent = computerScore;
        result.textContent = 'Computer Wins'
    } else if(computer_choice === '✌' && input === '✋') {
        computerScore++;
        comScore.textContent = computerScore;
        result.textContent = 'Computer Wins'
    } else {
        result.textContent = 'You Win'
        playerScore++;
        plaScore.textContent = playerScore;
    } if(playerScore === 10 && computerScore < 10) {
        youWin();
       
    } if(computerScore === 10 && playerScore < 10) {
        computerWin();
    }


}  
    
function youWin() {
    players.classList.add('hidden');
    guns.classList.add('hidden');
    result.classList.add('hidden');
    resetBtn.classList.remove('hidden');
    winner.textContent = 'YOU WON THE GAME';
    resetBtn.addEventListener('click', () => {
        players.classList.remove('hidden');
        guns.classList.remove('hidden');
        result.classList.remove('hidden');
        resetBtn.classList.add('hidden');
        window.location.reload()
    })
    
}
function computerWin() {
    players.classList.add('hidden');
    guns.classList.add('hidden');
    result.classList.add('hidden');
    resetBtn.classList.remove('hidden');
    winner.textContent = 'COMPUTER WON THE GAME';
    resetBtn.addEventListener('click', () => {
        players.classList.remove('hidden');
        guns.classList.remove('hidden');
        result.classList.remove('hidden');
        resetBtn.classList.add('hidden');
        window.location.reload()
    })
}

