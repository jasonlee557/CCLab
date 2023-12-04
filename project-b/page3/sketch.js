function preload() {
  candy = loadImage("assets/nougat.jpg"); //1000 × 833
  cookie = loadImage("assets/biscuit.jpg"); //360x360
  biscuit = loadSound("assets/biscuit.m4a");
  nougat = loadSound("assets/nougat.m4a");
  story2 = loadSound("assets/story2.mp3");
}

function setup() {
  let canvas = createCanvas(windowWidth/2, windowHeight);
  canvas.id("p5-canvas");
  canvas.parent("p5-canvas-container");
  background("white");
  push();
  scale(0.25);
  image(candy, 0, 0, candy.width, candy.height);
  pop();
  push();
  scale(0.25);
  image(cookie, 2*width, 2 * height, cookie.width, cookie.height);
  pop();
}

function draw() {
  if (keyIsPressed) {
    //    eat left nougat
    if (keyCode == LEFT_ARROW&&nougat.isPlaying() == false) {
      fill("white");
      noStroke();
      rect(0, 0, width / 8, height);
      nougat.play();
    }
    //     eat right nougat
    if (keyCode == RIGHT_ARROW && nougat.isPlaying()==false) {
      fill("white");
      noStroke();
      rect(width / 8, 0, width / 8, height);
      nougat.play();
    }
    //     eat up biscuit
    if (keyCode == UP_ARROW&& biscuit.isPlaying()==false) {
      fill("white");
      noStroke();
      rect(width / 4, height/3, width / 6, height/3);
      biscuit.play();
    }
    // eat down biscuit
     if (keyCode == DOWN_ARROW&& biscuit.isPlaying()==false) {
      fill("white");
      noStroke();
      rect(width / 2, 0, width / 6, height);
      biscuit.play();
    }
    // story sound
    if (keyCode == ENTER && story2.isPlaying() == false) {
      story2.play();
    }
  }
}

