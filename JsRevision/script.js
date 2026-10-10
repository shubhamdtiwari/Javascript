"use strict";
// Assignment
// JavaScript Fundamentals - part 1
// var, let, const
/*
const country = 'India';
const continent = 'Asia';
let population = 160;

console.log(country);
console.log(continent);
console.log(population);

// Data type
// 1.

const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof continent);
console.log(typeof language);

language = 'English';
// isIsland = true;
// BAsic Operators

const halfpopulation = population / 2;
population++;
console.log(halfpopulation);

const finlandPop = 11;
console.log(population > finlandPop);
console.log(population > 33);

const description = country + ' is in ' + continent + ',' + ' and its ' + population + ' million people speak ' + language;
console.log(description);

// String and Template Literals

const description2 = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description2);

// Takind Decision: if/else Statement
if (population > 33) {
    console.log(`${country}'s populatiion is above average`);
} else {
    console.log(`${country}'s population is ${33 - population} million below average`);
}

// Type conversion and coercion

console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> 617
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143

// Equality Operatirs: == vs ===
// const numNeighbours = Number(prompt('How many neighbour countries does your contry have?'));

// if (numNeighbours === 1) { // here === help to avoid type coercion
//     console.log('only 1 border!');
// } else if (numNeighbours > 1) {
//     console.log('more than 1 border');
// } else {
//     console.log('No border');
// }

// Logical Operators

if (language == 'English' && population < 50 && !isIsland) {
    console.log(`You should live ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}

// the Switch Statement

// const language = 'English'

switch (language) {
    case 'Mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'Spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'English':
        console.log('3rd place');
        break;
    case 'Hindi':
        console.log('Number 4');
        break;
    case 'Arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
        break;
}

// The onditional (Ternary) Operator

console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average`);



// JavaScript Fundamental part - 2
// Functions

function describeCountry(country, populatiion, capaitalCity) {
    return `${country} has ${populatiion} million people and its capital city is ${capaitalCity}`
}

console.log(describeCountry('India', 160, 'New Delhi'));

const descPortugal = describeCountry('Portugal', 10, 'Lisbon');

const descGermany = describeCountry('Germany', 83, 'Berlin');
const descFinland = describeCountry('Finland', 6, 'Helsinki');

console.log(descPortugal, descGermany, descFinland);

// Function Declarations vs. Expressions


// function declarartion
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

console.log(percentageOfWorld1(1600));
console.log(percentageOfWorld1(1441));
console.log(percentageOfWorld1(13));

// function expression
const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

console.log(percentageOfWorld2(1600));
console.log(percentageOfWorld2(1441));
console.log(percentageOfWorld2(13));

// Arrow function

const percentageOfWorld3 = population => (population / 7900) * 100;

console.log(percentageOfWorld3(1700));

function describePopulation(country, population) {
    return `${country} has ${population} millions people, which is about ${Math.trunc(percentageOfWorld3(population))} % of the world`;
}

console.log(describePopulation('India', 1650));

// Introduction to Arrays

const populations = [1600, 1380, 14, 56]

console.log(populations.length === 4);

const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];

// for (let index = 0; index < populations.length; index++) {
//     percentages.push(percentageOfWorld1(populations[index]));
// }

console.log(percentages);

// .. basic arrays oprations

const neighbours = ['Pakistan', 'China', 'Nepal', 'Afganistan'];

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
    console.log('Probably not a central european country :D');
}

neighbours[neighbours.indexOf('Pakistan')] = 'Balochistan';
console.log(neighbours);

// Introduction to Objects

const myCountry = {
    country: 'India',
    capital: 'New Delhi',
    language: 'Hindi',
    populations: 1700,
    neighbours: ['Pakistan', 'China', 'Nepal', 'Afganistan']
}

// console.log(`${myCountry.country} has ${myCountry.populations} million ${myCountry['language']}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

myCountry.populations += 2;
console.log(myCountry);

myCountry['populations'] -= 2;
console.log(myCountry);

myCountry.describe = function () {
    console.log(`${this.country} has ${this.populations} million ${this['language']}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);
}

myCountry.describe();

myCountry.cheakIsland = function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
}

myCountry.cheakIsland();
console.log(myCountry);

//  Iteration: The for Loop

for (let i = 1; i <= 50; i++) {
    console.log(`Voter number ${i} is currently voting`);
}

//  Looping Arrays, Breaking and Continuing
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2);

// Looping Backwards and Loops in Loops

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
    }
}

//  The while Loop

const percentages3 = [];

let i = 0;
while (i < populations.length) {
    percentages3.push(percentageOfWorld1(populations[i]));
    i++;
}


console.log(percentages3);

// coding challenge #1

function BMI(mass, height) {
  return mass / height ** 2;
}

const BMIMark = BMI(78, 1.69);
const BMIJohn = BMI(92, 1.95);

const markHigherBMI = BMIMark > BMIJohn;

console.log(markHigherBMI);

// coding challenge #2
if (markHigherBMI) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})`);
}

// Coding challenge #3
const avgDolphine = (97 + 112 + 101) / 3;
const avgKoalas = (109 + 95 + 123) / 3;
console.log(avgDolphine, avgKoalas);

if (avgDolphine > 100 && avgKoalas > 100 && avgDolphine > avgKoalas) {
  console.log("Dolphines win");
} else if (avgDolphine > 100 && avgKoalas > 100 && avgDolphine < avgKoalas) {
  console.log("koalas win");
} else if (avgDolphine > 100 && avgKoalas > 100 && avgDolphine === avgKoalas) {
  console.log("Its a draw");
} else {
  console.log("No one wins :(");
}

// Coding challenge #4

// const bill = prompt("Enter the bill amount");
const bill = 246;

const tip = 50 <= bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(tip);

const totalBill = bill + tip;
console.log();

// Coding Challenge #1

const calcAvg = (s1, s2, s3) => {
  return (s1 + s2 + s3) / 3;
};

const avgDol = calcAvg(85, 54, 41);
const avgKoals = calcAvg(23, 34, 27);

const cheakWinner = (avgDol, avgKoals) => {
  if (avgDol >= 2 * avgKoals) {
    console.log(`Dolphins win (${avgDol} vs. ${avgKoals})`);
  } else if (avgKoals >= 2 * avgDol) {
    console.log(`Koalas win (${avgKoals} vs. ${avgDol})`);
  } else {
    console.log("no one wins :)");
  }
};

cheakWinner(avgDol, avgKoals);

// Coding Challenge #2

const clacTip = (bill) => {
  return 50 <= bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [];
// const tips = [clacTip(125), clacTip(555), clacTip(44)];

for (let index = 0; index < bills.length; index++) {
  tips.push(clacTip(bills[index]));
}
console.log(tips);

const total = [];
for (let index = 0; index < bills.length; index++) {
  total.push(bills[index] + tips[index]);
}

// Challenge #3

const Mark = {
  fullName: "Mark Miller",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
Mark.calcBMI();
console.log(Mark);

const john = {
  fullName: "John Smith",
  mass: 70,
  height: 1.65,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
john.calcBMI();
console.log(john);

console.log(
  `${Mark.fullName}'s BMI(${Mark.BMI}) is ${Mark.BMI > john.BMI ? "higher" : "lower"} than the ${john.fullName}'s (${john.BMI})`,
);
*/
// Challenge #4
const clacTip = (bill) => {
  return 50 <= bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 53];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(clacTip(bills[i]));
  totals.push(bills[i] + clacTip(bills[i]));
}
console.log(tips, totals);

const calcAvgerage = function (arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
};

console.log(calcAvgerage(totals));
