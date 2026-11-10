'use strict';

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  // scorers,
};
/*
// 1.
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);

//3. 
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1,'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5.
const {odds: {team1, x: draw, team2}} = game
console.log(team1, draw, team2);

// 6.
const printGoals = function(...players){
    console.log(`${players.length} goals were scored`);
}

printGoals('Davies', 'Muller', 'Lewandowski','Kimmich');
printGoals(...game.scored);

// 7
team1 < team2 && console.log(`team 1 is more likely to win`);

// Challenge #2
// 1.
// for(const [key, name] of Object.entries(game.scored)){
//     console.log(`Goal ${Number(key) + 1}: ${name}`);
// };

for(const [key, name] of game.scored.entries()){
    console.log(`Goal ${key + 1}: ${name}`);
};

// 2.
let avg = 0;
// let count = 0;
for(const value of Object.values(game.odds)){
    avg += value;
    // count++;
}
// console.log(avg/count);
console.log(avg / Object.values(game.odds).length);

// 3.

// console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
// console.log(`Odd of draw: ${game.odds.x}`);
// console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);

for(const [team, value] of Object.entries(game.odds)){
    // const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
    console.log(`Odd of ${team === 'x' ? 'draw' : `victory ${game[team]}`}: ${value}`);
}

// 4.
const scorers = {
    [game.scored[0]]: 2,
};

console.log(game.scorers);

// Challenge #3

const gameEvents = new Map([
[17, '⚽ GOAL'],
[36, '🔁 Substitution'],
[47, '⚽ GOAL'],
[61, '🔁 Substitution'],
[64, '🔶 Yellow card'],
[69, '🔴 Red card'],
[70, '🔁 Substitution'],
[72, '🔁 Substitution'],
[76, '⚽ GOAL'],
[80, '⚽ GOAL'],
[92, '🔶 Yellow card'],
]);

// 1.
const eventsSet = new Set();
for (const [key, value] of gameEvents) {
  eventsSet.add(value);
}
console.log(eventsSet);

const events = [...eventsSet];
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
// const numOfevents = gameEvents.size;
// console.log(numOfevents);

console.log(`An event happend, on average, every ${90 / gameEvents.size} minutes`);

// 4.

for(const [key, value] of gameEvents){
  key < 45 ? console.log(`[FIRST HALF]${key}: ${value}`) : console.log(`[SECOND HALF]${key}: ${value}`);
}

*/
// Challenge #4

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));