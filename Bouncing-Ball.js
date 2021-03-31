
const ball = document.getElementById("ball");
const width = ball.style.width;
const height = ball.style.height;
let velocityX = 7;
let velocityY = 3;
let positionX = 0;
let positionY = 0;
let ballMovesRight = true;
let ballMovesDown = true;
let ballColor = ['red', 'blue', 'purple', 'green', 'black', 'yellow'];
// let randomInd = Math.floor(Math.random()*Math.floor(ballColor.length));



function changeColor() {
  for (i = 0; i < ballColor.length; i++) {
    ball.style.background = ballColor[i];
  }
}

function moveBall(){
  if (ballMovesRight) {
    positionX = positionX + velocityX;
    ball.style.left = positionX + 'px';
    } else if (!ballMovesRight) {
        positionX = positionX - velocityX;
        ball.style.left = positionX + 'px';
  }
  if (ballMovesDown) {
    positionY = positionY + velocityY;
    ball.style.top = positionY + 'px';
    } else if (!ballMovesDown) {
        positionY = positionY - velocityY;
        ball.style.top = positionY + 'px';
  }
  checkBoundaries(positionX, width, positionY, height);
  color();
}

function checkBoundaries(){
  if (positionX + width >= window.innerWidth || positionX == 0) {
    ballMovesRight = !ballMovesRight;
  } 
  
  if (positionY + height >= window.innerHeight || positionY == 0) {
    ballMovesDown = !ballMovesDown;
  } 
}

setInterval(moveBall,8);