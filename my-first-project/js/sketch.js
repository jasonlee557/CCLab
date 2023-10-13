let x, y;
let ld;

function setup() {
    let canvas = createCanvas(600, 600);
    //
    canvas.parent("p5-canvas");
    x = width / 2;
    y = height / 2;
    ld = PI / 3;
}

function draw() {
    background("#9999ff");

    //left background - toxic rain ON THE WAY
    push();
    fill("white");
    noStroke();
    rect(0, 0, width / 2, height);
    pop();

    //draw trees
    push();
    tree(250, 200);
    tree(200, 250);
    tree(150, 300);
    tree(100, 350);
    tree(50, 400);
    tree(0, 450);
    pop();

    //falling leave
    push();
    fill('green');
    x = x + 5 * sin(ld);
    y = y + random(5);
    ld = ld + 0.1;
    arc(x, y, 100, 100, ld, ld + PI / 3);
    pop();

    //toxic rain
    push();
    for (let i = 0; i < 500; i++) {
        let rainX = random(width / 2);
        let rainY = random(height);
        stroke("red");
        line(rainX, rainY, rainX, rainY + 20);
    }
    pop();

    //saved or not
    if (y > height / 2) {
        if (x < width / 2) {
            fill("red");
        } else {
            fill("green");
        }
        if (y > height) {
            y = 0
        }
    }

    //wind
    if (mouseIsPressed) {
        x = random(width);
        y = y + random(5);
    }
}

function tree(x, y) {
    noStroke();

    //dark
    fill(39, 78, 19);
    ellipse(x, y, 70, 95);
    fill(79, 42, 4);
    triangle(x, y, x - 10, y + 130, x + 10, y + 130);
    //middle
    fill(56, 118, 29);
    ellipse(x + 10, y - 70, 90, 110);
    fill(92, 49, 4);
    triangle(x + 10, y - 70, x + 10 - 10, y + 130, x + 10 + 10, y + 130);
    //faint
    fill(106, 168, 79);
    ellipse(x + 20, y - 170, 130, 150);
    fill(120, 63, 4);
    triangle(x + 20, y - 170, x + 20 - 10, y + 130, x + 20 + 10, y + 130);
}
