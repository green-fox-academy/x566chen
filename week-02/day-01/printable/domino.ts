import Printable from './Printable'
class Domino implements Printable{
    value:number[];
    constructor(valueA:number, valueB:number){
        this.value = [valueA, valueB];
    }
    toString(){
        return `[${this.value[0]}|${this.value[1]}]`;
    }
    printAllFields(){
        return `[${this.value[0]}, ${this.value[1]}]`;
    }

}

export {Domino};