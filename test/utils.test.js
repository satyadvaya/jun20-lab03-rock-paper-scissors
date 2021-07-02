// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { didUserWin } from '../utils.js';

const test = QUnit.test;

test('testing all outcome combinations in didUserWin function between player and computer throws', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    // const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    // const actual = true;
    const win = didUserWin('rock', 'scissors');
    const win2 = didUserWin('paper', 'rock');
    const win3 = didUserWin('scissors', 'paper');
    const lose = didUserWin('rock', 'paper');
    const lose2 = didUserWin('paper', 'scissors');
    const lose3 = didUserWin('scissors', 'rock');
    const draw = didUserWin('rock', 'rock');
    const draw2 = didUserWin('paper', 'paper');
    const draw3 = didUserWin('scissors', 'scissors');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(win, win);
    expect.equal(win2, win);
    expect.equal(win3, win);
    expect.equal(lose, lose);
    expect.equal(lose2, lose);
    expect.equal(lose3, lose);
    expect.equal(draw, draw);
    expect.equal(draw2, draw);
    expect.equal(draw3, draw);
});
