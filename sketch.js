var fish;
var mouth;
var mic;
var yoff=0;


function preload(){

  fish = loadImage("./assets/pescerosso1.png");
  mouth = loadImage("./assets/pescerossobocca.png");

}

var realWidth;

function setup() {
  createCanvas(windowWidth,windowHeight);
  // mantain proportions of the images
  imageRatio = fish.height/fish.width;
  //get the microphone
  mic = new p5.AudioIn();
  mic.start();

  textFont("Montserrat, sans-serif");
  textSize(32);
  textAlign(CENTER, CENTER);

  imageMode(CENTER);
}

function draw() {

  background('#ffffff');
  var volume = mic.getLevel();

  //water
  fill('#4286f4');
  noStroke();

  beginShape();
  var xoff = 0;
    for (var x = 0; x <= width; x += 10) {

    var y = map(-volume*15, 0, 2, 500, 700);
    vertex(x, y);
    xoff += 0.05;
  }

  yoff += 0.02;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);



  // talking fish

  var fishWidth;
  var fishHeight;
  fishWidth = fish.width/3;
  fishHeight= fish.height/3;

  if (windowWidth < realWidth) {
        fishWidth = windowWidth;
        fishHeight= fishWidth*imageRatio; }

  image(fish,width/2,height/2, fishWidth, fishHeight);
  image(mouth, width/2, (height/2)+volume*40, fishWidth, fishHeight );

  //text
  fill("black");
  text("SAVE THE FISH: SPEAK!", width/2, height/10);
}

function windowResized(){
  resizeCanvas (windowWidth, windowHeight);
}
