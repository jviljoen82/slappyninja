class Enemy {
	constructor() {
		this.y = height / 2;
		this.x = 65;
		this.gravity = 0.5;
		this.lift = -12;
		this.velocity = 0;

		this.show = (sprite) => {
			fill(0);
			//image(sprite, 28, this.y - 40, 70, 70);
			ellipse(this.x, this.y, 32, 32);
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
