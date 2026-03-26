'use strict';
/*
///////////
Lecture :- Default Parameter

const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers,
) {
  //ES6
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;
  // but instead of doing above we use default parameter in the fuction directly
  
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
//for leaving num  of passengers
createBooking('LH123', undefined, 1000);


const flight = 'LH1223';
const shubham = {
  name: 'Shubham Tiwari',
  passport: 6564644445646,
};

const cheakIn = function (flightNum, passenger) {
  // so above flightNum store a copy of passed arugment as it is a primitive value
  flightNum = 'LH199';
  passenger.name = 'Mr. ' + passenger.name;
  // so here by maupulating passenger object it is exatcly the same as manipulating the shubham object as they are same in the memory

  if (passenger.passport === 6564644445646) {
    alert('Cheak in');
  } else {
    alert('Wrong Passport');
  }
};

cheakIn(flight, shubham);
console.log(flight); //this is primitive type so on passing it only pass the copy of original value , so it does not affect the original,as copy is passed into the function

console.log(shubham); // it is a refrence type when we pass object (shubham) in the function as argument it also change the value

//is the same as doing...

// flightNum = flight
// passenger = shubham;
//When we copy object like above we only copy the refrence to the object in the memory heap but the bot point to the same object in memory

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(shubham);
cheakIn(flight, shubham);
/////////////////////////////////////////

// Java Script do not contain passing by refrence.For object it do pass in a refrence but it is the memory address of the object, this refrence still a value

// so basically we do not pass by refrence , we pass a reference to the function

///////////////////////////////////////

// Lecture :- First -class and higher-order functions
//First Class function are also called first-class citizens
// they are simply values
// it is just another type of object

//store functions in variables or properties

const add = (a, b) => a + b;

const counter = {
  value: 23,
  inc: function () {
    this.value++;
  },
};

// here we can see that we can store a function in variables

//we can pass function as argument to other functions
///////////////

//Higher order functions

// function that recives another function as an argument that returns a new function

// Example
const greet = () => console.log('Hey Shubham');
btnClose: addEventListener('click', greet);

// function that returns new function
function count() {
  // upper function is a higher order function
  let counter = 0;
  return function () {
    // this is returned function
    counter++;
  };
}
*/
// Lecture :- Functions accepting callback functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);

transformer('JavaScript is the best!', oneWord);

// here upperfirstword and one word is call back function
//and transformer is high-order function
//JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);
