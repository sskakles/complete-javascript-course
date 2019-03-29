/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


// psuedo jsx/react
//
//var myClassName = "whatever";
//var text = "hello kitten";
//var htmlElement = <div className={myClassName}>{text}</div>;

//
// YAY yer first node.js app !!!
//
// run the following from the terminal
// sskakles@C02TN0KFHTD6 4-DOM-pig-game  (master) $ node starter/app.js
// then open up a browser and go to localhost:4000

//const http2 = require('http');
////import http from "http";
//var server = http2.createServer(function (request, response) {
//    response.writeHead(200, {"Content-Type": "text/plain"});
//    response.end("Hello World\n");
//});
//server.listen(4000);
//
//const http = require('http');
//var server2 = http.createServer(function (request, response) {
//	response.writeHead(200, {"Content-Type": "text/plain"});
//	response.end("Hello Werld 2!");																
//});
//server2.listen(8080);
//
//promise.then(function(result) {
//  console.log('we just got some shit here homey [result]->: ' + result); // "Stuff worked!"
//}, function(err) {
//  console.log(err); // Error: "It broke"
//});


// 
// YAY your first express server MOFO
//
// Ref: https://medium.com/@LindaVivah/the-beginners-guide-understanding-node-js-express-js-fundamentals-e15493462be1
// Read.md - to run this just use the following:
// $ node starter/app.js
//const express = require('express');
//var app = express();
//
//app.get('/', (req, res) => {
//	res.send('Hello Express!');
//});
//app.listen(process.env.PORT || 3000);

//
// Ok back the the program...er the dice game that is...
//

function dude() {	
	var a = 5; 
	function dud () {
		console.log(a);
	}
	dud();
}
dude();

var scores, roundScore, activePlayer;
scores = [0,0];
roundScore = 0;
activePlayer = 0;

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

document.querySelector('.dice').style.display = 'none';

function btn() {
	console.log('btn click');
}

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.btn-roll').addEventListener('click', function() {

	console.log('bin click');
	// 1. random number
	dice = Math.floor(Math.random() * 6) + 1;
	console.log(dice);
	
	// 2. display the result
	var diceDOM = document. querySelector('.dice');
	diceDOM.style.display = 'block';
	diceDOM.src = 'dice-' + dice + '.png';
	
	// 3. udpate the round dscore if the user rolled a number that was not 1
	if (dice !== 1) {
		// Add score
		roundScore += dice;
		document.querySelector('#current-' + activePlayer).textContent = roundScore;
	} else {
		// then we have the next player
		setNextPlayer();
	}	
});

document.querySelector('.btn-hold').addEventListener('click', function() {
	// Add current sccore to global score
	scores[activePlayer] += roundScore;
	
	// Update the UI
	document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
	
	
	// Check if the player won the game
	if (scores[activePlayer] >= 100) {
		document.querySelector('#name-' + activePlayer).textContent = "Winner!";
		document.querySelector('.dice').style.display = 'none';
		document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
		document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
	} else {	
		setNextPlayer();		
	}
	
});

function setNextPlayer() {
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		roundScore = 0;
		
		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';
		
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

		//		document.querySelector('.player-0-panel').classList.remove('active');
		//		document.querySelector('.player-1-panel').classList.add('active');
		
		document.querySelector('.dice').style.display = 'none';
}


