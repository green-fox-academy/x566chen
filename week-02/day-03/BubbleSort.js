arr = [2, 10, 5, 7, 4, 10];
var tmp = 0;

function Bubble(array){
    for (var i=0; i < array.length-1; i++){
        for (var j=i+1; j < array.length; j++){
            if (array[i] > array[j]){
                
                tmp =array[i];
                array[i] = array[j];
                array[j] = tmp;
            }
        }
    }
    return array;
}

console.log(Bubble(arr));