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

*/
const flight = 'LH1223';
const shubham = {
  name: 'Shubham Tiwari',
  passport: 6564644445646,
};

const cheakIn = function (flightNum, passenger) {
  flightNum = 'LH199';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 6564644445646) {
    alert('Cheak in');
  } else {
    alert('Wrong Passport');
  }
};

cheakIn(flight, shubham);
console.log(flight); //this is primitive type so on passing it only pass the copy of original value , so it does not affect the original,as copy is passed into the function

console.log(shubham); // when we pass object (shubham) in the function as argument it also change the value
