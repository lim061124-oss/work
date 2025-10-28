let ballX, ballY;
let ballSpeedX, ballSpeedY;
let ballSize = 24;

let paddleX;
let paddleW = 120;
let paddleH = 20;
let paddleY;

let score;

function setup() {
  createCanvas(400, 600);
  paddleY = height - 60;
  resetGame();
  textAlign(CENTER, CENTER);
}

function draw() {
  background(10, 10, 20);

  paddleX = constrain(mouseX - paddleW / 2, 0, width - paddleW);
  fill(255);
  noStroke();
  rect(paddleX, paddleY, paddleW, paddleH);

  ballX += ballSpeedX;
  ballY += ballSpeedY;
  fill(255, 255, 0);
  ellipse(ballX, ballY, ballSize);

  if (ballX < ballSize / 2 || ballX > width - ballSize / 2) {
    ballSpeedX *= -1;
  }
  if (ballY < ballSize / 2) {
    ballSpeedY *= -1;
  }

  if (ballY + ballSize / 2 >= paddleY &&
      ballX > paddleX &&
      ballX < paddleX + paddleW) {
    
    ballSpeedY *= -1.05;
    ballSpeedX *= 1.05;
    score++;
    
    ballY = paddleY - ballSize / 2; 
  }

  if (ballY > height) {
    resetGame();
  }

  fill(255);
  textSize(48);
  text(score, width / 2, 60);
}

function resetGame() {
  score = 0;
  ballX = width / 2;
  ballY = height / 3;
  ballSpeedX = random(-4, 4);
  ballSpeedY = 5;
}