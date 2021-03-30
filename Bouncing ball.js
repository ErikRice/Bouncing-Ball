
const ball = document.getElementById("ball");
var velocityX = 5;
var velocityY = 3;
var positionX = 0;
var positionY = 0;
var ballMovesRight = true;
var ballMovesDown = true;


function moveBall(){
  if (ballMovesRight) {
    positionX = positionX + velocityX;
    ball.style.left = positionX;
    } else if (!ballMovesRight){
        positionX = positionX - velocityX;
        ball.style.left = positionX + 'px';
  }
  if (ballMovesDown){
    positionY = positionY + velocityY;
    ball.style.top = positionY + 'px';
    } else if (!ballMovesDown){
        positionY = positionY - velocityY;
        ball.style.top = positionY + 'px';
  }
if (positionX >= 1318 || positionX == 0){
  ballMovesRight = !ballMovesRight;
}
if (positionY >= 790 || positionY == 0){
  ballMovesDown = !ballMovesDown;
}
}
setInterval(moveBall,8);