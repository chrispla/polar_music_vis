// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/h_aTgOl9J5I

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



var volhistory = [];

function setup() {

  createCanvas(1920, 1080);

  frameRate(30);

  angleMode(DEGREES);

  // btn = document.createElement("button");
  // btn.textContent = "start recording";
  // document.body.appendChild(btn);
  // btn.onclick = record;
  //btn.click(); //start recording automatically

}

function preload() {

  loud = loadStrings("loudness.txt");

}

//var startMillis; // needed to subtract initial millis before first draw to begin at t=0.

function draw() {
  //DRAWING
  background(0);
  stroke(255);

  //Have an array of 360 elements, updated every frame

  //push 1 vol to vol_history
  volhistory.push(amplitudes[frameCount]);
  //if after 360 frames, remove first entry
  if (frameCount > 360) {
    volhistory.shift();
  }
  
  //stroke(77, 89, 79);
  noFill();

  translate(width / 2, height / 2);

  for (var j=20; j < 30; j++) {
    stroke(255*((50-j)/50));

    beginShape();
    for (var i = 0; i < 360; i++) {
      var r = map(volhistory[i], 0, 1, 100+(5*j), 300+(25*j)); //normal mapping [0,1]
      var x = r * cos(i);
      var y = r * sin(i);
      vertex(x, y);
    }
    endShape();
  }

  stroke(255);
  text(frameCount%360, 0, 0);
  text(amplitudes[frameCount], 0, 10);


  //if (volhistory.length > 360) {
  //  volhistory.splice(0, 1);
  //}

  // if (capturer) {
  //   capturer.capture(document.getElementById("defaultCanvas0"));
  // }

}
