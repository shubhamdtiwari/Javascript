// Assignment 
// var, let, const

const country = 'India';
const continent = 'Asia';
let population = 13;

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
