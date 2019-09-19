class Station{
    constructor(gasamount){
        this.gasAmount = gasamount;
    }
    refill(car){
        this.gasAmount = this.gasAmount - Car.capacity;
        Car.gasAmount = Car.gasAmount + Car.capacity;
    }
}

class Car{
    constructor(gasAmount = 0, capacity =100){
        this.gasAmount = gasAmount;
        this.capacity = capacity;
    }

}