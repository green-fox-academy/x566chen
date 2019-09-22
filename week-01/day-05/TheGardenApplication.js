

class Garden{
    constructor(water){
        this.water = water;
    }
    water1(water){
        this.water;
        console.log('Watering with '+ this.water);
    }

}

class Flower extends Garden{
    constructor(amount_water,name,water){
        super(water);
        this.amount_water = amount_water;
        this.name = name;
    }
    Watering(){
        
        this.amount_water = this.amount_water + (this.water/4)*0.75;
        
        if (this.amount_water >= 5){
            console.log('The '+ this.name + ' does not need water.')
        }else{
            console.log('The '+ this.name + ' need water.')
        }
    }

    }


class Tree extends Garden{
    constructor(amount_water,name,water){
        super(water);
        this.amount_water = amount_water;
        this.name = name;
    }

    Watering(water){
        this.water =water;
        
        this.amount_water = this.amount_water + (this.water/4)*0.4;
        if (this.amount_water >= 10){
            console.log('The '+ this.name + ' does not need water.')
        }else{
            console.log('The '+ this.name + ' need water.')
        }
    }
}

let g1 = new Garden(40);
let f1 = new Flower(0,'Yellow Flower',40);
let f2 = new Flower(0,'Blue Flower',40);
let t1 = new Tree(0,'purple Tree',40);
let t2 = new Tree(0,'orange Tree',40);


g1.water1(40);
f1.Watering(40);
f2.Watering(40);
t1.Watering(40);
t2.Watering(40);




let g2 = new Garden(70);
g2.water1(70);
f1.Watering(70);
f2.Watering(70);
t1.Watering(70);
t2.Watering(70);