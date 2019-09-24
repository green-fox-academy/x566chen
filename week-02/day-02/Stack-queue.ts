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

    constructor(arr: number[]){};
    empty():any{
        return arr = [];
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

const stack1 = new stack(arr);
console.log(stack1.empty());
