'use strict';



const lineCount = 4;

// Write a program that draws a
// pyramid like this:
//
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is
var m =[];
for (var i = 1; i<=lineCount; i++){
    for (var j = 0; j < (lineCount-1)*2+1; j++ ){
        m.push('*');
    }
    
    for (var n=0; n<lineCount-i; n++){
        m[n] = ' ';
        m[m.length-n-1] = ' ';
    }
    var str = m.join('');
    console.log(str);
    m = [];
}

