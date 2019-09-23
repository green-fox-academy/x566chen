abstract class Animal {
    name: string;
    age: number;
    gender: string;
    constructor(name:string){
        this.name = name;
        //this.age = age;
        //this.gender=gender;
    }

    getName():string{
        return `${this.name}`;
    }

    abstract breed():void;
}

class Mammal extends Animal{

    constructor(name: string){
        super(name);
    }
    breed():string{
        return 'pushing miniature versions out';
    }

}

class Bird extends Animal{

    constructor(name: string){
        super(name);
    }
    breed():string{
        return 'laying eggs.';
    }

}
class Reptile extends Animal{

    constructor(name: string){
        super(name);
    }
    breed():string{
        return 'laying eggs.';
    }

}

export{Mammal, Bird, Reptile};