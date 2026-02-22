'use strict';
// Data needed for first part of the section

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
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    mainIndex = 1,
    starterIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order recevied! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

// lecture :- 05 The Spread Operator

const arr = [5, 6, 7];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);
//when we need arrays individually we use spread operator
console.log(...newArr);

// bolding new array using exsisting array

const newMenu = [...restaurant.mainMenu, 'Matar Panner'];
console.log(newMenu);

// spread operator is similar to destructuring but it uses all elements of array

/*
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

// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);
