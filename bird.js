class Bird {
  constructor() {
    this.y = height / 2;
    this.x = 65;
    this.gravity = 0.5;
    this.lift = -12;
    this.velocity = 0;

    this.show = () => {
      fill(255, 0, 0);
      //ellipse(this.x, this.y, 32, 32);
      image(ninja, this.x, this.y, 70, 70)
    };

    this.up = () => {
      this.velocity += this.lift;
    };

    this.update = () => {
      this.velocity += this.gravity;
      this.y += this.velocity;
      if (this.y > height) {
        this.y = height;
        this.velocity = 0;
      }
      if (this.y < 0) {
        this.y = 0;
        this.velocity = 0;
      }
    };
  }
}
