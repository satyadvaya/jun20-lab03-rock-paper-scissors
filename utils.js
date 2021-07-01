export function didUserWin {
    if (player === computer) {
        return ('This round is a DRAW!');
    } else if (player === 'rock' && computer === 'scissors') {
        return ('You WIN this round!');
    } else if (player === 'paper' && computer === 'rock') {
        return ('You WIN this round!');
    } else if (player === 'scissors' && computer === 'paper') {
        return ('You WIN this round!');
    } else return ('You LOSE this round!');
}