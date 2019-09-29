function multiPurposeFunction(action) {
    if (action) {
        console.log(action(3));
    }
}

function exampleNonAnonymFunction(param) {
    return param * param;
}

function frameFunction() {
    // this function call shows an example,
    // but it is not using anonym functions
    multiPurposeFunction(exampleNonAnonymFunction);
    const anonym = function (param) {
        return param * param;
    }
    multiPurposeFunction(anonym);
    const arrow = param => param * param;
    multiPurposeFunction(arrow);
}

frameFunction();



