import Printable from './Printable'

class Todo implements Printable{
    thing: string;
    num: number;

    constructor(num:number, thing:string){
        this.num = num;
        this.thing = thing;
    }

    printAllFields(){
        return `NO.${this.num}, ${this.thing}.`
    }
}
export {Todo};