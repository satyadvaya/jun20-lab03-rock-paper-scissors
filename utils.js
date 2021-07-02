export function didUserWin(player, computer) {
    if (player === computer) {
        return ('draw');
    } else if (player === 'rock' && computer === 'scissors') {
        return ('win');
    } else if (player === 'paper' && computer === 'rock') {
        return ('win');
    } else if (player === 'scissors' && computer === 'paper') {
        return ('win');
    } else return ('loss');
}