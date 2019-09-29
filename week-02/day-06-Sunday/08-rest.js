function matrix(a, b,...rest){
    
    
    if(a*b>rest.length){
        return null;
    }


    return new Array(a)
    .fill([])
    .map(() => new Array(b).fill(0).map(() => rest.shift()))

}
let m=[];
let index =0;
for(let i=0; i<1; i++){
    for (let j=0; j<2; j++){
        m.push(i +j);
       
    }
}
console.log(matrix(1,2, ...m));