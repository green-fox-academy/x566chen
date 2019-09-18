function Map(){
    this.elements = new Array;

    this.size = function(){
        return this.elements.length;
    }

    this.isEmpty = function(){
        return (this.elements.length<1);
    }
    
    this.clear = function(){
        this.elements = new Array();
    }

    this.put = function(_key,_value){
        this.elements.push({
            key : _key,
            value : _value

        });
    }
    this.get = function(_key){
        try{
            for (var i = 0; i < this.elements.length; i++){
                if (this.elements[i].key == _key){
                    return this.elements[i].value;
                }
            }
        }catch(e){
            return nill
        }
    }
    this.element = function(_value){
        try{
            for (var i = 0; i < this.elements.length; i++){
                if (this.elements[i].value == _value){
                    return this.elements[i].key;
                }
            }
        }catch(e){
            return nill
        }
    }
    this.remove =  function (_key){
        var bln = false;
        try {
            for (i=0; i < this.elements.length; i++){
                if (this.elements[i].key == _key){
                    return this.elements[i].value;
                }
            }
        }catch(e){
            return null;
        }
    }

    this.values = function(){
        var arr = new Array();
        for (var i=0; i < this.elements.length; i++){
            arr.push(this.elements[i].value);
        }
        return arr;
    }
    this.keys = function(){
        var arr = new Array();
        for (var i=0; i < this.elements.length; i++){
            arr.push(this.elements[i].key);
        }
        return arr;
    }

}
var map = new Map();
console.log(map.isEmpty());
map.put("97","a");
map.put("98","b");
map.put("99","c");
map.put("65","A");
map.put("66","B");
map.put("67","C");
console.log(map.elements);
console.log(map.values());
console.log(map.keys());
map.put("68","D");
console.log(map.elements);
console.log(map.size());
console.log(map.get('99'));
console.log(map.remove('97'));
console.log(map.get('100'));

map.clear();
console.log(map.elements);