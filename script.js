const radioButtons = document.querySelectorAll('input[type="radio"]');
const display = document.querySelector('.display');

radioButtons.forEach((button) => {
  button.addEventListener('input', function () {
    display.style[button.getAttribute('name')] =
      button.getAttribute('passToDisplay');
  });
});

const displayHeight = document.querySelector('#display-height');
displayHeight.addEventListener('change', function () {
  display.style.height = displayHeight.value.concat('px');
});

const rectangleCount = document.querySelector('#rectangle-count');

rectangleCount.addEventListener('change', function () {
  display.innerHTML = '';
  var count = parseInt(rectangleCount.value);
  for (let i = 0; i < count; i++) {
    var newRect = document.createElement('div');
    newRect.classList.add('rectangle');
    display.appendChild(newRect);
  }
});

const rectangleWidth = document.querySelector('#rectangle-width');
const rectangleHeight = document.querySelector('#rectangle-height');

rectangleWidth.addEventListener('change', function () {
  const rectangles = document.querySelectorAll('.rectangle');
  rectangles.forEach((rectangle) => {
    rectangle.style.width = rectangleWidth.value.concat('px');
  });
});

rectangleHeight.addEventListener('change', function () {
  const rectangles = document.querySelectorAll('.rectangle');
  rectangles.forEach((rectangle) => {
    rectangle.style.height = rectangleHeight.value.concat('px');
  });
});
