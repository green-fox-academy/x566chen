
const removeSecondLetter = (word) =>{
    var arr = word.split(''); 
    console.log(arr);
    var arr1=[];
    var i=0;
    while(i < arr.length){
        arr1.push(arr[i]);
        i=i+2;
    }
    var a = arr1.join('');
    return a;
}

console.log(removeSecondLetter("avas"));