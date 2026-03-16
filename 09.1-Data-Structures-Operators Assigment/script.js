'use strict';

const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];
/*
//Destructuring Arrays
// 1.1
const [firstBook, secondBook] = books;
console.log(firstBook, secondBook);

// 1.2

const [, , thirdBook] = books;

//1.3
const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];
// long form explaination
// const [rating, ratingsCount] = ratings;
// console.log(rating, ratingsCount);
// const [, j] = rating;
// console.log(j);
// const [, i] = ratingsCount;
// console.log(i);

// effective way
const [[, rating], [, ratingsCount]] = ratings;
console.log(rating, ratingsCount);

//1.4

const ratingStars = [63405, 1808];

const [fiveStarRating, oneStarRating, threeStarRatings = 0] = ratingStars;

console.log(fiveStarRating, oneStarRating, threeStarRatings);

// Destructuring cbjects
// 2.1
//method :- 1 but we cannot destucture more than one
// const [{ title, author, ISBN }] = books;
// console.log(title, author, ISBN);

const { title, author, ISBN } = books[0];
const [i, j] = author;
console.log(i, j);
console.log(title, author, ISBN);

//2.2
// we have to assign the value of keyword to tags
// const { keywords } = books[0];
// const [tags] = keywords;
// console.log(tags);

const { keywords: tags } = books[0];

//2.3

const { language, programmingLanguage = 'Unknown' } = books[6];
console.log(language, programmingLanguage);

//2.4

let bookTitle = 'unknown';
let bookAuthor = 'unknown';

({ title: bookTitle, author: bookAuthor } = books[0]);
console.log(bookTitle, bookAuthor);

//2.5

const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0];

console.log(bookRating);

//2.6

function printBookInfo({ title, author, year = 'year unknown' }) {
  console.log(`"${title} by ${author}, ${year}"`);
}
printBookInfo({
  title: 'Algorithms',
  author: 'Robert Sedgewick',
  year: '2011',
});
printBookInfo({
  title: 'Algorithms',
  author: 'Robert Sedgewick',
}); 

// 3.1  const bookAuthors = [...books[0]];

const bookAuthor = [...books[0].author, ...books[0].author];
console.log(bookAuthor);

// 3.2

function spellWord(word) {
  console.log(...word);
}
spellWord('javascript');
spellWord('Shubham');


// 4.1

const [mainKeywords, ...rest] = books[1].keywords;
console.log(rest);
console.log(mainKeywords);
// 4.2

const { publisher: bookPublisher, ...restOfBook } = books[1];

console.log(bookPublisher);
console.log(restOfBook);

//4.3
function printBookAuthorsCount(title, ...authors) {
  console.log(`The book "${title}" has ${authors.length} authors`);
}
printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');

// 5.1

function hasExampleInJava(books) {
  console.log(books.programmingLanguage === 'Java' || 'no data available');
}

hasExampleInJava(books[0]);

// 5.2
for (let i = 0; i < books.length; i++) {
  books[i].onlineContent &&
    console.log(`"${books[i].title}" provides online content`);
}


// 6.1

for (let i = 0; i < books.length; i++) {
  books[i].onlineContent ??
    console.log(
      `"${books[i].title}" provides no data about its online content`
    );
}

// 7.1

for (let i = 0; i < books.length; i++) {
  console.log(`${books[i].title} has ${(books[i].edition ||= 1)} edition `);
}
// 7.2

for (let l = 0; l < books.length; l++) {
  if (books[l].thirdParty.goodreads.rating < 4.2) {
    books[l].highlighted &&= false;
  }
  console.log(`${books[l].title} has ${books[l].highlighted} `);
}

for (let i = 0; i < books.length; i++) {
  books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
  console.log(`${books[i].title} has ${books[i].highlighted} `);
}

// 8.1
let pageSum = 0;

for (let book of books) {
  pageSum += book.pages;
}
console.log(pageSum);

// 8.2
const allAuthors = [];
for (const book of books) {
  if (typeof book.author === 'string') {
    allAuthors.push(book.author);
  } else {
    for (const author of book.author) {
      allAuthors.push(author);
    }
  }
}
console.log(allAuthors);
//8.3
for (const [index, author] of allAuthors.entries()) {
  console.log(`${index + 1}: ${author}`);
}

9.1;
const bookData = [
  ['title', 'Computer Networking: A Top-Down Approach'],
  ['author', ['James F. Kurose', 'Keith W. Ross']],
  ['publisher', 'Addison Wesley'],
];

const newBook = {
  [bookData[0][0]]: bookData[0][1],
  [bookData[1][0]]: bookData[1][1],
  [bookData[2][0]]: bookData[2][1],
};
console.log(newBook);

//9.2
const pages = 880;

const newBook2 = {
  title: 'The C Programming Language',
  author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
  pages,
};
console.log(newBook2);

//10.1

function getfirstKeyword(books) {
  console.log(books.keywords?.[0]);
  // return book.keywords?.[0];
}
getfirstKeyword(books[0]);
getfirstKeyword(newBook2);
*/
//11.1

/////////////////////
// Coding Challenge :- 1

/* We're building a football betting app (soccer for my American friends)! 
Suppose we get data from a web service about a certain game ('game' variable on 
next page). In this challenge we're gonna work with that data. 

///////////////////////////////
Your tasks: 
1. Create one player array for each team (variables 'players1' and 
'players2') 
2. The first player in any player array is the goalkeeper and the others are field 
players. For Bayern Munich (team 1) create one variable ('gk') with the 
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 
field players 
3. Create an array 'allPlayers' containing all players of both teams (22 
players) 
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a 
new array ('players1Final') containing all the original team1 players plus 
'Thiago', 'Coutinho' and 'Perisic' 
5. Based on the game.odds object, create one variable for each odd (called 
'team1', 'draw' and 'team2') 
6. Write a function ('printGoals') that receives an arbitrary number of player 
names (not an array) and prints each of them to the console, along with the 
number of goals that were scored in total (number of player names passed in) 
7. The team with the lower odd is more likely to win. Print to the console which 
team is more likely to win, without using an if/else statement or the ternary 
operator. 
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. 
Then, call the function again with players from game.scored 
*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
/*
//1.
const [player1, player2] = game.players;

console.log(player1, player2);

//2.
const [gk, ...fieldPlayers] = player1;
console.log(gk);
console.log(fieldPlayers);

//3.

const allPlayers = [...player1, ...player2];

console.log(allPlayers);

// 4.

const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];

console.log(players1Final);
// 5.
// const { team1, x: draw, team2 } = game.odds;

// console.log(team1, draw, team2);

//second method

const {
  odds: { team1, x: draw, team2 },
} = game;

console.log(team1, draw, team2);

// 6.

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7.

team1 < team2 && console.log('Team 1 is most likely to win');

team1 > team2 && console.log('Team 2 is most likely to win'); */

// CHALLENGE :- 2

/* Let's continue with our football betting app! Keep using the 'game' variable from 
before. 
Your tasks: 
1. Loop over the game.scored array and print each player name to the console, 
along with the goal number (Example: "Goal 1: Lewandowski") 
2. Use a loop to calculate the average odd and log it to the console (We already 
studied how to calculate averages, you can go check if you don't remember) 
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this: 
Odd of victory Bayern Munich: 1.33 
Odd of draw: 3.25 
Odd of victory Borrussia Dortmund: 6.5 
Get the team names directly from the game object, don't hardcode them 
(except for "draw"). Hint: Note how the odds and the game objects have the 
same property names 
4. Bonus: Create an object called 'scorers' which contains the names of the 
players who scored as properties, and the number of goals as the value. In this 
game, it will look like this: 
{ 
} 
Gnarby: 1, 
Hummels: 1, 
Lewandowski: 2 */
