interface LinkedList {
    add(value: string, index?: number): void;
    get(index: number): string;
    removeItem(value: number): string;
    remove(index: number): string;
    size(): number;
  }
class node{
    value: string;
    next? : node;
 
    constructor(value?:string){
        this.value = value;
        this.next = null;

    }
}


  class linkedList implements LinkedList{
      count: number = 0;
      header: node;
      tail: node;


      constructor(){
          this.header = new node();
          this.tail = this.header;
      }

      empty():boolean{
          return this.count === 0;
      }
      add(value: string, index?: number):void{
          if(!index){
            if (this.count === 0){
                this.header.next = new node(value);
                this.tail = this.header.next;
                
              }else if(index === undefined || index >= this.count || index < 0 ){
                let curr = new node(value);
                this.tail.next = curr;
                this.tail = curr; 
              }
            }
          if(index){
              let curr_pointer = this.header;
              for(let i = 0; i <index; i++){
                  curr_pointer = curr_pointer.next;
              }
              let tmp = curr_pointer.next;
              curr_pointer.next = new node(value);
              curr_pointer.next.next = tmp;
          }
          this.count++;
          }


          get(index: number): string{
              let _curr = this.header;
              for (let i=0; i <= index; i++){
                  _curr = _curr.next;
              }
              return _curr.value;
          };
          removeItem(value: number): string{
              let _curr = this.header;
              for (let i = 0 ; i <= value; i++){
                  _curr = _curr.next;
              }
              return _curr.value;

          };
          remove(index: number): string{
              let _curr = this.header;
              let value:string;

             
                  for(let i = 0; i < index; i++){
                      _curr = _curr.next;
                  };
                  value = _curr.next.value;
                  _curr.next = _curr.next.next;
                  this.count--;
                  return value;
              
          };
          size(): number{
              return this.count;
          };

          print(){
              let _curr = this.header.next;
              for (let i = 0; i < this.count; i++){
                  console.log(` ${_curr.value}`);
                  _curr = _curr.next
              }
          }


      }

let link1 = new linkedList();
link1.add('2');
link1.add('3');
link1.add('4');
link1.add('5');
link1.print();
//link1.add('1',1);
//console.log(link1);



