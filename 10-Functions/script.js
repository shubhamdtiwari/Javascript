'use strict';
/*
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers,
) {
  //ES6
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

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
};
