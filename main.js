var $car = document.querySelector('.car');
document.addEventListener('keydown', changeDirection);

function changeDirection(event) {
  if (event.keyCode === 38) {
    $car.className = 'car north';
  } else if (event.keyCode === 37) {
    $car.className = 'car west';
  } else if (event.keyCode === 39) {
    $car.className = 'car east';
  } else if (event.keyCode === 40) {
    $car.className = 'car south';
  }
}
