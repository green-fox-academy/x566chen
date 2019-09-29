

const data = [5, 1, 2, 9, 7, 3, 8];
let max_number = 0;
function max(datas = []) {
    for (let data of datas) {
        max_number = Math.max(max_number, data);
    }

    return max_number;
}

console.log(max(data));