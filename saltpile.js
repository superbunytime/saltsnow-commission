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
let width = 50 //asign this to dynamically update based on the width
let a = []; //now just make this the length of the width of the screen
let b = []; //and make these the same width as a.length, but all zero

for (let i = 0; i < width; i++){
    a.push(i)
    b.push(0)
}

let c = a.map(function (e, i) {
  return [e, b[i]];
});


//every tick, do this:

for(let i =0; i < 10; i++){ //setting it to 10 for testing
    let randSalt = Math.floor((Math.random() * width))
    c[randSalt][1] ? console.log("already occupied") : c[randSalt][1] = 1
    console.log(c[randSalt])
    // c[randSalt][1] = 1
    // console.log(c[randSalt][1])
    // that line should always be able to get the second indice of the nested array within c
    // i'm not sure why it's getting fucky with the if chain
    //add an if statement to check if the pixel is occupied
    //if occupied, check the pixel to the right, and then left
    //if they're both occupied, stack it.
}
// console.log(c)

//i believe an out of bounds error is occurring somewhere; probably with the +1 in math random
//i think that's what had me clogged up. should be able to write that awful if else chain then.
//unfortunately i don't think i'll be able to use a ternary operator for that