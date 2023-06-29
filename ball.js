class Ball {
  constructor() {
    this.x = 200;
    this.y = 100;
    this.w = 20;
    this.vx = 3; // Since ball will be moved in both directions
    this.vy = 1; // We need both x & y velocity
  }
  
  move() {
    this.x += this.vx; // x dir will change accord - x vel
    this.y += this.vy;
  }
  
  // If ball moves out
  reset() {
    this.x = 200;
    this.y = 100;
  }
  
  update() {
    if(this.y >= height || this.y <= 0) {
      this.vy *= -1;
    }
  }
  
  show() {
    ellipse(this.x, this.y, this.w);
  }
}