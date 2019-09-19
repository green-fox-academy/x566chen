class PostIt {
    constructor (backgroundColor = 'unknown', text = 'unknown' ,textColor='unknown'){
        this.backgroundColor = backgroundColor;
        this.text = text;
        this.textColor = textColor;
    }
}

const num0 = new PostIt('orange', 'Idea 1', 'blue');


const num1 = new PostIt('pink', 'Awesome', 'black');
const num2 = new PostIt('yellow', 'Supern', 'green');

