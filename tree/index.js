var angle = 0;
var angleSlider;
var timesSlider;
var sizeSlider;
var times = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  angleSlider = createSlider(0, TWO_PI, PI/8, 0.001);
  angleSlider.position(width - angleSlider.width - 40, 50);
  timesSlider = createSlider(0, 0.72, 0.65, 0.001);
  timesSlider.position(width - timesSlider.width - 40, 100);
  sizeSlider = createSlider(0, 300, 200, 0.001);
  sizeSlider.position(width - sizeSlider.width - 40, 150);

}

function draw() {
  background(51);
  stroke(255);
  line(0, height - 100, width, height - 100);
  angle = angleSlider.value();
  times = timesSlider.value();
  size = sizeSlider.value();

  textSize(18);
  strokeWeight(0);
  text("Angle", angleSlider.x, angleSlider.y);
  text("Branch", angleSlider.x, timesSlider.y);
  text("Size", angleSlider.x, sizeSlider.y);
  fill(255);

  strokeWeight(1);
  translate(width / 2, height-100);
  branch(size);
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if(len > 4) {
    push();
    rotate(angle);
    branch(len * times);
    pop();
    push();
    rotate(-angle);
    branch(len*times);
    pop();
  }
  // line(0, 0, 0, -len * 0.67);
}