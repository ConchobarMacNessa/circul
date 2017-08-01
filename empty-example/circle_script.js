function setup() {
  createCanvas(1000, 600);
  background("#07191D");
}

function drawCircle(x, y, size, colour) {
  stroke(colour);
  ellipse(x, y, size, size);

  if (size > 10) {
    var new_size = size / 2;
    drawCircle(x + new_size, y, new_size, 'white');
    setTimeout(function () {
      drawCircle(x + new_size, y, new_size, 'black');
    }, 2000);
    setTimeout(function () {
      drawCircle(x + new_size, y, new_size, 'white');
    }, 1500);

    drawCircle(x - new_size, y, new_size, 'white');
    setTimeout(function () {
      drawCircle(x - new_size, y, new_size, 'black');
    }, 1000);
    setTimeout(function () {
      drawCircle(x - new_size, y, new_size, 'white');
    }, 2000);

    drawCircle(x, y + new_size, new_size, 'white');
    setTimeout(function () {
      drawCircle(x, y + new_size, new_size, 'black');
    }, 1500);
    setTimeout(function () {
      drawCircle(x, y + new_size, new_size, 'white');
    }, 2500);

    drawCircle(x, y - new_size, new_size, 'white');
    setTimeout(function () {
      drawCircle(x, y - new_size, new_size, 'black');
    }, 2000);
    setTimeout(function () {
      drawCircle(x, y - new_size, new_size, 'white');
    }, 1500);
    setTimeout(function () {
      drawCircle(x, y - new_size, new_size, 'white');
    }, 1500);

    setTimeout(function () {
      drawCircle(x, y - new_size, new_size, 'pink');
    }, 9000);
  }
}

function draw() {
  noFill();
  stroke(255, 150);
  noLoop();
  drawCircle(width / 2, height / 1.9, 250, 'white');

}
