var oldSong;
var logo;
var bg;
var analyzer;

function preload() {
  oldSong = loadSound("./assets/TG1_bumper.mp3");
  logo = loadImage("./assets/tg1.png");
  bg = loadImage("./assets/tg1vecchio.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  analyzer = new p5.Amplitude();
  analyzer.setInput(oldSong);

  oldSong.loop();
}

function draw() {

  imageMode(CENTER);
  image(bg, width/2, height/2, bg.width*2.5, bg.height*2.5);

  var volume = 0;
  volume = analyzer.getLevel();
  volume = map(volume, 0, 1, 0, height);

  imageMode(CENTER);
  image(logo, width / 2, height / 2, logo.width/4 + volume, logo.height/4 + volume);
}

//resize Canvas in real time
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
