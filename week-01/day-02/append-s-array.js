  
'use strict';

// - Create a variable named `animals`
//   with the following content: `['dog', 'cat', 'kitten']`
// - Add all elements an `'s'` at the end
// - try to use built in functions instead of loops


var animals = ['dog', 'cat', 'kitten'];
const animals1 = animals.map( x =>{
    x = x + 's';
    return x;
})
console.log(animals1);
