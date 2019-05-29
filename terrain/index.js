var cols, rows;
var scl = 20;
var w,h;
var terrain;
var flying = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  w = windowWidth;
  h = 1600;

  cols = floor(w / scl);
  rows = h / scl;
  terrain = new Array(cols);
  for(var x = 0; x < cols; x++) {
    terrain[x] = new Array(rows)
  }
}

function draw() {
  var tt = millis();
  var sunPos = p5.Vector.fromAngles(tt / 5000, PI / 4, 1000);

  flying += 0.02;
  var drop = 120;
  var offsetIncrement = 0.06;
  var yoff = flying;
  for(var y = 0; y < rows; y++) {
    var xoff = 0;
    for(var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -drop, drop);
      xoff += offsetIncrement;
    }
    yoff += offsetIncrement;
  }

  console.log(-mouseY / window.innerHeight/2 * 180 + 360)

  background("#444444");
  camera(0, -300, 280, 
   -(mouseX / window.innerWidth -0.5) * 30, 
    0, 
    -mouseY / 20 + 200
    , 0, -1, 0);
  ambientLight(255, 250, 196);
  stroke(145, 180, 186);
  strokeWeight(1);
  fill(230);
  translate(-w/2, -200, 100);

  for(var y = 0; y < rows-1; y++) {
    beginShape(TRIANGLE_STRIP);
    for(var x = 0; x < cols; x++) {
      vertex(x*scl, y*scl, terrain[x][y]);
      vertex(x*scl, (y+1)*scl, terrain[x][y+1]);
    }
    endShape()
  }
}