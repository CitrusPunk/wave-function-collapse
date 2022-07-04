const widthWindow = 1200,
  heightWindow = 960;

function setup() {
  // setup canvas and drawing modes
  createCanvas(widthWindow, heightWindow);
  noStroke();
}

function draw() {
  background(220);

  update();
}

function update() {}

function keyPressed() {
  if (keyCode === 82) {
    // ASCII code for 'r'
    console.log("restart");
    init();
  }
}