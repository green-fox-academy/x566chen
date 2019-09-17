'use strict';

const lineCount = 6;


// Write a program that draws a
// square like this:
//
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is
var str = '';
for (var i=0; i < lineCount; i++){
    str = str + '%';
}
console.log(str);
var str1 = [];
var str3;
for (var j=1; j< lineCount; j++){
    str1.push('%');
    for (var m=0; m < lineCount-2; m++){
        str1.push(' ');
    }
    
    str1.push('%');
    str1[j]='%';
    str3 = str1.join('');
    console.log(str3);
    str1 = [];
}
var str2 = '';
for (var i=0; i < lineCount; i++){
    str2 = str2 + '%';
}
console.log(str2);