var img;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var img9;
var img10;
var img11;

var initials ='al'; // your initials
var choice = '1'; // starting choice, so it is not empty

var lastscreenshot=61; // last screenshot never taken

function preload() {
  img = loadImage('https://arillamas.github.io/images/brush1.png');
  img2 = loadImage('https://arillamas.github.io/images/brush2.png');
  img3 = loadImage('https://arillamas.github.io/images/brush3.png');
  img4 = loadImage('https://arillamas.github.io/images/brush4.png');
  img5 = loadImage('https://arillamas.github.io/images/brush5.png');
  img6 = loadImage('https://arillamas.github.io/images/brush6.png');
  img7 = loadImage('https://arillamas.github.io/images/brush7.png');
  img8 = loadImage('https://arillamas.github.io/images/brush8.png');
  img9 = loadImage('https://arillamas.github.io/images/brush9.png');
  img10 = loadImage('https://arillamas.github.io/images/brush10.png');
  img11 = loadImage('https://arillamas.github.io/images/brickbg.png');

}

function setup() {
createCanvas(600, 600); 
image(img11,0,0,width,height); 

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

    if (toolChoice == '1' ) {  // first brush, pumpkin stamp
    image(img, mouseX-50, mouseY-50, 100, 100);
    
  } else if (toolChoice == '2') { // second brush, splatter
    image(img2, mouseX-80, mouseY-80, 160, 160);
     
  } else if (toolChoice == '3') { // third brush, color scratches
    image(img3, mouseX-50, mouseY-50, 100, 100);
    
  } else if (toolChoice == '4') {// fourth brush, color scratches 
    image(img4, mouseX-50, mouseY-50, 100, 100);
  
  } else if (key == '5') { // figth brush, wolf scratches
    image(img5, mouseX-80, mouseY-80, 160, 160);

  } else if (toolChoice == '6') {//sixth brush, moon
    image(img6, mouseX-80, mouseY-80, 160, 160);
   
  } else if (toolChoice == '7') {//7th brush, banner stamp 1
 image(img7, mouseX-230, mouseY-230, 460, 460);
 
  } else if (toolChoice == '8') {//8th brursh, banner stamp 2
 image(img8, mouseX-230, mouseY-230, 460, 460);

  } else if (toolChoice == '9') {//9th brush,crystal ball 
image(img9, mouseX-50, mouseY-50, 100, 100);

  } else if (toolChoice == '0') {//vampirebat
  image(img10, mouseX-80, mouseY-80, 160, 160);
  }
  
}function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    image(img11, 0, 0, width, height); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
