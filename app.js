// import functions and grab DOM elements
import { getRandomThrow } from './get-random-throw.js';
import { didUserWin } from './utils.js';

const computerThrew = document.getElementById('computer-threw-id');
const roundResult = document.getElementById('round-result-id');

const playButton = document.getElementById('play-button-id');

const totalWins = document.getElementById('total-wins-id');
const totalLosses = document.getElementById('total-losses-id');
const totalDraws = document.getElementById('total-draws-id');
const totalResets = document.getElementById('total-resets-id');

const resetButton = document.getElementById('reset-button-id');

// initialize state
let wins = 0;
let losses = 0;
let draws = 0;
let resets = 0;

// set event listeners
playButton.addEventListener('click', () => {
    // get user input
    let selected = document.querySelector('input[type=radio]:checked');
    let userChoice = selected.value;

    let computerChoice = getRandomThrow();

    // use user input to update state
    const isWinner = didUserWin(userChoice, computerChoice);

    // update DOM to reflect the new state
    if (isWinner === 'win') {
        computerThrew.innerText = computerChoice;
        roundResult.innerText = 'You WON this round!';
        totalWins.innerText = wins;
        wins++;
    } else if (isWinner === 'loss') {
        computerThrew.innerText = computerChoice;
        roundResult.innerText = 'You LOST this round!';
        totalLosses.innerText = losses;
        losses++;
    } else if (isWinner === 'draw') {
        computerThrew.innerText = computerChoice;
        roundResult.innerText = 'This round was a DRAW!';
        totalDraws.innerText = draws;
        draws++;
    }
});

resetButton.addEventListener('click', () => {
    computerThrew.innerText = 'Undetermined';
    roundResult.innerText = 'Undetermined';
    wins = 0;
    totalWins.innerText = wins;
    losses = 0;
    totalLosses.innerText = losses;
    draws = 0;
    totalDraws.innerText = draws;
    totalResets.innerText = resets;
    resets++;
});