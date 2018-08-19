'use strict';

var output = document.querySelector('.container__output');
var resultOutput = document.querySelector('.container__result');
var toWin = document.querySelector('.container__to-win');
var rock = document.querySelector('#rock');
var paper = document.querySelector('#paper');
var scissors = document.querySelector('#scissors');
var newGame = document.querySelector('#new-game');
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
   if (userMove === aiMove) {
    output.innerHTML = 'DRAW';
  } else if ((userMove === 'paper' && aiMove === 'rock') ||
  (userMove === 'rock' && aiMove === 'scissors') ||
  (userMove === 'scissors' && aiMove === 'paper')) {
    output.innerHTML = 'YOU WON: you played '+userMove.toUpperCase() +
    ', computer played '+ aiMove.toUpperCase()+'.';
    return userPoints++;
  } else {
    output.innerHTML = 'COMPUTER WON: computer played '+aiMove.toUpperCase() +
    ', you played '+ userMove.toUpperCase()+'.';
    return aiPoints++;
  }
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
    resultOutput.innerHTML = userPoints+' - '+aiPoints;
    return;
  } 
  if (userPoints > aiPoints) {
    return output.innerHTML = '<br>YOU WON THE ENTIRE GAME!!!<br>';
  } else {
    return output.innerHTML = '<br>COMPUTER WON THE ENTIRE GAME!!!<br>';
  }
}

var btnArr = document.querySelectorAll('.player-move');

var whenBtnClicked = function(btnIntex) {
  var attribute = btnArr[btnIntex].getAttribute('data-move');
  playerMove(attribute);
  showGameOver(canPlay);
}

btnArr.forEach(function(btn, index) {
  btn.addEventListener('click', function() {
    whenBtnClicked(index);
  });
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