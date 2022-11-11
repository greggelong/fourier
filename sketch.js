let time =0
let wave =[]

function setup() {
  createCanvas(900, 600);
}

function draw() {
  background(0);
  translate(200,200);
  let radius =100;
  stroke(0,255,0);
  noFill()

  ellipse(0,0,radius*2);

  // r*cos(angle)
  let x = radius * cos(time);
  let y = radius * sin(time);
  wave.unshift(y); // add new points to beginning of array

  line(0,0,x,y)
  ellipse(x,y,8)

  // wave
  translate(200,0);
  // line to beginning of wave
  line(x-200,y,0,wave[0]);
  beginShape();
  noFill();
  for (let i=0;i<wave.length;i++){
    vertex(i,wave[i])
  }
  endShape();


  time+=0.05

  // limit the array of points
  if (wave.length >500){
    wave.pop()
  }
}