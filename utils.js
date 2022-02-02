export function renderAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('animal');
    // h2 element
    const h2 = document.createElement('h2');
    h2.textContent = animal.type.toUpperCase();
    // image
    // const img = document.createElement('img');
    // img.src = `./assets/${animal.image}`;

    // p
    const p = document.createElement('p');
    p.textContent = `${animal.class} with ${animal.numberOfLegs} legs and a cuteness rating of ${animal.cuteness}.`;
    div.append(h2, p);
    return div;
}

export function renderRobots(robot) {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.textContent = robot.name.toUpperCase();
    const ul = document.createElement('ul');

    for (let item of robot.info) {
        const li = document.createElement('li');
        //access info list in each
        li.textContent = item;
        ul.append(li);
    }

    div.append(h2, ul);
    return div;
}

export function renderCheatCodes(cheatCodes) {
    const div = document.createElement('div');
    const ul = document.createElement('ul');
    const h2 = document.createElement('h2');
    h2.textContent = 'CHEATS';
    for (const codes of cheatCodes) {
        const li = document.createElement('li');
        li.textContent = codes;
        ul.append(li);
    }
    div.append(h2, ul);
    return div;
}

export function renderGameRatings(game) {
    const div = document.createElement('div');
    div.classList.add('gameRatings');

    const h2 = document.createElement('h2');
    h2.textContent = game.game;

    let p = document.createElement('p');
    p.textContent = `${game.ratings.metacritic}-Metacritic`;

    let p2 = document.createElement('p');
    p2.textContent = `${game.ratings.ign}-Ign`;

    div.append(h2, p, p2);
    return div;
}
