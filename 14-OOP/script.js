'use strict';

// Lecture :- Constructor Function and the new Operator
/*
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

Person.hey = function () {
  console.log('Hey there 👋');
  console.log(this);
};
Person.hey();

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

// Lecture :- Prototypal inheritence on builtin objects

console.log(jonas.__proto__);

// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 6, 6, 3];

console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

// Coding Challenge #1
/*
Your tasks: 
1. Use a constructor function to implement a 'Car'. A car has a 'make' and a 'speed' property. The 'speed' property is the current speed of the car in 
km/h 
2. Implement an 'accelerate' method that will increase the car's speed by 10, 
and log the new speed to the console 
3. Implement a 'brake' method that will decrease the car's speed by 5, and log 
the new speed to the console 
4. Create 2 'Car' objects and experiment with calling 'accelerate' and 
'brake' multiple times on each of them 
Test data: 
§ Data car 1: 'BMW' going at 120 km/h 
§ Data car 2: 'Mercedes' going at 95 km/h 

// 1.

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

//2.

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}`);
};

//3.
Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}`);
};

//Test Data
const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

console.log(car1, car2);
car1.accelerate();
car1.break();
car2.accelerate();
car2.break();
console.log(car1, car2);


// by using the ES6 class
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}`);
  }
}
const car1 = new Car('BMW', 120);
car1.accelerate();

// Lecture :- ES6 Class

// class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //Instance method
  // Methods will be added to .prototype property
  clacAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }

  // set va property that already exist
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.clacAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

// 1. Classes are NOT hoisted
// means we cannot use classes before decleration
//2. Class are first-class citizens
// means we can pass them into function and return from function
//3. Classes are excuted in strict mode

const walter = new PersonCl('Walter White', 1965);

PersonCl.hey();

// Lecture :- Getter and setter

const account = {
  owner: 'Jonas',
  movements: [200, 300, 230, 445],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;

console.log(account.movements);
*/

// Lecture :- Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstname, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
