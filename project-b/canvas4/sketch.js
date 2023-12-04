let cam;
let img;
let pg;

function preload() {
  img = loadImage("assets/bossbaby.jpg");
  //350 × 525
  story3 = loadSound('assets/story3.mp3');
  kite = loadSound('assets/kite.m4a');
  mini = loadSound('assets/minimum.m4a');
}
function setup() {
  let canvas = createCanvas(355, windowHeight);
  canvas.id("p5-canvas");
  canvas.parent("p5-canvas-container");
  // float on the pic
  pg = createGraphics(300, 300);
  cam = createCapture(VIDEO);
  cam.hide();
  
}
function draw() {
  
  background(245);
  
  image(img, 0, 0, img.width, img.height);
  translate(width,0);
  scale(-1, 1);
  //zoom in the user's face
  pg.image(cam, -200, 0);
  //display
  image(pg, 65, 30, 230, 250);
  
   if (keyIsPressed == true) {
    //story
    if (keyCode == ENTER && story3.isPlaying() == false) {
      story3.play();
    }
    //taxi
    if ((key == "b" || key == "B") && kite.isPlaying() == false) {
      kite.play();
    }
    //dashing
    if ((key == "m" || key == "M") && mini.isPlaying() == false) {
      mini.play();
    }
  }
  
  
}
