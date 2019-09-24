interface Stack {
    empty(): boolean;
    peek(): string;
    push(value: string): void;
    pop(): string;
  }

  interface Queue {
    empty(): boolean;
    peek(): string;
    add(value: string): void;
    remove(): string;
  }

let arr = [1, 2, 3, 4, 5];

class stack implements Stack{

    constructor(arr:number[]){
       
    };
    empty():boolean{
        return !arr.length;
    }

    peek():any{
        let i = arr.length;
        return arr[i-1];
    }

    push(value: string): any{
        arr.push();
        return arr;
    };
    pop(): any{
        arr.length = arr.length-1;
        let arr1 = [];
        for(let i=0; i<arr.length;i++){
            arr1.push(arr[i]);
        }
        return arr1;
    };
}
let que = [1,3,5,7];
class queue implements Queue{

    constructor(que: number[]){
     
    }
    empty():boolean{
        return !que.length;
    }
    peek():string{
        let i = que.length;
        return (que[i-1]).toString();
    }
    add(value: any): void{
        que.push(value);
    };


    remove(): any{
        let que1 = [];
        for(var i=0; i<que.length-1; i++){
            que1.push(que[i]);
        }
        que = que1;
        return que;
    };
}
const stack1 = new stack(arr);
console.log(stack1.peek());
console.log(stack1.push('3'));
console.log(stack1.pop());
console.log(stack1.empty());


const queue1 = new queue(que);
console.log(queue1.peek());
console.log(queue1.add(9));
console.log(queue1.remove());

