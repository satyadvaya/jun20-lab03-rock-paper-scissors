export function getRandomThrow() {
    const randomThrow = Math.ceil(Math.random() * 3);
    if (randomThrow === 1) {
        return 'rock';
    } else if (randomThrow === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}