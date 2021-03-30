<div id="ball" style="
  z-index:5;
  position:absolute;
  left:0px;
  top:0px;
  width:50px;
  height:50px;
  border-radius:50%;
  background:rgb(128, 0, 28)";></div>




var velocityX = 7;
var velocityY = 3;
var positionX = 0;
var positionY = 0;
var ball = document.getElementById('ball');
const ballMovesRight = true;
const ballMovesDown = true;


function moveBall(){
  if (ballMovesRight) {
    positionX = positionX + velocityX;
    ball.style.left = positionX + 'px';
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