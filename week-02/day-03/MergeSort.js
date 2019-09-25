array = [2, 4, 3, 9, 7];

function Merge(left, right){
    var result=[];
    while (left.length!=0 && right.length!=0){
        if (left[0]<right[0]){
            result.push(left.shift());
        }else{
            result.push(right.shift());
        }
    }
    while(left.length!=0 && right.length==0){
        result.push(left.shift());
    }
    while(left.length ==0 && right.length !=0){
        result.push(right.shift());
    }
    return result;
}


function MergeSort(arr){
    if (arr.length<2){
        return arr;
    }

    var point = Math.floor(arr.length /2) ;
    left = arr.slice(0, point);
    right = arr.slice(point);

    return Merge(left,right);

}

console.log(MergeSort(array));