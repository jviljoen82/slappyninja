let bird;
let pipes = [];
let lives = 3;
let score = 0;
let leaders = [];
//var fr = 60;

console.log(lives);

function setup() {
  createCanvas(1000, 600);
  pipes = [];
  bird = new Bird();

  console.log("new pipe", pipes);
  //frameRate(fr);
}

function draw() {
  // debugger;
  background(0);

  show = () => {
    const scoreString = 'Your score: ' + score;
    fill('#1199FF');
    textStyle(BOLD);
    text(scoreString, 30, 20, 55, 55);
    textSize(15);
    // rect(30, 20, 55, 55);
    // fill(255);
  };

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

    if (pipes[0].passes(bird)) {
        score += 5;
    } else if (pipes[i].hits(bird)) {
        lives -= 1;
        //setup(bird);
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
              leaders.push(prompt('Thanks for Playing! Enter yout name: '));
              leaders.push(score);
              console.log(leaders);
              reinitializeVars();
              noLoop();
            }
        }
        // if (lives == 0) {
        // }
    }
  }

  show();
  bird.show();
  bird.update();
}

function keyPressed() {
  if (key === ' ') {
      bird.up();
      score += 1;
      //console.log(score);
      //console.log('SPACEBAR');
  }
}

function showScore() {
  //document.getElementById('Score').innerHtml = score;


  fill(255);
  rect(30, 20, 55, 55);
  //document.getElementById('Score').innerHtml = position( 30, 30);
}

function reset() {
  //pipes.push(new Pipe());
  setup();
  console.log(pipes);
  draw();
  reinitializeVars();
}

function reinitializeVars() {
  lives = 3;
  score = 0;
}
