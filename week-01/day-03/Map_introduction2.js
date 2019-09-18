let myMap = new Map();
myMap.set("978-1-60309-452-8","A Letter to Jo");
myMap.set("978-1-60309-459-7","Lupus");
myMap.set("978-1-60309-444-3","Red Panda and Moon Bear");
myMap.set("978-1-60309-461-0","The Lab");

// function arr(){
//     var arr1=[];
//     for (var i=0; i<map.length; i++){
//         arr1.push(myMap.key)
//     }
// }

//console.log(myMap.keys());
console.log(myMap.entries());

let a = [...myMap.keys()];
let b = [...myMap.values()];

for (var i=0; i< myMap.size; i++){
    console.log(b[i]+" (ISBN:" +a[i] +")");
}



myMap.delete("978-1-60309-444-3");
console.log(myMap.entries());



for (let pair of myMap){
    if (pair[1]=='The Lab'){
        myMap.delete(pair[0]);
    }
 
}
console.log(myMap.entries());

myMap.set("978-1-60309-450-4","They Called Us Enemy");
myMap.set("978-1-60309-453-5","Why Did We Trust Him?");

console.log(myMap.entries());

console.log(myMap.has("478-0-61159-424-8"));
console.log(myMap.get("978-1-60309-453-5"));

