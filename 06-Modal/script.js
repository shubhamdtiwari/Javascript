'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

// for this we can assign a function
const OpenModal = function () {
  // console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
// for (let i = 0; i < btnOpenModal.length; i++)
//   btnOpenModal[i].addEventListener('click', function () {
//     console.log('Button clicked');
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   });
for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', OpenModal);
// btnCloseModal.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });
//instead of repeating the code we can assign it to a function
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    // if (!modal.classList.contains('hidden')) {
    closeModal();
    // }
  }
});
