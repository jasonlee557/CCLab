
function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent("p5-canvas");

    x = 7 * width / 16;
    y = height;
    ld = PI / 3;
}

function draw() {
    xoff += 0.1;
    background("#eeebf5");

    //draw trees
    push();
    tree(250, 200);
    tree(200, 250);
    tree(150, 300);
    tree(100, 350);
    tree(50, 400);
    tree(0, 450);
    pop();

    //right background
    push();
    fill('#bbebf5');
    rect(width / 2, 0, width / 2, height);
    tree(250 + 300, 200);
    tree(200 + 300, 250);
    tree(150 + 300, 300);
    tree(100 + 300, 350);
    tree(50 + 300, 400);
    tree(0 + 300, 450);
    pop();

    //sun
    fill("#ff6700");
    circle(width, 0, 100);

    //ray
    for (let angle = 0; angle < 2 * PI; angle += PI / 6) {
        let x = width - 100 * cos(angle);
        let y = 100 * sin(angle);
        noStroke();
        fill("#ff9248");
        circle(x, y, 20);
    }

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
    if (x > width / 2 + 50) {
        fill("green");
    } else {
        fill("red");
    }

    //falling leave
    x = x + 5 * sin(ld) - 5 + noise(xoff) * 10; //noise
    y = y + random(5);
    ld = ld + 0.1;
    arc(x, y, 100, 100, ld, ld + PI / 3);

    //wind
    if (mouseIsPressed) {
        speedX = random(-15, 20);
        x = x + speedX;
        y = y + random(5);
    }

    if (y > height) {
        y = 0;
        x = 7 * width / 16 + random(0, 10);
    }

    //boundary left and right
    if (x <= 100) {
        x = 100;
        speedX = -speedX;
    }
    if (x >= width - 100) {
        x = width - 100;
        speedX = -speedX;
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