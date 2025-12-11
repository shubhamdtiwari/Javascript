"use strict";
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  //   console.log(firstName);

  function printAge() {
    const output = `${firstName} is ${age} , born in ${birthYear}`;
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
