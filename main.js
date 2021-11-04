/* global data */
/* exported data */

var $car = document.querySelector('.car');

document.addEventListener('keydown', changeDirection);
document.addEventListener('keydown', spaceBarClick);
document.addEventListener('keydown', stopCar);

function changeDirection(event) {
  if (event.keyCode === 38) {
    $car.className = 'car north';
    data.direction = 'north';
  } else if (event.keyCode === 37) {
    $car.className = 'car west';
    data.direction = 'west';
  } else if (event.keyCode === 39) {
    $car.className = 'car east';
    data.direction = 'east';
  } else if (event.keyCode === 40) {
    $car.className = 'car south';
    data.direction = 'south';
  }
}

var distance = 0;
var timerId = null;

function moveCar() {
  data.xValue = $car.x;
  data.yvalue = $car.y;
  distance++;
  $car.style.left = distance + 'rem';
}

function spaceBarClick(event) {
  if (event.keyCode === 32) {
    timerId = setInterval(moveCar, 16);
  }
}

function stopCar(event) {
  if (event.keyCode === 32) {
    clearInterval(timerId);
  }
}
