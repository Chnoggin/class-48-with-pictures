var player1, player1Img;
var player2, player2Img;
var database;
var gameState = 0;
var playerCount = 0;

var form;
var game;
var player;

var players;

var background1;

var allPlayers;
var score = 0;

var weapon1;

var weapon1group;

var weapon1flag = 0;




function preload() {
  player1Img = loadImage("fighter1.png");
  player2Img = loadImage("fighter2.png");
  background1 = loadImage("fighter game.png");
}
function setup() {
  createCanvas(displayWidth, displayHeight);
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();

  weapon1group = new Group();
  
}
function draw() {
  background(background1);
  if(playerCount === 2) {
    game.update(1);
  }
  if(gameState === 1) {
 clear();
 game.play();
  }
  if(gameState === 2) {
    game.end();
  }
  //drawSprites();
}
