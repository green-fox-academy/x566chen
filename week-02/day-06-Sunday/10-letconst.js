function ave(arr = []) {
    const length = arr.length;
    let sum=0;
    for(let i=0; i<length; i++){
        sum = sum + arr[i];
        
    }

    return sum/length;
}

console.log(ave([1,2,3,4,5]));