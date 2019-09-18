var list = new Map();
list.set("Milk","1.07");
list.set("Rice","1.59");
list.set("Eggs","3.14");
list.set("Cheese","12.60");
list.set("Chicken Breasts","9.40");
list.set("Apples","2.31");
list.set("Tomato","2.58");
list.set("Potato","1.75");
list.set("Onion","1.10");

console.log(list.entries());

var product = new Map();
product.set("Milk","3");
product.set("Rice","2");
product.set("Eggs","2");
product.set("Cheese","1");
product.set("Chicken Breasts","4");
product.set("Apples","1");
product.set("Tomato","2");
product.set("Potato","1");
console.log(product.entries());

var alice = new Map();
alice.set("Rice","1");
alice.set("Eggs","5");
alice.set("Chicken Breasts","2");
alice.set("Apples","1");
alice.set("Tomato","10");
console.log(alice.entries());

var sum = 0;
for (var pair of product){
    var num1 = parseInt(pair[1],10);
    var num2 = parseInt(list.get(pair[0]),10);
    sum = sum + (num1 * num2);
}
console.log(sum);

var sum = 0;
for (var pair of alice){
    var num1 = parseInt(pair[1],10);
    var num2 = parseInt(list.get(pair[0]),10);
    sum = sum + (num1 * num2);
}
console.log(sum);

var num_bob = parseInt(product.get("Rice"),10);
var num_alice = parseInt(alice.get("Rice"),10);
if (num_bob > num_alice){
    console.log("Bob");
}else{
    console.log("Alice");
}

var num_bob1 = parseInt(product.get("Potato"),10);
var num_alice1 = parseInt(alice.get("Potato"),10);
if (num_bob > num_alice){
    console.log("Bob");
}else{
    console.log("Alice");
}

if (product.size > alice.size){
    console.log("Bob");
}else{
    console.log("Alice");
}

var sum_1 = 0;
for (let pair of product){
    var num_bob = parseInt(pair[1],10);
    sum_1 = sum_1 + num_bob;
}
var sum_2 = 0;
for (let pair of alice){
    var num_bob = parseInt(pair[1],10);
    sum_2 = sum_2 + num_bob;
}
if (sum_1 > sum_2){
    console.log("Bob");
}else{
    console.log("Alice");
}