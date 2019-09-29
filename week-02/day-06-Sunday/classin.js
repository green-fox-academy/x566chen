const garden =require('./classf')

function Playground(toy=[], width, length){
    garden.call(this, width, length);
    this.toy = toy;
}
Playground.prototype = Object.create(garden.prototype);
Playground.prototype.constructor = Playground;
Playground.prototype.add = function (){
    return this.toy.push();
}

var playground = new Playground(['1','2','3']);
playground.add('4');
console.log(playground instanceof garden);