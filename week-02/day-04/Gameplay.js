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
        console.log(this.arr_outer);

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
        console.log(row_col);

        console.log(this.arr_outer);

    }


    input_reveal(zimu_num) {
        var new_zimu_num;
        new_zimu_num = zimu_num.split('');
        let arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

        for (let i = 0; i < 26; i++) {
            if (new_zimu_num[0] == arr[i]) {
                this.coordinator.push(i);
                let change_number = parseInt(new_zimu_num[1], 10)-1;
                this.coordinator.push(change_number);
            }
        }
        return this.coordinator;

    }

    judge_mine() {
        let x = this.coordinator[0];
        let y = this.coordinator[1];
        let count_mine = 0;
        if (this.arr_outer[x][y] == 'X') {
            console.log('Sad! You lost :(')
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
                return this.arr_outer[x][y] = 'O';
            } else {
                return this.arr_outer[x][y] = count_mine;
            }

        }
    }

    print_array(){
        console.log(this.arr_outer);
    }





}



module.exports = Dimension;

