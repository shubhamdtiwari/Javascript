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

// Developer Skills & Editor Setup
//  Coding Challenge #1

const printForecast = (arr) => {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `... ${arr[i]}ºC in ${i + 1} days`;
  }
  return str;
};
console.log(printForecast([17, 21, 23, -5, 34, 13]));


// scoping concepts

function clacAge(birthYear){
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if(birthYear >= 1981 && birthYear <= 1996){
      var millenial = true;
      // creating new variable with same name as outer scope's variable
      const firstName ='Steven';

      // reassigning outer scope's variable 
      output = 'NEW OUTPUT';

      const str = `Oh, and you're a millenial ${firstName}`;
      console.log(str);

      function add(a, b){
        return a + b;
      }
    }
    // console.log(str); it will not execute b/c it is outside the scope of if block
    console.log(millenial);
    // console.log(add(2,3)); we cann't call the function outside the block in strict mode
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Shubham';

// hoisting
// variables
// console.log(me); undefined
// console.log(job); error
// console.log(year); error

var me = 'Jonas';
let job = 'Teacher';
const year = 1991;

//functions
console.log(addDecl(3, 4)); // we get 5 as it has hoisting 
// console.log(addExpr(2,3)); show error
// console.log(addArrow(2,4)); show error


function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
}

const addArrow = (a, b) => a + b;

// example
if (!numProducts) deleteShoppingCart(); // it will execute the function b/c hoisting sets the value of var to to undefined

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All Product deleted');
}

// this keyword
console.log(this); // this will point to window object

const calcAvg = function (birthyear) {
  console.log(2037 - birthyear);
  console.log(this); // undefined
};
calcAvg(2006);

const calcAvgArr = birthyear => {
  console.log(2037 - birthyear);
  console.log(this); // window object
};
calcAvg(2004);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this); // point to jonas object
    // here this keyword point to jonas b/c calcAge is calling by jonas object
    console.log(2037 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f(); // it is simple function call so this is not defined

// regular function vs arrow function

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
  greet: () => console.log(`hey, ${this.firstName}`),
  // above this is undefined b/c of arrow function this keyword points to its surrounding function or object that is windows
};

jonas.greet();

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // solution 1
    // const self = this
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this.year >= 1981 && this.year <= 1996);

    // }


    // solutyion 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
      // console.log(this.year >= 1981 && this.year <= 1996);

    };
    isMillenial();
  },
};
jonas.calcAge();

// Object reference

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Tiwari';

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedJessica = marryPerson(jessica, 'Devis');

console.log(marriedJessica.lastName);
console.log(jessica.lastName);
// both gives tiwari


const jessica1 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Bob', 'Alice'],
};

// shallow copy
const jessicaCopy = { ...jessica1 };
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Alan');
jessicaCopy.family.push('Alena');

console.log('Before', jessica1);
console.log('After', jessicaCopy);

// Deep copy/clone

const jessicaClone = structuredClone(jessica1);
jessicaClone.family.push('Alan');
jessicaClone.family.push('Alena');

console.log('Original:' , jessica1);
console.log('clone:', jessicaClone);
*/


const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto', 'Mashroom Masala'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // open 24 hours
      close: 24,
    },
  },
  
  order: function(starterIndex, mainMenuIndex){
    return[this.starterMenu[starterIndex], this.mainMenu[mainMenuIndex]];
  },

  orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address,}) {
    console.log(`Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function(ing1, ing2, ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function(mainIngredient, ...otherIngredients){
    const [main, others] = [mainIngredient, otherIngredients];
    console.log(main);
    console.log(others);
  }
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Delhi',
  mainIndex: 2,
  starterIndex: 2,
})
/*
//////////////////////////
//Destructing Objects

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

// Giving default values

const {menu = [], starterMenu: starter = []} = restaurant;

console.log(menu, starter);

// mutating variables

let a = 234;
let b =343;

const obj = {a: 3, b: 4, c:6};

({a, b} = obj);

console.log(a, b);

//nested object

const {fri: {open: o, close: c}} = openingHours;
console.log(o, c);


//////////////////////
// Destructing Arrrays
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
// switching variables
[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//defult values
const [p=1,q=1,r=1] = [2,4];
console.log(p,q,r);

// Spread operator

const arr = [6,7,8];

const badNewArr = [1,2,3,arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// copy arrays
const mainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

const str = 'Shubham';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);

const ingredients = [prompt('Let\'s make pasta!, Ingredient 1?'), prompt('Ingredient 2?'), prompt('Ingredient 3?')];

console.log(ingredients);

restaurant.orderPasta(...ingredients);

// objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);



//SPREAD, b/c on RIGHT side of = 
const arry = [1, 2, ...[3,4]];

// REST, because on Left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5,];
console.log(a, b, others);

const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

const add = function(...num){
  let sum = 0;
  for(let i = 0; i < num.length; i++){
    sum += num[i];
  }
  console.log(sum);
}

add(1,23,4);
add(4,5,6,7,8,9,3);
add(91,35,6,7,8,9,8,7,564)

const x =[2,4,5,6];
add(...x);
*/
console.log('----OR----');
// Use ANY data type, return ANY data type,short-circuiting

console.log(3 || 'Jonas');
console.log('' || 'jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.guests = 23;
const guest1 = restaurant.guests ? restaurant.guests : 10;
console.log(guest1);

const guest2 = restaurant.guests || 10;
console.log(guest2);

console.log('----AND----');

console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log('hello' && 23 && null && 0);

// Practise example
if(restaurant.orderPizza){
  restaurant.orderPizza('mushroom', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach', 'tomato');
