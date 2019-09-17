'use strict';

// - Create a variable named `aj`
//   with the following content: `[3, 4, 5, 6, 7]`
// - Reverse the order of the elements in `aj`
// 		- do it with the built in method
//		- do it with creating a new temp array and a loop
// - Print the elements of the reversed `aj`

var aj = [3, 4, 5, 6, 7];
var reversed_aj = [];

for (var i=0; i < 5; i++){
    reversed_aj.push(aj.pop());
}
console.log(reversed_aj);

var aj = [3, 4, 5, 6, 7];
aj.reverse();
console.log(aj); 