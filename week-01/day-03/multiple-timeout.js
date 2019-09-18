'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds
function multiple(){
    function x(){
        console.log("apple");
    }
    
    x();
    
    function y(){
        console.log("pear");
    }
    
    setTimeout(y,1000);
    
    function m(){
        console.log("melon");
    }
    
    setTimeout(m,3000);
    
    function n(){
        console.log("grapes");
    }
    
    setTimeout(n,5000);
}

multiple();
