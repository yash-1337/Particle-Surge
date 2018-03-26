let particles = [];

let colors;

let title = "Particle Surge";
let subtitle = "By Yash Patel";

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);

    canvas.position(0, 0);

    colors = [color(0, 150, 136, 200), color(255, 143, 0, 200), color(250, 250, 250, 200)];

    for (i = 0; i < windowHeight; i++) {
        particles[i] = new Particle();
    }

}

function draw() {

    background(21, 35, 45);

    for (particle of particles) {
        particle.update();
        particle.render();
    }

    textAlign(CENTER, CENTER);
    textSize(72);

    fill(255);
    text(title, width / 2, height / 3);

    fill(255, 150);
    text(title, width / 2 - 3, height / 3 + 3);

    fill(255, 100);
    text(title, width / 2 - 6, height / 3 + 6);

    fill(255, 50);
    text(title, width / 2 - 9, height / 3 + 9);


    stroke(255, 200);
    strokeWeight(2);
    line(width / 2 - 100, height / 2 - 50, width / 2 + 100, height / 2 - 50);

    noStroke();
    textSize(36);

    fill(255);
    text(subtitle, width / 2, height / 2);

    fill(255, 150);
    text(subtitle, width / 2 - 2, height / 2 + 2);

    fill(255, 100);
    text(subtitle, width / 2 - 4, height / 2 + 4);

    fill(255, 50);
    text(subtitle, width / 2 - 6, height / 2 + 6);

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

    particles = [];

    for (i = 0; i < windowHeight; i++) {
        particles[i] = new Particle();
    }
}


class Particle {
    constructor() {
        this.pos = createVector(random(0, width), random(0, width));
        this.r = 10;
        this.xspeed = floor(random(-5, 6));
        this.yspeed = floor(random(-5, 6));

        this.color = random(colors);
    }

    update() {
        this.pos.x += this.xspeed;
        this.pos.y += this.yspeed;

        if (this.pos.x <= this.r || this.pos.x >= width - this.r) {
            this.xspeed *= -1;
        }
        if (this.pos.y <= this.r || this.pos.y >= height - this.r) {
            this.yspeed *= -1;
        }

        if (dist(this.pos.x, this.pos.y, mouseX, mouseY) < 100) {
            this.r = lerp(this.r, 40, 0.1);
        } else {
            this.r = lerp(this.r, 10, 0.1);
        }
    }

    render() {
        noStroke();
        fill(this.color);
        ellipse(this.pos.x, this.pos.y, this.r * 2);
    }
}