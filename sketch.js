let bird;
let pipes = [];
let lives = 3;
let score = 0;
let leaders = [];
let play = false;

console.log(lives);

function setup() {
  	createCanvas(1000, 600);
	pipes = [];
	bird = new Bird();
}

function draw() {
	if (!play) {
		showTopScore();
	} else {
		playGame();
	}
}

function playGame() {
	background(0);


	if (frameCount === 1) {
		pipes.push(new Pipe());
	}

	if (frameCount % 100 === 0) {
		pipes.push(new Pipe());
	}

	for (let i = pipes.length - 1; i >= 0; i--) {
		pipes[i].show();
		pipes[i].update();
		pipes.speed = 5;

		showScore();

		if (pipes[i].offscreen()) {
			pipes.splice(i, 1);
		}

		if (pipes[i].passes(bird)) {
		score += 5;
		} else if (pipes[i].hits(bird)) {
		lives -= 1;
		bird = new Bird();
		if (lives > 1) {
			alert('You Lose 1 life!  You have ' + lives + ' lives left');
		} else if (lives === 1) {
			alert('You Lose 1 life!  You have ' + lives + ' life left');
		} else {
			let answer = prompt('Game Over! Your score is ' + score + '! Do you want to play again?');
			if (answer.toUpperCase().trim() === 'YES') {
			reset();
			} else {
			let playerName = prompt('Thanks for Playing! Enter yout name: ');
			leaders.push(playerName);
			leaders.push(score);
			console.log(leaders);
			reinitializeVars();
			play = false;
			}
		}
		}
	}

	bird.show();
	bird.update();
}

function keyPressed() {
	if (key === ' ') {
		bird.up();
	} else if (key.toUpperCase() === 'P') {
		play = true;
	} else if (keyCode === LEFT_ARROW) {
		pipes.speed = 1;

	} else if (keyCode === RIGHT_ARROW) {
		pipes.speed = 25;
		// TODO: add 'slap' code here
	}
	return false;
}

function showScore() {
	const scoreString = 'Your score: ' + score;
	fill('#1199FF');
	textStyle(BOLD);
	text(scoreString, 30, 20, 55, 55);
	textSize(15);
}

function showTopScore() {
	let dislpayLeaders = leaders[0] + ": " + leaders[1];
	background(0);
	fill('#1199FF');
	textAlign(CENTER, CENTER);
	textStyle(BOLD);
	text(dislpayLeaders, 10, 10, 70, 80);
	textSize(20);
	fill('#880044');
	text('press "P" to play', 10, 10, 70, 80);
	// TODO: build top score page
}

function reset() {
	setup();
	console.log(pipes);
	draw();
	reinitializeVars();
}

function reinitializeVars() {
	lives = 3;
	score = 0;
}
