"use strict";
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  //   console.log(firstName);

  function printAge() {
    const output = `${firstName} is ${age} , born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `oh! you're a millenial , ${firstName}`;
      console.log(str);
    }
    // console.log(str); it willl show error b/c it is not define in printAge() function
    console.log(millenial); // but this can acceced outside b/c it is a function scoped, they simply ignore the block as they are not block scoped
  }
  printAge();
  return age;
}
const firstName = "Shubham"; // this is a global function, it can be acces anywhere in code even in the top code
calcAge(1991);

// console.log(age); we cannt use age here b/c it is not define here
// it only define inside calcAge function and there inside function
//also printAge()
