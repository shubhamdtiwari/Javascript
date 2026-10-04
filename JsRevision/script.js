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

language = 'Hindi';
// isIsland = true;

const halfpopulation = population / 2;
population++;
console.log(halfpopulation);

const finlandPop = 11;
console.log(population > finlandPop);
console.log(population > 33);

const description = country + ' is in ' + continent + ',' + ' and its ' + population + ' million people speak ' + language;
console.log(description);

const description2 = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description2);

if (population > 33) {
    console.log(`${country}'s populatiion is above average`);
} else {
    console.log(`${country}'s population is ${33 - population} million below average`);
}


console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> 617
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143
