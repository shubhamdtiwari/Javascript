'use strict';

// Lecture :- Constructor Function and the new Operator

const Person = function (firstName, birthYear) {
  //   console.log(this);
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // this not be done
  // we should never create a method inside a constructor
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const jonas = new Person('jonas', 1991);
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('jack', 1990);
console.log(matilda, jack);

console.log(jonas instanceof Person); // true as we create object

// Lecture :- Prototypes

console.log(Person.prototype);

// we created a prototype as we should not create a method inside a constructor as when we create new person it store the calc method in all new person

Person.prototype.clacAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.clacAge();
