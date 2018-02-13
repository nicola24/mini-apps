let count = 0;

let r1c1 = document.getElementById('r1c1');
let r1c2 = document.getElementById('r1c2');
let r1c3 = document.getElementById('r1c3');
let r2c1 = document.getElementById('r2c1');
let r2c3 = document.getElementById('r2c3');
let r3c1 = document.getElementById('r3c1');
let r3c2 = document.getElementById('r3c2');
let r3c3 = document.getElementById('r3c3');
let player = document.getElementById('player');
let score = document.getElementById('score');

// fucntion that toggle X or O when a square is clicked
let toggle = (square) => {

  //toggle part
  square.addEventListener('click', () => {
    count++;
    if (count %  2 === 0) {
      square.innerHTML = 'O';
      player.innerHTML = 'X Turn'
    } else {
      square.innerHTML = 'X';
      player.innerHTML = 'O Turn'
    }

    // row X
    if (r1c1.innerHTML === 'X' && r1c2.innerHTML === 'X' && r1c3.innerHTML === 'X') {
      score.innerHTML = 'GAME OVER X WINNER!';
    }
    if (r2c1.innerHTML === 'X' && r2c2.innerHTML === 'X' && r2c3.innerHTML === 'X') {
      score.innerHTML = 'GAME OVER X WINNER!';
    }
    if (r3c1.innerHTML === 'X' && r3c2.innerHTML === 'X' && r3c3.innerHTML === 'X') {
      score.innerHTML = 'GAME OVER X WINNER!';
    }

    // column X
    if (r1c1.innerHTML === 'X' && r2c1.innerHTML === 'X' && r3c1.innerHTML === 'X') {
      score.innerHTML = 'GAME OVER X WINNER!';
    }
    if (r1c2.innerHTML === 'X' && r2c2.innerHTML === 'X' && r3c2.innerHTML === 'X') {
      score.innerHTML = 'GAME OVER X WINNER!';
    }
    if (r1c3.innerHTML === 'X' && r2c3.innerHTML === 'X' && r3c3.innerHTML === 'X') {
      score.innerHTML = 'GAME OVER X WINNER!';
    }

    // diagonal X
    if (r1c1.innerHTML === 'X' && r2c2.innerHTML === 'X' && r3c3.innerHTML === 'X') {
      score.innerHTML = 'GAME OVER X WINNER!';
    }
    if (r1c3.innerHTML === 'X' && r2c2.innerHTML === 'X' && r3c1.innerHTML === 'X') {
      score.innerHTML = 'GAME OVER X WINNER!';
    }

    // row O
    if (r1c1.innerHTML === 'O' && r1c2.innerHTML === 'O' && r1c3.innerHTML === 'O') {
      score.innerHTML = 'GAME OVER O WINNER!';
    }
    if (r2c1.innerHTML === 'O' && r2c2.innerHTML === 'O' && r2c3.innerHTML === 'O') {
      score.innerHTML = 'GAME OVER O WINNER!';
    }
    if (r3c1.innerHTML === 'O' && r3c2.innerHTML === 'O' && r3c3.innerHTML === 'O') {
      score.innerHTML = 'GAME OVER O WINNER!';
    }

    // column O
    if (r1c1.innerHTML === 'O' && r2c1.innerHTML === 'O' && r3c1.innerHTML === 'O') {
      score.innerHTML = 'GAME OVER O WINNER!';
    }
    if (r1c2.innerHTML === 'O' && r2c2.innerHTML === 'O' && r3c2.innerHTML === 'O') {
      score.innerHTML = 'GAME OVER O WINNER!';
    }
    if (r1c3.innerHTML === 'O' && r2c3.innerHTML === 'O' && r3c3.innerHTML === 'O') {
      score.innerHTML = 'GAME OVER O WINNER!';
    }

    // diagonal O
    if (r1c1.innerHTML === 'O' && r2c2.innerHTML === 'O' && r3c3.innerHTML === 'O') {
      score.innerHTML = 'GAME OVER X WINNER!';
    }
    if (r1c3.innerHTML === 'O' && r2c2.innerHTML === 'O' && r3c1.innerHTML === 'O') {
      score.innerHTML = 'GAME OVER X WINNER!';
    }

  }, false);
};

//reset board button
let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => {
  r1c1.innerHTML = '';
  r1c2.innerHTML = '';
  r1c3.innerHTML = '';
  r2c1.innerHTML = '';
  r2c2.innerHTML = '';
  r2c3.innerHTML = '';
  r3c1.innerHTML = '';
  r3c2.innerHTML = '';
  r3c3.innerHTML = '';
  score.innerHTML = '';
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
