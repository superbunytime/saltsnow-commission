
window.onload = function () {let canvas = document.getElementById("snowCanvas");
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

const ctx = canvas.getContext("2d", { willReadFrequently: true });

ctx.fillStyle = "#FFFFFF";
// ctx.fillRect(W - 100, H - 100, 100, 100)
// let colorData2 = ctx.getImageData(W - 100, H - 100, 1, 1).data
// console.log(`r:${colorData2[0]} g:${colorData2[1]} b:${colorData2[2]} a:${colorData2[3]}`)
// preserve that

//alright, now let's put this in a function that can be called on a timer

let dummyWidth = 10

function putSalt() {
  let y = H; //you'll want to reinitialize y as H
  let randomX = Math.floor(Math.random() * W);
  let colorData = ctx.getImageData(randomX, y - 100, 10, 10).data
  console.log(colorData[0])
  if(colorData[0] == 0){
    ctx.fillRect(randomX, y - 100, 10, 10)
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

ctx.fillRect(W,H,100,100)
// console.log(ctx.getImageData(W, H, 1,1).data[0])

putSalt();

for(let i = 0; i < 10; i++){
    putSalt()
}
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

//i believe what is happening now is that i am getting the 
//coordinates relative to the whole page, when i want the coordinates
//relative to the canvas

//that should be what it is. it's relative size. you need to get
//the size of the canvas.

// console.log([window.innerWidth,
//     window.innerHeight,
//     canvas.width,
//     canvas.height])

//why can't i get the color data?????
//it doesn't make any sense and i am losing my patience.

//alright, if, IF it is getting the whole viewport width
//instead of the canvas width, i need to test for that.
//how do i do that

}