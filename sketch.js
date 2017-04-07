function setup(){
  //create a drawing service 500px wide, 500px tall
  createCanvas(500,300);
}


function draw() {

}


function keyPressed() {
  if (keyCode === 37) {
   //text("left",20,40);
    alert("left");
  } else if (keyCode === 39) {
    //text("right",20,60)
    alert("right");
  } else if (keyCode === 38) {
    //text("up",20,80)
    alert("up");
  } else if (keyCode === 40) {
    //text("down",20,100)
    alert("down");
  } else if (keyCode === 87) {
      //text("W",50,40)
      alert("W");
  } else if (keyCode === 65) {
    //text("A",50,60)
    alert("A");
  } else if (keyCode === 83) {
    //text("S",50,80)
    alert("S");
  } else if (keyCode === 68) {
    //text("D",50,100)
    alert("D");
  }
}











