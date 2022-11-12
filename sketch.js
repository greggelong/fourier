let time =0
let wave =[]
let myslider;

function setup() {
  createCanvas(900, 600);
  myslider = createSlider(1, 50,5,1)
}

function draw() {
  background(0);
  translate(200,300);
  stroke(0,255,0);
  noFill()

  

  // r*cos(angle)

  let x =0;
  let y=0 ;
  // loop slider times
  for (let i =0;i<myslider.value();i++){

    // these function map to wiki oscillations
    // but you don't need the pi and the other multipliers
    // you just need to change the n value
    // n= i*2+1 is and odd series which makes the square wave
    // n = i + 1 is odd and even and make a saw tooth like wave
    // n= (i+1)*2  is and even series and and makes saw tooth
    let prevx =x
    let prevy =y
    let n = i*2+1
    let radius = 150/n //(100 * 4)/(n*PI)
    //x = radius * (4* cos(n* time))/(n*PI);
    //y = radius * (4* sin(n* time))/(n*PI);
    // this makes the wave additive literally adding them while looping i times
    x+= radius * cos(n* time)
    y+= radius * sin(n* time)
    
    // draw light circle
    stroke(0,255,0,100)
    ellipse(prevx,prevy,radius*2)

    // draw darker line
    stroke(0,255,0,255)
    line(prevx,prevy,x,y)
    
  }
  wave.unshift(y); // add new points to beginning of array only the last one
  
  translate(200,0)
  line(x-200,y,0,wave[0])
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