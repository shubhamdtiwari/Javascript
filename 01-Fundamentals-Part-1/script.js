/*let js = 'amazing';

console.log(10 + 26 + 30 - 20);
console.log("Shubham");
let firstName = "Shubham";
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);

let firstLan = 'C';
let currentLan = 'java';
console.log(firstLan);
console.log(currentLan);
let continent = "Asia";
let countryName = "India";
let population = "150";

console.log(continent);
console.log(countryName);
console.log(population);

let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true)
console.log(typeof javascriptIsFun);

javascriptIsFun = "yes";
console.log(typeof javascriptIsFun);
let year;
console.log(year);
console.log(typeof year);

year = 1990;
console.log(typeof year);
console.log(typeof null);

let isIsland = true;

console.log(typeof isIsland);
console.log(typeof language);
console.log(typeof countryName);
console.log(typeof population);

const language = "hindi";
var age = "18";
age = "20"
const dob = "2006";
console.log(language);
console.log(typeof language);
console.log(typeof dob);
console.log(age);

// Math oprators
const now = 2037;
const ageShubham = now - 2006;
const ageShub = now - 2007;
console.log(ageShubham, ageShub);

console.log(ageShubham * 2, ageShub / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Shubham";
const lastName = "Tiwari";

console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5;
x += 10; // x = x+10 = 25
//console.log(x);
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--;
console.log(x);
const now = 2037;
const ageShubham = now - 1991;
const ageShub = now - 2013;

//Comparison operators
console.log(ageShubham > ageShub);
console.log(ageShub >= 18);



console.log(now - 1991 > now - 2013);


let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

let avgAge = (ageShubham + ageShub) / 2;
console.log(avgAge);

// Asignment lecture: Basic Opertors
// 1.
const indPop = 1.5 * 10 ** 9;
const halfPop = (indPop / 2);
console.log(halfPop);

//2.
const newPop = indPop + 1;
console.log(newPop);
// 3.
const PopFinland = 6000000;
console.log(indPop > PopFinland);

// 4.
const avgPop = 33000000;

console.log(avgPop > indPop);
// 5.
var description = 'Portugal is in Europe and its 11 millon people speak portuguese';
console.log(description);

// Coding challenge #1
// BMI = mass / height ** 2 = mass / (height * height)
const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const BMImark = markMass / markHeight ** 2;

const BMIJohn = johnMass / johnHeight ** 2;

const markHigherBMI = BMImark > BMIJohn
console.log(BMImark);
console.log(BMIJohn);
console.log(markHigherBMI);
console.log(BMIJohn, BMImark);

const firstName = 'Shubham';
const job = 'teacher';
const birthYear = '2006';
const year = 2036;

const shubham = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';

console.log(shubham);

const shubhamNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(shubhamNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`My name
is
Shubham`)

//Assigment lec 12
const city = 'Protugal';
const continent = 'Europe';
const population = '11 millions';
const lan = 'protuguese';

const description = `${city} is in ${continent}, and its ${population} people speak ${lan}`

console.log(description);

const age = 15;


if (age >= 17) {
    console.log("ujjwal can start driving license🚗");
} else {
    const yearsleft = 18 - age;
    console.log(`Ujjwal is too young. Wait another ${yearsleft} years :)`);
}

const birthyear = 2004;

let century;

if (birthyear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
//Assingment :- lec 13
let population = 13000000;
if (population >= 33000000) {
    console.log("Portugal's population is above average")
} else {
    console.log("Portugal's population is below average")
}
//coading challange 2
const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const BMImark = markMass / markHeight ** 2;

const BMIJohn = johnMass / johnHeight ** 2;
console.log(BMIJohn, BMImark);
if (BMIJohn > BMImark) {
    console.log("John's BMI is higher than Mark's");
} else {
    console.log("Mark's BMI is higher than John's");
}

if (BMIJohn > BMImark) {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMImark})`);
}

// type conversion
const inputYear = '1991'; // here this is string
console.log(Number(inputYear), inputYear);
//but we can change it to number value by above method
console.log(Number(inputYear) + 18);

console.log(String(23), 23)
// string(23) is a string form

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3); // string converted to number
console.log('23' / '2');

let n = '1' + 1; //11
n = n - 1;
console.log(n);

//Assingnment :- lec 15
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2); */

//lec :- 16

//5 falsy value ; 0 , '',undefined ,null , NaN.

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean('Jones'));//true
console.log(Boolean({})); //true
console.log(Boolean('')); //false

const money = 0;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log("You should get a job!");
} // here we get else statement b/c money is 0 and it is falsy

let height;
if (height) {
    console.log("YAY! Height is Defined");
} else {
    console.log("Height is UNDEFINED");
} // here code will give else statment b/c height is undefined
