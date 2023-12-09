let questions = [
    "1.What is the sound in the red?",
    "2.What is the sound?(answer1:taxi)",
    "3.What is the sound?(answer2:dashing)",
    "4.What is the sound?(answer3:biscuit)",
    "5.What is the sound?(answer4:nougat)",
    "6.babyboss(answer5:slightly)",
    "Click the 'dictionary' at the bottom for more",
  ];
  let answers = ["taxi", "dashing", "biscuit", "nougat", "slightly", "babyboss"];
  let s = [];
  
  let answerBox;
  let counter = 0;
  let score = 0;
  let submitButton;
  
  function preload() {
    taxi = loadSound("quiz/charter.m4a");
    dashing = loadSound("quiz/dashing.m4a");
    biscuit = loadSound("quiz/biscuit.m4a");
    nougat = loadSound("quiz/nougat.m4a");
    babyboss = loadSound("quiz/kite.m4a");
    slightly = loadSound("quiz/minimum.m4a");
  }
  
  function setup() {
    let canvas = createCanvas(windowWidth, 400);
    canvas.id("p5-canvas");
    canvas.parent("p5-canvas-container");
    background(225);
  
    s = [taxi, dashing, biscuit, nougat, slightly, babyboss];
  
    answerBox = createInput();
    answerBox.position(width / 2 + 30, height / 2);
  
    submitButton = createButton("Submit Answer");
    submitButton.size(100, 50);
    submitButton.position(width / 2 + 30, height / 2 + 50);
    submitButton.mousePressed(submitAnswer);
  }
  
  function draw() {
    clear();
    textSize(20);
    fill(0);
    text(score, 10, 20);
    text(questions[counter], width / 2 - 100, height / 2 - 50);
    push();
    fill("red");
    rect(width / 4, height / 2, 50, 50);
    pop();
    if (
      mouseIsPressed &&
      mouseX > width / 4 &&
      mouseX < width / 4 + 50 &&
      mouseY > height / 2 &&
      mouseY < height / 2 + 50 &&
      s[counter].isPlaying() == false
    ) {
      s[counter].play();
    }
  }
  
  function submitAnswer() {
    if (answerBox.value() == answers[counter]) {
      score += 1;
    }
    if (counter < questions.length) {
      counter += 1;
    }
    if (counter == questions.length){
      counter == questions.length
    }
  }
  