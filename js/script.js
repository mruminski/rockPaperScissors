'use strict';

var output = document.querySelector('.container__output');
var resultOutput = document.querySelector('.container__result');
var toWin = document.querySelector('.container__to-win');
var rock = document.querySelector('#rock');
var paper = document.querySelector('#paper');
var scissors = document.querySelector('#scissors');
var newGame = document.querySelector('#new-game');
var userMove;
var aiMove;
var userPoints = 0;
var aiPoints = 0;
var rounds;
var canPlay = true;

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

var showGameOver = function(canPlay) {
  if (!canPlay) {
    output.innerHTML += 'Game over, please press the new game button!<br>';
  }
}

var playerMove = function(userMove) {
  if (!canPlay) {
    return;
  }
  
  if (userPoints >= rounds || aiPoints >= rounds) {
    canPlay = false;
  }

  if (canPlay) {
    aiTurn();
    printResult(userMove);
    return;
  } 
    return output.innerHTML = '<br>YOU WON THE ENTIRE GAME!!!<br>';
}

rock.addEventListener('click', function() { 
  playerMove('rock');
  showGameOver(canPlay);
});

paper.addEventListener('click', function() {
  playerMove('paper');
  showGameOver(canPlay);
});

scissors.addEventListener('click',function() {
  playerMove('scissors');
  showGameOver(canPlay);
});

newGame.addEventListener('click', function() {
  canPlay = true;
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