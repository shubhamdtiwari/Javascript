"use strict";
/* function calcAge(birthYear) {
  const age = 2037 - birthYear;
  //   console.log(firstName);

  function printAge() {
    let output = `${firstName} is ${age} , born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //if we add a new firstname here thenn it read it b/c js always reads current scope first

      //creating new variable with same name as outer scope's variable
      const firstName = "Ujjwal";

      //reassingning outer scope's variable
      output = "New OUTPUT";
      const str = `oh! you're a millenial , ${firstName}`;
      console.log(str);

      function add(a, b) {
        //block scoped
        return a + b;
      }
    }
    // console.log(str); it willl show error b/c it is not define in printAge() function
    console.log(millenial); // but this can acceced outside b/c it is a function scoped, they simply ignore the block as they are not block scoped
    // console.log(add(2, 3)); //here gives error b/c fuction is a block scoped
    //but when we off the strict mode we can get no error

    console.log(output);
  }
  printAge();
  return age;
}
const firstName = "Shubham"; // this is a global function, it can be acces anywhere in code even in the top code
calcAge(1991);

// console.log(age); we cannt use age here b/c it is not define here
// it only define inside calcAge function and there inside function
//also printAge()

// lecture  :-  9 Hoisting and TDZ
// const myName = 'Shubham';

// variables
// if (myName === 'Shubham') {
//   console.log(`jonas is a ${job}`);
//   // we will get error b/c we use job before declearing
//   const age = 2037 - 2006;
//   console.log(age);
//   const job = 'student';

// }
// function

// console.log(addDecl(2, 3));

// // console.log(addExp(2, 3));

// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExp = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// Example

// console.log(numProduct)
// if (!numProduct) deleteShoppingCart();

// var numProduct = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

var x = 1;
const y = 2;
let z = 3;

console.log(x === window.x);
console.log(y === window.y);

console.log(z === window.z);

// Lecture :- 11 this keyword

console.log(this);

const calcAge = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
}
calcAge(1991);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
  },
}
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge; // method brrowingh
matilda.calcAge(); */

//Lecture :- 12
// var firstName = 'matilda'

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // // solution 1
    // const self = this; //self or that

    // const isMilenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);

    //   // console.log(this.year >= 1981 && this.year <= 1996);

    // };
    // solution 2

    const isMilenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
      // here this keyword inherit from parent scope as in arrow function it is jonas

    };
    isMilenial();
  },



  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`); // by creating var we gave it firstname
    // arrow function does not gets this keyword 
    //it gets its this keyword from its parent this keyword
    //here its parent keyword is global keyword
  },
};

jonas.greet();
jonas.calcAge();

//arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);

var addArrow = (a, b) => a + b;