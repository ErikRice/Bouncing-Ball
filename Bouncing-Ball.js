
const ball = document.getElementById("ball");
const width = ball.style.width;
const height = ball.style.height;
var positionX = 0;
var positionY = 0;
let velocityX = 7;
let velocityY = 3;
let ballMovesRight = true;
let ballMovesDown = true;
let ballColor = ['red', 'blue'];


function moveBall() {
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
  checkBoundaries();
  changeColorOnBounce();
}

setInterval(moveBall,10);

let checkBoundaries = function() {
  if (width + positionX >= window.innerWidth || positionX == 0) {
    ballMovesRight = !ballMovesRight;
  } 
  
  if (height + positionY >= window.innerHeight || positionY == 0) {
    ballMovesDown = !ballMovesDown;
  } 
}

let changeColorOnBounce = function() {
  if (positionX >= window.innerWidth || positionX == 0) {
    ball.style.background = ballColor[0];
  }
  if (positionY >= window.innerHeight || positionY == 0) {
    ball.style.background = ballColor[1];
  }
}
