//so get the lowest level; x = 0
//do a random number between 0 and y
//check the color of that pixel
//if it's white (or if it's just not black in case you want to add blue gradient)
//check the pixel to the left, and the pixel to the right
//it doesn't matter which you check first. it can be random for more realism
//but that's more code. so maybe make the mvp work first.
//if both the left and the right are occupied, or if the left/right is
//out of range and the other is occupied
//increment Y and to the check again. that way it should stack it.

//that's all you really have to do to make it work nicely; let's work on rendering the canvas first
//so that way you've got visual confirmation instead of just not getting the right console values.

let canvas = document.getElementById("snowCanvas");
console.log(canvas);
setHeightWidth(); //initial height and width of canvas;
window.onresize = setHeightWidth; //Reset W and H values when changing windows


function setHeightWidth() {
  W = window.innerWidth;
  H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;
}
canvas.style.backgroundColor = "black"; //set background color


