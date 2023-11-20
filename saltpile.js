// let saltpile = function ( obj ){
//     let canvas = obj.el || document.getElementById("snowCanvas");
//     if ( !canvas ){
//         console.log("please set the canvas element");
//         return;
//     }
//     if (canvas.tagName.toLowerCase() !== "canvas"){
//         console.log("please use this function on canvas element");
//         return
//     }

//     canvas.style.backgroundColor = obj.background || "black"; //set background color
//     let fillStyle = obj.snowColor || "#a6a6a6"; //color of snow
//     //check if given the right color config
//     if(!_check( _isColor, [canvas.styyle.backgroundColor, fillStyle], ["background color", "snow color"])){
//         return
//     }

//     let ctx = canvas.getContext("2d");

//     rMax = obj.rMax || 4 //max radius of snow
//     rMin = obj.rMin || 1,
//     W, H;
//     setHeightWidth();
// }

//let's take a different approach
//in order for salt to pile up, it must have salt beneath it; therefore, randomly put salt in x different x coordinates.

//if there's already a salt crystal in that coordinate, check if there's one to the left, or one to the right.

//if there's one to the left, and one to the right, stack the salt crystal on top.

//so what you're looking at is producing a 3 dimensional array.

//okay so make an array using a spread operator from 0 to length of x axis

//pop an element at random from the array and draw it at coordinates y: 0, x [number]

//once all elements are popped, increment y axis

//you could have shorter x arrays in bunches to simulate stacking.

//so an array of smaller arrays to represent piles, right?

// let emptyObj = {False}
// let saltObj = {True}

// let arr = []

//watching the react tutorial and i could use array.map maybe for making the array an array of key value pairs

//wait i'm being silly

//zipping arrays will definitely help

let width = 5; //asign this to dynamically update based on the width
let a = []; //now just make this the length of the width of the screen
let b = []; //and make these the same width as a.length, but all zero

for (let i = 0; i < width; i++) {
  a.push(i);
  b.push(0);
}

let c = a.map(function (e, i) {
  return [e, b[i]];
});

//every tick, do this:

for (let i = 0; i < 10; i++) {
  //setting it to 10 for testing
  let randSalt = Math.floor(Math.random() * width);
  // c[randSalt][1] ? console.log("already occupied") : c[randSalt][1] = 1
  // console.log(c[randSalt])
  if (c[randSalt][1] == 0) {
    console.log("occupying pixel");
    c[randSalt][1] = 1;
    console.log(c[randSalt]);
  } else if (c[randSalt][1] == 1 && randSalt - 1 > 0) {
    if (c[randSalt - 1][1] == 0) {
      console.log("occupying pixel to the left");
      c[randSalt - 1][1] = 1;
      console.log(c[randSalt - 1]);
    }
  } else if (c[randSalt][1] == 1 && randSalt + 1 <= width) {
    if(c[randSalt + 1][1] == 0)
    console.log("occupying pixel to the right");
    c[randSalt + 1][1] = 1;
    console.log(c[randSalt + 1]);
  } else if (
    c[randSalt][1] == 1 &&
    c[randSalt - 1][1] == 1 &&
    c[randSalt + 1][1] == 1
  ) {
    console.log(
      "going up a level; stack one on the next level at y + 1 and randSalt[0]"
    );
  }
  //add an if statement to check if the pixel is occupied
  //if occupied, check the pixel to the right, and then left
  //if they're both occupied, stack it.
}

//i believe an out of bounds error is occurring somewhere; probably with the +1 in math random
//i think that's what had me clogged up. should be able to write that awful if else chain then.
//unfortunately i don't think i'll be able to use a ternary operator for that

//so it's not updating the value, or hitting the left or right case
//so there's two or three bugs present.
//or actually maybe just one; if it updated the value, maybe it would fall into those other
//statements in the if else chain
//let's work on that first and see where it takes us
//so i thought i found the bug, lines 78, 82, and 86 all have ==1, when it should just be =1
//but when i tried that i got an index out of range error
//wait, i ran it again and i'm not getting that error anymore; it could be an edge case
//that i just stumbled on first try.
//it doesn't seem to be erroring now, but what i'm encountering is strange
//sometimes it occupies the array, or left or right, but sometimes it still gives 0's.
//what is happening here...?
//let's do a sanity check; what am i logging?

//so it doesn't seem to be hitting the last case, of going up a level
//i think i figured it out
//for cases when randSalt[1] == arr.length(), you can't + 1
//likewise, if it's the first element, you can't decrement
//that's almost guaranteed where the error is coming from.
//how do i handle that case
// if (all that stuff) and i + 1 !> or !< array.length()
//then do it
//so you have to tighten your if statements to handle those corner cases.

//that's gotta be what it is.
//take that last part of the if conditional and put it in a nested if, otherwise
//it will probably still cause an error.

//so far no errors thrown with that methodology, but something is still off;
//in order to test better, i'll need to decrease the range of one of the variables

//upon shrinking the width variable, it's clear the last if conditional is not being met
//analyze it and ascertain why it's not getting touched
//it's likely that it's not occurring due to the array being out of range again?
//is that right
//it should return an error if it gets partway through that control block
//it's getting repeat values and not evaluating that block.
//so there's definitely something wrong with the logic.