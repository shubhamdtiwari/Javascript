'use strict';

const game = {
team1: 'Bayern Munich',
team2: 'Borrussia Dortmund',
players: [
[
'Neuer',
'Pavard',
'Martinez',
'Alaba',
'Davies',
'Kimmich',
'Goretzka',
'Coman',
'Muller',
'Gnarby',
'Lewandowski',
],
[
'Burki',
'Schulz',
'Hummels',
'Akanji',
'Hakimi',
'Weigl',
'Witsel',
'Hazard',
'Brandt',
'Sancho',
'Gotze',
],
],
score: '4:0',
scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
'Hummels'],
date: 'Nov 9th, 2037',
odds: {
team1: 1.33,
x: 3.25,
team2: 6.5,
},
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
*/
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