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

let arr = ['1', '2', '3', '4', '5'];

class stack implements Stack{
     arr : string[];

    constructor(arr:string[]){
       this.arr = arr;
    };
    empty():boolean{
        return !this.arr.length;
    }

    peek():any{
        let i = this.arr.length;
        return this.arr[i-1];
    }

    push(value: string): void{
        this.arr.push(value);
    };
    pop(): string{ 
        return this.arr.pop();
    };
}
let que = ['1','3','5','7'];
class Queue1 implements Queue{
    private que:string[];
    constructor(que){
      this.que = que;
    }
    empty():boolean{
        return !this.que.length;
    }
    peek():string{
        
        return this.que[this.que.length-1];
    }
    add(value: string): void{
        this.que.push(value);
    };

    remove(): string{
        let que1 : string;
        que1 ='';
        for(var i=0; i<this.que.length-1; i++){
            que1 = que1 + this.que[i];
        }
        
        return que1;
    };
}
const stack1 = new stack(arr);
console.log(stack1.peek());
stack1.push('3');
console.log(stack1);
console.log(stack1.pop());
console.log(stack1.empty());

console.log('----------------')
const queue1 = new Queue1(que);
console.log(queue1.peek());
queue1.add('9');
console.log(queue1);
console.log(queue1.remove());

