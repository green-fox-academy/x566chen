'use strict';

// - Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// - Log the sum of the elements in `ai` to the console

var ai = [3, 4, 5, 6, 7];
var sum = 0;
for (var i = 0; i< ai.length; i++){
    sum = sum + ai[i];
}

console.log(sum);