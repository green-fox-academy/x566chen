'use strict';
const Sharpie = require('./Sharpie');
let sharpieset = [];
let count=0;
class SharpieSet{
    
    main(){
        this.sharpie = new Sharpie;
        
        sharpieset.push(this.sharpie);
        
    }
    countUsable(){
        for (var i=0; i<sharpieset.length; i++){
            if (this.sharpie.inkAmount!=0){
                count++;

            }
        }
        console.log(count);


    }
    removeTrash(){
        for (var i=0; i<sharpieset.length; i++){
            if (this.sharpie.inkAmount==0){
                delete sharpieset[i];
            }
        }
        console.log(sharpieset);

    }

}

