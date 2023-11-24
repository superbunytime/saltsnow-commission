
let canvas = document.getElementById("snowCanvas");
setHeightWidth(); //initial height and width of canvas;
window.onresize = setHeightWidth; //Reset W and H values when changing windows

// red = imgData.data[0];
// green = imgData.data[1];
// blue = imgData.data[2];
// alpha = imgData.data[3];
//colors legend

function setHeightWidth() {
  W = window.innerWidth;
  H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;
}
canvas.style.backgroundColor = "black"; //set background color

//draw a single pixel on a random x value at y = 0
//okay now draw it at a random x position
//okay now write a function to check the color of the pixel
//you need to look at the four color values, rgba:
//realistically you only need to confirm that the first indice != 0
//check the pixel to the right
//check the pixel to the left
//handle for out of bounds
//add to the left or right, or go up a level.
//for reference, it's if colorData2 != 0
//or i suppose in the future case, colorData != 0
//write a function to put a white pixel on the canvas, if one isn't already present
//let's write a helper function to check the color.
//does it need a helper function?

//eat your pea professor

const ctx = canvas.getContext("2d");

ctx.fillStyle = "#FFFFFF";
ctx.fillRect(Math.floor(Math.random() * W - 1) - 10, H - 10, 10, 10);
// ctx.fillRect(W - 100, H - 100, 100, 100)
// let colorData2 = ctx.getImageData(W - 100, H - 100, 1, 1).data[0]
// let colorData = ctx.getImageData(Math.floor(Math.random() * W - 1) -10, H - 10, 10, 10).data[0];
// console.log(colorData2)

//alright, now let's put this in a function that can be called on a timer

//let's add a dummy value to the array, and write logic to test for dummy value


function putSalt() {
  let y = 0; //you'll want to reinitialize y as zero each iteration
  let randomX = Math.floor(Math.random() * dummyWidth);
  console.log(`x: ${randomX} y: ${y}`)
  if (saltMap[0][0] == randomX && saltMap[0][1] == y) {
    console.log("Can't let you do that starfox")
    if(outOfRange.includes(saltMap[0][0] - 1)){
        //code for if low
    }
    // ctx.fillRect(randomX, y, 100, 100);
  }
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