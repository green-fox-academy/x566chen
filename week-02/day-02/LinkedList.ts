interface LinkedList {
    add(value: string, index?: number): void;
    get(index: number): string;
    removeItem(value: string): void;
    remove(index: number): string;
    size(): number;
  }
class node{
    value: any;
    next? : node;
    prev? : node;
    constructor(value:any){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}


  class linkedList implements LinkedList{
      private count: number = 0;
      private header: node;
      private tail: node;

      constructor(){
          this.header = new node(null);
          this.tail = new node(null);
          this.header.prev = this.header.next = this.tail;
          this.tail.next = this.tail.prev = this.header;
      }

      empty():boolean{
          return this.count === 0;
      }
      add(value: string, index?: number):void{
          
          if(this.empty()){
            return;
          }
          let curr = this.header.next;
          while(curr !== this.tail){
              if(curr.value == value){
                  let valueItem = new node(value);
                  valueItem.prev =curr;
                  valueItem.next = curr.next;
                  curr.next.prev = valueItem;
                  curr.next = valueItem;
                  this.count ++;
                  break;

              }
              curr = curr.next;
          }

      }
      get(index: number): string{
          if (this.empty()){
              return;
          }
          let indexItem = this.header.next;
          while(indexItem !== this.tail){
              if (indexItem.value ==)
          }

      };
      removeItem(value: string): void{

      };
      remove(index: number): string{

      };
      size(): number{

      };
  }