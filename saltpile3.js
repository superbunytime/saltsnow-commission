//starting again using 2D array method

//x, y, and saltArr are your 3 global variables
//representing the x and y coordinates, and the 2D array
//that will contain all of them. it's going to be stacked
//columns of y with rows of x, as how coordinates would work

window.onload = function () {
  let canvas = document.getElementById("snowCanvas");
  setHeightWidth(); //initial height and width of canvas;
  window.onresize = setHeightWidth; //Reset W and H values when changing windows

  function setHeightWidth() {
    // let W = window.innerWidth;
    // let H = window.innerHeight;
    let W = 500
    let H = 500
    canvas.width = W;
    canvas.height = H;
  }

  canvas.style.backgroundColor = "black"; //set background color

  const ctx = canvas.getContext("2d", { willReadFrequently: true });

  ctx.fillStyle = "#FFFFFF";


  const y = 500;
  const x = 500;
  let cascArr = new Array(y);

  //this for loop initializes the array

  for (var i = 0; i < y; i++) {
    cascArr[i] = new Array();
  }

  function cascadeArray(arr, xCoord, yCoord) {
    //start with a math random to get the xCoord
    xCoord = Math.floor(Math.random() * x);
    yCoord = 499;
    while (yCoord < y) {
      if (!arr[yCoord].includes(xCoord)) {
        arr[yCoord].push(xCoord);
        // console.log(`pushing ${xCoord}, ${yCoord}`);
        setTimeout( ctx.fillRect(xCoord, yCoord, 1, 1), 100 )
        yCoord = 499;
        return;
      } else if (!arr[yCoord].includes(xCoord - 1) && xCoord - 1 > -1) {
        arr[yCoord].push(xCoord - 1);
        // console.log(`pushing ${xCoord} - 1, ${yCoord}`);
        ctx.fillRect(xCoord - 1, yCoord, 1, 1)
        yCoord = 499;
        return;
      } else if (!arr[yCoord].includes(xCoord + 1) && xCoord + 1 < x) {
        arr[yCoord].push(xCoord + 1);
        // console.log(`pushing ${xCoord} + 1, ${yCoord}`);
        ctx.fillRect(xCoord + 1, yCoord, 1, 1)
        yCoord = 499;
        return;
      } else {
        yCoord -= 1;
        // console.log("incrementing Y");
      }
    }
  }

  for (let i = 0; i < 100000; i++) {
    //this is the loop condition that matters.
    cascadeArray(cascArr, x, y); //the number, currently 2500, should be dependent
    //on the width times length of the canvas.
  }
  // console.log(cascArr);

  // the arrays behave as they should
  // now to build the canvas
  // let's start with a test 50x50 canvas.

  // the settimeout is being finnicky
  //maybe if i put settimeout in each pixel placement

  //referencing a super old color clicker thing i made to put the pixels properly
  
};
