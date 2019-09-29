function matrix(a = 2,b =2,...rest){
    let m=[];
    let index =0;
    if(a*b>rest.length){
        return null;
    }
    for(let i=0; i<a; i++){
        for (let j=0; j<b; j++){
            return m[i][j]=rest[index];
            index++;
        }
    }
    //console.log(rest.length);

    //if(rest.length)
}

console.log(matrix(1,2,1,2));