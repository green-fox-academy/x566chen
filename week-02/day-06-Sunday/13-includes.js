const removesame = (arr1, arr2) =>{
    let arr=[];
    arrtogether = arr1.concat(arr2);
    arrtogether.forEach(data =>{
        if (!arr.includes(data)){
            arr.push(data);
        }
    })
    return arr;
}

console.log(removesame([1,3,5],[3,4,5,6]));