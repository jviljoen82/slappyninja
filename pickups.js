class Pickup {
	constructor() {
		this.y = Math.floor(Math.random() * (height - width)) + height;
		this.x = Math.floor(Math.random() * (height - width)) + width;
		this.speed = 5;

		this.passes = (pipe) => {
			if (pipe.y > this.top && pipe.y < height - this.bottom) {
				if (pipe.x === this.x + (this.w / 2)) {
					return true;
				}
			}
	}

	//// TODO: double check hit method

		this.hits = (bird) => {
			if (bird.x > this.x && bird.x < this.x + this.y) {
				return true;
			}
			return false;
		};

		this.show = () => {
			fill('red');
			//image(sprite, 28, this.y - 40, 70, 70);
			ellipse(this.x, this.y, 52, 52);
		};

		this.update = () => {
	      	this.x -= this.speed;
	    };

	    this.offscreen = () => {
			return this.x < -this.y;
	    };
	}
}
