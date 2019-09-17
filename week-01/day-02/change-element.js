'use strict';

// - Create an array named `s` with the following content: `[1, 2, 3, 8, 5, 6]`
// - Change the 8 to 4 with the `.map` method 
// - Print the fourth element as a test

var s = [1, 2, 3, 8, 5, 6];
var map = s.map( x =>{
    if (x == 8){
        return x = 4;
    }
    return x;
})

console.log(map);