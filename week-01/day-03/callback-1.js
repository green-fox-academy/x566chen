'use strict';

const mapWith = (array, callback) => {
  let output = [];
    for (var i=0; i< array.length;i++){
        output.push(callback(array[i]));
    }

  // The mapWith() function should iterate over the given array and call the callback function on every element.
  // It stores the callback return values in the output.
  // The mapWith() should return with the output array.

  return output;
}

const addOne = (number) => {
  return number + 1;
}

// Exercise 1:

console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]

// Exercise 2:

// Create a callback function which removes every second character from a string
const removeSecondLetter = (word) =>{
    var arr = word.split(''); 

    var arr1=[];
    var i=0;
    while(i < arr.length){
        arr1.push(arr[i]);
        i=i+2;
    }
    var a = arr1.join('');
    return a;
}



const words = ['map', 'reduce', 'filter'];

console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']