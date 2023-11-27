//starting again using 2D array method

//x, y, and saltArr are your 3 global variables
//representing the x and y coordinates, and the 2D array
//that will contain all of them. it's going to be stacked
//columns of y with rows of x, as how coordinates would work

const y = 4;
const x = 5;
let saltArr = new Array(y);

//this for loop initializes the array

for (var i = 0; i < y; i++) {
  saltArr[i] = new Array();
}

function putSalt(arr, xCoord, yCoord) {
  //start with a math random to get the xCoord
  xCoord = Math.floor(Math.random() * x);
  yCoord = 0;
  while (yCoord < y) {
    if (!arr[yCoord].includes(xCoord)) {
      arr[yCoord].push(xCoord);
      console.log(`pushing ${xCoord}, ${yCoord}`)
    } else if (!arr[yCoord].includes(xCoord - 1) && xCoord - 1 > -1) {
      arr[yCoord].push(xCoord - 1);
      console.log(`pushing ${xCoord} - 1, ${yCoord}`)

    } else if (!arr[yCoord].includes(xCoord + 1) && xCoord + 1 < x) {
      arr[yCoord].push(xCoord + 1);
      console.log(`pushing ${xCoord} + 1, ${yCoord}`)

    } else {
      yCoord += 1;
      console.log("incrementing Y");
    }
  }
}


putSalt(saltArr, x, y)
console.log(saltArr);

//be sure to handle for out of bounds
//let's test that for the first level, then add it to a while loop
//while < y, keep doing that
//alright i seem to have encountered an interesting error
//while handling for out of bounds
//for troubleshooting, let's change the console logs into fstrings

//okay so there's an error somewhere in this logic,
//but i think i can set it down for now.
//it's so close to being done but i can't spend all night working on it.

//as a final note, some kind of nesting needs to happen
//in regards to that yCoord incrementing
//my brain isn't working for that right now though so i'm stepping back