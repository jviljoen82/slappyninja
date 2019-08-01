class Pipe {
  constructor() {
    const max_height = 500;
    const min_height = 200;
    this.top = random(max_height / 2, random(min_height));
    this.bottom = random(max_height / 2, random(min_height));
    this.x = width;
    this.w = 40;
    this.speed = 5;
    this.highlight = false;
    
    this.passes = (bird) => {
      if (bird.y > this.top && bird.y < height - this.bottom) {
        if (bird.x === this.x + (this.w / 2)) {
          return true;
        }
      }
    };   
    

    this.hits = (bird) => {
      if (bird.y < this.top || bird.y > height - this.bottom) {
        if (bird.x > this.x && bird.x < this.x + this.w) {
          this.highlight = true;
          return true;
        }
      }
      return false;
    };

    this.show = () => {
      fill(0, 128, 0);
      if (this.highlight) {
        fill(255, 0, 0);
        this.highlight = false;
      }
      rect(this.x, 0, this.w, this.top);
      rect(this.x, height - this.bottom, this.w, this.bottom);
    };

    this.update = () => {
      this.x -= this.speed;
    };

    this.offscreen = () => {
      if (this.x < -this.w) {
        return true;
      }
      else {
        return false;
      }
    };
  }
}

