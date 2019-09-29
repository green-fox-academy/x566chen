class Dimension {
    constructor(num) {
        this.num = num;
        this.arr_outer = [];
        this.coordinator = [];

    }

    ifsize() {

        this.num <= 0 ? console.log('That\'s not a valid number for the dimension!') : console.log('');
    }

    construct() {
        let array = [];

        let str = '';
        let arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        for (let i = 0; i < this.num; i++) {
            str = str + ' ' + (i + 1);

        }
        console.log(' ' + str);
        let str1 = '';

        for (let m = 0; m < this.num; m++) {
            for (let n = 0; n < this.num; n++) {
                str1 = str1 + ' #';
            }

            console.log(arr[m] + str1);
            str1 = '';
        }


    }

    //SET THE MINE:

    set_mine(num_2) {
        let arr_inner = [];

        let mine = 0;
        for (let m1 = 0; m1 < this.num; m1++) {
            for (let m2 = 0; m2 < this.num; m2++) {
                arr_inner.push('O');
            }
            this.arr_outer.push(arr_inner);
            arr_inner = [];

        }


        let row_col = [];

        while (mine < num_2) {
            let row = Math.ceil((this.num * Math.random())) - 1;
            let col = Math.ceil((this.num * Math.random())) - 1;
            //check if there are the same coordinators;
            for (let i = 0; i < row_col.length; i++) {
                if (row == row_col[i][0] && col == row_col[i][1]) {
                    mine--;
                }
            }

            row_col.push([row, col]);

            this.arr_outer[row][col] = 'X';
            mine++;

        }

        return this.arr_outer;


    }


    input_reveal(zimu_num) {
        var new_zimu_num;
        new_zimu_num = zimu_num.split('');
        let arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

        for (let i = 0; i < 26; i++) {
            if (new_zimu_num[0] == arr[i]) {

                let change_number = parseInt(new_zimu_num[1], 10) - 1;
                this.coordinator.push([i, change_number]);
            }
        }
        return this.coordinator;

    }

    judge_mine() {

        for (let i = 0; i < this.coordinator.length; i++) {
            let x = this.coordinator[i][0];
            let y = this.coordinator[i][1];
            let count_mine = 0;
            if (this.arr_outer[x][y] == 'X') {
                return 'X';
            } else {
                if (y >= 1 && this.arr_outer[x][y - 1] == 'X') {
                    count_mine++;
                }
                if (this.arr_outer[x][y + 1] == 'X') {
                    count_mine++;
                }
                if (x >= 1 && this.arr_outer[x - 1][y] == 'X') {
                    count_mine++;
                }
                if (this.arr_outer[x + 1][y] == 'X') {
                    count_mine++;
                }

                if (count_mine == 0) {

                    this.arr_outer[x][y] = 'O';
                    return 'O';
                } else {
                    this.arr_outer[x][y] = count_mine;
                    return count_mine;
                }

            }

        }

    }

    print_array() {
        //console.log(this.arr_outer);

        let array = [];

        let str = '';
        let arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        for (let i = 0; i < this.num; i++) {
            str = str + ' ' + (i + 1);

        }
        console.log(' ' + str);
        
        let str1 = '';

        for (let m = 0; m < this.num; m++) {
            for (let n = 0; n < this.num; n++) {

                if(this.arr_outer[m][n]=='X'){
                    str1 = str1 + ' #';
                }else if (this.arr_outer[m][n]=='O'){
                    str1 = str1 + ' #';
                }else if (this.arr_outer[m][n]=='1'){
                    str1 = str1 + ' 1';
                }else if (this.arr_outer[m][n]=='2'){
                    str1 = str1 + ' 2';
                }else if (this.arr_outer[m][n]=='3'){
                    str1 = str1 + ' 3';              
                }else if (this.arr_outer[m][n]=='4'){
                    str1 = str1 + ' 4';
                }
                
            }

            console.log(arr[m] + str1);
            str1 = '';
        }
    }





}



// let dimension = new Dimension(6);
// console.log(dimension.construct(6));
// console.log(dimension.set_mine(4));
// console.log(dimension.input_reveal('A1'));
// console.log(dimension.judge_mine());
// dimension.print_array();
// console.log(dimension.input_reveal('B1'));
// console.log(dimension.judge_mine());
// dimension.print_array();
// console.log(dimension.input_reveal('C1'));
// console.log(dimension.judge_mine());
// dimension.print_array();


module.exports = Dimension;

