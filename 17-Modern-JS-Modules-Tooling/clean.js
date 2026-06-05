'use strict';
const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

spendingLimits.jay = 200; // Does not work
// it does not work because the object is frozen, so we cannot add new properties to it

const getLimit = (limits, user) => limits?.[user] ?? 0;

// Pure function
const addExpenses = function (state, value, description, user = 'jonas') {
  // if (!user) user = 'jonas';
  const cleanUser = user.toLowerCase();

  // let lim;
  // if (spendingLimits[user]) {
  //   lim = spendingLimits[user];
  // } else {
  //   lim = 0;
  // }

  // const limit = spendingLimits[user] ? spendingLimits[user] : 0;

  // const lim = spendingLimits?.[user] ?? 0;

  // const limit = getLimit(user);

  // if (value <= getLimit(cleanUser)) {
  //   return [...state, { value: -value, description, user: cleanUser }];

  //   // budget.push({ value: -value, description, user });
  // }

  value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};

const newBudget1 = addExpenses(budget, spendingLimits, 10, 'Pizza 🍕');
const newBudget2 = addExpenses(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda',
);
const newBudget3 = addExpenses(newBudget2, spendingLimits, 200, 'Stuff', 'Jay'); // it will not add anything
console.log(newBudget1);
console.log(newBudget2);
console.log(newBudget3);

const checkExpenses = function (state, limits) {
  return state.map((entry) => {
    return entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry;
  });
  // for (const entry of newBudget3) {
  // let lim;
  // if (spendingLimits[entry.user]) {
  //   lim = spendingLimits[entry.user];
  // } else {
  //   lim = 0;
  // }
  // const lim = spendingLimits?.[entry.user] ?? 0;
  // if (entry.value < -getLimit(entry.user)) {
  //   entry.flag = 'limit';
  // }
  // }
};
checkExpenses(newBudget3, spendingLimits);
console.log(newBudget3);

const logBigExpenses = function (bigLimit) {
  let output = '';
  for (const entry of budget) {
    output +=
      entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';
    // Emojis are 2 chars

    // if (entry.value <= -bigLimit) {
    //   output += `${entry.description.slice(-2)} / `; // Emojis are 2 chars
  }

  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

console.log(budget);

logBigExpenses(1000);
