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


const flight = 'LH1223';//primitive type
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

console.log(shubham); // it is a refrence type when we pass object (shubham) in the function as argument on changing somethng in the function it also change the value in the object

//is the same as doing...

// flightNum = flight
// passenger = shubham;
// When we copy object like above we only copy the refrence to the object in the memory heap but the both point refer the same object in memory

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(shubham);
cheakIn(flight, shubham);
console.log(shubham);

// here we can se that on passing the object shubham in the function it also change the object
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


// Lecture :- Function returing Function

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');

greeterHey('Jonas');
greeterHey('Shubham');

greet('Hello')('Shubham');

// by using array function

const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

greetArr('Hello')('Darling');

// Lecture :- Call and Apply method

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`,
    );
    this.bookings.push({ flight: `flight ${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(2339, 'Shubham');
lufthansa.book(2339, 'Sapna');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

// here we can store the function in new variable. So when we store it in a variable it now become regular function, not a method. so this keyword is undefined
const book = lufthansa.book;

// here book function become a regural function call and in a regural function call this keyword points to undefined in strict mode
// book(23, 'Shubham'); it will throw an error as this keyword is undefined here

// above does not work

// call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Shubham');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Copper');
console.log(swiss);

// Apply method

const filghtData = [583, 'Sapna Kumari'];
book.apply(swiss, filghtData);
console.log(swiss);

// we don't use apply method insted of this we can use spread function here

book.call(swiss, ...filghtData);

// Lecture :- Bind method

// book.call(eurowings, 23, 'Sarah Williams')

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Shubham Tiwari');
bookEW23('Sapna Kumari');

// With Event Listerners
lufthansa.planes = 300;
lufthansa.buyplane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyplane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyplane.bind(lufthansa));

// we use bind() function to define the this keyword

// in the above code this keyword point to  buy button element

//as in eventhandeler function, this keyword always point to the element on which that handler is attached to

// Partil application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
//first argument of bind function is this keyword
// addVAT = (rate, value) => value + value * 0.23
console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const AddVAT2 = addTaxRate(0.23);

console.log(AddVAT2(100));

/////////////////////////////
// Coding Challenge #1
/*
Let's build a simple poll app! 
A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter 'poll' object below. 

Your tasks: 
1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things: 

1.1.  
Display a prompt window for the user to input the number of the selected option. The prompt should look like this: 

What is your favourite programming language? 
0: JavaScript 
1: Python 
2: Rust 
3: C++ 
(Write option number) 

1.2.

Based on the input number, update the 'answers' array property. For example, if the option is 3, increase the value at position 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g. answer 52 wouldn't make sense, right?) 


2. Call this method whenever the user clicks the "Answer poll" button. 

3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a 
string like "Poll results are 13, 2, 4, 1". 


4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.


5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test 
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll 
object! So what should the this keyword look like in this situation? 


Test data for bonus:  
§ Data 1: [5, 2, 3] 
§ Data 2: [1, 5, 3, 9, 6, 1] 

Hints: Use many of the tools you learned about in this and the last section 


const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  //1.1
  resisterNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number) `,
      ),
    );
    console.log(answer);

    //Resister answer
    //1.2

    typeof answer === 'number' &&
      answer < this.options.length &&
      this.answers[answer]++;

    //4
    this.displayResult();
    this.displayResult('string');
  },
  //3
  displayResult(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll Results are ${this.answers.join(', ')}`);
    }
  },
};

// poll.resisterNewAnswer();
//2

document
  .querySelector('.poll')
  .addEventListener('click', poll.resisterNewAnswer.bind(poll));

//Bonous

poll.displayResult.call({ answers: [5, 2, 3] }, 'string');

poll.displayResult.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResult.call({ answers: [1, 5, 3, 9, 6, 1] });

// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]

*/

// Lecture :- Immediately Invoked Function Expression (IIFE)

const runOnce = function () {
  console.log('This will never run again');
};

runOnce();

//IIFE
(function () {
  console.log('This will never run again');
})();
