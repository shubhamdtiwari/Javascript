'use strict';

///////////////////////////////////////////////
///////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: 'premium',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'standard',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'premium',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic',
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

////////////////////////////
// coading started from here

// below code helps to insert the deposites and withdrawals

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  //.textContent = 0

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = ` 
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// It helps to show the balance
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${acc.balance} €`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, arr) => acc + arr, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};
// calcDisplaySummary(account1.movements);

// It helps to create username
const createUsernames = function (accs) {
  accs.forEach(
    (acc) =>
      (acc.username = acc.owner
        .toLowerCase()
        .split(' ')
        .map((name) => name[0])
        .join('')),
  );
};

createUsernames(accounts);

const updateUI = function (acc) {
  // Display movement
  displayMovements(acc.movements);
  // Display balance
  calcDisplayBalance(acc);
  // display summary
  calcDisplaySummary(acc);
};
// Event handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value,
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI a welcome message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;

    containerApp.style.opacity = 100;

    // clear the input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  } else {
    alert('Worng Pin');
    containerApp.style.opacity = 0;
    inputLoginPin.value = '';
  }
});

//Tranfer feature

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);

  const reciverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value,
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    reciverAcc &&
    currentAccount.balance >= amount &&
    reciverAcc?.username !== currentAccount.username
    // ? helps to find if account exists or not
  ) {
    currentAccount.movements.push(-amount);
    reciverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    // Add movement
    currentAccount.movements.push(amount);

    //Update UI

    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username,
    );

    //delete account
    accounts.splice(index, 1);

    //hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
  labelWelcome.textContent = `Log in to get started`;
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// console.log(containerMovements.innerHTML);
// this shows the html created for the incoming values

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//////////////////////////////////////
//////////////////////////////////////////////
// Lecture :- Simple Array Methods
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE
// it helps to extract elements from the original array
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // it does mutate the og arr
console.log(arr2);

//CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

//JOIN
console.log(letters.join(' - '));



// Lecture :- The New at Method

const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting the last element

console.log(arr[arr.length - 1]);

console.log(arr.slice(-1)[0]);

console.log(arr.at(-1));

// also works on string
console.log('shubham'.at(1));
console.log('shubham'.at(-1));

// lecture :- Looping Arrays: FOREACH
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You Deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdraw ${Math.abs(movement)}`);
  }
}

console.log('---- FOREACH ----');

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You Deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdraw ${Math.abs(mov)}`);
  }
});
// 0: function(200)
// 1: function(450)
// 3: function(400)
// ...


// Lecture :- forEach with maps and sets

// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});


// Lecture :- The map method

const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUSD;
// });

const movementsUsd = movements.map((mov) => mov * eurToUsd);

console.log(movements);
console.log(movementsUsd);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementDescription = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdraw'} ${Math.abs(mov)}`,

  // if (mov > 0) {
  //   return `Movement ${i + 1}: You Deposited ${mov}`;
  // } else {
  //   return `Movement ${i + 1}: You withdraw ${Math.abs(mov)}`;
  // }
);

console.log(movementDescription);

// Lecture :- The filter Method

const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter((mov) => mov < 0);
console.log(withdrawals);

// Lecture :- Reduce Method

console.log(movements);

// accumulator -> Snowball
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);

//Reeduced form
const balance = movements.reduce((acc, cur) => acc + cur, 0);

console.log(balance);

// This method is easy use for one arrat but when we have to pass many arrays it is impractisable. so we use reduce() method
let balanceFor = 0;
for (const mov of movements) balanceFor += mov;
console.log(balanceFor);

// Maximum value
const max = movements.reduce(
  (acc, mov) => (acc > mov ? acc : mov),
  movements[0],
);

console.log(max);


// Lectuire :- The magic of Chain Method

const eurToUsd = 1.1;
console.log(movements);

// PIPELINE
const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  .map((mov, i, arr) => {
    console.log(arr);
    return mov * eurToUsd;
  })

  // .map((mov) => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);

// Lecture :- The Find Method
// this method returns only first element

const firstWithdrawal = movements.find((mov) => mov < 0);

console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find((acc) => acc.owner === 'Jessica Davis');
console.log(account);

// by using for of loop method
for (const acc of accounts) {
  // console.log(acc);
  if (acc.owner === 'Jessica Davis') {
    console.log(acc);
  }
}

// Lecture :- The findLast and findLastIndex Method

console.log(movements);

const lastWithdrawal = movements.findLast((mov) => mov < 0);

console.log(lastWithdrawal);

const latestLargeMovementIndex = movements.findLastIndex((mov) =>
  Math.abs(mov > 1000),
);
console.log(latestLargeMovementIndex);
console.log(
  `Your latest large movement was ${movements.length - latestLargeMovementIndex} movements ago`,
);

//Lecture :- Some and Every

console.log(movements);

// only cheak for Equality
console.log(movements.includes(-130));

// SOME: CONDITION
const anyDeposit = movements.some((mov) => mov > 1500);

console.log(anyDeposit);

//Every

console.log(movements.every((mov) => mov > 0));

console.log(account4.movements.every((mov) => mov > 0));

// Separate callback

const deposits = (mov) => mov > 0;
console.log(movements.some(deposits));
console.log(movements.every(deposits));
console.log(movements.filter(deposits));


// Lecture :- Flat And FlatMap

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];

// it helps to remove all nested arrays

console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];

console.log(arrDeep.flat());
// flat method only one level; of nesting like in arr but not erase nested arr in arrDeep

console.log(arrDeep.flat(2));

// geting movements arr out of accounts arr

const accountMovement = accounts.map((acc) => acc.movements);
console.log(accountMovement);

const allMovements = accountMovement.flat();

console.log(allMovements);

const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);

console.log(overalBalance);

const overalBalance1 = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);

console.log(overalBalance1);

// Flatmap method

const overalBalance2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);



//lecture :- Sorting Arrays

// String
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];

// it mutate the og arr
console.log(owners.sort());
console.log(owners);

// Numbers
console.log(movements);
// console.log(movements.sort());
// here above we dont get the result b/c deafult sort() method only works on string

//return <0, A, B (keep order)
//return > 0 B, A (switch order)

// acending
// movements.sort((a, b) => {
//   if (a > b) return 1; // return 1 means difference is positive so it switch places
//   if (a < b) return -1; // negative means not going to change the place
// });

movements.sort((a, b) => a - b);
console.log(movements);

// decending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });

movements.sort((a, b) => b - a);
console.log(movements);

//Array Groping

console.log(movements);

const groupedMovements = Object.groupBy(movements, (movement) =>
  movement > 0 ? 'deposits' : 'withdrawals',
);
console.log(groupedMovements);

const groupByActivity = Object.groupBy(accounts, (account) => {
  const movementCount = account.movements.length;

  if (movementCount >= 8) return 'very active';
  if (movementCount >= 4) return 'active';

  if (movementCount >= 1) return 'modrate';
  return 'inactive';
});
console.log(groupByActivity);

const groupedAccounts = Object.groupBy(accounts, ({ type }) => type);
console.log(groupedAccounts);

// more ways of creating and filling arrays

const arr = [1, 2, 3, 4, 5, 6, 7];

console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// if we pass only one element then it will create empty array of length of passed arguments

const x = new Array(7);
console.log(x);
console.log(x.map(() => 5)); // it does not work

// x.fill(1);

x.fill(1, 3, 5);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    (el) => Number(el.textContent.replace('€', '')),
  );
  console.log(movementsUI);

  const movement2 = [document.querySelectorAll('.movements__value')];
});


// Lecture :- Non destructive alternatives: TOREVERSE, TOSORTED, TOSPLICE, with

// here reverse method is destructive method as it mutate the original array

// console.log(movements);
// const reversedMov = movements.reverse();
// console.log(reversedMov);
// console.log(movements);

// to preserve the og array we use reversed

console.log(movements);
const reversedMov = movements.toReversed();
console.log(reversedMov);

// toSorted (sort), toSplice (splice)

// movements[1] = 2000;

const newMovements = movements.with(1, 2000);

console.log(newMovements);

console.log(movements);
*/

// Array Methods Practise
//1.

// const bankDepositSum = accounts
//   .flatMap((acc) => acc.movements)
//   .filter((dep) => dep > 0)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(bankDepositSum);

// by using reduce method

const bankDepositSum = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => (mov >= 0 ? acc + mov : acc), 0);

console.log(bankDepositSum);

//2.

// const numdeposits1000 = accounts
//   .flatMap((acc) => acc.movements)
//   .filter((mov) => mov >= 1000).length;

const numdeposits1000 = accounts
  .flatMap((acc) => acc.movements)
  // .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numdeposits1000);

// Prefixed ++ opretor
let a = 10;
console.log(++a);
console.log(a);

// as we use a++  as it is postfix opretor it increase the value but it directly not show the value yhe time it happens

// 3.

const { deposits, withdrawals } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, curr) => {
      // curr > 0 ? (sums.deposits += curr) : (sums.withdrawals += curr);
      sums[curr > 0 ? 'deposits' : 'withdrawals'] += curr;
      return sums;
    },
    { deposits: 0, withdrawals: 0 },
  );

console.log(deposits, withdrawals);

// 4.
// this is a nice title -> This Is a Nice Title

const convertTitleCase = function (title) {
  const expections = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title.toLowerCase();
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));

/*
///////////////////////////////////////////////
/////////////////////////////////////////
// Chanllenge :- 1
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners 
about their dog's age, and stored the data into an array (one array for each). For 
now, they are just interested in knowing whether a dog is an adult or a puppy. 
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years 
old. 
Your tasks: 

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things: 

1. Julia found out that the owners of the first and the last two dogs actually have 
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat 
ages from that copied array (because it's a bad practice to mutate function 
parameters) 


2. Create an array with both Julia's (corrected) and Kate's data 

3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy )

4. Run the function for both test datasets 
Test data: 
") 
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3] 
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4] 
Hints: Use tools from all lectures in this section so far



const checkDogs = function (dogsJulia, dogsKate) {
  //1.

  const shallowDogsJulia = dogsJulia.slice(1, 3);

  //2.
  const dogs = shallowDogsJulia.concat(dogsKate);
  console.log(dogs);

  //3.

  dogs.forEach(function (dogs, i, arr) {
    if (dogs >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dogs} years old`);
    } else {
      console.log(
        `Dog number ${i + 1} is still a puppy🐶 and ${dogs} years old`,
      );
    }
  });
};

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

checkDogs(dogsJulia, dogsKate);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);


// Coding Challenge #2
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Your tasks: 

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order: 

1. Calculate the dog age in human years using the following formula: if the dog is 
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, 
humanAge = 16 + dogAge * 4 
2. Exclude all dogs that are less than 18 human years old (which is the same as 
keeping dogs that are at least 18 years old) 
3. Calculate the average human age of all adult dogs (you should already know 
from other challenges how we calculate averages) 
4. Run the function for both test datasets 

Test data: 

§ Data 1: [5, 2, 4, 1, 15, 8, 3] 
§ Data 2: [16, 6, 10, 5, 6, 1, 4]



const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));

  const adults = humanAges.filter((hum) => hum >= 18);
  console.log(humanAges);
  console.log(adults);

  // const avgAge = adults.reduce((acc, ages) => acc + ages, 0) / adults.length;

  const avgAge = adults.reduce(
    (acc, ages, i, arr) => acc + ages / arr.length,
    0,
  );
  return avgAge;
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);
/////////////////////////////
// Challenge :- 3

Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time 
as an arrow function, and using chaining! 
Test data: 
§ Data 1: [5, 2, 4, 1, 15, 8, 3] 
§ Data 2: [16, 6, 10, 5, 6, 1, 4]

const calcAverageHumanAge = (ages) =>
  ages
    .map((ages) => (ages <= 2 ? 2 * ages : 16 + ages * 4))
    .filter((hum) => hum >= 18)
    .reduce((curr, ages, i, arr) => curr + ages / arr.length, 0);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);

// Coding Challenge #4

This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"

2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)

3. Create an array "allActivities" of all the activities of all the dog breeds

4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.

5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".

6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".

7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.


const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];

// 1.

const huskyWeight = breeds.find((obj) => obj.breed === 'Husky').averageWeight;

console.log(huskyWeight);

//2.

const dogBothActivities = breeds.find(
  (breed) =>
    // breed.activities.find((obj) => obj === 'running' && 'fetch'),
    breed.activities.includes('running') && breed.activities.includes('fetch'),
).breed;

console.log(dogBothActivities);

//3.

// const allActivities1 = breeds.map((obj) => obj.activities).flat();

const allActivities = breeds.flatMap((obj) => obj.activities);

// for making arr containing unique elements
// const allActivities = new Set(allActivities1);

console.log(allActivities);

// 4
const uniqueActivities = [...new Set(allActivities)];

console.log(uniqueActivities);

//5.

const swimmingAdjacent = [
  ...new Set(
    breeds
      .filter((breed) => breed.activities.includes('swimming'))
      .flatMap((breed) => breed.activities)
      .filter((activities) => activities !== 'swimming'),
  ),
];

console.log(swimmingAdjacent);

//6.

// i have get for all individually but we need for all onces
// breeds.forEach((breed, i, arr) =>
//   breed.averageWeight >= 10
//     ? console.log(`${i + 1} - ${breed.breed}: true`)
//     : console.log(`${breed.breed}: false`),
// );

console.log(breeds.every((breed) => breed.averageWeight >= 10));

//7

console.log(breeds.some((breed) => breed.activities.length >= 3));

//bonus

const fetchWeight = breeds
  .filter((breed) => breed.activities.includes('fetch'))
  .map((breed) => breed.averageWeight);

// we use to get the max value

const heaviest = Math.max(...fetchWeight);

console.log(fetchWeight);
console.log(heaviest);

/*
// Coding Challenge #5 


Julia and Kate are still studying dogs, and this time they are studying if dogs are 
eating too much or too little. 
Eating too much means the dog's current food portion is larger than the 
recommended portion, and eating too little is the opposite. 
Eating an okay amount means the dog's current food portion is within a range 10% 
above and 10% below the recommended portion (see hint).


Your tasks:


1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate 
the recommended food portion and add it to the object as a new property. Do 
not create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg) 

2. Find Sarah's dog and log to the console whether it's eating too much or too 
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in 
the owners array, and so this one is a bit tricky (on purpose) 

3. Create an array containing all owners of dogs who eat too much 
('ownersEatTooMuch') and an array with all owners of dogs who eat too little 
('ownersEatTooLittle'). 

4. Log a string to the console for each array created in 3., like this: "Matilda and 
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat 
too little!" 

5. Log to the console whether there is any dog eating exactly the amount of food 
that is recommended (just true or false) 

6. Log to the console whether there is any dog eating an okay amount of food 
(just true or false) 

7. Create an array containing the dogs that are eating an okay amount of food (try 
to reuse the condition used in 6.) 

8. Create a shallow copy of the 'dogs' array and sort it by recommended food 
portion in an ascending order (keep in mind that the portions are inside the 
array's objects ) 


Hints: 
§ Use many different tools to solve these challenges, you can use the summary 
lecture to choose between them 

§ Being within a range 10% above and below the recommended portion means: 
current > (recommended * 0.90) && current < (recommended * 
1.10). Basically, the current portion should be between 90% and 110% of the 
recommended portion. 


const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
*/
