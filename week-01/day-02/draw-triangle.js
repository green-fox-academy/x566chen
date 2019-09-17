'use strict';


var str = '';
const lineCount = 4;
for (var i = 1; i <= lineCount; i++){
    for (var j = 0; j < i; j++){
        str = str + '*';   
    }
    
    console.log(str);
    str = '';
}