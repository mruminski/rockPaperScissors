/*
- zdefiniowana liczba wygranych rund

zasady:
- ten sam ruch - REMIS
- papier wygrywa z kamieniem
- kamień wygrywa z nożycami
- nożyce wygrywają z papierem
*/

'use strict';

var output = document.getElementsByClassName('container__output');
var resultOutput = document.getElementsByClassName('container__result');
var toWin = document.getElementsByClassName('container__to-win');
output = output[0];
resultOutput = resultOutput[0];
toWin = toWin[0];
var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');
var newGame = document.getElementById('new-game');
var userMove;
var aiMove;
var userPoints = 0;
var aiPoints = 0;
var rounds;

var aiTurn = function() {
  var random = Math.floor((Math.random() * 3) + 1);
  
  if (random == 1) {
    aiMove = 'paper';
  }
  else if (random == 2) {
    aiMove = 'rock';
  } else {
    aiMove = 'scissors';
  }
}

var printResult = function(userMove) {
  if (userMove == aiMove) {
    output.innerHTML = 'DRAW';
  }

  if ((userMove == 'paper') && (aiMove == 'rock')) {
    output.innerHTML = 'YOU WON: you played PAPER, computer played ROCK.';
    userPoints++;
  }

  if ((userMove == 'rock') && (aiMove == 'scissors')) {
    output.innerHTML = 'YOU WON: you played ROCK, computer played SCISSORS.';
    userPoints++;
  }

  if ((userMove == 'scissors') && (aiMove == 'paper')) {
    output.innerHTML = 'YOU WON: you played SCISSORS, computer played PAPER.';
    userPoints++;
  }

  if ((aiMove == 'paper') && (userMove == 'rock')) {
    output.innerHTML = 'COMPUTER WON: computer played PAPER, you played ROCK.';
    aiPoints++;
  }

  if ((aiMove == 'rock') && (userMove == 'scissors')) {
    output.innerHTML = 'COMPUTER WON: computer played ROCK, you played SCISSORS.';
    aiPoints++;
  }

  if ((aiMove == 'scissors') && (userMove == 'paper')) {
    output.innerHTML = 'COMPUTER WON: computer played SCISSORS, you played PAPER.';
    aiPoints++;
  }
  resultOutput.innerHTML = userPoints+' - '+aiPoints;
}

var playerMove = function(userMove) {
  var canPlay = true;

  if (userPoints >= rounds || aiPoints >= rounds) {
    canPlay = false;
  }

  if (canPlay) {
    aiTurn();
    printResult(userMove);
  } else {
    output.innerHTML = '<br>YOU WON THE ENTIRE GAME!!!<br>';
    rock.addEventListener('click', function() {
      output.innerHTML += 'Game over, please press the new game button!<br>';
    });
    
    paper.addEventListener('click', function() {
      output.innerHTML += 'Game over, please press the new game button!<br>';
    });
    
    scissors.addEventListener('click',function() {
      output.innerHTML += 'Game over, please press the new game button!<br>';
    });
  }
}

rock.addEventListener('click', function() {
  playerMove('rock');
});

paper.addEventListener('click', function() {
  playerMove('paper');
});

scissors.addEventListener('click',function() {
  playerMove('scissors');
});

// BUG HERE
newGame.addEventListener('click', function() {
  rounds = parseInt(window.prompt('Enter the number of won rounds to win'+
  'entire game'));

  if (!isNaN(rounds)) {
    toWin.innerHTML = 'You have to won '+rounds+' rounds, to win the entire game';
    output.innerHTML = '';
    userPoints = 0;
    aiPoints = 0;
    resultOutput.innerHTML = userPoints+' - '+aiPoints;
  }
});