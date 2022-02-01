// import functions and grab DOM elements
import { animals } from './animals.js';
import { robots } from './robots.js';
import { gameRatings } from './games.js';
import { cheatCodes } from './ezstrings.js';
import { renderAnimal, renderCheatCodes, renderRobots } from './utils.js';
console.log(animals);
console.log(robots);
const animalList = document.getElementById('animal-list');
const robotList = document.getElementById('robotList');
const codeList = document.getElementById('codeList');
for (let animal of animals) {
    const div = renderAnimal(animal);
    animalList.append(div);
}
for (let robot of robots) {
    const div = renderRobots(robot);

    robotList.append(div);
}

const cheats = renderCheatCodes(cheatCodes);
codeList.append(cheats);
// let state

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state
