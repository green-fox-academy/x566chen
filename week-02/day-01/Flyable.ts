import {
    Animal
} from './Zoo';

interface Flyable{
    land():void;
    fly():void;
    takeOff():void;
}

abstract class Vehicle{
    name: string;
    brand: string;
    year: number;
    constructor(name:string, brand:string, year:number){
        this.name = name;
        this.brand = brand;
        this.year = year;
    }
    
}

class Helicopter extends Vehicle implements Flyable{
    constructor(name:string, brand:string, year:number){
        super(name, brand, year);
    }
    land():void{
        console.log(`${this.name}land`);
    }
    fly():void{
        console.log(`${this.name}fly`);
    }
    takeOff():void{
        console.log(`${this.name}takeOff`);
    }

}

class Bird extends Animal implements Flyable{
    
    breed():void{
        console.log('laying eggs');
    }

    land():void{
        console.log(`land`);
    }
    fly():void{
        console.log(`fly`);
    }
    takeOff():void{
        console.log(`takeOff`);
    }

}

const bird = new Bird('goose');
const helicopter = new Helicopter('helicopter', 'Benz', 1988);
bird.breed();
helicopter.land();

