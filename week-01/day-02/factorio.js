var sum1 = 1;
function sum(x){
    for(var i=1; i<=x; i++ )
    sum1 = sum1 * i;
    return sum1;
}

console.log(sum(4));