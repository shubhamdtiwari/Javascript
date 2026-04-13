'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
/////////////////////////////

btnScrollTo.addEventListener('click', function (e) {
  // to get the coordinate to which we have to go
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  // it is use to show the coordinates b/w the top of web browser
  console.log('Current scroll(X/Y', window.scrollX, window.scrollY);

  console.log(
    'height/wigth viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth,
  );

  section1.scrollIntoView({ behavior: 'smooth' });
});

////////////////////////////
// Page nagivation

// Lecture :- Event Delegation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

////////////////////////
////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

/*
// Lecture :- Selecting , Creating and Deleting an Element

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// creating and inserting elements
// .insertAdjacentHTML

const message = document.createElement('div');

message.classList.add('cookie-message');
message.textContent = 'We use cookied for improved functionality and analytics';

message.innerHTML =
  'We use cookied for improved functionality and analytics. <buton class ="btn btn--close-cookie">Got it!</button>';

// for the upside of the web page
header.prepend(message);

/// for ow side of the web page
header.append(message);

//it insert it both place
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// delete elements

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });

// Lecture :- Styles, Attributes and Classes

message.style.background = '#37383d';
message.style.width = '120%';

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

//use to change the color of selected document
document.documentElement.style.setProperty('--color-primary', 'orangered');

// attributes

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

logo.alt = 'Beatiful minimalist logo';

// Non-Standard
console.log(logo.designer); // it gives undefined as it is not a property of images
console.log(logo.getAttribute('designer'));

logo.setAttribute('company', 'Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data Attributes
console.log(logo.dataset.versionNumber);

// Classes

logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c'); // not include

//Don't use
// b/c this will override all the classes
logo.className = 'jonas';


// Lecture :- Implementing Smooth Scrolling

// to select the button
const btnScrollTo = document.querySelector('.btn--scroll-to');

// to select the section to which we have to go
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  // to get the coordinate to which we have to go
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  // it is use to show the coordinates b/w the top of web browser
  console.log('Current scroll(X/Y', window.scrollX, window.scrollY);

  console.log(
    'height/wigth viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth,
  );

  // Scrolling //

  // old ways

  // window.scrollTo(
  //   s1coords.left + window.scrollX,
  //   s1coords.top + window.scrollY,
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});



// Lecture :- Types of Events and Event Handlers

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading :D ');

  // it use to remove the eventListerner
  // we can use it anywhere
  // h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! You are reading the heading :D');
// };

// Lecture :- Event propagation

// rgb(255,255,255)

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)},${randomInt(0, 255)})`;

console.log(randomColor(0, 255));

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  /// stop propagation

  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target, e.currentTarget);
  },
  // true,
);
*/
// Lecture :- Event Delegation
