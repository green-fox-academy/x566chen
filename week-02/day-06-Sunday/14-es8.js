const findmax = obj => {
    let max = 0;
    let key='';
    for (let [index, val] of Object.entries(obj)) {
        if (val>max){
            max=val;
            key = index;
        }
    
    }
    return key

}

console.log(findmax({ x: 1, y: 3, z: 5 }));