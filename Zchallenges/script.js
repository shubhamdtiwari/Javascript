"use strict";
/*
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


// Challenge #4

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector("button").addEventListener("click", function () {
  const textarea = document.querySelector("textarea");

  const msg = textarea.value.split("\n");

  // for (let [i, e] of msg.entries()) {
  //   e = e.trim().toLowerCase();
  //   const camelCase =
  //     e[0].toLowerCase() +
  //     e.slice(1, e.indexOf("_")) +
  //     e[e.indexOf("_") + 1].toUpperCase() +
  //     e.slice(e.indexOf("_") + 2);

  //   console.log(`${camelCase.padEnd(20)}${"✅".repeat(i + 1)}`);
  // }

  // other method

  for(const [i,row] of msg.entries()){
    const [first,second] = row.toLowerCase().trim().split('_');

    const camelCase = `${first}${second.replace(second[0], second[0].toUpperCase())}`;

    console.log(`${camelCase.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});



// A Closer Look at Functions

// Coding Challenge #1

const poll = {
question: "What is your favourite programming language?",
options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
answers: new Array(4).fill(0),
registerNewAnswer(){
  const ans = Number(prompt(`${this.question} \n ${this.options.join('\n')} \n (Write Option Number)`));

  // registering ans
  ans < this.options.length && typeof(ans) === 'number' && this.answers[ans]++;

  this.displayResult();
  this.displayResult('string');

},
displayResult(type = 'array'){
  if(type === 'array'){
    console.log(this.answers);
  }else if(type === 'string'){
    console.log(`Poll result are ${this.answers.join(', ')}`);
  }
}
};

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));


poll.displayResult.call({answers: [5, 2, 3]}, 'string');

poll.displayResult.bind({answers: [5, 2, 3]})('string');

const ans = {
  answers: [2,5,5,7,4],
}

poll.displayResult.bind(ans)('string');



// challenge #2

(function () {
const header = document.querySelector('h1');
header.style.color = 'red';

document.querySelector('body').addEventListener('click', function(){
  header.style.color = 'blue';
})
})();


//////////////////////////
// Working With Arrays
// Challenge #1

function cheackDogs(dogsJulia, dogsKate){
  const finalArr = dogsJulia.slice(1, -2).concat(dogsKate);

  finalArr.forEach((age, i )=> {
    console.log(`Dog number ${i + 1} is ${age >= 3 ? `an adult, and is ${age} years old` : 'still a puppy'}`);
  });
};

cheackDogs([3, 5, 2, 12, 7],[4, 1, 15, 8, 3]);
cheackDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);


// Challenge #2
function calcAverageHumanAge(ages) {
  const humanAge = ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age > 18);

  const avgAge = humanAge.reduce((acc, cur, i) => acc + cur, 0);

  return avgAge / humanAge.length;
}

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
*/

// challenge #3

function calcAverageHumanAge(ages) {
  const avgHumanAge = ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age > 18)
    .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
}

// Coding Challenge #4
