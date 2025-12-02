/*'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive!')
// lecture :- function
function logger() {
    console.log('My name is Shubham')
}
// calling / running / invoking function
logger();
logger();
logger();

function fruitProcesser(apples, oranges) {
    console.log(apples, oranges)
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

fruitProcesser(5, 0);

const appleJuice = fruitProcesser(5, 0);
console.log(appleJuice);

const appleorangeJuice = fruitProcesser(2, 3);
console.log(appleorangeJuice);

// assingment :- 03 function
function describeCountry(country, population, capitalCity) {

    console.log(country, population, capitalCity)
    const statement = (`${country} has ${population} million people and its capital city is ${capitalCity}. `);

    return statement;
}
describeCountry('Finland', 6, 'Helsinki');
console.log(describeCountry('Finland', 6, 'Helsinki')) // we need quotes for finland to make it string

const line = describeCountry('Finland', 6, 'Helsinki'); // if we don't use quotes then it will act like variable
console.log(line);
const line2 = describeCountry('India', 150, 'New delhi');
console.log(line2);
const line3 = describeCountry('China', 120, 'Bejing');
console.log(line3);

let place = 'USA';
let City = 'Dc';
const line4 = describeCountry(place, 60, City);
console.log(line4)

// lecture :- 4

// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);
// assingment
// function declaration
function percentageOfworld1(population) {
    return (population / 7900) * 100
}
const percentage1 = percentageOfworld1(1441);
console.log(`China's population is ${percentage1} % of total population.`);
const percentage2 = percentageOfworld1(1500);
console.log(`India's population is ${percentage2} % of total population.`);
const percentage3 = percentageOfworld1(170);
console.log(`USA population is ${percentage3} % of total population.`);

//function expression

const percentageOfworld2 = function (population) {
    return (population / 7900) * 100
}
const percentage4 = percentageOfworld2(6);
console.log(`Finland's population id ${percentage4} % of total population`);
const percentage5 = percentageOfworld2(110);
console.log(`Pakistan's population id ${percentage5} % of total population`);
const percentage6 = percentageOfworld2(10);
console.log(`Bhutan's population id ${percentage6} % of total population`);

// lecture 5 :-

//Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirment = (birthyear, firstname) => {
    const age = 2037 - birthyear;
    const retirement = 65 - age;
    return `${firstname} will retire in ${retirement} years`;
}
console.log(yearsUntilRetirment(1991, "Shubham"));
//Assingment
const percentageOfWorld3 = (population, country) => {

    const percentage = (population / 7900) * 100;
    return `${country}'s poopulation is ${percentage} % of total population`
}
console.log(percentageOfWorld3(1441, 'China'));
console.log(percentageOfWorld3(1500, 'India'));
console.log(percentageOfWorld3(60, 'Finland'));

// lecture :- 6

const cutPieces = function (fruit) {
    return fruit * 4;
};
function fruitProcesser(apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
};
console.log(fruitProcesser(3, 6));


//Assingment
const percentageOfworld2 = function (population) {
    return (population / 7900) * 100
}
function describePopulation(country, population) {
    const percentage = percentageOfworld2(population);
    return `${country}'s has ${population} million people,which is about ${percentage} of the world;`;
}
console.log(describePopulation('India', '1500'));
console.log(describePopulation('China', '1441'));
console.log(describePopulation('Finland', '6'));

//lecture :- 07

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirment = function (birthyear, firstname) {

    const age = calcAge(birthyear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstname} retires in ${retirement} years`)
        return retirement
    } else {
        console.log(`${firstname} has already retired🎉`)
        return -1;
    }

}
console.log(yearsUntilRetirment(1991, "Shubham"));
console.log(yearsUntilRetirment(1950, "Shub")); 
// coding challenge #1

const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;

// Test 1
let avgDolphines = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
console.log(avgDolphines, avgKoalas);

function cheakWinner(avgDolphines, avgKoalas) {
    if (avgDolphines >= 2 * avgKoalas) {
        console.log(`dolphins team wins 🏆 (${avgDolphines} vs ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphines) {
        console.log(`Koalas team wins 🏆 (${avgKoalas} vs ${avgDolphines})`);
    } else {
        console.log('noone wins...;');
    }
}
cheakWinner(avgDolphines, avgKoalas);
cheakWinner(500, 100);

//test 2
avgDolphines = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
console.log(avgDolphines, avgKoalas);
cheakWinner(avgDolphines, avgKoalas); 

// Lecture :- 09 Arrays

const friend1 = 'chintu';
const friend2 = 'surya';
const friend3 = 'vikash'

const friends = ['chintu', 'surya', 'vikash'];
console.log(friends);

const year = new Array(1991, 1984, 2004, 2023);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends.length - 1);
// we can change the value of any array at a time
friends[2] = 'jonas';
console.log(friends);
// but we cann't change all names 
//ex :- freinds = ['bob' , 'alice']
// this will throw error

const firstName = "Jonas";
const jonas = [firstName, 'Shubham', 2037 - 2004, 'teacher', friends];
console.log(jonas);
// we can add anything in array , even array

//exercise
const ageCalc = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 2002, 2004, 2010];

const age1 = ageCalc(years[0]);
const age2 = ageCalc(year[3]);
const age3 = ageCalc(years[years.length - 1]);


console.log(age1, age2, age3);
const ages1 = [age1, age2, age3];
console.log(ages1);

const ages2 = [ageCalc(years[0]), ageCalc(years[3]), ageCalc(years[years.length - 1])];
console.log(ages2);
// assignment */

const populations = [1500, 1441, 60, 150,];
if (populations.length === 4) {
    console.log(`True and have ${populations.length} elements`);
} else {
    console.log(`False and have ${populations.length} elements`);
}
function percentageOfworld1(population) {
    return (population / 7900) * 100
}
const percentage1 = percentageOfworld1(1441);
console.log(`China's population is ${percentage1} % of total population.`);
const percentage2 = percentageOfworld1(1500);
console.log(`India's population is ${percentage2} % of total population.`);
const percentage3 = percentageOfworld1(170);
console.log(`USA population is ${percentage3} % of total population.`);
const percentage4 = percentageOfworld1(10);
console.log(`Norway population is ${percentage3} % of total population.`);

const percentages = [percentage1, percentage2, percentage3, percentage4];

console.log(percentages);


console.log(percentages.length);

