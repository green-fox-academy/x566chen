let product = new Map;


product.set("Eggs","200");
product.set("Milk","200");
product.set("Fish","400");
product.set("Apples","150");
product.set("Bread","50");
product.set("Chicken","550");

for (let pair of product){
    var num = parseInt(pair[1],10);
    if (num < 201){
        console.log(pair[0]);
    }
}

for (let pair of product){
    var num = parseInt(pair[1],10);
    if (num > 150){
        console.log(pair[0]);
    }
}