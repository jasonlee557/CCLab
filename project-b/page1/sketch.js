
let carX = 0;
let check = 0;

function preload() {
  taxi = loadSound("assets/charter.m4a");
  dashing = loadSound("assets/dashing.m4a");
  story1 = loadSound("assets/story1.mp3");
}
function setup() {
  let canvas = createCanvas(windowWidth, 400);
  canvas.id("p5-canvas");
  canvas.parent("p5-canvas-container");
}

function draw() {
  background("black")

  drawCar(carX, height / 2, "taxi");
  carX = mouseX;

  if (mouseX > width - 10) {
    check = check + 1;
  }

  if (check > 0) {
    carX = width - 10;
  }

  //smoke
  push();
  translate(width - 100, height / 2);
  fill(255, 255, 255, 150);
  noStroke();
  arc(0, -51, 25, 20, 0, PI);
  triangle(-12.5, -50, 12.5, -50, 0, random(-300, -150));
  pop();

  //backery
  push();
  fill("#f0d7a7");
  triangle(width + 100, 0, width - 250, 200, width + 250, 200);
  fill("#f0d7a7");
  rect(width - 150, 200, 200, 400);
  fill("red");
  textSize(20);
  text("bakery", width - 100, 300);
  pop();
  push();

  push();
  for (let i = 0; i < 10; i++) {
    let rainX = random(width);
    let rainY = random(height);
    stroke("white");
    line(rainX, rainY, rainX, rainY + 20);
  }
  pop();
  if (keyIsPressed == true) {
    //story
    if (keyCode == ENTER && story1.isPlaying() == false) {
      story1.play();
    }
    //taxi
    if ((key == "t" || key == "T") && taxi.isPlaying() == false) {
      taxi.play();
    }
    //dashing
    if ((key == "d" || key == "D") && dashing.isPlaying() == false) {
      dashing.play();
    }
  }
}

function drawCar(xPos, yPos, name) {
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
  drawWheel(-25, 40);
  drawWheel(25, 40);
  pop();

  function drawWheel(xPos, yPos) {
    push();
    translate(xPos, yPos);

    fill(50);
    ellipse(0, 0, 35, 32);

    pop();
  }
}

