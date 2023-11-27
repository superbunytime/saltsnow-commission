//starting again using 2D array method

//x, y, and saltArr are your 3 global variables
//representing the x and y coordinates, and the 2D array
//that will contain all of them. it's going to be stacked
//columns of y with rows of x, as how coordinates would work

const y = 5;
const x = 5;
let cascArr = new Array(y);

//this for loop initializes the array

for (var i = 0; i < y; i++) {
  cascArr[i] = new Array();
}

function cascadeArray(arr, xCoord, yCoord) {
  //start with a math random to get the xCoord
  xCoord = Math.floor(Math.random() * x);
  yCoord = 0;
  while (yCoord < y) {
    if (!arr[yCoord].includes(xCoord)) {
      arr[yCoord].push(xCoord);
      // console.log(`pushing ${xCoord}, ${yCoord}`);
      yCoord = 0;
      return
    } else if (!arr[yCoord].includes(xCoord - 1) && xCoord - 1 > -1) {
      arr[yCoord].push(xCoord - 1);
      // console.log(`pushing ${xCoord} - 1, ${yCoord}`);
      yCoord = 0;
      return
    } else if (!arr[yCoord].includes(xCoord + 1) && xCoord + 1 < x) {
      arr[yCoord].push(xCoord + 1);
      // console.log(`pushing ${xCoord} + 1, ${yCoord}`);
      yCoord = 0;
      return
    } else {
      yCoord += 1;
      // console.log("incrementing Y");
    }
  }
}

for (let i = 0; i < 20; i++){ //this is the loop condition that matters.
  cascadeArray(cascArr, x, y);

}
console.log(cascArr);

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

//preliminarily before starting on it again, i think an issue is
//i'm not reinitializing the y value as 0
//i will need to do that in every case that adds a value to the array
