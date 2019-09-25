interface Stack {
    empty(): boolean;
    peek(): string;
    push(value: string): void;
    pop(): string;
  }

  class node{
    value: string;
    next? : node;
 
    constructor(value?:string){
        this.value = value;
        this.next = null;

    }
}

  class NodeStack implements Stack{
    private count : number;
    private head : node;
    

    constructor(){
        this.count = 0;
        this.head = null;
    }
    empty(): boolean{
        return this.count === 0;
    };
    peek(): string{
        return this.head.value;
    };
    push(value: string): void{
        if (this.count == 0){
            this.head = new node(value);
        }else{
            let curr_p = this.head;
            let _curr = new node(value);
            _curr.next = this.head;
            this.head = _curr;
        }
        this.count++;
    };
    pop(): string{
        this.count--;
        let tmp = this.head.value;
        this.head = this.head.next;
        return tmp;
    };
    print(){
        let curr_p = this.head;
        for(let i = 0 ; i < this.count; i++){
            console.log(`${curr_p.value}`);
            curr_p = curr_p.next;
        }
    }


  }

  let stack2 = new NodeStack();

  console.log(stack2.empty());

  stack2.push('2');
  stack2.push('5');
  stack2.push('8');

  stack2.print();


