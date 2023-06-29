
let p_l; // var of both the objects
let p_r;

let ball;

// Scoring
let score1 = 0;
let score2 = 0;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER)
  p_l = new Peddle(10); // value of x
  p_r = new Peddle(390);
  ball = new Ball();
}

// keyPressed() - inbuilt fn
function keyPressed() {
  if(keyCode == UP_ARROW) {
    p_r.change_dir(-1);
  }
   if(keyCode == DOWN_ARROW) {
    p_r.change_dir(1);
  }
  if(keyCode == 65) { // a
    p_l.change_dir(-2);
  }
   if(keyCode == 90) { // z
    p_l.change_dir(2);
  }
}

function draw() {
  background(30); // black
  
  textSize(10); // display score
  fill(255); // White
  line(200, 0, 200, height); // line in centre
  text("Player 1🦸🏻", 30, 30);
  text(score1, 35, 15);
  
  text("Player 2🦇", 350, 30);
  text(score2, 355, 15);
  
  p_l.show();
  p_r.show();
  p_l.move();
  p_l.update();
  p_r.move();
  p_r.update();
  
  ball.show();
  ball.move();
  ball.update();
  
  // Reset
  if(ball.x >= width) {
    score1++;
    ball.reset();
  }
  
  if(ball.x <= 0) {
    score2++;
    ball.reset();
  }
  
  // Collision
  if(ball.x >= 380 && ball.y <= (p_r.y + 50) && ball.y >= (p_r.y-50)) {
    ball.vx *= -1;
  }
  if(ball.x <= 20 && ball.y <= (p_l.y + 50) && ball.y >= (p_l.y - 50)) {
    ball.vx *= -1;
  }
}
