let product = new Map();

product.set("Eggs","200");
product.set("Milk","200");
product.set("Fish","400");
product.set("Apples","150");
product.set("Bread","50");
product.set("Chicken","550");

console.log(product.get("Fish"));

var big = 0;
for (let pair of product){
    if (big <= pair[1]){
        big =pair[1];
    }
}

for (let pair of product){
    if (pair[1]==big){
        console.log(pair[0]);
    }
}
var sum=0;
for (let pair of product){
    var num = parseInt(pair[1], 10);
    sum = sum+num;
}

console.log(sum/(product.size));

var count = 0;
for (let pair of product){
    var num1 = parseInt(pair[1],10);
    if (num1 < 300){
        count++;
    }
}
console.log(count);

for (let pair of product){
    if (pair[1]=="125"){
        console.log("True");
    }
}

var small = 1000;
for (let pair of product){
    if (small => pair[1]){
        small =pair[1];
    }
}

for (let pair of product){
    if (pair[1]==small){
        console.log(pair[0]);
    }
}