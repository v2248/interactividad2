let x = 0;
let y = 0;
let friction = 0.05;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
    background(0, 10);
    fill(255);
    stroke(255)
    strokeWeight(10);
    x += (mouseX - x) * friction;
    y += (mouseY - y) * friction;
    ellipse(mouseX, mouseY, 50, 50);
}