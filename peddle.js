class Peddle {
  constructor(x) { // const fn - first fn - run after prog starts
    this.x = x; // user I/P
    this.y = 200;
    this.w = 20;
    this.h = 100;
    this.vy = 0; // y velocity
  }
  
  // Check if the paddle is moving out of canvas
  update() {
    if(this.y >= height - 50 || this.y <= 50) {
      this.vy *= -1;
    }
  }
  
  // Change direction of peddle
  change_dir(y) {
    this.vy = y;
  }
  
  move() {
    this.y += this.vy;
  }
  
  show() {
    rect(this.x, this.y, this.w, this.h);
  }
}