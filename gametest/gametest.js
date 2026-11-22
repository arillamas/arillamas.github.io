var ballx = 300;
var bally = 300;
var ballSize = 350;
var score = 0;
var gameState = "L1";
var streakImg;
var imgPalette;
var imgEasel;
var canClick = true;
var imgDirty;
var finalCursor = ('https://arillamas.github.io/images/blowdryer.png');
var mainCursor= ('https://arillamas.github.io/images/paintbrush.png');
var imgEaselplain;


function preload() {
  
streakImg = loadImage('https://arillamas.github.io/images/paintstreak.png');

imgPalette = loadImage('https://arillamas.github.io/images/paintpalette.png');

imgEasel = loadImage('https://arillamas.github.io/images/easel.png');

imgDirty = loadImage('https://arillamas.github.io/images/paintcup.png');

imgEaselplain = loadImage('https://arillamas.github.io/images/easelplain.png');
}
  
function setup() {
createCanvas(600, 600); 
textAlign(CENTER);
textSize(20);
cursor(mainCursor, 10, 10);

}//end


function draw() {
background(220);
if (gameState == "L1"){
levelOne();
}
if(gameState == "L2"){
   levelTwo();
}
if(gameState == "L3"){
   levelThree();
}
if(gameState == "L4"){
   levelFour();
}
if(gameState == "FL"){
   levelWinner();
}
if (gameState == "L4") {
  cursor(finalCursor, 10, 10);
} else {
  cursor(mainCursor, 10, 10);
}
text(("Score=" + score),width/2,40);
}// end of draw

function levelOne(){
   background('yellow');
  text("LEVEL 1:GRAB YOUR PAINT!", width/2,height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);

if(distToBall<ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
   
  } //end of if stmnt
  
  if(score>5){
   gameState = "L2"
  }
    
 // ellipse(ballx,bally,ballSize,ballSize);

  imageMode(CENTER);
  image(imgPalette, ballx, bally, ballSize, ballSize);
  paintStreak();
  
}// end of level 1===================================

function levelTwo(){
  background('red');
  text("LEVEL 2:CLICK TO PAINT", width/2,height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);

if (mouseIsPressed && canClick) {
  canClick = false;

  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
 }
}

if (!mouseIsPressed) {
  canClick = true;
}
  if(score>15){
    gameState = "L3";
  }
   paintStreak();
   imageMode(CENTER);
   image(imgEaselplain, ballx, bally, ballSize, ballSize);
   
   
  //ellipse(ballx,bally,ballSize,ballSize);
  //line(ballx,bally,mouseX,mouseY);
  
}// end of level 2 ==================================

function levelThree(){
   background('Blue');
  text("LEVEL 3: WASH YOUR BRUSH", width/2,height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);

  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
    ballSize = ballSize -10;
  }
  paintStreak();
  imageMode(CENTER);
  image(imgDirty, ballx, bally, ballSize, ballSize);
  
 if(score>25){
    gameState = "L4";
  }
    
 // ellipse(ballx,bally,ballSize,ballSize);
  //line(ballx,bally,mouseX,mouseY);
  
} // end of level 3 ==================================

function levelFour(){
   background('Green');
  text("FINAL LEVEL: CLICK TO DRY YOUR PAINTING!", width/2,height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);

if (mouseIsPressed && canClick) {
  canClick = false;

  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
     ballSize = ballSize -10.6;
 }
}

if (!mouseIsPressed) {
  canClick = true;
}
  
 if(score>49){
    gameState = "FL";
  }
    
  image(imgEasel, ballx, bally, ballSize, ballSize);
  //line(ballx,bally,mouseX,mouseY);
  
} // end of level 4/final  ==================================

function paintStreak() {
  var streakLength = dist(ballx, bally, mouseX, mouseY);
  var streakAngle = atan2(mouseY - bally, mouseX - ballx);
  push();
  translate(ballx, bally);
  rotate(streakAngle);
  imageMode(CORNER);
  image(streakImg, 0, -20, streakLength, 40);
  pop();
  
} //paintstreak that replaced plain line

function levelWinner(){
    background('purple');
  imageMode(CENTER);
  image(imgEasel, width / 2, height / 2);

  text("YOU WON!!AMAZING PAINTING!!!", width / 2, height - 20);
} //ending 
