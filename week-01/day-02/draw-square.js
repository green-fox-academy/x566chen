'use strict';

const lineCount = 6;

// Write a program that draws a
// square like this:
//
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is
var m =[];
for (var i=0; i<lineCount; i++){
    if (i==0){
        for (var j=0; j<lineCount; j++){
            m.push('%');
        }
        var str1 = m.join('');
        console.log(str1);
        m=[];
    }
    else if (i==lineCount-1){
        for (var j=0; j<lineCount; j++){
            m.push('%');
        }
        var str2 = m.join('');
        console.log(str2);
        m=[];
    }else{
        var n=[];
        n.push('%');
        for (var z=0; z<lineCount-2;z++){
            n.push(' ');
        }
        n.push('%');
        var str3=n.join('');
        console.log(str3);
        n =[];
    }

}