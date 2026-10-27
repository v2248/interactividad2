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
    let time = millis() * 0.001;
    let size = sin(time) * 50 + 100;
    let r = sin(time) * 127 + 128;
    let g = cos(time + PI/3) * 127 + 128;
    let b = sin(time + (2 * PI) / 3) * 127 + 128;
    background(0, 10);
    fill(0);
    stroke(r, g, b);
    strokeWeight(10);
    x += (mouseX - x) * friction;
    y += (mouseY - y) * friction;
    ellipse(mouseX, mouseY, 50, 50);
}