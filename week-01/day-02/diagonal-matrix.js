'use strict';

// - Create (dynamically*) a two dimensional list
//   with the following matrix**. Use a loop!
//
//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0
//
// - Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array
var lines =4;
var m=[];
var str;
for (var i = 1; i<=lines; i++){
    for (var j=1; j<=lines; j++){
        m.push(0);
    }
    m[m.length-i] = 1;
    str = m.join(' ');
    console.log(str);
    m = [];
}