var car = {
    model: 'Benz',
    color: 'black',
    year: 1886,
    doors: 0,
    historical: true
};
var computer = {
    type: 'PC',
    monitor: {
        color: 'black',
        size: '16\"',
        HDMI: true,
        VGA: true
    },
    tower: {
        color: 'grey',
        CPU: 4.7,
        memory: 16,
        SSD: 128
    }
}

//before ES6
var model = car.model;
var coloer = car.color;
var fresh = car.year;
var doors = car.doors;
var historical = car.historical;

var type = computer.type;
var monitorcolor = computer.monitor.color;

//from ES6:
//--------------
// let { model, color, year, doors, historical } = car
// let {
//   type,
//   monitor: { color: monitor_color, size, HDMI, VGA },
//   tower: { color: tower_color, CPU, memory, SSD }
// } = computer