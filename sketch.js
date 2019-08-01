let bird;
let pipes = [];
let lives = 3;
let score = 0;

console.log(lives);

function setup () {
  createCanvas(1000, 600);
  pipes = [];
  bird = new Bird();

  console.log('new pipe', pipes);
}

function draw () {
  background(0);

  function show () {
    const scoreString = 'Your score: ' + score;
    text(scoreString, 30, 20, 55, 55);
    textSize(15);
    // rect(30, 20, 55, 55);
    // fill(255);
  }

  if (frameCount === 1) {
    pipes.push(new Pipe());
  }

  if (frameCount % 100 === 0) {
    pipes.push(new Pipe());
  }

  for (let i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }

    if (pipes[i].hits(bird)) {
      lives -= 1;
      bird = new Bird();
      if (lives > 1) {
        alert('You Lose 1 life!  You have ' + lives + ' lives left');
      } else if (lives === 1) {
        alert('You Lose 1 life!  You have ' + lives + ' life left');
      } else {
        const answer = prompt('Game Over! Your score is ' + score + '! Do you want to play again?');
        if (answer.toUpperCase().trim() === 'YES') {
          reset();
        } else {
          alert('Thanks for Playing!');
        }
      }
    } else if (!pipes[i].hits(bird)) {
      score += 5;
    }
  }

  show();
  bird.show();
  bird.update();
}

function keyPressed () {
  if (key === ' ') {
    bird.up();
    score += 1;
  }
}

function showScore () {
  fill(255);
  rect(30, 20, 55, 55);
}

function reset () {
  setup();
  console.log(pipes);
  draw();
  lives = 3;
  score = 0;
}
