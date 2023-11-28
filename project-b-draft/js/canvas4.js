let cam;
let img;
let pg;

function preload() {
  img = loadImage("bossbaby.jpg");
  //350 × 525
}
function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("canvasContainer");
  pg = createGraphics(300, 300);
  cam = createCapture(VIDEO);
  cam.hide();
}
function draw() {
  background(245);
  image(img, 0, 0, img.width, img.height);
  //zoom in the user's face
  pg.image(cam, -200, 0);
  //display
  image(pg, 65, 30, 230, 250);
}
