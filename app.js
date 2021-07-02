// import functions and grab DOM elements
import { getRandomThrow } from './get-random-throw.js';
import { didUserWin } from './utils.js';

const computerThrew = document.getElementById('computer-threw-id');
const roundResult = document.getElementById('round-result-id');

const playButton = document.getElementById('button-id');

const totalWins = document.getElementById('total-wins-id');
const totalLosses = document.getElementById('total-losses-id');
const totalDraws = document.getElementById('total-draws-id');

// initialize state
let wins = 0;
let losses = 0;
let draws = 0;

// set event listeners
playButton.addEventListener('click', () => {
    const selected = document.querySelector('input[type=radio]:checked');

    const userChoice = selected.value;
    const computerChoice = getRandomThrow();

    const isWinner = didUserWin(userChoice, computerChoice);
    console.log(isWinner);

    if (isWinner === 'win') {
        wins++;
        totalWins.innerText = wins;
        roundResult.innerText = 'You WON this round!';
        computerThrew.innerText = computerChoice;
    } if (isWinner === 'loss') {
        losses++;
        totalLosses.innerText = losses;
        roundResult.innerText = 'You LOST this round!';
        computerThrew.innerText = computerChoice;
    } if (isWinner === 'draw') {
        draws++;
        totalDraws.innerText = draws;
        roundResult.innerText = 'This round was a DRAW!';
        computerThrew.innerText = computerChoice;
    }
});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
