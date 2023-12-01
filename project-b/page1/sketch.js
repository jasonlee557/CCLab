let carX = 0;

function setup() {
    let canvas = createCanvas(windowWidth, 400);
    canvas.id("p5-canvas");
    canvas.parent("p5-canvas-container");
}

function draw() {
  background(220);
  drawCar(carX, height / 2, 4, "taxi");
  carX = mouseX;

  if (carX > width + 100) {
    carX = -100;
  }
}

// defining a function
function drawCar(xPos, yPos, speed, name) {
  push();
  translate(xPos, yPos);
  scale(3);

  // light
  c1 = "white";
  fill("c1");
  ellipse(-10, -40, 10, 20);

  // body
  fill("green");
  rect(-20, -40, 40, 40);
  rect(-60, 0, 120, 40);

  // decoration
  fill("white");
  rect(-60, 20, 120, 5);
  rect(-60, 25, 120, 5);

  fill(255);
  textSize(20);
  text(name, -50, 20);

  // wheels
  fill(0);
  drawWheel(-25, 40, speed);
  drawWheel(25, 40, speed);

  pop();
}

function drawWheel(xPos, yPos, speed) {
  push();
  translate(xPos, yPos);
  rotate(radians(frameCount * speed));

  fill(50);
  ellipse(0, 0, 35, 32);

  pop();
}
