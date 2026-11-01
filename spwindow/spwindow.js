function setup() {
createCanvas(600, 600);
background('teal')
}


function draw() {
angleMode(DEGREES);
push();
noStroke();
fill('purple');
ellipse(0, 600, 600, 600); //background circle back

fill('teal');
ellipse(0, 600, 360, 360); //background circle middle

fill('purple');
ellipse(0, 600, 180, 180); //background circle front
rect(450, 0, 150, 360); //background rectangle back

fill('teal');
rect(510, -25, 150, 350); //background rectangle front

fill ('burlywood');
arc(160, 300, 200, 120, 90, 400);// left ear
arc(440, 300, 200, 120, 140, 90); // right ear

fill('white');
ellipse(135, 325, 48, 48); // left earring
ellipse(465, 325, 48, 48); // right earring

fill('teal');
ellipse(135, 325, 22, 22); // left hole
fill('purple');
ellipse(465, 325, 22, 22); // right hole

fill('#5C4033');
rect(130, 175, 340, 425); // back hair
 
fill ('burlywood'); 
rect(250, 430, 100, 120);
ellipse(300, 263, 340, 450); // head

fill ('peru')
triangle(300, 200, 275, 360, 323, 360); // nose
pop();

push();
strokeWeight(3);
line(270, 420, 330, 420); // mouth
pop();

push();
noStroke();
fill ('#5C4033');
rect(195, 190, 70, 15);// left eyebrow
rect(340, 190, 70, 15);// right eyebrow

fill ('white');
ellipse(230, 250, 80, 40); // left eye ball
ellipse(370, 250, 80, 40); // right eye ball

fill('#5C4033');
ellipse(230, 250, 20, 25); // left pupil
ellipse(370, 250, 20, 25); // right pupil

fill('#5C4033');
triangle(400, 20, 210, 45, 100, 150); // left and right spike
triangle(185, 90, 210, 1, 235, 125); // left hair spike
triangle(250, 85, 300, 15, 200, 85); // middle hair spike
arc(300, 175, 340, 275, 180, 360); // hair

fill('#2C1D0C');
rect(130, 175, 30, 115); // left sideburn
rect(440, 175, 30, 115); // right sideburn

fill ('navy')
rect(20, 520, 560, 80); // shirt 
pop();

} // end
