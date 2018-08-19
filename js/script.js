'use strict';

var output = document.querySelector('.container__output');
var resultOutput = document.querySelector('.container__result');
var toWin = document.querySelector('.container__to-win');
var rock = document.querySelector('#rock');
var paper = document.querySelector('#paper');
var scissors = document.querySelector('#scissors');
var newGame = document.querySelector('#new-game');
var params = {
  aiMove: null,
  userPoints: 0,
  aiPoints: 0,
  rounds: null,
  canPlay: true
}

var aiTurn = function() {
  var random = Math.floor((Math.random() * 3) + 1);
  
  if (random == 1) {
    params.aiMove = 'paper';
  }
  else if (random == 2) {
    params.aiMove = 'rock';
  } else {
    params.aiMove = 'scissors';
  }
}

var printResult = function(userMove) {
   if (userMove === params.aiMove) {
    output.innerHTML = 'DRAW';
  } else if ((userMove === 'paper' && params.aiMove === 'rock') ||
  (userMove === 'rock' && params.aiMove === 'scissors') ||
  (userMove === 'scissors' && params.aiMove === 'paper')) {
    output.innerHTML = 'YOU WON: you played '+userMove.toUpperCase() +
    ', computer played '+ params.aiMove.toUpperCase()+'.<br>';
    return params.userPoints++;
  } else {
    output.innerHTML = 'COMPUTER WON: computer played '+params.aiMove.toUpperCase() +
    ', you played '+ userMove.toUpperCase()+'.<br>';
    return params.aiPoints++;
  }
}

var showGameOver = function(can) {
  if (!can) {
    output.innerHTML += 'Game over, please press the new game button!<br>';
  }
}

var playerMove = function(userMove) {
  var modal = document.querySelector('.modal');
  var modalContent = document.querySelector('.content p');
  var closeModal = document.querySelector('.close')  

  var showModal = function(e) {
    // e.preventDefault();
    document.querySelector('.modal').classList.add('show');
    document.querySelector('#modal-overlay').classList.add('show');
  }
  
  var hideModal = function(e) {
    e.preventDefault();
    document.querySelector('.modal').classList.remove('show');
    document.querySelector('#modal-overlay').classList.remove('show');
  }

  document.querySelector('#modal-overlay').addEventListener('click', hideModal);
	modal.addEventListener('click', function(e){
		e.stopPropagation();
  });
  
  closeModal.addEventListener('click',hideModal);

  if (!params.canPlay) {
    return;
  }
  
  if (params.userPoints >= params.rounds || params.aiPoints >= params.rounds) {
    params.canPlay = false;
    showModal();
  }

  if (params.canPlay) {
    aiTurn();
    printResult(userMove);
    resultOutput.innerHTML = params.userPoints+' - '+params.aiPoints;
    return;
  }

  if (params.userPoints > params.aiPoints) {
    modalContent.innerHTML = '<br>YOU WON THE ENTIRE GAME!!!<br>';
  } else {
    modalContent.innerHTML = '<br>COMPUTER WON THE ENTIRE GAME!!!<br>';
  } 
}

var btnArr = document.querySelectorAll('.player-move');

var whenBtnClicked = function(btnIntex) {
  var attribute = btnArr[btnIntex].getAttribute('data-move');
  playerMove(attribute);
  showGameOver(params.canPlay);
}

btnArr.forEach(function(btn, index) {
  btn.addEventListener('click', function() {
    whenBtnClicked(index);
  });
});

newGame.addEventListener('click', function() {
  params.canPlay = true;
  params.rounds = parseInt(window.prompt('Enter the number of won rounds to win'+
  'entire game'));

  if (!isNaN(params.rounds)) {
    toWin.innerHTML = 'You have to won '+params.rounds+' rounds, to win the entire game';
    output.innerHTML = '';
    params.userPoints = 0;
    params.aiPoints = 0;
    resultOutput.innerHTML = params.userPoints+' - '+params.aiPoints;
  }
});