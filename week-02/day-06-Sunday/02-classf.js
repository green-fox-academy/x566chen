function Garden(width, length) {
    this.width = width;
    this.length = length;
}
Garden.prototype.area = function () {
    return this.width * this.length;
}
Garden.prototype.circumference = function () {
    return 2*(this.width+this.length);
}
Garden.prototype.efficiency = function () {
    return this.area() / this.circumference();
}

class Garden2 {
    constructor(width, circumference) {
        this.width = width;
        this.circumference = circumference;
    }
    area() {
        return this.width;
    }
    circumference() {
        return 2*(this.width+this.length);
    }
    efficiency() {
        return this.area() / this.circumference();
    }
}

module.exports = Garden;