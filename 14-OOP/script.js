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

// 1. New {} object is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('jack', 1990);
console.log(matilda, jack);

console.log(jonas instanceof Person); // true as we create object

// Lecture :- Prototypes

console.log(Person.prototype);

// we created a prototype as we should not create a method inside a constructor as when we create new objects, it store the calcAge method in all new object

Person.prototype.clacAge = function () {
  console.log(2037 - this.birthYear);
};
// here this keyword is to set to that keyword which called the method

jonas.clacAge();
matilda.clacAge();

// it worked b/c all the objects have access to methods and properties of its prototype

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
// person.prototype is not a prototype of person instead of this it is prototype of all objects that are created using person constructor function

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));
// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(jonas, matilda);

console.log(jonas.hasOwnProperty('firstName'));

console.log(jonas.hasOwnProperty('species'));
// false as it this not a property inside the jonas object. It simply has access due to its prototype property in person
