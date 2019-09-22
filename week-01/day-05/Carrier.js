'use strict';

class Aircraft{
    
    constructor(name,max_ammo,base_damage){
        this.name = name;
        this.ammo = 0;
        this.base_damage = base_damage;
        this.max_ammo = (this.name === 'F16') ? 8 : 12;
    }
    fight(){
        let damage = this.base_damage * this.ammo;
        this.ammo = 0;
        return damage;
    }
    refill(num){
        if(this.ammo < this.max_ammo){
            let temp = this.ammo;
            this.ammo = (num > this.max_ammo) ? this.max_ammo : num;
            return num - (this.ammo -temp);
        }else{
            return num;
        }  
    }
    getType(){
        return this.name;
    }
    getStatus(){
        console.log(`Type ${this.name}, Ammo: ${this.max_ammo}, Base Damage: ${this.base_damage}, All Damage: ${this.max_ammo * this.base_damage}`);
    }
    isPriority(){
        return this.name == 'F35';
    }
    all_damage(){
        return this.max_ammo * this.base_damage;
    }

}

class Carrier { 
    constructor(health_point, storage_1){
        
        this.health_point = health_point;
        this.list = [];
        this.storage_1 = storage_1;
    }
    
    add(craft){
        this.list.push(craft);
    }
    fill(){
        if(this.storage_1 <= 0){
            throw 'N/A';
        } 
        // let sum =0;
        // for (var i = 0; i< this.list.length; i++){
        //     sum = sum + this.list[i].ammo;
        // }
        // let sum = this.list.reduce((e,craft) =>{
        //     return (craft.max_ammo - craft.ammo)+e;
        // },0);
        // console.log('a', sum);
        
        this.list.forEach( craft => {
            if(craft.isPriority()){
                this.storage_1 = craft.refill(this.storage_1);
                }
        }) 

        //fill the rest
        if(this.storage_1 > 0){
            this.list.forEach( craft => {
                this.storage_1 = craft.refill(this.storage_1);
            });
        }
        
    }
     fight(){
         this.health_point =  this.health_point - this.damage;
     }

    count(){
        let count_number = 0;
        for(var i = 0; i<this.list.length; i++){
            count_number++;
        }

        return count_number;
    }

    // storage(){
    //     let storage_ammo = 0;
    //     for (var i = 0; i<this.list.length; i++){
    //          storage_ammo = storage_ammo + this.list[i].max_ammo;
    //      }
    //      return storage_ammo;
    // }
 
    total_damage(){
        return this.list.reduce((e, craft) => {
            return craft.max_ammo * craft.base_damage + e;
        }, 0);

    }

    getStatus(){
        if (this.health_point < 0){
            console.log('It\'s dead Jim :(');
        }else{
            console.log('HP: '+this.health_point+', '+'Aircraft count: '+ this.list.length+', '+'Ammo Storage: '+ this.storage_1 + ' Total damage:' +this.total_damage());
            console.log('Aircrafts:')
            this.list.forEach( craft => {
                craft.getStatus();
            })
        }
    }

}






let carrier = new Carrier(5000, 70);
let a = new Aircraft('F35',12,50);
let b = new Aircraft('F35',12,50);
let c = new Aircraft('F35',12,50);
let d = new Aircraft('F16',8,30);
let e = new Aircraft('F16',8,30);
carrier.add(a);
carrier.add(b);
carrier.add(c);
carrier.add(d);
carrier.add(e);
carrier.getStatus();

