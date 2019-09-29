function multiPurposeFunction(action){
    if (action){
        console.log(action(3));        
    }
}

function exampleNonAnonymFunction(param){
    return param*param;
}

function frameFunction(){
    // this function call shows an example,
    // but it is not using anonym functions
    multiPurposeFunction(exampleNonAnonymFunction());
    function action(num){
        return num;
    }
}

console.log(frameFunction());

function multiPurposeFunction(action){
    if (action){
        console.log(action('John', 'Smith'));
        console.log(action('', 'Bond'));        
    }
}

function frameFunction(){
    // Write your code here
}

frameFunction();