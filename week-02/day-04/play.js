const Dimension =require('./Gameplay.js');




let dimension = new Dimension(6);
dimension.construct(6);
dimension.ifsize();
dimension.set_mine(4);

console.log(dimension.input_reveal('A1'));
console.log(dimension.judge_mine());
dimension.print_array();
console.log(dimension.input_reveal('B1'));
console.log(dimension.judge_mine());
dimension.print_array();
console.log(dimension.input_reveal('C1'));
console.log(dimension.judge_mine());
dimension.print_array();
