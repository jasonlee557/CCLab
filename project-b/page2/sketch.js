function preload(){
  img1 = loadImage("nougat.jpg");//1200 × 800
  img2 = loadImage("biscuit.jpg");//360x360
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.id("p5-canvas");
  canvas.parent("p5-canvas-container");
}

function draw() {
  background(0);
  push();
  scale(0.2)
  image(img1, 0, 0, img1.width, img1.height);
  pop();
  push();
  scale(0.5);
  image(img2,width,height, img2.width, img2.height);
  pop();
  
  if (keyIsPressed=="e"){
    i += 1
  }
  
}