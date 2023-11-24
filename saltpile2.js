
let canvas = document.getElementById("snowCanvas");
setHeightWidth(); //initial height and width of canvas;
window.onresize = setHeightWidth; //Reset W and H values when changing windows

function setHeightWidth() {
  W = window.innerWidth;
  H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;
}
canvas.style.backgroundColor = "black"; //set background color

//eat your pea professor

const ctx = canvas.getContext("2d");

ctx.fillStyle = "#FFFFFF";
// ctx.fillRect(W - 100, H - 100, 100, 100)
// let colorData2 = ctx.getImageData(W - 100, H - 100, 1, 1).data
// console.log(`r:${colorData2[0]} g:${colorData2[1]} b:${colorData2[2]} a:${colorData2[3]}`)
// preserve that

//so if any one of those values != 0
//or if [0] != 0
//make it that color.
//else check to the right
//else check to the left
//else go up one level and repeat

//alright, now let's put this in a function that can be called on a timer

//let's add a dummy value to the array, and write logic to test for dummy value

let dummyWidth = 10

function putSalt() {
  let y = H; //you'll want to reinitialize y as zero each iteration
//wrong reinitialize it as H
  let randomX = Math.floor(Math.random() * W);
  colorData = ctx.getImageData(randomX, y, 1, 1).data
  console.log(colorData[0])
  if(colorData[0] == 0){
    ctx.fillRect(randomX, y - 100, 10, 10)
    console.log(colorData[0])
  }
  console.log(`x: ${randomX} y: ${y}`)

//sanity tests
// ctx.fillRect(W - 100, H - 100, 100, 100)
// let colorData2 = ctx.getImageData(W - 100, H - 100, 1, 1).data
// console.log(colorData2[0])
// console.log(ctx.getImageData(0,0,1,1).data[0])
// ctx.fillRect(0,0,1,1)
// console.log(ctx.getImageData(0,0,1,1).data[0])

}

putSalt();

//step back for a second
//you're trying to do it the same way you were doing it before
//what you want to do, is generate randomX,
//and check the color of the pixel at randomX, y
//if it's black, place a white pixel and you're done
//if it's white, check left, then right;
//if either of those are black, place a white pixel
//if both are white, increment Y and start the loop over again.
//but you do not need to track things in a data structure
//just pixel peak.

//the error this can introduce is that it doesn't account for
//the canvas beyond the viewport; if i recall,
//that always stays black. so we need code to handle that
//alternatively, just shrink the canvas by 1 pixel on each side
//or, if you hit the range when checking increment/decrement
//just increment y; that way it can get a sticky buildup effect
//on the sides

//y does not need to equal zero; it needs to equal height.