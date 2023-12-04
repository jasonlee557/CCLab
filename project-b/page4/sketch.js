let img;

function preload() {
  img = loadImage("assets/dic.png");
  //892 × 452
  beg = loadSound("assets/beg.m4a");
  cash = loadSound("assets/cash.m4a");
  cement = loadSound("assets/cement.m4a");
  hundred = loadSound("assets/hundred.m4a");
  sale = loadSound("assets/sale.m4a");
  steam = loadSound("assets/steam.m4a");
}

function setup() {
  let canvas = createCanvas(900, 460);
  canvas.id("p5-canvas");
  canvas.parent("p5-canvas-container");
  // createCanvas(900, 460);
}

function draw() {
  background(220);
  image(img, 0, 0, img.width, img.height);
  // fill("white");
  // rect(300, 90 + 50 * 6.3, 50, 50);
  //play the sound
  if (mouseIsPressed && mouseX > 300 && mouseX < 350) {
    //cash
    if (mouseY > 90 && mouseY < 90 + 50) {
       if (cash.isPlaying() == false) {
        cash.play();
      }
    } else if (mouseY > 90 + 50 && mouseY < 90 + 50 * 2) {
      //cement
      if (cement.isPlaying() == false) {
        cement.play();
      }
    } else if (mouseY > 90 + 50 * 2 && mouseY < 90 + 50 * 3) {
      //steam
      if (steam.isPlaying() == false) {
        steam.play();
      }
    } else if (mouseY > 90 + 50 * 3 && mouseY < 90 + 50 * 4) {
      //beg
      if (beg.isPlaying() == false) {
        beg.play();
      }
    } else if (mouseY > 90 + 50 * 4 && mouseY < 90 + 50 * 5) {
      //sale
      if (sale.isPlaying() == false) {
        sale.play();
      }
    } else if (mouseY > 90 + 50 * 6.3 && mouseY < 90 + 50 * 8) {
      //hundred
      if (hundred.isPlaying() == false) {
        hundred.play();
      }
    }
  }
}
