'use strict';
const Animal = require('./Animal');

class Farm{
    constructor(animalSet, places){
        this.places = 3;
        this.animalSet = [];
        this.index = 0;
    }

    get(){
        return this.animalSet
    }
 
    breed(Animal){
        if(this.animalSet.length<this.places){
            this.animalSet.push(Animal);
            console.log("Welcome! New animals.")
        }else{
            console.log("Sorry, there is no more places more new animals.")
        }      
    }

    slaughter(){
        var least = 10000;
        for(var i=0; i<this.get().length; i++){
            if(this.get()[i].hunger < least){
                least = this.get()[i].hunger;
                this.index = this.animalSet.indexOf(this.get()[i]);

            }else{
                continue
            }
        }
        
        this.animalSet.splice(this.index,1);
        console.log(this.animalSet);
    }

}
