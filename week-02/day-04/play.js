const Dimension = require('./Gameplay.js');
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please input a number to create a map: ', (answer) => {
    if (answer > 0) {
        let dimension = new Dimension(answer);
        dimension.construct(answer);


        rl.question('Please input a number to set the number of mines: ', (number_mines) => {
            dimension.set_mine(number_mines);

            rl.question('Plz choose a coordinate(like A1): ', (coordinates) => {
                dimension.input_reveal(coordinates);
                dimension.judge_mine(coordinates);
                dimension.print_array();


                let x = parseInt(answer);
                let y = parseInt(number_mines);
                let num_counter = (x * x) - y;
                let i = 0;
                //console.log('aaa  ' + num_counter);
                repeat();




                function repeat(){
                    rl.question('Plz choose a coordinate(like A1): ', (coordinates) => {
                        dimension.input_reveal(coordinates);
                        let mines_status = dimension.judge_mine(coordinates);
                        if (mines_status === 'X') {
                            console.log('SAD!!! YOU LOST! :(');
                            rl.close();
                        } else if(i < num_counter-1){
                            i++;
                            dimension.print_array();
                            repeat();

                        }else{
                            console.log('GOOD NEWS! YOU WIN! :)')
                            rl.close();
                        }
                    })

                }

                












            })

        })







    } else {
        console.log('That\'s not a valid number for the dimension!');
        repeat();
    }

});














//             console.log(dimension.input_reveal(coordinates));
//             console.log(dimension.judge_mine(coordinates));
//             dimension.print_array();
//             while (dimension.judge_mine(coordinates)!='X'){
//                 rl.question('Plz choose a coordinate(like A1): ', function(coordinates){
//                     console.log(dimension.input_reveal(coordinates));
//                     console.log(dimension.judge_mine(coordinates));
//                     dimension.print_array();
//                 }
//                 )}
//             console.log('Sad! You lost :( ')
//             rl.close();
//         }

//         }else{
//         console.log('That\'s not a valid number for the dimension!');
//         rl.close();
//     }

// });








// console.log(dimension.input_reveal('A1'));
// console.log(dimension.judge_mine());
// dimension.print_array();
// console.log(dimension.input_reveal('B1'));
// console.log(dimension.judge_mine());
// dimension.print_array();
// console.log(dimension.input_reveal('C1'));
// console.log(dimension.judge_mine());
// dimension.print_array(
