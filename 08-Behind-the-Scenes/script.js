"use strict";
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  //   console.log(firstName);

  function printAge() {
    const output = `youu are ${age} , born in ${birthYear}`;
    console.log(output);
  }
  printAge();
  return age;
}
const firstName = "Shubham";
calcAge(1991);
