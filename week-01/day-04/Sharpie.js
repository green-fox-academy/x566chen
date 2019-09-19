class Sharpie {
    constructor(color, width, inkAmount=100,usable=true){
        this.color = color;
        this.width = width;
        this.inkAmount = inkAmount;
        this.usable = usable;
        
    }

    use(){
        this.inkAmount--;
        console.log(this.inkAmount);
    }
}

let sharpie = new Sharpie('red',18);
sharpie.use();


module.exports = Sharpie;