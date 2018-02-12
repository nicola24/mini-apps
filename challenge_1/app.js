
let count = 0;

let r1c1 = document.getElementById('r1c1');
let r1c2 = document.getElementById('r1c2');
let r1c3 = document.getElementById('r1c3');
let r2c1 = document.getElementById('r2c1');
let r2c3 = document.getElementById('r2c3');
let r3c1 = document.getElementById('r3c1');
let r3c2 = document.getElementById('r3c2');
let r3c3 = document.getElementById('r3c3');

// When a square is clicked, add an X OR O to that square.
var toggle = (square) => {
  square.addEventListener('click', () => {
    count++;
    if (count %  2 === 0) {
      square.innerHTML = 'X';
    } else {
      square.innerHTML = 'O';
    }
  }, false);
}

//reset board button
var reset = document.getElementById('reset');
reset.addEventListener('click', () => {
  r1c1.innerHTML = '';
  r1c2.innerHTML = '';
  r1c3.innerHTML = '';
  r2c1.innerHTML = '';
  r2c2.innerHTML = '';
  r2c3.innerHTML = '';
  r3c1.innerHTML = '';
  r3c2.innerHTML = '';
  r3c3.innerHTML = '';
}, false);

toggle(r1c1);
toggle(r1c2);
toggle(r1c3);
toggle(r2c1);
toggle(r2c2);
toggle(r2c3);
toggle(r3c1);
toggle(r3c2);
toggle(r3c3);









//var r1c1 = document.getElementById('r1c1');
// r1c1.addEventListener('click', () => {
//   count++;
//   if (count %  2 === 0) {
//     r1c1.innerHTML = 'X';
//   } else {
//     r1c1.innerHTML = 'O';
//   }
// }, false);

//var r1c2 = document.getElementById('r1c2');
// r1c2.addEventListener('click', () => {
//   count++;
//   if (count %  2 === 0) {
//     r1c2.innerHTML = 'X';
//   } else {
//     r1c2.innerHTML = 'O';
//   }
// }, false);

// var r1c3 = document.getElementById('r1c3');
// r1c3.addEventListener('click', () => {
//   count++;
//   if (count %  2 === 0) {
//     r1c3.innerHTML = 'X';
//   } else {
//     r1c3.innerHTML = 'O';
//   }
// }, false);
//
// var r2c1 = document.getElementById('r2c1');
// r2c1.addEventListener('click', () => {
//   count++;
//   if (count %  2 === 0) {
//     r2c1.innerHTML = 'X';
//   } else {
//     r2c1.innerHTML = 'O';
//   }
// }, false);
//
// var r2c2 = document.getElementById('r2c2');
// r2c2.addEventListener('click', () => {
//   count++;
//   if (count %  2 === 0) {
//     r2c2.innerHTML = 'X';
//   } else {
//     r2c2.innerHTML = 'O';
//   }
// }, false);
//
// var r2c3 = document.getElementById('r2c3');
// r2c3.addEventListener('click', () => {
//   count++;
//   if (count %  2 === 0) {
//     r2c3.innerHTML = 'X';
//   } else {
//     r2c3.innerHTML = 'O';
//   }
// }, false);
//
// var r3c1 = document.getElementById('r3c1');
// r3c1.addEventListener('click', () => {
//   count++;
//   if (count %  2 === 0) {
//     r3c1.innerHTML = 'X';
//   } else {
//     r3c1.innerHTML = 'O';
//   }
// }, false);
//
// var r3c2 = document.getElementById('r3c2');
// r3c2.addEventListener('click', () => {
//   count++;
//   if (count %  2 === 0) {
//     r3c2.innerHTML = 'X';
//   } else {
//     r3c2.innerHTML = 'O';
//   }
// }, false);
//
// var r3c3 = document.getElementById('r3c3');
// r3c3.addEventListener('click', () => {
//   count++;
//   if (count %  2 === 0) {
//     r3c3.innerHTML = 'X';
//   } else {
//     r3c3.innerHTML = 'O';
//   }
// }, false);
