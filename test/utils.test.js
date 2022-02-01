// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { cheatCodes } from '../ezstrings.js';
import { gameRatings } from '../games.js';
import { robots } from '../robots.js';
import { renderAnimal, renderCheatCodes, renderRobots } from '../utils.js';

const test = QUnit.test;

test('renderAnimal should return a <div> with dog info', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="animal"><h2>DOG</h2><p>Mammal with 4 legs and a cuteness rating of 10.</p></div>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderAnimal({
        type: 'dog',
        numberOfLegs: 4,
        class: 'Mammal',
        cuteness: 10,
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('should return list with nested array lists', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div><h2>BENDER</h2><ul><li>appearsIn: 'Futurama'</li><li>quote: 'O cruel fate, to be thusly boned! Ask not for whom the bone bones—it bones for thee.'</li><li>funFact: 'Bender would like to kill all humans'</li></ul></div>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderRobots(robots[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
test('should return list of strings', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div><h2>CHEATS</h2><ul><li>up</li><li>down</li><li>left</li><li>right</li></ul></div>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderCheatCodes(cheatCodes);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
test('should return list of objects with objects in them', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="gameRatings" id="gameRatings"><h2>Halo 3</h2><p>94%-Metacritic</p><p>9.5/10-Ign</p></div>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderGameRatings(gameRatings);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

