// let capturer;
// let btn;
// function record() {
//   capturer = new CCapture({
//     format: "webm",
//     framerate: 30
//   });
//   capturer.start();
//   btn.textContent = "stop recording";
//   btn.onclick = e => {
//     capturer.stop();
//     capturer.save();
//     capturer = null;
//     btn.textContent = "start recording";
//     btn.onclick = record;
//   };
// }

var amplitudes;
var x;
var y;
var r;
var volhistory = [];

function setup() {

  createCanvas(1920, 1080);

  frameRate(60);

  angleMode(DEGREES);

  // btn = document.createElement("button");
  // btn.textContent = "start recording";
  // document.body.appendChild(btn);
  // btn.onclick = record;
  //btn.click(); //start recording automatically

}

function preload() {

  loud = loadStrings("loud30.txt");

}

//var startMillis; // needed to subtract initial millis before first draw to begin at t=0.

function draw() {
  //DRAWING
  background(0);
  stroke(255);

  //Have an array of 360 elements, add next element
  volhistory.push(loud[frameCount]);
  //and remove first entry
  if (frameCount > 361) { //remove only after initially filled
    volhistory.shift();
  }
  
  noFill();
  translate(width / 2, height / 2); //move to the middle of screen

  for (var j=1; j < 70; j++) {
    stroke(255*((70-j)/70)); //stroke fade based on radius
    beginShape();
    for (var i = 0; i < 361; i++) {
      r = map(volhistory[i], 0, 1, (5*j), 400+(40*j)); //normal mapping [0,1]
      x = r * cos(i);
      y = r * sin(i);
      vertex(x, y);
    }
    endShape();
  }

  //debug
  stroke(255);
  text(int(frameCount/30), -500, 50);
  text(int(frameRate()), -500, 40);

  // if (capturer) {
  //   capturer.capture(document.getElementById("defaultCanvas0"));
  // }

}
