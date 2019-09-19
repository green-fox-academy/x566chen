class Counter {
    constructor(num = 0){
        this.num = num;
    }

    add(){
        console.log(this.num++);
    }
    get(){
        console.log(this.num);
    }
    reset(){
        console.log(this.num = 0);
    }
}

let num1 = new Counter(1);
num1.add();