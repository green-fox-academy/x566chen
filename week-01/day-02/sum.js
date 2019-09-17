
'use strict';

// - Write a function called `sum` that sum all the numbers until the given parameter
// - The function should return the result
var sum1 = 0;
function sum(x){
    for(var i=1; i<=x; i++ )
    sum1 = sum1 + i;
    return sum1;
}

console.log(sum(3));