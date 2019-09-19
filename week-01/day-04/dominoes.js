'use strict';

const Domino = require('./domino');

function initializeDominoes() {
  const dominoes = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(6, 7));
  dominoes.push(new Domino(2, 4));
  dominoes.push(new Domino(7, 1));
  return dominoes;
}

const dominoes = initializeDominoes();
console.log(dominoes);
console.log(dominoes.length);
console.log(dominoes[1].values[0]);
let arr = [];

arr.push(dominoes[0]);


for (var i=1; i<dominoes.length; i++){
    
    for (var j=1; j<dominoes.length; j++){
        if(dominoes[j].values[0]==arr[i-1].values[1]){

            arr.push(dominoes[j]);
      
        }else{
            continue
        }
    }
}


/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */
console.log(arr.toString());
console.log(dominoes.toString());