// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = '23';

// if (x === 23) console.log(23);
// lecture :- 7
/*
// const calcAge = birthYear => 2037 - birthYear;
// console.log(calcAge(2006));
//calculate the temperature amplitude : differnce b/w highest and lowest temperature
const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - what is temp amplitude? Answer: differnce b/w highest and lowest temps
// - how to compute max and min temps?
// - what's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - how to ignore errors?
// - Find the max value in temp array
// - find min value in temp array
// - Subtract min from max and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperature);
console.log(amplitude);

// problem 2:
// function should now receive 2 arrays of temps

//1) Understanding the problem
// -With 2 arrays , should we implement functionality twice? NO! just merge twop arrays

// 2) breaking up intosub -problems
// -Merge 2 arrays
const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

// Lecture :- 9
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    value: Number(prompt('Degrees celsius')),
  };

  console.table(measurement);
  // console.log(measurement);
  // console.warn(measurement)
  // console.error(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  } 
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);  */
// Chanllenge :- 1
const arr = [17, 21, 23];
const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}°C in ${i + 1} days ...`;
  }
  console.log(str);
};
const arr2 = [12, 5, -5, 0, 4];
printForecast(arr);
printForecast(arr2);
