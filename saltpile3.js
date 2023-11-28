//starting again using 2D array method

//x, y, and saltArr are your 3 global variables
//representing the x and y coordinates, and the 2D array
//that will contain all of them. it's going to be stacked
//columns of y with rows of x, as how coordinates would work

window.onload = function () {
  let canvas = document.getElementById("snowCanvas");
  setHeightWidth(); //initialize height and width of canvas;
  window.onresize = setHeightWidth; //Reset W and H values when changing windows

  function setHeightWidth() {
    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
  }

  canvas.style.backgroundColor = "black"; //set background color
  //this can be set to whatever is most convenient for the client to chroma key out

  const ctx = canvas.getContext("2d", { willReadFrequently: true });

  ctx.fillStyle = "#FFFFFF"; //yummy salt color


  const y = window.innerHeight;
  const x = window.innerWidth;
  let cascArr = new Array(y);

  //this for loop initializes the arrays within the array

  for (var i = 0; i < y; i++) {
    cascArr[i] = new Array();
  }

  function cascadeArray(arr, xCoord, yCoord) {
    //start with a math random to get the xCoord
    xCoord = Math.floor(Math.random() * x);
    yCoord = y - 1; //must be ONE less than horizontal max or won't render
    while (yCoord < y) {
      if (!arr[yCoord].includes(xCoord)) {
        arr[yCoord].push(xCoord);
        ctx.fillRect(xCoord, yCoord, 4, 4) //the last two arguments determine the size of salt
        yCoord = 799;
        return;
      } else if (!arr[yCoord].includes(xCoord - 1) && xCoord - 1 > -1) {
        arr[yCoord].push(xCoord - 1);
        ctx.fillRect(xCoord - 1, yCoord, 4, 4) //the last two arguments determine the size of salt
        yCoord = 799;
        return;
      } else if (!arr[yCoord].includes(xCoord + 1) && xCoord + 1 < x) {
        arr[yCoord].push(xCoord + 1);
        ctx.fillRect(xCoord + 1, yCoord, 4, 4) //the last two arguments determine the size of salt
        yCoord = 799;
        return;
      } else {
        yCoord -= 1;
      }
    }
  }

  setInterval(function(){cascadeArray(cascArr, x, y);}, 100); //will run every 100 miliseconds
  //value can be changed to client's tastes
};
