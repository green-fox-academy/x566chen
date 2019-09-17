'use strict';

const lineCount = 7;
var m =[];
for (var i = 1; i<=(lineCount+1)/2; i++){
    for (var j = 0; j < lineCount; j++ ){
        m.push('*');
    }
    for (var n=0; n<= (m.length-1)/2-i; n++){
        m[n] = ' ';
        m[m.length-n-1] = ' ';
    }
    var str = m.join('');
    console.log(str);
    m = [];

}
for (var i=1; i<=(lineCount-1)/2; i++){
    for (var j = 0; j < lineCount; j++ ){
        m.push('*');
    }
    for (var j=0; j<i; j++){
        m[j]=' ';
        m[m.length-j-1]=' ';
    }
    var str1 = m.join('');
    console.log(str1);
    m = [];
}