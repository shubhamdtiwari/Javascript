'use strict';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto', 'Mashroom Masala'],
  //here we can insert object directly but variable name is same for the object
  // openingHours: openingHours,

  //ES6 enhanced object literals
  openingHours,

  // here fuction syntax can be removed to make the code simple

  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // same for this
  orderDelivery({ mainIndex = 1, starterIndex = 0, time = '20:00', address }) {
    console.log(
      `Order recevied! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1} , ${ing2} and ${ing3}`,
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
    const taste = otherIngredients.length === 0 ? 'bad' : 'delicious';
    const topping =
      otherIngredients.length === 0 ? 'none' : otherIngredients.join(',');
    console.log(
      `Main ingredient in this pizza is made of ${mainIngredient} and topings are made up of ${topping}. and it's looks ${taste}`,
    );
  },
};

// lecture :- 14 Looping Objects
////////
// Properties Name
const Properties = Object.keys(openingHours);
console.log(Properties);

let openStr = `We are open on ${Properties.length} days: `;
for (const day of Properties) {
  openStr += `${day}, `;
}
console.log(openStr);

//Property VALUES
// this gives the value of given object

const values = Object.values(openingHours);

console.log(values);

//Entire object
const entries = Object.entries(openingHours);
// console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close} `);
}
/* 
// lecture :- 13 Optional chaining

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open); -- this is undefined

//code become more unreadable so we use optional chaining

// with optional chaining
// this will give undefined when prop. do not exit
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open); // above ? is present after openingHours helps to cheak if (restaurant.openingHours) exists or not , it if does not exists then it will not process further

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
// it can be used on Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exit');

console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exit');

// Arrays
const users = [{ name: 'Jonas', email: 'hellojonas.io' }];

console.log(users[0]?.name ?? 'User array is empty');
// if we dont use optional chaining then if look like thus
if (users.length > 0) console.log(users[0].name);
else console.log('User array is empty');


// Lecture :- 11 Looping Arrays - The for-of Loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// console.log([...menu.entries()]);


// lecture :- 09 Logical Assignment Operators

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'Shubham',
  owner: 'Giovani',
};
// OR assignment operator

// rest1.numGuests = rest1.numGuests || 10;

// rest1.numGuests ||= 10; // instead of writing long form we can use short form called L.A.O.

// // rest2.numGuests = rest2.numGuests || 10;

// rest2.numGuests ||= 10;

// Nullish assignment operator

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//AND assignment operator
// rest1.owner = rest1.owner && '<Anonymous>';
// rest2.owner = rest2.owner && '<Anonymous>';

rest1.owner &&= '<Anonymous>';
rest2.owner &&= '<Anonymous>';

console.log(rest1);
console.log(rest2);

//////////////////////////////////
// lecture :- 08 Nullish Coalescing Operator

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

///////////////////////////////

// lecture :- 07

console.log('----OR----');
//Use ANY data type, return ANY data type,short-circuiting

console.log(5 || 'Shubham');

console.log('' || 'shubham');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// if the restaurant.numGuests is not defined we get other value
restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
// we can use short-circuiting
// when numGuests is not defines then resturant.numGuests is falsy value then it will show the value 10
// but when we define the value of numGuest then it short-circuit the give truthy value
const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log('----AND----');

// here && gives result if it is false as here we get 0  as it is a falsy value
console.log(0 && 'jonas');
// here we get shubham as 7 is a truthy value

console.log(7 && 'shubham');
//it gets null b/c null is falsy
console.log('hello' && 23 && null && 'jonas');

//practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
//else we can use
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// OR opretor return first Turthy value or last if all them are falsy and AND opretor return first falsy value or last is all are true

//////////////////////////////////////
// Lecture :- 06 Rest Pattern and parameterr

// 1) destructuring

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
// 2) Function
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 6, 7);
add(8, 9, 4, 5, 6, 7);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('Mushrooms', 'onoin', 'olives', 'spinach');

restaurant.orderPizza('Mushrooms');
//spread is use to write values separated by comma
//rest is use to write variables anmes separated by commas

/*
;

restaurant.orderDelivery({
  time: '22:00',
  address: 'Patel Nagar',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Patel Nagar',
  starterIndex: 2,
});

//////////////////////////////////////
// Lec :- 04 Desturcturing objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// seting defult value
// defult values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//nested objects.
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
/*

///////////////////////////
//Lecture :- 03 Destructuring Arrays
const arr = [2, 3, 6];
const a = arr[0];
const b = arr[1];
const c = arr[3];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

// const [first, second] = restaurant.categories;
// console.log(first, second);
// for first and third we can use extra,

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// Switching variables by using arrays
// reassine value without using variables
[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 0)); // it gives arrays

// Recive 2 return values from a function by destructuring arrays
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//nested destructing
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

//defult values
//const [p , q , r] = [8,9]
//if we console.log(p,q,r)
// then r is undifined
// so we give defult values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/

// Data needed for a later exercise

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);
