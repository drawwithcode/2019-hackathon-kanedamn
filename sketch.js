var oldSong;
var myImage;

function preload() {
  //load sound file
  oldSong = loadSound("./assets/TG1_bumper.mp3");
  //load image file
  myImage = loadImage("./assets/radio.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //loop sound forever
  oldSong.loop()
}

function draw() {
  background(246);

  imageMode(CENTER);
  image(myImage, width/2, height/2, myImage.width/3, myImage.height/3);

  var myText = "Just like good ol' times!";
  textFont("Pacifico");
  textSize(60);
  drawingContext.textAlign = "center";
  fill(232, 203, 168);
  text(myText, width/2, height/7);

  //set volume between a range of values and change it with x position
  var volume = map(mouseX, 0, width, 0, 1);
  volume = constrain(volume, 0, 1);
  oldSong.amp(volume);

  //set speed between a range of values and change with y position
  var speed = map(mouseY, 0.1, height, 0, 2);
  speed = constrain(speed, 0.01, 4);
  oldSong.rate(speed);

  //constrain x and y movements between a range of positions
  xc = constrain(mouseX, width/2 - 200, width/2 + 200);
  yc = constrain(mouseY, height/2 - 200, height/2 + 200);

  rectMode(CENTER);
  noStroke();
  fill(234, 161, 133);
  //create the volume slider
  rect(xc, height/5, 50, 20);
  //create the speed slider
  rect(width/3, yc, 20, 50);

}

//resize Canvas in real time
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
