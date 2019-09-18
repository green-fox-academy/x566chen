  
'use strict';
// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"

var quote = "Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law."

var new_quote = quote.slice(0,20)+' always takes longer than'+quote.slice(17);
console.log(new_quote);